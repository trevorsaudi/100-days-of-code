
	getData()
	async function getData(){
		const response = await fetch('/api');
		const data = await response.json();

		for(item of data){

			const root = document.createElement('p');
			const geo = document.createElement('div');
			const date= document.createElement('div');
			const dateString = new Date(item.timestamp).toLocaleString();
			date.textContent = dateString;

			geo.textContent = `${item.lat}°, ${item.lon}`

			root.append(geo,date);
			document.body.append(root);

		}
	}
