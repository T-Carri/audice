import {useState, useRef} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Stack } from '@mui/material';
import { Bandeja } from '@components/components/Bandeja/Bandeja';

import { Reproductor } from '@components/components/Reproductor/Reproductor';
export const B = () => {
  const [service, setService ] = useState('youtube')

 const B_REF = useRef('B')


  return (
    <Grid item md={4} sm={4} xl={4} lg={4} style={{ backgroundColor:'#D9D9D9'}}>
      
      <Stack p={0} spacing={0}>

        

      <Reproductor  side={B_REF.current} service={service}/>
      <Bandeja side={B_REF.current} service={service} setService={setService}  />
  

     </Stack>
      
   </Grid>
  )
}
