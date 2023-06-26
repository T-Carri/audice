import { RepYT_A } from './Youtube/RepYT_A';

export const A_reproductor = (props) => {

   const {service} = props
   
   


return (
       <>
     {service=='youtube'&& <RepYT_A />}
      
     {service=='soundcloud'&&<iframe width="100%" height="200" scrolling="no" frameborder="no"  src="https://soundcloud.com/dc4-682245951/playboi-carti-aint-been?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"></iframe>}
    
      </>
      )
}


 








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
