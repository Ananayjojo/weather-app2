const request = require('request');

const options = {
  method: 'GET',
  url: 'https://aerisweather1.p.rapidapi.com/forecasts/cairo,eg',
  headers: {
    'X-RapidAPI-Key': 'bc3bd9d191mshf23dc8d03de7b8ap16ab6djsn3430246c02cf',
    'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});