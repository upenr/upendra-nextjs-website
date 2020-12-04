import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import * as moment from 'moment';
import { SearchIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

import { default as content, frontMatter as blogs1 } from './blog/*.mdx';
import { frontMatter as mlp1 } from './blog/image-classification-machine-learning-1.mdx';
import { frontMatter as usachina } from './blog/usa-and-china.mdx';

const url = 'https://upenr.vercel.app/blog';
const title = 'Blog: Upendra Rajan';
const description = "Upendra Rajan's Blog Search Page";

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
  const newColor = {
    light: '#009688',
    dark: '#DDAF94'
  };

  const filteredBlogPosts = blogs1
    .sort((a, b) => {
      if (new Date(a.lastPublishedOn) < new Date(b.lastPublishedOn)) {
        return 1;
      }
      if (new Date(a.lastPublishedOn) > new Date(b.lastPublishedOn)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
/*     .filter((frontMatter) => {
      const concat =
        frontMatter.summary +
        frontMatter.title +
        frontMatter.lastPublishedOn +
        frontMatter.type;
      return concat.toLowerCase().includes(searchValue.toLowerCase());
    }); */
    .filter((frontMatter) => {
      // Get the front matter into a string, separated by spaces
      //const concat = Object.values(frontMatter).join(" ").toLowerCase();
      const concat = [
        frontMatter.summary,
        frontMatter.title,
        frontMatter.lastPublishedOn,
        frontMatter.type
      ]
        .join(' ')
        .toLowerCase();
      // Look for a string in quotes, if not then just find a word
      const regex = /\"([\w\s\\\-]+)\"|([\w\\\-]+)/g;
      // Get all the queries
      const queries = [...searchValue.toLowerCase().matchAll(regex)].map(
        (arr) => arr[1] || arr[2]
      );
      // Make sure that every query is satisfied
      return queries.every((q) => concat.includes(q));
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
              aria-label="Search"
              borderColor="blue.500"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              value={searchValue}
              autoFocus
              onFocus={(e) => e.currentTarget.select()}
            />
            <InputRightElement>
              <IconButton
                variant="unstyled"
                mb={1}
                borderColor="blue.500"
                icon={<SearchIcon />}
                color={textColor1[colorMode]}
              />
            </InputRightElement>
          </InputGroup>
          <Text mt={2} fontSize="xs" color="gray.500">
            There are{' '}
            <Text
              as="span"
              fontSize="xs"
              fontWeight="semibold"
              color={newColor[colorMode]}
            >
              {filteredBlogPosts.length}
            </Text>{' '}
            blogs below.
          </Text>
        </Flex>
        {!searchValue && (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            m="0 auto"
            mb={0}
          ></Flex>
        )}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mt={8}
          mb={0}
        >
          <Heading
            letterSpacing="tight"
            mb={8}
            size="xl"
            fontWeight={700}
            color={newColor[colorMode]}
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
              <BlogPost
                key={frontMatter.title + frontMatter.lastPublishedOn}
                handleSearch={(anyKey) => setSearchValue(anyKey)}
                {...frontMatter}
              />
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
            <StatLabel>
              Number of blogs on this site
              <br />
              <br />
            </StatLabel>
            <StatNumber textAlign="center">{blogs1.length}</StatNumber>
          </Stat>
        </Flex>
      </Container>
    </>
  );
};

export default Blog;
