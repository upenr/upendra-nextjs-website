import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  Link,
  Image,
  Box
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

import { default as content, frontMatter as blogs1 } from './blog/*.mdx';
import { frontMatter as mlp1 } from './blog/image-classification-machine-learning-1.mdx';
import { frontMatter as usachina } from './blog/usa-and-china.mdx';

const url = 'https://upenr.vercel.app/blog';
const title = 'Blog: Upendra Rajan';
const description = 'Thoughts on IT, businesses, countries, technology and even my personal life.';

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const textColor1 = {
    light: '#009688',
    dark: '#009688'
  };
  const textColor = {
    light: '#009688',
    dark: '#009688'
  };
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const filteredBlogPosts = blogs1
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) => {
      const concat = frontMatter.summary + frontMatter.title;
      return concat.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={4}
          mb={4}
        >
          <InputGroup my={0} mr={100} ml={100} w="70%">
            <Input
              aria-label="Search blog title or summary"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search blog title or summary"
            />
            <InputRightElement>
              <IconButton icon="search" color={textColor1[colorMode]} />
            </InputRightElement>
          </InputGroup>
        </Flex>
        {!searchValue && (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            m="0 auto"
          ></Flex>
        )}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={20}
        >
          <Heading
            letterSpacing="tight"
            mb={4}
            size="xl"
            fontWeight={700}
            color={textColor1[colorMode]}
          >
            All Posts
          </Heading>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxWidth="90%"
            mt={4}
          >
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
          <br />
          <br />
          <Heading
            letterSpacing="tight"
            mb={4}
            size="xl"
            fontWeight={700}
            color={textColor1[colorMode]}
          >
            Most Popular
          </Heading>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxWidth="90%"
            mt={4}
          >
            <BlogPost {...mlp1} />
            <BlogPost {...usachina} />
          </Flex>
          <Stat
            mb="8"
            border="1px solid"
            borderColor={textColor1[colorMode]}
            borderRadius={0}
            p={4}
          >
            <StatLabel>Number of blogs on this site<br/><br/></StatLabel>
            <StatNumber textAlign="center">{blogs1.length}</StatNumber>
          </Stat>
        </Flex>
      </Container>
    </>
  );
};

export default Blog;