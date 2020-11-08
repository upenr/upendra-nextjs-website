import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogSeo from '../components/BlogSeo';

const editUrl = (slug) =>
  `https://github.com/upenr/upenr.github.io/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/compose/tweet${encodeURIComponent(
    ``
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const { colorMode } = useColorMode();
  const textColor = {
    light: '#2196F3',
    dark: '#2196F3'
  };

    return (
      <Container>
        <BlogSeo url={`https://upenr.github.io/blog/${slug}`} {...frontMatter} />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="850px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="850px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={4}
              w="100%"
              mb={0}
            >
              <Flex align="center">
                <Avatar
                  size="sm"
                  name="Upendra Rajan"
                  src="/static/images/upen.jpg"
                  mr={2}
                />
                <Link href="https://twitter.com/__upen" target="_blank" fontSize="sm" color={textColor[colorMode]} mr={1}>
                  {frontMatter.by}
                  {'Upendra Rajan'}
                </Link>
				<Text fontSize="sm">
                  {"on "}{format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
                {` • `}
              </Text>
            </Flex>
          </Flex>
          {children}
          <Box>
            <Link href={discussUrl(slug)} isExternal color={textColor[colorMode]}>
                {` • `}{'Discuss on Twitter'}
            </Link><br/><br/>
            <Link href={editUrl(slug)} isExternal color={textColor[colorMode]}>
                {` • `}{'Edit on GitHub'}
            </Link>
          </Box>
        </Stack>
      </Container>
    );
  };
