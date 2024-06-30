# Upendra Rajan's website

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres on Vercel](https://vercel.com/postgres)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/upenr/upendra-nextjs-website.git
cd upendra-nextjs-website
bun install
bun dev
```

Create a `.env.local` file similar to:

```bash
# For blog views and guestbook
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NO_SSL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="default"
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="verceldb"

## Generate a random secret: https://generate-secret.vercel.app/32 or `openssl rand -base64 32`
AUTH_SECRET=...

## Create a GitHub OAuth app here: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app
OAUTH_CLIENT_KEY=...
OAUTH_CLIENT_SECRET=...

## Support OAuth login on preview deployments, see: https://authjs.dev/guides/basics/deployment#securing-a-preview-deployment
AUTH_REDIRECT_PROXY_URL=https://.../api/auth
```

## Database Schema

```sql
CREATE TABLE upenr-redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);

CREATE TABLE upenr-guestbook (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP
);

CREATE TABLE upenr-views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```

## Credits

Inspired by leerob.io