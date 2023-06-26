import {useState, useRef} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { Stack } from '@mui/material';
import { B_Bandeja } from './B_bandeja/B_Bandeja';
import { B_reproductor } from './B_reproductor/B_reproductor';

export const B = () => {
  const [service, setService ] = useState('youtube')
  const B_REF = useRef('B')

  return (
    <Grid item md={4} sm={4} xl={4} lg={4} style={{ backgroundColor:'#D9D9D9'}}>
      <Stack p={0} spacing={0}>

      <B_reproductor  side={B_REF.current} service={service}/>
      <B_Bandeja side={B_REF.current} service={service} setService={setService}  />

     </Stack>
   </Grid>
  )
}
      

        

  

      
