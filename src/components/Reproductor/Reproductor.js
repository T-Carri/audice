import  { useEffect} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useTheme } from '@mui/material/styles';

import { RepYT } from './Youtube/RepYT';
import Image from 'next/image';
export const Reproductor = (props) => {

  const {service, side} = props
  const theme = useTheme();
 console.log(service);

/* 
    useEffect(() => {
      // 2. This code loads the IFrame Player API code asynchronously.
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      // Clean up function
      return () => {
        // Remove the dynamically added script when the component is unmounted
        if (firstScriptTag.parentNode) {
          firstScriptTag.parentNode.removeChild(tag);
        }
      };
    }, []);
  
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player;
    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        height: '200',
        width: '200',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };
  
 */    // 4. The API will call this function when the video player is ready.
   /*  const onPlayerReady = (event) => {
      event.target.playVideo();
    };
  
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    let done = false;
    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    };
  
    const stopVideo = () => {
      player.stopVideo();
    };
  
    
      
  
  

 */















  return (
       <>
      
     

      
    {service=='youtube'&&
    <RepYT side={side}  service={service}/>
     }

{service=='soundcloud'&&<iframe width="100%" height="200" scrolling="no" frameborder="no"  src="https://soundcloud.com/dc4-682245951/playboi-carti-aint-been?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"></iframe>


}

    </>
 
  )
}
