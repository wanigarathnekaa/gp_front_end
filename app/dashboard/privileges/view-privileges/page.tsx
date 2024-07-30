import React from 'react';
import { Sidebar, Navbar, Calendar, TaskList } from '@/components';
import { FaUsers, FaRegClock } from 'react-icons/fa';
import { IoMdAddCircle } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import Link from 'next/link';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import MCard from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

const ViewPrivileges = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Sidebar />
      <div className="mt-12 ml-64 flex flex-row min-h-screen">
        <div className="w-3/4 px-20 py-20 bg-[#D6D6FF]">
          <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
            <MCard variant="outlined" orientation='horizontal' sx={{ boxShadow: 'lg', maxWidth: '100%', overflow: 'auto' }}>
              <CardContent>
                <Typography level="title-lg">User Details:</Typography>
                <List marker='circle'>
                  <ListItem>User Id – 001</ListItem>
                  <ListItem>User Name – John Doe</ListItem>
                  <ListItem>User Role – Lecturer</ListItem>
                </List>
                <Typography level="title-md">Privilegers :</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip size="lg" variant="soft">Form Creation</Chip>
                  <Chip size="lg" variant="soft">View own analysis details</Chip>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'flex-end', justifyContent: 'end' }}>
                  <Button sx={{ bgcolor: '#' }} variant="solid">Update Priviligers</Button>
                </Box>
              </CardContent>
            </MCard>

            <MCard variant="outlined" orientation='horizontal' sx={{ boxShadow: 'lg', maxWidth: '100%', overflow: 'auto' }}>
              <CardContent>
                <Typography level="title-lg">User Details:</Typography>
                <List marker='circle'>
                  <ListItem>User Id – 002</ListItem>
                  <ListItem>User Name – Harry Brooks</ListItem>
                  <ListItem>User Role – Staff</ListItem>
                </List>
                <Typography level="title-md">Privilegers :</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip size="lg" variant="soft">Form Creation</Chip>
                  <Chip size="lg" variant="soft">View own analysis details</Chip>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'flex-end', justifyContent: 'end' }}>
                  <Button sx={{ bgcolor: '#' }} variant="solid">Update Priviligers</Button>
                </Box>
              </CardContent>
            </MCard>
          </Box>
        </div>
        <div className="w-1/4 p-4 bg-[#EEF2FF]">
          <Calendar />
          <TaskList tasks={['Task 1', 'Task 2', 'Task 3', 'Task 4']} icon={FaRegClock} />
        </div>
      </div>
    </div>
  );
}

export default ViewPrivileges;
