// a FreeCodeCamp challenge to reverse-engineer this: https://cryptic-ridge-9197.herokuapp.com/api/whoami/

var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.send({
    'ipaddress':request.headers["x-forwarded-for"].split(',')[0],
    'language':request.headers['accept-language'].split(',')[0],
    'software':request.headers['user-agent'].split(')')[0].split('(')[1]
                });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
