import {useState, useCallback, useEffect} from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid' 

import youtubeApi from '@components/pages/api/youtube';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { A_Bandeja } from './A_bandeja/A_Bandeja';
import { B_Bandeja } from './B_bandeja/B_Bandeja';

export const Bandeja = (props) => {
  
  const {service, setService, side} = props


/* 
  useEffect(() => {
    const searchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              q: 'A$AP',
              key: 'AIzaSyCwmsa435Cs-pJdR0SrhKlTkm5MTP82U3Y',
            },
          }
        );

        //setVideos(response.data.items);
        console.log(response.data.items)


      } catch (error) {
        console.error(error);
      }
    };

    searchVideos();
  }, []);
 */



   return (
    <Grid height={350} md={12} sm={12} xl={12} lg={12} /* style={{ backgroundColor:'orange'}} */>
     {side=='A'&& 
     <A_Bandeja  service={service} setService={setService} side={side} />
     
     } 

     {side=='B'&& 
     <B_Bandeja  service={service} setService={setService} side={side}/>
      } 
    </Grid>
  )
}

//el boton naranja al darle click se vuelve un searchbar y te cambia al
//Tab de resultados

