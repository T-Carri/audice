import {useState, useCallback, useContext, useRef} from 'react'
import { Stack, Box, Tab, Tabs, Button, Grid } from '@mui/material'
import {  InputAdornment, OutlinedInput, SvgIcon,  NativeSelect } from '@mui/material';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloudIcon from '@mui/icons-material/Cloud';
import ApiIcon from '@mui/icons-material/Api';
import GeneralContext from '@components/context/GeneralContext';
import { StageHistorial } from './B_StageHistorial';
import { StageResultados } from './B_StageResultados';
import { B_Stage } from './B_Stage';



export const B_Bandeja = (props) => {
    const {service, setService,side} = props

    const {onSearchB, state } = useContext(GeneralContext);
    const [method, setMethod] = useState('stage');
  
 
    const [isFocused, setIsFocused] = useState(false);
   
    
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
    // console.log('Valor de búsqueda:', value);
    onSearchB(ValorRef.current)
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
      <Grid item md={2} sm={2} lg={2} xl={2}>
          <Button
           onClick={handleInputChange} 
           style={{
              backgroundColor: isFocused ? 'green' : 'black',
              color:'white',
            width:'100%'

            }}>GO</Button>
        </Grid>
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

        
      </Grid>
    </Box>


       
       
       
        <Box height={300} p={1} style={{ backgroundColor:'white'}}>
        <Grid container direction={'row'} >
  <Grid item md={4} sm={4} lg={8} xl={8} >
  <Tabs
             onChange={handleMethodChange} 
              sx={{ mb: 1 }}
              value={method}
            >
              
              <Tab
                label="Stage"
                value="stage"
              />
              <Tab
                label="Resultados"
                value="resultados"
              />

             <Tab
                label="Historial"
                value="historial"
              />
            </Tabs>


  </Grid>

  
  <Grid item md={4} sm={4} lg={4} xl={4}>
    
      <NativeSelect style={{width:'30%'}} onChange={(event)=>setService(event.target.value)} 
    
    sx={{ m: 0, minWidth: 120, width: 200, height: 50 }}

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
</Grid>
    

{
  method === 'stage' && (
    <B_Stage  agregados={state.stageYT_B}/>
  )
}

{
  method === 'resultados' && (
    <StageResultados resultados={state.insearch_B} />  
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
