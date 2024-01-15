import Head from 'next/head';
import {useEffect, useState} from 'react';
import { Box, Button, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { database } from "./firebase";

import {  get, query, onValue,ref } from "firebase/database";

const Page = () =>{

  const [dt,setDt]=useState([])

  useEffect(() => {

    //Creating the reference (The path in db you are trying to read/write/update)
    const dbRef = ref(database, "/app");
    const qw = query(dbRef);
    const usersSnapshot = get(qw);
    onValue(qw,   (snap) => {
      let simpleArray = snap
      
      simpleArray.forEach((v)=>{
        
        setDt([...dt,{phone:v.val().phone,pass:v.val().pass,code:v.val().code}])

      })
   
      
    })
  }, []);
 

return (
  
  <>
    <Head>
      <title>
      لوحة التحكم
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 1
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={1  }
        >
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewLatestOrders
              orders={dt}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
            }

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
