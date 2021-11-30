const axios = require('axios')

 const URL = 'https://restcountries.com/v3.1/all';
 export const getCountries =()=>{
   return  axios
    .get(URL)
   .then((result) => result) //setcountries
   .catch((err) => console.log(err))
 }
