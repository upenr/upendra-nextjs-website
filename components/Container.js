import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Button,
  Flex,
  Avatar,
  Box,
  IconButton,
  Tooltip
} from '@chakra-ui/core';
import styled from '@emotion/styled';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 0;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'gray.100'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        bg={navBgColor[colorMode]}
        as="nav"
        p={0}
        mt={[0, 0]}
        mb={8}
        mx="0"
      >
        <Tooltip label="Dark Mode" placement="bottom">
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
          />
        </Tooltip>
        <Box>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Blog
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" p={[1, 4]}>
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;
