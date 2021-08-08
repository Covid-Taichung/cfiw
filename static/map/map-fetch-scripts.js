//fetch footprints data
const loadFootprints = async () => {
	/*"https://markoco14.github.io/google-sheet-test/map-footprints-json.json"*/
	let url = "https://markoco14.github.io/cfiw/data/footprints.json";
	try {
		const res = await fetch(url);
		footprintData = await res.json();
		//clean the coords cells
		for (i=0; i<footprintData.length; i++) {
			footprintData[i].coords = footprintData[i].coords.split(',');
			footprintData[i].coords = {lat: Number(footprintData[i].coords[0]), lng: Number(footprintData[i].coords[1])};
		}
		//clean the date cells				
		for (i=0; i<footprintData.length; i++) {
			let index = footprintData[i].date.indexOf('T')
			footprintData[i].date = footprintData[i].date.slice(0,index);
		}
		console.log(footprintData);
		
		await createSliderDatesArray(footprintData)
		console.log(sliderDatesArray);

	} catch (err) {
		console.log(err);
	}
};

//fetch disinfection data
const loadDisinfections = async () => {
	/*"https://covid-taichung.github.io/google-sheet-test/map-footprints-json.json"*/
	let url = "https://covid-taichung.github.io/cfiw/data/disinfections.json";
	try {
		const res = await fetch(url);
		disinfectionData = await res.json();
		//clean the coords cells
		for (i=0; i<disinfectionData.length; i++) {
			disinfectionData[i].coords = disinfectionData[i].coords.split(',');
			disinfectionData[i].coords = {lat: Number(disinfectionData[i].coords[0]), lng: Number(disinfectionData[i].coords[1])};
		}
		//clean the date cells				
		/*for (i=0; i<disinfectionData.length; i++) {
			let index = disinfectionData[i].date.indexOf('T')
			disinfectionData[i].date = disinfectionData[i].date.slice(0,index);
		}*/
		console.log(disinfectionData);
	} catch (err) {
		console.log(err);
	}
};

//fetch testing location data
const loadHealthCenters = async () => {
	/*"https://markoco14.github.io/google-sheet-test/map-footprints-json.json"*/
	let url = "https://markoco14.github.io/cfiw/data/health-center-data.json";
	try {
		const res = await fetch(url);
		healthCenterData = await res.json();
		//clean the coords cells
		for (i=0; i<healthCenterData.length; i++) {
			healthCenterData[i].coords = healthCenterData[i].coords.split(',');
			healthCenterData[i].coords = {lat: Number(healthCenterData[i].coords[0]), lng: Number(healthCenterData[i].coords[1])};
		}
		console.log(healthCenterData);
	} catch (err) {
		console.log(err);
	}
};		
