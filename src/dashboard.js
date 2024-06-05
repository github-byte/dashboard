import React from 'react'
import Sidebar from './sidebar'
import Main from './main'
import { Box } from '@mui/material'

const Dashboard = (props) => {
  return(
    <Box display="flex">
        <Sidebar />
        <Main />
    </Box>
   )

 }

export default Dashboard;