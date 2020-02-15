const express  = require('express')
const Datastore = require('nedb')
const fetch  = require('node-fetch')

const app = express(); //creating the web application through express
app.listen(3000, () => console.log('listening at 3000...'))
app.use(express.static('public')); //hosting static files  
app.use(express.json({limit: '1mb'}));

const database = new Datastore('weather.db')
database.loadDatabase()

app.get('/api', (request,response) =>{
	database.find({}, (err, data)=>{
		if(err){
			response.end()
			return;
		}
		response.json(data);
	})
})
app.post('/api' , (request, response) =>{
	console.log('i got a request')
	const data = request.body;
	const timestamp = Date.now();
	data.timestamp = timestamp;
	database.insert(data);
	response.json(data);

	});

app.get('/weather/:latlon', async (request,response) =>{
	console.log(request.params);
const latlon = request.params.latlon.split(',');
console.log(latlon)
const lat = latlon[0];
const lon = latlon[1];
console.log(latlon)
const api_url = `https://api.darksky.net/forecast/42fd5d9a98dd870b154c9b6f712bb6f6/${lat},${lon}`
const fetch_response = await fetch(api_url)
const json = await fetch_response.json();
response.json(json);


});
