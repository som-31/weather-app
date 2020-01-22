const request = require('request');

const url = 'https://api.darksky.net/forecast/b8c745cfa943763998cc457d41510a37/74.85,31.61667';

request({url, json : true}, (error, response)=>{
    if(error){
        console.log('Unable to connect to Weather Service');
    }else if(response.body.error){
         console.log(response.body.error);
    }else{
        console.log(response.body.daily.data[0].summary);
    }
});

// // const cityName = 'Amritsar';
// const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/amritsar.json?access_token=pk.eyJ1Ijoic29tLTMxIiwiYSI6ImNrNXA2cmRobDFzc3EzbG53eXhsa3JnencifQ.HOE3pzOJ4EJ2-039_5ZHzQ'

// request({url, json:true}, (error, response)=>{
//     if(error){
//       console.log('Unable to connect to Geolocation Service');
//     }else if(response.body.features.length === 0){
//        console.log('Please enter the valid location');
//     }
//     else{
//         console.log(response.body.features[0].center);
//     }
// });
