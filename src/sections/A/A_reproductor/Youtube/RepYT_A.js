import Grid from '@mui/system/Unstable_Grid/Grid'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export const RepYT_A = () => {
  const theme = useTheme();
  //Este componente va a recibir el video a reproducir por prop

  return (
    <Grid height={270 } md={12} sm={12} xl={12} lg={12}  p={0} mb={2} /* style={{ backgroundColor:'black'}} */ >
      <Box p={1} mb={1} sx={{ display: 'flex' }} style={{ backgroundColor:'white'}}>
      Frecuencia
      <br/>
      <br/>
      <br/>
      
  
       </Box>
    <Grid container m={0} md={12} sm={12} xl={12} lg={12} spacing={0}  direction={'row'}>

    <Grid item md={6} sm={6} xl={6} lg={6}>
    
    <Card sx={{ display: 'flex', backgroundColor:'black', height:'100%' }}>
    </Card>
        
  
    </Grid>
        
   
    <Grid item md={6} sm={6} xl={6} lg={6} >
  
         <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
         
        
            <Typography component="div" variant="h5">
              --
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              --
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
  
         </Card>
         
      </Grid>
   

</Grid>
</Grid>
  )
}
 




        
   
  
  
        
