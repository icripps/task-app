'use client'

import React, { Fragment } from 'react';
import { Heading } from '@chakra-ui/react';
import DarkModeToggle from './DarkMode';
import SettingsOverlay from './SettingsOverlay';
import AddUser from './AddUser';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import TestPage from '../../pages/index';
import { VStack, HStack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PrWomen from '../public/Lamp.svg';
import Image from 'next/image';

//all the ui for the homepage

function HomePageUi(props: any) {
  const MotionHeading = motion(Heading);

  // an object w. dummy data

  return (
    <Fragment>
      <VStack spacing="40px">
        <MotionHeading
          fontSize="8xl"
          marginTop="0px"
          marginBottom="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgGradient="linear(to-r, blue.500, pink.300, blue.600)"
          bgClip="text"
          whileHover={{ scale: 0.9 }}
          animate={{ y: [0, 80, 50] }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          Your Todos
        </MotionHeading>

        <Image
          src={PrWomen}
          alt="kfsjkfdj"
          width="130px"
          height="130px"
          display="flex"
          float="right"
        ></Image>

        <TaskItem todo={props.todos} />

        <AddTask />
      </VStack>

      <DarkModeToggle />

      <AddUser />

      <SettingsOverlay />
    </Fragment>
  );
}

export default HomePageUi;
