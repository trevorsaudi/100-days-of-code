
		if ('geolocation' in navigator){
			console.log('geolocation available');
			navigator.geolocation.getCurrentPosition(async position => {
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
				document.getElementById('latitude').textContent = lat.toFixed(2);
				document.getElementById('longitude').textContent = lon.toFixed(2);
				const api_url = `weather/${lat},${lon}`
		
				const response = await fetch(api_url); 
				const json = await response.json();
				console.log(json);




				const button = document.getElementById('geolocate').addEventListener('click',async locate =>{
				const data = {lat, lon};
				const options = {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
				      'Content-Type': 'application/json'
				    }
				};

				const response = await fetch('/api' , options);
				const json = await response.json();
				console.log(json);



				})
				



				});
		} else {
			console.log('geolocation not available')
		}
