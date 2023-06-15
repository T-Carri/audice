import Image from "next/image";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useContext, useState } from "react";
import { Grid, Card, Button, Box } from "@mui/material";


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
     <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
      <h3>{title}</h3> 
 
     </Grid>
    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
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
