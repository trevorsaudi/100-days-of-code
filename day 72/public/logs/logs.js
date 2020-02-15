	const mymap = L.map('checkinmap').setView([0,0], 2);
	const attribution  =  '&copy; <a href= "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
	const tiles =  L.tileLayer(tileUrl,{attribution})
	tiles.addTo(mymap);

	getData()
	async function getData(){
		const response = await fetch('/api');
		const data = await response.json();
		console.log(data)


		for(item of data){
		const marker = L.marker([item.lat, item.lon]).addTo(mymap);

		if(item.air.value < 0){
let txt = `
		The weather here at ${item.lat}&deg; , ${item.lon}&deg; is ${item.weather.summary}
		 with a temperature of ${item.weather.temperature}&deg Celsius .
		  The concentration of particulate matter (${item.air.parameter}) is {air.value}
		${item.air.unit} last read on ${item.air.date}
`

if(item.air.value<0){
	text += 'No air quality reading.';
		}else{
			txt +=` The concentration of particulate matter (${item.air.parameter}) is {air.value}
		${item.air.unit} last read on ${item.air.date}`


		}


const txt = `
		The weather here at ${item.lat}&deg; , ${item.lon}&deg; is ${item.weather.summary}
		 with a temperature of ${item.weather.temperature}&deg Celsius .
		  The concentration of particulate matter (${item.air.parameter}) is {air.value}
		${item.air.unit} last read on ${item.air.date}
`
marker.bindPopup(txt);
		// 	const root = document.createElement('p');
		// 	const geo = document.createElement('div');
		// 	const date= document.createElement('div');
		// 	const dateString = new Date(item.timestamp).toLocaleString();
		// 	date.textContent = dateString;

		// 	geo.textContent = `${item.lat}°, ${item.lon}`

		// 	root.append(geo,date);
		// 	document.body.append(root);

		}
	}

