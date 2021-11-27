import React from 'react';
import NextLink from 'next/link';
import { SearchIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  useColorMode,
  Heading,
  Text,
  Link,
  Flex,
  Stack,
  Image,
  Icon,
  Box,
  Badge,
  Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import * as myIcons from '../styles/newtheme';
import { NextSeo } from 'next-seo';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import { CustomLink } from '../components/MDXComponents';
import Subscribe from '../components/Subscribe';

const url = 'https://upenr.vercel.app/';
const title = 'About Me: Upendra Rajan';
const description = "Upendra Rajan's Blog Search Website";

const Index = () => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: '#009688',
    dark: '#009688'
  };
  const newColor = {
    light: '#000000',
    dark: '#009688'
  };
  const secondaryTextColor = {
    light: 'gray.800',
    dark: 'gray.400'
  };
  const whiteTextColor = {
    light: '#ffffff',
    dark: '#ffffff'
  };

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
          align="center"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          maxWidth="100%"
          mt="20"
        >
          <Image
            borderRadius="full"
            boxSize="250px"
            src="/static/images/upen.jpg"
            alt="Upendra Rajan"
            quality="100"
            size="50px"
            mb={10}
            mr={10}
          />
          <Stack>
            <Heading
              textAlign="center"
              letterSpacing="tight"
              as="h1"
              size="2xl"
              mb="4"
            >
              Hi, I’m{' '}
              <Text
                as="span"
                color={newColor[colorMode]}
                bgGradient="linear(to-r, cyan.500, teal.500)"
                bgClip="text"
                fontSize="5xl"
              >
                Upendra Rajan
              </Text>
            </Heading>
            {/* <Text textAlign="center" fontSize="sm" color={secondaryTextColor[colorMode]}>
              Welcome. This is a blog-search website I built to understand Next.js.
            </Text> */}
            {/* <Flex
              align="center"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxWidth="100%"
              mb="4"
              mt="4"
            >
              <NextLink href="/blog" passHref>
                <Button
                  leftIcon={<SearchIcon />}
                  align="center"
                  color={whiteTextColor[colorMode]}
                  width="30%"
                  size="lg"
                  mt="4"
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, red.500, yellow.500)'
                  }}
                >
                  Get started
                </Button>
              </NextLink>
            </Flex> */}
          </Stack>
        </Flex>
        <Stack
          as="main"
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="100%"
            mt={180}
            mb={12}
          >
            <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I manage a team of technical specialists and handle relationships
              with external business partners to create hybrid cloud (IaaS/PaaS)
              related technical content and content-related services, helping
              monetize systems in our data center. I work closely with
              executives, product managers, data center IT specialists and
              consultants to achieve this.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I've presented to IT personnel and executives at technical
              conferences about infrastructure design and cloud-based product
              implementations, through hands-on labs, live demonstrations and
              presentations. I read several investment and business related
              books in my free time. I also develop Android applications and
              websites such as this. Follow me on&nbsp;
              <CustomLink href="https://www.twitter.com/__upen">
                Twitter
              </CustomLink>{' '}
              or{' '}
              <CustomLink href="https://www.linkedin.com/in/upenr">
                LinkedIn
              </CustomLink>
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I grew up in Chennai, India, graduating with a Bachelor's degree
              in Electronics and Communication Engineering. I then received a
              Master's degree in Computer Network Engineering from North
              Carolina State University.
            </Text>
            <Stack
              as="main"
              justifyContent="center"
              align="center"
              m="0 auto"
              maxWidth="100%"
              mt={4}
            >
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxWidth="100%"
              ></Flex>
            </Stack>
            <Heading letterSpacing="tight" mb={4} mt={4} as="h2" size="xl">
              Portfolio
            </Heading>
            <ProjectCard
              title="Manager of Worldwide IBM Power and IBM Storage Technical Client Training and Related Services"
              description="Managed a team of IT specialists, consultants and content developers, wrote and published technical content with hands-on access to enterprise clients, business partners and IBMers. Click to view our official website. I also tried to compile a list of these courses in my own website at systemstraining.vercel.app"
              href="https://www.ibm.com/training/servers"
              icon={myIcons.StorageIcon}
            />
            <ProjectCard
              title="Author of Linux and Private Cloud Administration on IBM Power Systems Specialization on Coursera"
              description="A Coursera specialization I designed and developed with Red Hat to clarify advanced concepts on Linux system administration and private cloud management, with live hands-on access to IBM Systems."
              href="https://www.coursera.org/specializations/linux-private-cloud-administration-power-systems"
              icon={myIcons.CourseraIcon}
            />
            <ProjectCard
              title="IBM Certified Technical Specialist - Expert"
              description="View my verified achievement from IBM. Technical Specialist Profession Certification - Level 2. An IBM Certified Specialist leads teams to adapt new technology & processes to deliver high quality solutions that provide business value for the client."
              href="https://www.youracclaim.com/badges/1b9aaf75-5317-4033-8a8e-9079df510c66/"
              icon={myIcons.IBMIcon}
            />
            <ProjectCard
              title="OpenStack and other DevOps tools Implementation in Enterprise Data Centers"
              description="IBM PowerVC, an infrastructure-as-a-service (IaaS) offering, provides a self-service cloud portal for IBM Power Systems and is built on OpenStack. Implemented an OpenStack based private cloud environment to manage enterprise compute systems running the IBM ppc64 architecture."
              href="https://www.ibm.com/training/course/QZC50G"
              icon={myIcons.OpenStackIcon}
            />
            <ProjectCard
              title="Return Finder: ROCE, ROE, ROA of any stock"
              description="Quickly find financial ratios such as Return on Capital Employed (ROCE), Return on Equity (ROE) and Return on Assets (ROA) for any company in the world. This app is free. No ads."
              href="https://play.google.com/store/apps/details?id=com.upen.rocecalculator"
              icon={myIcons.AndroidIcon}
            />
            <ProjectCard
              title="Twitter Personality Insights with IBM Watson AI."
              description="This Android app uses IBM Watson AI to get personality insights from anyone's public Twitter profile. You can get insights on several dimensions, such as, personality traits, values, needs and consumer preferences."
              href="https://play.google.com/store/apps/details?id=com.upen.personalityapp"
              icon={myIcons.TwitterIcon}
            />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width="100%"
            mt={4}
          >
            <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
              Speaker At 💼            </Heading>
            <Heading size="md" as="h2" mb={2} fontWeight="medium">
              <Link
                display="flex"
                title="IBM TechU"
                href="https://www.ibm.com/training/events/"
                isExternal
              >
                <Flex align="center">
                  Conferences: <ExternalLinkIcon mx="2px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              · IBM TechU 2021, Virtual event <br />
              · IBM TechU 2020, Istanbul and a virtual event
              <br />
              · IBM TechU 2019, Casablanca, Atlanta, Bangkok, Sydney, Prague
              <br />
              · IBM TechU 2018, Cairo, Dubai, Sydney and Hollywood (FL)
              <br />
              · IBM TechU 2017, New Orleans, Prague
              <br />
              · IBM TechU 2016, London, Atlanta, Baltimore
              <br />
              · IBM Edge 2012, 2013, 2014, 2015, 2016 and IBM Pulse 2014, Las
              Vegas
              <br />
              · IBM Power Systems Technical Symposium 2012, Las Vegas
              <br />
              · IBM Cloud Computing Technical Symposium 2012, San Francisco
              <br />
              · IBM TechU 2013, 2015, 2016, 2017, Orlando
              <br />
              · IBM Systems Technical Symposium 2013, Nordwijk
              <br />
              · IBM Systems Technical Symposium 2012, 2013, 2014, Auckland and
              Melbourne
              <br />
              · IBM Systems Technical Symposium 2013, Berlin
              <br />
              · IBM Systems Technical Symposium 2014, Johannesburg, Cape Town
              <br />
              · IBM TechU 2014, Istanbul, Dublin, Sao Paulo
              <br />· And many other virtual client and Business Partner events
            </Text>
            <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
              Cities Visited 🏙{' '}
            </Heading>
            <Box mb={4} width="100%">
              <iframe
                height="300px"
                src="https://www.google.com/maps/d/embed?mid=1DNDs3fIaVs77g3IGDeFxp_D9iRy03d7X"
                title="Upendra Travelled Cities"
                width="50%"
              />
            </Box>
          </Flex>
        </Stack>
        <Flex
          align="center"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="100%"
          mb="10"
          mt="0"
        >
          <Subscribe />
        </Flex>
      </Container>
    </>
  );
};

export default Index;
