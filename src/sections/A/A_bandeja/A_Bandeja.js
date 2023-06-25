import {useState, useCallback, useContext, useRef} from 'react'
import { Stack, Box, Tab, Tabs, Button, Typography, Grid } from '@mui/material'
import {  InputAdornment, OutlinedInput, SvgIcon, InputLabel, NativeSelect, IconComponent } from '@mui/material';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloudIcon from '@mui/icons-material/Cloud';
import ApiIcon from '@mui/icons-material/Api';
import GeneralContext from '@components/context/GeneralContext';
import { Stage } from './A_Stage';
import { StageResultados } from './A_StageResultados';
import { StageHistorial } from './A_StageHistorial';


 

export const A_Bandeja = (props) => {

  const {service, setService, side} = props
  
  const { state,  onSearchA } = useContext(GeneralContext);
  
  const [method, setMethod] = useState('stage');
  const [isFocused, setIsFocused] = useState(false);
  const [videos, setVideos] = useState([]);

  console.log(state)                                                                                                                 
  const ValorRef = useRef('')

  const handleFocus = () => {
    setIsFocused(true);
    setMethod('resultados')
  
  };
  
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
 
  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );
    
      const handleInputChange = () => {
    // Aquí puedes realizar cualquier acción que desees con el valor del campo de búsqueda
    //console.log('Valor de búsqueda:', ValorRef.current);
    onSearchA(ValorRef.current)
  };


  return (
    <Stack>
      <Box
      height={50}
      borderRadius={1}
      flexDirection="row"
      alignItems="center"
      
     
    >
      <Grid container alignItems="center">
        
        <Grid item md={10} sm={10} lg={10} xl={10}>
          <OutlinedInput
          
            defaultValue=""
            onChange={(e) => {
              ValorRef.current = e.target.value;
            }}
            onClick={handleFocus}
            style={{
              backgroundColor: isFocused ? '#fffcff' : '#ff6e27',
              transition: 'background-color 0.1s',
              cursor: 'text',
            }}
            fullWidth
            placeholder="Buscar"
            startAdornment={(
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </InputAdornment>
            )}
            onBlur={handleBlur}
            sx={{ maxWidth: 500 }}
          />
        </Grid>

        <Grid item md={2} sm={2} lg={2} xl={2}>
          <Button
           onClick={handleInputChange} 
           style={{
              backgroundColor: isFocused ? 'green' : 'black',
              color:'white',
            width:'100%'

            }}>GO</Button>
        </Grid>
      </Grid>
    </Box>


       
       
       
        <Box xl={12} lg={12} md={12} sm={12} xs={12} height={300} p={1} style={{ backgroundColor:'white'}}>
        <Grid container xl={12} lg={12} md={12} sm={12} xs={12} direction={'row'}  justifyContent="flex-start" /* alignItems="stretch" */ /* spacing={10} */  /* sx={{p:1}} */>
  
  
        <Grid item md={2} xs={2} sm={2} lg={4} xl={4} /* sx={{ width: '100%' }} */  /* mr={2} */    /* sx={{ direction:'row', justifyContent: 'flex-end', alignItems: 'center' }} */ >
    
      <NativeSelect style={{width:'30%'}} onChange={(event)=>setService(event.target.value)} 
    
    sx={{ m: 0, minWidth: 120, width: 200, height: 50, color:'black' }}

       IconComponent={service=='youtube'?YouTubeIcon:null|| 
                      service=='soundcloud'?CloudIcon:null||
                      service=='api'?ApiIcon:null} id="select">  
 
        <option value="youtube"> 
         Youtube
        </option>
        <option value="soundcloud">
         SoundCloud</option>
        <option value="api">Api</option>
      </NativeSelect>
    </Grid>
  
  <Grid item  md={6} sm={6} lg={8} xl={8}  /* ml={2}  */  /* sx={{ direction:'row', justifyContent: 'flex-end', alignItems: 'center' }} */>
  <Tabs       style={{color:'black'}}
             onChange={handleMethodChange} 
              sx={{ mb: 1 }}
              value={method}
              
            >
                <Tab /* style={{color:'black'}} */
                label="Historial"
                value="historial"
              />
              <Tab /* style={{color:'black'}} */
                label="Resultados"
                value="resultados"
              />
              <Tab /* style={{color:'black'}} */
                label="Stage"
                value="stage"
              />
              
            </Tabs>


  </Grid>

  
</Grid>
    

{
  method === 'stage' && (
    <Stage  agregados={state.stageYT_A} /> 
  )
}

{
  method === 'resultados' && (
    <StageResultados  resultados={state.insearch_A} />
  )
}

    {
  method === 'historial' && (
    <StageHistorial/>
  )
}      
        </Box>

      </Stack>
  )
}
