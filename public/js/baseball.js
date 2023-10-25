const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api-baseball.p.rapidapi.com/timezone',
  headers: {
    'X-RapidAPI-Key': 'b321e401e5msh1daad72711c493dp1e4557jsn35e8c3bfc80a',
    'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});