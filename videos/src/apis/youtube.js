import axios from 'axios';

const KEY = 'AIzaSyDZ-XVyfn_Bwf7n5jFIUbDmoTW8BCIU7RA';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type:"video",  
        maxResults: 5,
        key: KEY

    }

});