import  { useEffect} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export const RepYT_B = () => {
    const theme = useTheme();

//Este componente va a recibir el video a reproducir por prop



  return (
     <>
      <Box p={1} mb={1} sx={{ display: 'flex' }} style={{ backgroundColor:'white'}}>
      Frecuencia
{/* 
      //https://dev.to/jamland/audio-player-with-wavesurfer-js-react-1g3b

      //https://codesandbox.io/s/audio-player-with-wavesurferjs-react-bd499?from-embed=&file=/src/Waveform.js

      //Usa wavesurfer.js */}
      
      <br/>
      <br/>
      <br/>
      
  
    </Box>
<Grid container md={12} sm={12} xl={12} lg={12} spacing={0}  direction={'row'}>
    <Grid item md={6} sm={6} xl={6} lg={6} >
         <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
         
        
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
  
        
   
  
  
       {/*  <CardMedia
          component="Image"
          sx={{ width: 151 }}
          image={lanita}
          alt="Live from space album cover"
        /> */} 
         </Card>
         
      </Grid>
    <Grid item md={6} sm={6} xl={6} lg={6}>
    <Card sx={{ display: 'flex', backgroundColor:'black' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height:'100%'}}>
          video
          video
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <br/>

          <br/>

        </Box>
  
        
   
  
 
         </Card>

    </Grid>

</Grid>

         </>

  )
}
