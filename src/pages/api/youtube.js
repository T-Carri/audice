import axios from 'axios'

const KEY = "AIzaSyCwmsa435Cs-pJdR0SrhKlTkm5MTP82U3Y"


 export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet", 
        maxResults: 20,
        key: KEY, 
        type: 'video'
    }, 
})

//headers:{}

/*  React youtube data api v3 video search 

example using axios */