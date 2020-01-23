const https = require('https');

const url = 'https://api.darksky.net/forecast/b8c745cfa943763998cc457d41510a37/72.32,32.3?units=si';

const request = https.request(url, (response) =>{
    let data = '';
    response.on('data', (chunk) => {
         data = data + chunk.toString();
    });
    response.on('end', () => {
          const ParsedData = JSON.parse(data);
          console.log(ParsedData.body.currently);
    });
});

request.on('error', error => {
    console.log(error)
});

request.end();

