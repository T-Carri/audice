import Image from "next/image";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useState, useContext } from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid, Card, Box, Tooltip  } from "@mui/material";
import GeneralContext from "@components/context/GeneralContext";


const VideoCard = ({ title, thumbnailUrl, kind, id }) => {
  const urlForImg = thumbnailUrl.high.url
  const {disparadorYT_B } = useContext(GeneralContext);
  
  const [added, setAdded] = useState(false)
 
  return(
 
   <Card>
   <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction={'row'} alignItems={'center'} >
     <Grid item  xl={3} lg={3} md={3} sm={3} xs={3} p={1} >
       <Image src={urlForImg} alt="Thumbnail"  height={80} width={110}/>  
 
     </Grid>
     <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
      <h3>{title}</h3> 
 
     </Grid>
    <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
    <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction={'row'} justifyContent={'center'} alignItems={'center'}>
     
      <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
      {kind&&<Tooltip title="From youtube">
             <YouTubeIcon fontSize="large"/>
             </Tooltip>}
      </Grid>

      <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>

      <IconButton aria-label="remove">
              <RemoveCircleOutlineIcon sx={{ height: 30, width: 30 }} />
            </IconButton>        
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
      <IconButton aria-label="toPlay" onClick={()=>{disparadorYT_B(id)}} >
      <PlayArrowIcon sx={{ height: 45, width: 45 }} />
      </IconButton>    
      </Grid>  
      </Grid>
     </Grid> 
     </Grid>
 
   </Card>
 
  )
  
  };
 







export const B_Stage = (props) => {

const { agregados  } = props




  return (
    <Box  height={230} style={{ overflow: 'auto'}} >

{
agregados&&agregados.map((item, index)=>(
  <VideoCard  
   key={index} 
    title={item.snippet.title} 
   thumbnailUrl={item.snippet.thumbnails} 
    kind={item.kind} 
    id={item.id.videoId}
   />
))
} 


       </Box>
  )
}
