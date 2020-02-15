
if ('geolocation' in navigator){
	console.log('geolocation available');
	navigator.geolocation.getCurrentPosition(async position => {
	let lat, lon, weather, air;
		try{
		lat = position.coords.latitude;
	    lon = position.coords.longitude;
		document.getElementById('latitude').textContent = lat.toFixed(2);
		document.getElementById('longitude').textContent = lon.toFixed(2);
		const api_url = `weather/${lat},${lon}`
		const response = await fetch(api_url); 
		const json = await response.json();
		console.log(json);
		weather = json.weather;
		air = json.air_quality.results[0].measurements[0];
		document.getElementById('summary').textContent= weather.summary;
		document.getElementById('temperature').textContent= weather.temperature;
		document.getElementById('aq_parameter').textContent= air.parameter;
		document.getElementById('aq_value').textContent= air.value;
		document.getElementById('aq_units').textContent= air.unit;
		document.getElementById('aq_date').textContent= air.lastUpdated;
		console.log(json);


				}catch (error){
					console.error(error)
					air = {value: -1};
				}

		const data = {lat, lon, weather, air};
		const options = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
		      'Content-Type': 'application/json'
		    }
		};

		const db_response = await fetch('/api' , options);
		const db_json = await db_response.json();
		console.log(db_json);

		});
} else {
	console.log('geolocation not available')
}
