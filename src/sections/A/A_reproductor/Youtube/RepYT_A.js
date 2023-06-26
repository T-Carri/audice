import { useContext, useEffect, useState, useRef } from "react";
import Grid from '@mui/system/Unstable_Grid/Grid'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import GeneralContext from "@components/context/GeneralContext";
export const RepYT_A = () => {
  const theme = useTheme();
  const { state } = useContext(GeneralContext);
  const [showIframe, setShowIframe] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  useEffect(() => {
    setShowIframe(!!state.TrackIdA);
  }, [state.TrackIdA]);

  useEffect(() => {
    if (showIframe) {
      if (isPlaying) {
        playerRef.current?.playVideo();
      } else {
        playerRef.current?.pauseVideo();
      }
    }
  }, [isPlaying, showIframe]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    if (state.TrackIdA) {
      // Cargar el reproductor de YouTube
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      // Registrar la función global `onYouTubeIframeAPIReady` para inicializar el reproductor
      window.onYouTubeIframeAPIReady = initializePlayer;
  
      // Función para inicializar el reproductor
      function initializePlayer() {
        playerRef.current = new window.YT.Player("youtube-player", {
          videoId: state.TrackIdA,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      }
  
      // Función de devolución de llamada cuando el reproductor esté listo
      function onPlayerReady(event) {
        setShowIframe(true);
      }
  
      // Función de devolución de llamada cuando el estado del reproductor cambie
      function onPlayerStateChange(event) {
        if (event.data === window.YT.PlayerState.PLAYING) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      }
  
      // Limpieza: eliminar la función global `onYouTubeIframeAPIReady`
      return () => {
        delete window.onYouTubeIframeAPIReady;
      };
    } else {
      // Ocultar el reproductor de YouTube estableciendo su visibilidad en "hidden"
      if (playerRef.current) {
        playerRef.current.getPlayerState = () => window.YT.PlayerState.ENDED;
        playerRef.current.getIframe().style.visibility = 'hidden';
      }
      setShowIframe(false);
    }
  }, [state.TrackIdA]);
  

  return (
    <Grid height={270} md={12} sm={12} xl={12} lg={12} p={0} mb={2}>
      <Box p={1} mb={1} sx={{ display: 'flex' }} style={{ backgroundColor: 'white' }}>
        Frecuencia
        <br />
        <br />
        <br />
      </Box>
      <Grid container m={0} md={12} sm={12} xl={12} lg={12} spacing={0} direction={'row'}>
        <Grid item md={6} sm={6} xl={6} lg={6}>
          
          {showIframe ? (
            
            <Card sx={{ display: 'flex', height: '100%' }}>
      <div id="youtube-player" 
      style={{ flex: 1, 
        display: 'flex',   
        justifyContent: 'center',
         alignItems: 'center' }}></div>
    </Card>
            
) : (
          <Card sx={{ display: 'flex', backgroundColor: 'black', height: '100%' }} />
        )}
          
         
        </Grid>
        <Grid item md={6} sm={6} xl={6} lg={6}>
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
                 <IconButton aria-label="play/pause" onClick={handlePlayPause}>
                  {isPlaying ? (
                    <PauseIcon sx={{ height: 38, width: 38 }} />
                  ) : (
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                  )}
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
  );
};
