import {useState, useRef} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid' 
import { Stack } from '@mui/material';
import { A_reproductor } from './A_reproductor/A_reproductor';
import { A_Bandeja } from './A_bandeja/A_Bandeja';

export const A = () => {
 
  const [service, setService ] = useState('youtube')

  const A_REF = useRef('A')


  return (
    <Grid item md={4} sm={4} xl={4} lg={4}   style={{ backgroundColor:'#D9D9D9', }}>
    <Stack p={0} spacing={0}>
   
    <A_reproductor side={A_REF.current} service={service}/>
    <A_Bandeja side={A_REF.current} service={service} setService={setService}  /> 

   </Stack>
   </Grid>
        )
  }





 
 




