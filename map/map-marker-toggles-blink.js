//a js file
/* SECTION FOR TOGGLE BUTTON FUNCTIONALITY */

/* create references to map control containers */
const footprintSelectors = document.getElementById('footprint-selectors');
const disinfectionSelectors = document.getElementById('disinfection-selectors');
const healthCenterSelectors = document.getElementById('health-center-selectors');

/* create buttons to show/hide footprint map markers */
const footprintToggleButton = document.getElementById('footprint-button');

/* create buttons to show/hide disinfection map markers */
const disinfectionControlsToggle = document.getElementById('disinfection-button');
const disinfectionYesterdayButton = document.getElementById('disinfect-yesterday');
const disinfectionTodayButton = document.getElementById('disinfect-today');
const disinfectionTomorrowButton = document.getElementById('disinfect-tomorrow');

/* create buttons to show/hide health facility map markers */
const healthCenterToggleButton = document.getElementById('health-center-button');

/* english language and pregnancy service buttons*/
// const testEnglishButton = document.getElementById('test-english');
// const testPregnancyButton = document.getElementById('test-pregnant');

/* covid testing service buttons */
const testRapidButton = document.getElementById('test-rapid');
const testPcrButton = document.getElementById('test-pcr');

/* covid vaccination service buttons */
const vaccZenecaButton = document.getElementById('vac-zeneca');
const vaccModernaButton = document.getElementById('vac-moderna');


/*const testHospitalToggleButton = document.getElementById('test-hospitals-button');
const vaccinationHospitalToggleButton = document.getElementById('vaccination-hospitals-button');
*/

/*const testingSelectors = document.getElementById('testing-selectors');
const vaccinationSelectors = document.getElementById('vaccination-selectors');
*/
//need referenece to chinese hospital buttons
//need referenece to english hospital buttons

//create variables to track active/inactive state







/*let testMarkersActive = true;
let vaccinationMarkersActive = true;
*/



/* toggle functions
right now we only need a special function for footprints
because it's the only one that requires code
beyond the normal show/hide marker functions
*/

/*
	functions for footprint filters
*/

let footprintMarkersActive = false;
let footprintMarkersInitialized = false;

let toggleFootprints = function() {
	if (!footprintMarkersInitialized) {
		footprintMarkersInitialized = true;
		initializeSlider();
	}
	if (!footprintMarkersActive) {
		// this needs to be reworked
		// each time reopened shows all markers
		// not the selected markers
		// change showFootprintMarkers to a conditional check
		// using from and to variables
		showFootprintMarkers()
		//footprintToggleButton.innerHTML = "Hide footprints";
		footprintMarkersActive = true;
		footprintToggleButton.classList.add("pressed", "footprint-pressed")
		footprintSelectors.style.display = 'block';
		footprintSelectors.classList.remove('hidden')
	} else {
		hideFootprintMarkers()
		//footprintToggleButton.textContent = "Show footprints";
		footprintMarkersActive = false;
		footprintToggleButton.classList.remove("pressed", "footprint-pressed")
		footprintSelectors.style.display = 'none';
		footprintSelectors.classList.add('hidden')
		footprintToggleButton.style.backgroundColor = "none";
	}
}

/*
	functions for disinfection location filters
*/

let disinfectionsNeverActivated = true;
let disinfectionControlsActive = false;
let showYesterdaysDisinfections = false;
let showTodaysDisinfections = true;
let showTomorrowsDisinfections = false;

//eventually this needs to check if yesterday/today/tomorrow are open and just re-open
// check if disinfection markers are active
// if inactive, change to active
// display today's disinfections
// and set todays markers to active
let toggleDisinfectionsControls = function () {
	// Option 1: activating controls for the first time
	// check if the disinfection controls are activated
	// and if it's the first time
	// show marker controls on GUI
	// and only display today's disinfections
	if (!disinfectionControlsActive && disinfectionsNeverActivated) {
		console.log("Activating disinfection controls for the first time.")
		for (i = 0; i < disinfectionData.length; i++) {
				if (disinfectionData[i].date === dateToday) {
					disinfectionMarkers[i].setMap(map);
				} 
		}
		disinfectionsNeverActivated = false;
		disinfectionControlsActive = true;
		showTodaysDisinfections = true;
		disinfectionControlsToggle.classList.add("pressed", "disinfection-pressed");
		disinfectionTodayButton.classList.add("pressed", "disinfection-pressed");
		disinfectionSelectors.style.display = 'block';
	} 

	// Option 2: Activating controls but not the first time
	// check if the disinfections are activated
	// show marker controls on GUI
	// and remember settings if it is not the first time
	// and display all activated disinfections
	else if (!disinfectionControlsActive) {
		console.log("Activating disinfection controls but it is not the first time.")
		// check if yesterday was set to show before controls were hidden
		if (showYesterdaysDisinfections) {
			for (i = 0; i < disinfectionData.length; i++) {
				if (disinfectionData[i].date === dateYesterday) {
					disinfectionMarkers[i].setMap(map);
				}
			} 
		}
		
		// check if today was set to show before controls were hidden
		if (showTodaysDisinfections) {
			for (i = 0; i < disinfectionData.length; i++) {
				if (disinfectionData[i].date === dateToday) {
					disinfectionMarkers[i].setMap(map);
				} 
			}
		}

		// check if tomorrow was set to show before controls were hidden
		if (showTomorrowsDisinfections) {
			for (i = 0; i < disinfectionData.length; i++) {
				if (disinfectionData[i].date === dateTomorrow) {
					disinfectionMarkers[i].setMap(map);
				} 
			}
		}

		// change show disinfection controls state to true
		// change styles to pressed and visible
		disinfectionControlsActive = true;
		disinfectionControlsToggle.classList.add("pressed", "disinfection-pressed")
		disinfectionSelectors.style.display = 'block';
	} 

	// Option 3: deactivating controls
	// remove all markers from the map
	// but do not change state of show/do not show markers
	// hide marker controls from GUI
	else {
		console.log("Deactivating disinfection controls");
		for (i = 0; i < disinfectionData.length; i++) {
			disinfectionMarkers[i].setMap(null);
		}
		// change show disinfection controls state to false
		// change styles to not pressed and hidden
		disinfectionControlsActive = false;
		disinfectionControlsToggle.classList.remove("pressed", "disinfection-pressed")
		disinfectionSelectors.style.display = 'none';
	}
}

let toggleYesterday = function() {
	if (!showYesterdaysDisinfections) {
		showYesterdaysDisinfections = true;
		disinfectionYesterdayButton.classList.add("pressed", "disinfection-pressed")
		for (i = 0; i < disinfectionData.length; i++) {
			if (disinfectionData[i].date === dateYesterday) {
				disinfectionMarkers[i].setMap(map);
			} 
		}
	} else {
		showYesterdaysDisinfections = false;
		disinfectionYesterdayButton.classList.remove("pressed", "disinfection-pressed")
		for (i = 0; i < disinfectionData.length; i++) {
			if (disinfectionData[i].date === dateYesterday) {
				disinfectionMarkers[i].setMap(null);
			} 
		}
	}
}

let toggleToday = function() {
	if (!showTodaysDisinfections) {
		showTodaysDisinfections = true;
		disinfectionTodayButton.classList.add("pressed", "disinfection-pressed")
		for (i = 0; i < disinfectionData.length; i++) {
			if (disinfectionData[i].date === dateToday) {
				disinfectionMarkers[i].setMap(map);
			} 
		}
	} else {
		showTodaysDisinfections = false;
		disinfectionTodayButton.classList.remove("pressed", "disinfection-pressed")
		for (i = 0; i < disinfectionData.length; i++) {
			if (disinfectionData[i].date === dateToday) {
				disinfectionMarkers[i].setMap(null);
			} 
		}
	}
}

let toggleTomorrow = function() {
	if (!showTomorrowsDisinfections) {
		showTomorrowsDisinfections = true;
		disinfectionTomorrowButton.classList.add("pressed", "disinfection-pressed")
		for (i = 0; i < disinfectionData.length; i++) {
			if (disinfectionData[i].date === dateTomorrow) {
				disinfectionMarkers[i].setMap(map);
			} 
		}
	} else {
		showTomorrowsDisinfections = false;
		disinfectionTomorrowButton.classList.remove("pressed", "disinfection-pressed")
		for (i = 0; i < disinfectionData.length; i++) {
			if (disinfectionData[i].date === dateTomorrow) {
				disinfectionMarkers[i].setMap(null);
			} 
		}
	}
}

/*
	functions for health facility filters
*/

let healthCenterMarkersActive = true;

let showRapidTests = true;
let showPcrTests = true;
let showZenecaVacc = true;
let showModernaVacc = true;


// function to hide or show the health facility controls
let toggleHealthCenters = function() {
	if (!healthCenterMarkersActive) {
		showFilteredHealthFacilities()
		//testHospitalToggleButton.textContent = "Hide testing hospitals"
		healthCenterMarkersActive = true;
		healthCenterToggleButton.classList.add("pressed", "health-center-pressed")
		healthCenterSelectors.style.display = 'block';
	} else {
		hideHealthCenterMarkers()
		//testHospitalToggleButton.textContent = "Show testing hospitals"
		healthCenterMarkersActive = false;
		healthCenterToggleButton.classList.remove("pressed", "health-center-pressed")
		healthCenterSelectors.style.display = 'none';
	}
}

let zenecaVaccineMarkers = [];
let modernaVaccineMarkers = [];
let rapidAntigenTestMarkers = [];
let pcrTestMarkers = [];

function showFilteredHealthFacilities() {
	// this function needs to go through
	// each of the 4 variables
	// and create an array for them based on the tests

	// starting with astra zeneca
	// azCheckin
	// azLanguage
	// azLocation

	// clear all old arrays from previous function
	zenecaVaccineMarkers = [];
	modernaVaccineMarkers = [];
	rapidAntigenTestMarkers = [];
	pcrTestMarkers = [];
	
	// check for locations with astra zeneca vaccine
	if (showZenecaVacc) {
		for (i = 0; i < healthCenterData.length; i++) {
			if (healthCenterData[i].azCheckin !== "" || 
				healthCenterData[i].azLanguage !== "" ||
				healthCenterData[i].azLocation !== ""
			) {
				// console.log(`We found a zeneca at ${i}`)
				zenecaVaccineMarkers.push(healthCenterMarkers[i]);
			} else {
				// console.log(`No match at ${i}`)
			}
		}
		// console.log(zenecaVaccineMarkers);
		// zenecaVaccineMarkers.forEach((marker) => {marker.setMap(map)});
	} 


	// check for locations with moderna vaccine
	if (showModernaVacc) {
		for (i = 0; i < healthCenterData.length; i++) {
			if (healthCenterData[i].modernaCheckin !== "" || 
				healthCenterData[i].modernaLanguage !== "" ||
				healthCenterData[i].modernaLocation !== ""
			) {
				// console.log(`We found a moderna spot at ${i}`)
				modernaVaccineMarkers.push(healthCenterMarkers[i]);
			} else {
				// console.log(`No match at ${i}`)
			}
		}
		// console.log(modernaVaccineMarkers);
		// modernaVaccineMarkers.forEach((marker) => {marker.setMap(map)});
	} 


	// check for locations with rapid testing
	if (showRapidTests) {
		for (i = 0; i < healthCenterData.length; i++) {
			if (healthCenterData[i].raCheckin !== "" || 
				healthCenterData[i].raLanguage !== "" ||
				healthCenterData[i].raLocation !== ""
			) {
				// console.log(`We found a rapid antigen spot at ${i}`);
				rapidAntigenTestMarkers.push(healthCenterMarkers[i]);
			} else {
				// console.log(`No match at ${i}`);
			}
		}
		// need to set markers on map now
		// console.log(rapidAntigenTestMarkers);
		// rapidAntigenTestMarkers.forEach((marker) => {marker.setMap(map)});
	}

	// check for locations with pcr testing
	if (showPcrTests) {
		for (i = 0; i < healthCenterData.length; i++) {
			if (healthCenterData[i].pcrCheckin !== "" || 
				healthCenterData[i].pcrLanguage !== "" ||
				healthCenterData[i].pcrLocation !== ""
			) {
				// console.log(`We found a pcr test spot at ${i}`);
				pcrTestMarkers.push(healthCenterMarkers[i]);
			} else {
				// console.log(`No match at ${i}`);
			}
		}
		// console.log(pcrTestMarkers);
		// pcrTestMarkers.forEach((marker) => {marker.setMap(map)});
	}

	// concatenate all arrays
	const concatMapMarkers = (
		zenecaVaccineMarkers
		.concat(modernaVaccineMarkers) 
		.concat(pcrTestMarkers)
		.concat(rapidAntigenTestMarkers)
	);

	// console.log("Your concatenated array is:")
	// console.log(concatMapMarkers);

	function sortMarkersByDataID( a, b ) {
	  if ( a.dataID > b.dataID ){
	    return 1;
	  }
	  if ( a.dataID < b.dataID ){
	    return -1;
	  }
	  return 0;
	}

	// sort numerically so repeat IDs can be checked and removed
	const sortedMapMarkers = concatMapMarkers.sort(sortMarkersByDataID);
	// console.log("Your sorted map markers array is:")
	// console.log(sortedMapMarkers);

	// filter out repeat values
	const filteredMapMarkers = sortedMapMarkers.filter((marker, i) => {
		// console.log(marker.dataID)
		if (i === 0) {
			return true; 
		} 

		else if (sortedMapMarkers[i].dataID !== sortedMapMarkers[i-1].dataID) {
			return true;
		}

		});

	// console.log("Your filtered map markers array is:")
	console.log(filteredMapMarkers)
	filteredMapMarkers.forEach((marker) => {marker.setMap(map)});
	// for (i = 0; i < healthCenterMarkers.length; i++) {
	// 	if (!filteredMapMarkers.includes(healthCenterMarkers[i])) {
	// 		healthCenterMarkers[i].setMap(null)
	// 	}
	// }
}

// function to set Rapid Test locations show/hide
let toggleRapidTests = function() {
	if (!showRapidTests) {
		showRapidTests = true;
		testRapidButton.classList.add("pressed", "health-center-pressed");
	} else {
		showRapidTests = false;
		testRapidButton.classList.remove("pressed", "health-center-pressed")
		rapidAntigenTestMarkers.forEach((marker) => {marker.setMap(null)});
	}
	showFilteredHealthFacilities();
}

// function to set PCR Test locations show/hide
let togglePcrTests = function() {
	if (!showPcrTests) {
		showPcrTests = true;
		testPcrButton.classList.add("pressed", "health-center-pressed");
	} else {
		showPcrTests = false;
		testPcrButton.classList.remove("pressed", "health-center-pressed");
		pcrTestMarkers.forEach((marker) => {marker.setMap(null)});

	}
	showFilteredHealthFacilities();
}

// function to set Astra Zeneca locations show/hide
let toggleZenecaVacc = function() {
	if (!showZenecaVacc) {
		showZenecaVacc = true;
		vaccZenecaButton.classList.add("pressed", "health-center-pressed");
	} else {
		showZenecaVacc = false;
		vaccZenecaButton.classList.remove("pressed", "health-center-pressed");
		zenecaVaccineMarkers.forEach((marker) => {marker.setMap(null)});
	}
	showFilteredHealthFacilities();
}

// function to set Moderna locations show/hide
let toggleModernaVacc = function() {
	if (!showModernaVacc) {
		showModernaVacc = true;
		vaccModernaButton.classList.add("pressed", "health-center-pressed");
	} else {
		showModernaVacc = false;
		vaccModernaButton.classList.remove("pressed", "health-center-pressed");
		modernaVaccineMarkers.forEach((marker) => {marker.setMap(null)});
	}
	showFilteredHealthFacilities();
}


/* create all toggle button event listeners */

footprintToggleButton.addEventListener('click', toggleFootprints);

disinfectionControlsToggle.addEventListener('click', toggleDisinfectionsControls)
disinfectionYesterdayButton.addEventListener('click', toggleYesterday)
disinfectionTodayButton.addEventListener('click', toggleToday)
disinfectionTomorrowButton.addEventListener('click', toggleTomorrow)



healthCenterToggleButton.addEventListener('click', toggleHealthCenters)

// testEnglishButton.addListener('click', toggle)
// testPregnancyButton.addListener('click', toggle)
testRapidButton.addEventListener('click', toggleRapidTests)
testPcrButton.addEventListener('click', togglePcrTests)
vaccZenecaButton.addEventListener('click', toggleZenecaVacc)
vaccModernaButton.addEventListener('click', toggleModernaVacc)
