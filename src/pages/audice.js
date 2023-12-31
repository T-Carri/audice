

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@components/components/Navbar'
import { styled } from '@mui/material/styles';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Stack } from '@mui/material';
import { A } from '@components/sections/A/A';
import { B } from '@components/sections/B/B';
import { X } from '@components/sections/X/X';
import { Y } from '@components/sections/Y/Y';
const inter = Inter({ subsets: ['latin'] })


const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  marginTop:'4em'
/*   [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  } */
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export default function Home() {
  return (
    <>
      <Head>
        <title>audice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>
    
      </Head>
  <Navbar/>
  <LayoutRoot>
        <LayoutContainer>
      <main >
        <Grid container height={600} style={{ backgroundColor:'yellow'}} /* sx={{mt:'10'}} */>
<A/>


<Grid item md={4} sm={4} xl={4} lg={4} /* style={{ backgroundColor:'yellow'}} */>
  <Stack>
   
   
    <Y/>
    
    <X/>

 </Stack>
</Grid>



   <B/>

        </Grid>
      </main>

     </LayoutContainer>
      </LayoutRoot>
    </>
  )
}
