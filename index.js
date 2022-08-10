let request = request ('request')

let apiKey = '';
let city = '';
let url = '';

request(url, function (err, response, body){
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);
    }
});

