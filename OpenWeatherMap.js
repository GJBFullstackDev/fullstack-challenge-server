var request = require( 'request');

var apiKey = 'b6907d289e10d714a6e88b30761fae22'
var city = 'portland';
var url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

request(url, function (err, response, body) {
  if(err){
    console.log('error:', err);
  } else {
    console.log('body:', body);
  }
});