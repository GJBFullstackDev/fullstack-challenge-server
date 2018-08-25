import request from 'request';

let apiKey = '*****************************';
let city = 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

request(url, function (err, response, body) {
  if(err){
    console.log('error:', err);
  } else {
    console.log('body:', body);
  }
});