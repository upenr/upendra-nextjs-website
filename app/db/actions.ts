'use server';

import { auth } from 'app/auth';
import { type Session } from 'next-auth';
import { sql } from './postgres';
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

export async function increment(slug: string) {
  noStore();
  await sql`
    INSERT INTO upenr_views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = upenr_views.count + 1
  `;
}

async function getSession(): Promise<Session> {
  let session = await auth();
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  let session = await getSession();
  let email = session.user?.email as string;
  let created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  let entry = formData.get('entry')?.toString() || '';
  let body = entry.slice(0, 500);

  await sql`
    INSERT INTO upenr_guestbook (id, email, body, created_by, created_at)
    VALUES (RANDOM()+5000, ${email}, ${body}, ${created_by}, NOW())
  `;

  revalidatePath('/Guestbook');

  let data = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Guestbook@upenr.vercel.app',
      to: 'me@upenr.vercel.app',
      subject: 'New Guestbook Entry',
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    }),
  });

  let response = await data.json();
  console.log('Email sent', response);
}

export async function deleteGuestbookEntries(selectedEntries: string[]) {
  let session = await getSession();
  let email = session.user?.email as string;

  if (email !== 'me@upenr.vercel.app') {
    throw new Error('Unauthorized');
  }

  let selectedEntriesAsNumbers = selectedEntries.map(Number);
  let arrayLiteral = `{${selectedEntriesAsNumbers.join(',')}}`;

  await sql`
    DELETE FROM upenr_guestbook
    WHERE id = ANY(${arrayLiteral}::int[])
  `;

  revalidatePath('/admin');
  revalidatePath('/Guestbook');
}
