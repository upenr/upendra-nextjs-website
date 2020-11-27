import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Badge,
  Link,
  Tooltip
} from '@chakra-ui/react';
import fetcher from '../lib/fetcher';

const BlogPost = (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('blog\\', '') //For Windows
    .replace('blog/', '')
    .replace('.mdx', '');

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  const { title, summary, publishedAt, type } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  //const slug = frontMatter.__resourcePath.replace('.mdx', '');
  //console.log('slug', slug);

  const scrollSearch = (myKey) => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey);
  };

  return (
    <>
      <Flex
        width="100%"
        align="flex-start"
        justifyContent="space-between"
        flexDirection={['column', 'row']}
      >
        <Box alignItems="flex-start" mt={4} ml={0} mb={2}>
          <Badge
            cursor="pointer"
            _focus={{ boxShadow: 'outline' }}
            onClick={() => scrollSearch(type)}
            _hover={{ textDecoration: 'underline' }}
            textTransform="capitalcase"
            rounded="full"
            fontSize="xs"
            letterSpacing="tight"
            colorScheme="orange"
            px="4"
            py="1"
          >
            {type}
          </Badge>
        </Box>
      </Flex>
      <NextLink href={`blog/${slug}`} passHref>
        <Link w="100%" _hover={{ textDecoration: 'none' }}>
          <Box display="block" width="100%">
            <Flex
              width="100%"
              align="flex-start"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Heading size="md" as="h3" mb={2} fontWeight="medium">
                {title}
              </Heading>
              <Text
                color="gray.500"
                minWidth="105px"
                textAlign={['left', 'right']}
                mb={[4, 0]}
              >
                {`${views ? format(views) : '–––'} views`}
              </Text>
            </Flex>
            <Text mb={2} color={secondaryTextColor[colorMode]}>
              {summary}
            </Text>
          </Box>
        </Link>
      </NextLink>
      <Flex width="100%" align="flex-start" justifyContent="flex-start">
        <Box alignItems="flex-start" mb={12}>
          <Badge
            textTransform="capitalcase"
            cursor="pointer"
            onClick={() => scrollSearch(publishedAt)}
            _hover={{ textDecoration: 'underline' }}
            rounded="full"
            fontSize="xs"
            letterSpacing="tight"
            colorScheme="purple"
            px="4"
            py="1"
          >
            Updated: {publishedAt}
          </Badge>
        </Box>
      </Flex>
    </>
  );
};

export default BlogPost;
