const express  = require('express')
const Datastore = require('nedb')
const fetch  = require('node-fetch')
const app = express(); //creating the web application through express
app.listen(3000, () => console.log('listening at 3000...'))
app.use(express.static('public')); //hosting static files  
app.use(express.json({limit: '1mb'}));

const database = new Datastore('newweather.db')
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
const weather_url = `https://api.darksky.net/forecast/42fd5d9a98dd870b154c9b6f712bb6f6/${lat},${lon}/?units=si`
const weather_response = await fetch(weather_url)
const weather_data = await weather_response.json();

const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`
const aq_response = await fetch(aq_url)
const aq_data = await aq_response.json();

const data = {
	weather: weather_data,
	air_quality:aq_data
}

response.json(data);


});
