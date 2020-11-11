import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Image,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Button,
  Icon,
  Box
} from '@chakra-ui/core';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';
import ProjectCard from '../components/ProjectCard';

const url = 'https://upenr.vercel.app';
const title = 'About Me: Upendra Rajan';

const Index = () => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: '#009688',
    dark: '#009688'
  };
  const secondaryTextColor = {
    light: 'gray.800',
    dark: 'gray.400'
  };
  const whiteTextColor = {
    light: 'white',
    dark: 'white'
  };

  return (
    <>
     <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
    <Container>
      <Flex
        align="center"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="100%"
		    mt="40"
      >
        <Stack spacing={2}>
          <Heading
            textAlign="center"
            letterSpacing="tight"
            as="h1"
            size="2xl"
            m="0 auto"
          >
            Hi, I’m{' '}
            <Text as="span" color={textColor[colorMode]}>
              Upendra Rajan
            </Text>
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Welcome. This is a small blog-search website I built to understand
            page pre-fetching on Next.js.
          </Text>
          <Flex
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
                leftIcon="search"
                align="center"
                color={textColor[colorMode]}
                variantColor="gray"
                width="40%"
                size="lg"
              >
                Search
              </Button>
            </NextLink>
          </Flex>
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
          mt={170}
          mb={12}
        >
          <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
            Portfolio
          </Heading>
          <ProjectCard
            title="Manager of Worldwide IBM Storage Technical Client Training and Related Services"
            description="Managed a team of IBM Storage specialists, consultants and content developers, wrote and published technical content with hands-on access on software-defined storage (SDS) to enterprise clients, business partners and IBMers."
            href="https://www.ibm.com/training/search?query=IBM%20Storage"
            icon="storage"
          />
          <ProjectCard
            title="OpenStack Implementation in Enterprise Data Centers"
            description="IBM Cloud PowerVC Manager, an infrastructure-as-a-service (IaaS) offering, provides a self-service cloud portal for IBM Power Systems and is built on OpenStack. Implemented an OpenStack based private cloud environment to manage enterprise compute systems running the IBM ppc64 architecture."
            href="https://www.ibm.com/training/course/QZC30G"
            icon="openstack"
          />
          <ProjectCard
            title="Ansible, Chef and Puppet in Enterprise Environments"
            description="This IBM-authorized course addresses the concepts involved in planning, deploying and implementing Ansible, Chef and Puppet, and shows how to integrate these tools in an enterprise cloud environment."
            href="https://www.ibm.com/training/course/QZC50G"
            icon="ansible"
          />
          <ProjectCard
            title="Return Finder: ROCE, ROE, ROA of any stock"
            description="Quickly find financial ratios such as Return on Capital Employed (ROCE), Return on Equity (ROE) and Return on Assets (ROA) for any company in the world. This app is free. No ads."
            href="https://play.google.com/store/apps/details?id=com.upen.rocecalculator"
            icon="android"
          />
          <ProjectCard
            title="Twitter Personality Insights with IBM Watson AI."
            description="This Android app uses IBM Watson AI to get personality insights from anyone's public Twitter profile. You can get insights on several dimensions, such as, personality traits, values, needs and consumer preferences."
            href="https://play.google.com/store/apps/details?id=com.upen.personalityapp"
            icon="twitter"
          />
          <ProjectCard
            title="Linux and Private Cloud Administration on IBM Power Systems Specialization (To be published)"
            description="A Coursera specialization I designed and developed with Red Hat to clarify advanced concepts on Linux system administration and private cloud management, with live hands-on access to IBM Systems."
            href="https://www.coursera.org/specializations/linux-private-cloud-administration-power-systems"
            icon="letterU"
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="100%"
          mt={4}
        >
          <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
            About Me
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            I’m Upendra. I live in Raleigh, NC and I’m a Senior IT Management
            Consultant at&nbsp;
            <CustomLink href="https://ibm.com">IBM</CustomLink>. My current
            focus is on working with IT specialists, consultants and executives
            in managing and creating{' '}
            <CustomLink href="https://www.ibm.com/it-infrastructure">
              IBM Systems
            </CustomLink>{' '}
            and cloud computing (IaaS/PaaS) related technical content and client
            services, and coming up with innovative methods to monetize data
            center services.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            I’ve presented to IT personnel and executives at conferences
            worldwide about IT infrastructure design and cloud-based product
            implementations, frequently through labs, live demonstrations and
            presentations. I read several investment and business related books
            in my free time. I also develop Android applications and websites
            such as this. Follow me on&nbsp;
            <CustomLink href="https://www.twitter.com/__upen">
              Twitter
            </CustomLink>{' '}
            or{' '}
            <CustomLink href="https://www.linkedin.com/in/upenr">
              LinkedIn
            </CustomLink>
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            I grew up in Chennai, India, graduating with a
            Bachelor's degree in Electronics and Communication
            Engineering. I then received a Master's degree in Computer Network
            Engineering from North Carolina State University.
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
            >
              <Image
                rounded="full"
                size="300px"
                src="/static/images/upen.jpg"
                alt="Upendra Rajan"
                mb={10}
              />
            </Flex>
          </Stack>
          <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
            Speaker At
          </Heading>
          <Heading size="md" as="h2" mb={2} fontWeight="medium">
            <Link
              display="flex"
              title="IBM TechU"
              href="https://www.ibm.com/training/events/"
              isExternal
            >
              <Flex align="center">
                Conferences:
                <Icon name="external-link" mx={2} size="16px" />
              </Flex>
            </Link>
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={8}>
            · IBM TechU 2020, Istanbul, Virtual IBM TechU
            <br />
            · IBM TechU 2019, Casablanca, Atlanta, Sydney, Prague
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
            <br />· IBM TechU 2014, Istanbul, Dublin, Sao Paulo
          </Text>
          <Heading letterSpacing="tight" mb={4} as="h2" size="xl">
            Cities Visited
          </Heading>
          <iframe
            height="300px"
            src="https://www.google.com/maps/d/embed?mid=1DNDs3fIaVs77g3IGDeFxp_D9iRy03d7X"
            title="Upendra Travelled Cities"
            width="100%"
          />{' '}
          <br />
          <br />
        </Flex>
      </Stack>
    </Container>
    </>
  );
};

export default Index;