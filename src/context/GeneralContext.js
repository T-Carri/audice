import { createContext, useReducer } from "react";
import { GlobalState } from "@components/redux/GlobalState";
import youtubeApi from "@components/pages/api/youtube";
import { TYPES } from "@components/redux/Types";



const GeneralContext = createContext()

export default GeneralContext


//key= AIzaSyCwmsa435Cs-pJdR0SrhKlTkm5MTP82U3Y

export const GeneralProvider = ({children}) => {
  
  const  initialState={
    
    insearch_A:'', 
    insearch_B:'',
    stageYT_A:[],
    stageYT_B:[], 
    TrackIdA:'',
    TrackIdB:'' 
    
  }

  
const [state, dispatch] = useReducer(GlobalState, initialState);
  
  //Search at youtube function 


  const onSearchA = async (keyword) => {
   const response = await youtubeApi.get("/search", {
      params:{
        q:keyword
      }
    })  
    dispatch({
      type: TYPES.CURRENTSEARCH_A , payload: response.data.items
    })
    //setters 
    // console.log(response)
    // setSearchValue(response.data.items)
    //console.log(searchValue)
  } 


  



  const onSearchB = async keyword => {

    const response = await youtubeApi.get("/search", {
      params:{
        q:keyword
      }
    })  
  
    dispatch({
      type: TYPES.CURRENTSEARCH_B , payload: response.data.items
    })
    //setters 
   // console.log(response)
   // setSearchValue(response.data.items)
    //console.log(searchValue)
  } 



  //StageA
//build a reducer such save id videos for this stage side 
//build a reducer shuch save list fetched in searchin

  const addingToSA = (data) =>{
  dispatch({type: TYPES.STAGEYT_A, payload:data})
  }


//StageB
//same as A side 

const addingToSB = (data) =>{
  dispatch({type: TYPES.STAGEYT_B, payload:data})
  }





//Search at SoundCloud


    
//REPRODUCIR


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
  
  
    
      
  
  

 */




//PAUSAR

/*    const stopVideo = () => {
      player.stopVideo();
    };
   */
//BUSCAR 
//AGREGAR
//VOLUMEN
//BAJOS 
//MEDIOS
//ALTOS 
//VELOCIDAD DE CANCION 
//IDENTIFICADOR DE BPM 
//VOLUMEN CON PREFERENCIA 




  return (
    <GeneralContext.Provider 
      value={{ state, dispatch, onSearchA, onSearchB, addingToSA, addingToSB }}>
      {children}
      </GeneralContext.Provider>
  )
}
