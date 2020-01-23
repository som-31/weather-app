const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const location = process.argv[2];
if(location){
geocode(location, (error, {latitude, longitude, location:placeName}) => {
    if(error){
       return console.log(error);
    }

     forecast(latitude, longitude, (error, forecastData) => {
         if(error){
           return console.log(error);
         }

         console.log(placeName);
         console.log(forecastData);
    });
    
});
}else{
    console.log(chalk.red.bold.inverse('Please provide location name'));
}