import  { useEffect} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { RepYT_B } from './RepYT_B';
import { RepYT_A } from './RepYT_A';
export const RepYT = (props) => {

  const {side} = props
  

  return (



    <Grid height={270 } md={12} sm={12} xl={12} lg={12}  p={0} mb={2} /* style={{ backgroundColor:'black'}} */ >
    
    {
      side=='A'&& <RepYT_A/>
      
    }
    {
      side=='B'&& <RepYT_B/>
           
    }
   
       </Grid>
  )
}
