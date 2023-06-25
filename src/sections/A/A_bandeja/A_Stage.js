import Image from "next/image";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useContext, useState } from "react";
import { Grid, Card, Button, Box } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const VideoCard = ({ title, thumbnailUrl, item, key }) => {
  const urlForImg = thumbnailUrl.high.url
 
  //const {addingToSB}= useContext(GeneralContext)
  const [added, setAdded] = useState(false)
 
  return(
 
   <Card>
   <Grid container xl={12} lg={12} md={12} sm={12} xs={12} spacing={3} direction={'row'} alignItems={'center'} >
     <Grid item  xl={3} lg={3} md={3} sm={3} xs={3} p={1} >
       <Image src={urlForImg} alt="Thumbnail"  height={80} width={110}/>  
 
     </Grid>
     <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
      <h3>{title}</h3> 
 
     </Grid>
    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>

      <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction={'row'} justifyContent={'center'} alignItems={'center'}>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>

      <IconButton aria-label="play/pause">
              <RemoveCircleOutlineIcon sx={{ height: 30, width: 30 }} />
            </IconButton>        
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
      <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 45, width: 45 }} />
            </IconButton>    
      </Grid>  
      </Grid>
    

            
 {/* <Button disabled={added?true:false} key={key} onClick={()=>
 {
   addingToSB(item)
   setAdded(true)
 }} style={{color:'black'}}>
 {added?<CheckBoxIcon/>:<AddToPhotosIcon/>}
 </Button> */}
     </Grid> 
     </Grid>
 
   </Card>
 
  )
  
  };
 







export const Stage = (props) => {

const { agregados  } = props




  return (
    <Box  height={230} style={{ overflow: 'auto'}} >

{
agregados&&agregados.map((item, index)=>(
  <VideoCard  
   key={index} 
    title={item.snippet.title} 
   thumbnailUrl={item.snippet.thumbnails} 
   /* item={item} */
   />
))
} 


       </Box>
  )
}
