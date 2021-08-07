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
const testEnglishButton = document.getElementById('test-english');
const testPregnancyButton = document.getElementById('test-pregnant');
/* covid testing service buttons */
const testRapidButton = document.getElementById('test-rapid');
const testPcrButton = document.getElementById('test-pcr');
/* covid vaccination service buttons */
const vacZenecaButton = document.getElementById('vac-zeneca');
const vacModernaButton = document.getElementById('vac-moderna');


/*const testHospitalToggleButton = document.getElementById('test-hospitals-button');
const vaccinationHospitalToggleButton = document.getElementById('vaccination-hospitals-button');
*/

/*const testingSelectors = document.getElementById('testing-selectors');
const vaccinationSelectors = document.getElementById('vaccination-selectors');
*/
//need referenece to chinese hospital buttons
//need referenece to english hospital buttons

//create variables to track active/inactive state
let footprintMarkersActive = false;

let disinfectionsNeverActivated = true;
let disinfectionControlsActive = false;
let showYesterdaysDisinfections = false;
let showTodaysDisinfections = true;
let showTomorrowsDisinfections = false;


let healthCenterMarkersActive = true;

/*let testMarkersActive = true;
let vaccinationMarkersActive = true;
*/
let footprintMarkersInitialized = false;


/* toggle functions
right now we only need a special function for footprints
because it's the only one that requires code
beyond the normal show/hide marker functions
*/

/*
	functions for footprint filters
*/

let toggleFootprints = function() {
	if (!footprintMarkersInitialized) {
		footprintMarkersInitialized = true;
		initializeSlider();
	}
	if (!footprintMarkersActive) {
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

let toggleHealthCenters = function() {
	if (!healthCenterMarkersActive) {
		showHealthCenterMarkers()
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

/*let toggleTestHospitals = function() {
	if (!testMarkersActive) {
		showTestHospitalMarkers()
		//testHospitalToggleButton.textContent = "Hide testing hospitals"
		testMarkersActive = true;
		testHospitalToggleButton.classList.add("pressed", "testing-pressed")
		testingSelectors.style.display = 'block';
	} else {
		hideTestHospitalMarkers()
		//testHospitalToggleButton.textContent = "Show testing hospitals"
		testMarkersActive = false;
		testHospitalToggleButton.classList.remove("pressed", "testing-pressed")
		testingSelectors.style.display = 'none';
	}
}

let toggleVaccinationHospitals = function() {
	if (!vaccinationMarkersActive) {
		showVaccinationHospitalMarkers()
		vaccinationHospitalToggleButton.textContent = "Hide vaccination hospitals"
		vaccinationMarkersActive = true;
		vaccinationHospitalToggleButton.classList.add("pressed", "vaccination-pressed")
		vaccinationSelectors.style.display = 'block';
	} else {
		hideVaccinationHospitalMarkers()
		vaccinationHospitalToggleButton.textContent = "Show vaccination hospitals"
		vaccinationMarkersActive = false;
		vaccinationHospitalToggleButton.classList.remove("pressed", "vaccination-pressed")
		vaccinationSelectors.style.display = 'none';
	}
}*/

// create all toggle button listeners
footprintToggleButton.addEventListener('click', toggleFootprints);


disinfectionControlsToggle.addEventListener('click', toggleDisinfectionsControls)
disinfectionYesterdayButton.addEventListener('click', toggleYesterday)
disinfectionTodayButton.addEventListener('click', toggleToday)
disinfectionTomorrowButton.addEventListener('click', toggleTomorrow)



healthCenterToggleButton.addEventListener('click', toggleHealthCenters)





/*testEnglishButton.addListener('click', toggle)
testPregnancyButton.addListener('click', toggle)
testRapidButton.addListener('click', toggle)
testPcrButton.addListener('click', toggle)
vacZenecaButton.addListener('click', toggle)
vacModernaButton.addListener('click', toggle)*/
/*testHospitalToggleButton.addEventListener('click', toggleTestHospitals);
vaccinationHospitalToggleButton.addEventListener('click', toggleVaccinationHospitals);
*/


/* test before depracating 
const hideDisinfectionsButton = document.getElementById('hide-disinfections');
const showDisinfectionsButton = document.getElementById('show-disinfections');
const hideChineseHospitalsButton = document.getElementById('hide-chinese-hospitals');
const showChineseHospitalsButton = document.getElementById('show-chinese-hospitals');
const hideEnglishHopsitalsButton = document.getElementById('hide-english-hospitals');
const showEnglishHospitalsButton = document.getElementById('show-english-hospitals');

hideDisinfectionsButton.addEventListener('click', hideDisinfectionMarkers);
showDisinfectionsButton.addEventListener('click', showDisinfectionMarkers);

hideChineseHospitalsButton.addEventListener('click', hideChineseHospitalMarkers);
showChineseHospitalsButton.addEventListener('click', showChineseHospitalMarkers);

hideEnglishHopsitalsButton.addEventListener('click', hideEnglishHospitalMarkers);
showEnglishHospitalsButton.addEventListener('click', showEnglishHospitalMarkers);

*/
