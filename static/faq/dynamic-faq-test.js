//a js file
//create all references to DOM elements
//and initialize global variables
const faqContainer = document.getElementById('faqContainer');
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');
let faqData = [];
let filteredFaq = [];
let detailsArray = [];
let summaryArray = [];

//create search bar listener function
searchBar.addEventListener('keyup', (e) => {
	//initialize faqData count property
	for (i = 0; i < faqData.length; i++) {
		faqData[i]["count"] = 0;
	}

	//reset filteredFaq so search terms clear..?
	filteredFaq = [];
	
	//create trackers which questions to include
	let labelYes;
	let contentYes;

	//create the search array
	const searchString = e.target.value.toLowerCase();
	
	//initialize filterString to filter symbols and special characters
	let filterString = searchString;

	//get rid of all punctuation from the search string 
	for (i = 0; i < dnuPunctuation.length; i++) {
		while (filterString.includes(dnuPunctuation[i])) {
			filterString = filterString.replace(`${dnuPunctuation[i]}`, '');
		}
	}

	let searchArray = [];

	if (filterString === "") {
		while (searchResults.firstChild) {
			searchResults.removeChild(searchResults.firstChild);
		}
		return
	} else {
		searchArray = filterString.split(' ');
	}	

	//taking out DNU search terms now
	let badSearchArray = [];
	let goodSearchArray = [];
	for (i = 0; i < searchArray.length; i++) {
		if (dnuWords.includes(searchArray[i])) {
			badSearchArray.push(searchArray[i]);
		} else {
			goodSearchArray.push(searchArray[i]);
		}
	}

	// check if first index (i = 0) holds emtpy string
	while (goodSearchArray[0] === "") {
		goodSearchArray.shift();
	}

	// check if last index (i = length-1) holds empty string
	while (goodSearchArray[goodSearchArray.length-1] === "") {
		goodSearchArray.pop();
	}

	/* 	
		still need a way to get at the empty 
		indexes in the middle of the array
	*/

	//set search array to good search term array
	searchArray = goodSearchArray;

	//check for search term matches
	for (i = 0; i < faqData.length; i++) {
		for (j = 0; j < searchArray.length; j++) {
			//check if questions match search terms
			if (faqData[i].question.toLowerCase().includes(searchArray[j].toLowerCase())) {
				labelYes = true;
			} else {
				labelYes = false;
			}
			//check if answers match search terms
			if (faqData[i].markdownAnswer.toLowerCase().includes(searchArray[j].toLowerCase())) {
				contentYes = true;
			} else {
				contentYes = false;
			}

			//give each faqData[i] a count value if the answer matches
			if (labelYes === true) {
				faqData[i].count += 1;
			}

			//give each faqData[i] a count value if the answer matches
			if (contentYes === true) {
				faqData[i].count += 1;
			}
			
			//add questions and answers to filteredFaq
			if (labelYes === true || contentYes === true) {
				if (!filteredFaq.includes(faqData[i])) {
					filteredFaq.push(faqData[i]);
				} else {
					//console.log("This is already in the search, it won't be included again");
				}
			} else {
				//console.log(`question${i+1} will not be added to the search results`);
			}	
		}
	}

	//sort filtered FAQ to be in descending numerical order
	filteredFaq.sort( sortSearchResultsByCount );

	//call the display searches function
	displaySearches(filteredFaq)
});

function sortSearchResultsByCount( a, b ) {
	  if ( a.count < b.count ){
	    return 1;
	  }
	  if ( a.count > b.count ){
	    return -1;
	  }
	  return 0;
	}

function sortFaqContentByOrder( a, b ) {
	  if ( a.order > b.order ){
	    return 1;
	  }
	  if ( a.order < b.order ){
	    return -1;
	  }
	  return 0;
	}

const loadFaq = async () => {

	let url ="https://covid-taichung.github.io/cfiw/faq/faqDataJSON.json";

	try {
		const res = await fetch(url);
		faqData = await res.json();
	} catch (err) {
		console.log(err);
	}
};

//this function displays the matching search results under the search bar
const displaySearches = function(filteredFaq) {
	//remove all current search results
	while (searchResults.firstChild) {
		searchResults.removeChild(searchResults.firstChild);
	}

	//loop through filtered search data
	for (i = 0; i < filteredFaq.length; i++) {
		const div = document.createElement('div');
		const a = document.createElement('a');
		a.textContent = filteredFaq[i].question;
		div.setAttribute('class','searchContainer');
		a.setAttribute('href', `#question${filteredFaq[i].id}`)
		a.setAttribute('class', 'searchLink');
		a.addEventListener('click', (e) => {
			//create a reference to the link ID
			let id = a.getAttribute('href')
			//check question IDs for match with link ID
			for (j = 0; j < questionsArray.length; j++) {
				if (id === `#${questionsArray[j].parentNode.id}`) {
					questionsArray[j].classList.add('question-clicked');
					answersArray[j].classList.remove('hidden');
				} else {
					questionsArray[j].classList.remove('question-clicked');
					answersArray[j].classList.add('hidden');
				}
			}
			console.log(e.target)
			e.preventDefault();
			for (i=0; i < questionsArray.length; i++) {
				if (e.target.getAttribute('href') === `#${questionsArray[i].parentNode.id}`)
				questionsArray[i].parentNode.scrollIntoView({
					behavior: "smooth"
				})
			}
			setTimeout(function() {
				if (!window.location.href.includes('#')) {
					window.location.href += `${e.target.getAttribute('href')}`;
				} else {
					let url = window.location.href.slice(0, window.location.href.indexOf('#'));
					url += `${e.target.getAttribute('href')}`;
					window.location.href = url;
				}
			}, 250);
		});
		div.appendChild(a);
		searchResults.appendChild(div);
	}

	//clear search results if search bar empty
	if (searchBar.value === ''){
		while (searchResults.firstChild) {
			searchResults.removeChild(searchResults.firstChild);
		}
	}
}

let containersArray = [];
let answersArray = [];
let questionsArray = [];
let inputsArray = [];

const displayFaqContent = async () => {
	const sortedFaqContent = faqData.sort(sortFaqContentByOrder)
	for (i = 0; i < faqData.length; i++) {

		//create page elements
		/*let container = document.createElement('div');*/
		let qaDiv = document.createElement('div');
		let questionDiv = document.createElement('dt');
		let answerDiv = document.createElement('dd');
		
		//set up attributes
		qaDiv.setAttribute('id', `question${faqData[i].id}`);
		qaDiv.setAttribute('class', `qaPairContainer`);

		questionDiv.setAttribute('class', 'faq-question')

		answerDiv.classList.add('answer-content', 'hidden');
		
		questionDiv.innerHTML = faqData[i].question;
		/*questionDiv.innerHTML = convertMarkdownToHtml(faqData, "question");*/

		/*set answer content and convert markdown as needed*/
		if(faqData[i].markdownAnswer) {
			answerDiv.innerHTML = convertMarkdownToHtml(faqData, "answer");
		} else {
			answerDiv.innerHTML = faqData[i].answer;
		}
		
		//set event listeners
		questionDiv.addEventListener('click', toggleFaq)
		/*answerDiv.addEventListener('click', toggleFaq)*/
		
		/*faqData[i]["count"] = 0;*/		
		//push elements to arrays for looping
		questionsArray.push(questionDiv);
		answersArray.push(answerDiv);


		
		//append elements to the page	
		/*container.appendChild(questionDiv);
		container.appendChild(answerDiv);*/
		qaDiv.appendChild(questionDiv);
		qaDiv.appendChild(answerDiv);	
		faqContainer.appendChild(qaDiv);
		// faqContainer.appendChild(answerDiv);	
	}
}

/*functions to convert markdown to html*/
function convertMarkdownToHtml(data, string) {
	//convert markdown to html
	if (string === "answer") {
		var converter = new showdown.Converter(),
		    text = faqData[i].markdownAnswer,
		    html = converter.makeHtml(text);
		    return html
	} else {
		var converter = new showdown.Converter(),
		    text = faqData[i].markdownQuestion,
		    html = converter.makeHtml(text);
		    return html
	}
}

function toggleFaq(e) {
	//i want to close all
	for (i=0; i < questionsArray.length; i++) {
		if (e.target === questionsArray[i] && answersArray[i].classList.contains('hidden')) {
			// show the answer and highlight the question
			answersArray[i].classList.remove('hidden');
			questionsArray[i].classList.add('question-clicked');
		} else {
			// remove highlights from all other questions
			// hide all other answers
			answersArray[i].classList.add('hidden');
			questionsArray[i].classList.remove('question-clicked');
		}
	}

	e.target.parentNode.scrollIntoView({
		behavior: "smooth"
	})
	
	// delay the URL change to allow the scrolling animation
	// if the URL change happens immediately
	// the page will snap to the new URL
	// the target destination is the same, but the look and feel is not consistent
	setTimeout(function() {
		if (!window.location.href.includes('#')) {
			window.location.href += `#${e.target.parentNode.id}`;
		} else {
			let url = window.location.href.slice(0, window.location.href.indexOf('#'));
			url += `#${e.target.parentNode.id}`;
			window.location.href = url;
		}
	}, 250);
}

async function checkPageURL() {
	console.log(`The url is ${window.location.href}`);
	let stringStarts = window.location.href.indexOf('#');
	console.log(`The url segment starts at ${stringStarts}`);
	let urlMatch = window.location.href.slice(stringStarts + 1, window.location.href.length);
	console.log(`The urlMatch is ${urlMatch}`);
	for (i = 0; i < questionsArray.length; i++) {
		console.log(questionsArray[i].parentNode.id);
		if (urlMatch === questionsArray[i].parentNode.id) {
			console.log(window.location.href)
			answersArray[i].classList.remove('hidden');
			questionsArray[i].classList.add('question-clicked');
			questionsArray[i].parentNode.scrollIntoView({
				behavior: "smooth"
			})
		}
	}
}	

loadFaq()
.then(displayFaqContent)
.then(checkPageURL)
