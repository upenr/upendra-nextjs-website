import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import { useColorMode, Heading, Text, Flex, Box, Badge, Link } from '@chakra-ui/core';


const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const slug = frontMatter.__resourcePath
    .replace('.mdx', '');
	
  console.log('slug', slug);
	
  return (
    <NextLink href={`/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
	  <Box mt={{ base: 4, md: 0 }} ml={{ md: 0 }} mb="2">
      <Badge fontSize="xs" letterSpacing="tight" color="teal.500">Blog</Badge>
	  </Box>
        <Box mb={10} display="block" width="100%">
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
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
