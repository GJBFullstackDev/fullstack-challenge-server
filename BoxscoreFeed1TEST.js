const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const request = require('request');

var apiOptions = {
    host: 'https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com',
    env: 'dev',
    serviceType: 'feed',
    modelType: 'game',
    itemID1: 'one',
    itemID2: 'two',
    port: 80,
    method: 'GET'
};
var path1 = apiOptions.host + '/' + apiOptions.env + '/' + apiOptions.serviceType + '/' + apiOptions.modelType + '/' + apiOptions.itemID1;
var path2 = apiOptions.host + '/' + apiOptions.env + '/' + apiOptions.serviceType + '/' + apiOptions.modelType + '/' + apiOptions.itemID2;
var url = path1;




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var results = 'Hello World\n';
    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', err);
        } else {
            results =body;
            console.log('response:', response);
            console.log('body:', body);
        }
    });
    
    res.end(results);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});