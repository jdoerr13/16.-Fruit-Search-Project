const input = document.querySelector('#fruit'); //these need defined for the events- typing in the search bar- use keyup- key is released.
const suggestions = document.querySelector('.suggestions ul');//event of clicking on a suggestion in the drop down menu

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {//this function is first to check the characters entered in the search bar against the fruit array
	let searchResults = [];

	if (str.length > 0) {//check to see if a character has been entered in the search bar
	  searchResults = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));//filter out the fruit array to see if there is a match against each character added in the search bar. Filter is best- only returns values in new array if true!
	} 
	return searchResults;
}//console.log(search('Lo'));

function searchHandler(e) {//this event HANDLER is necessary to make the search function work
	const inputVal = e.target.value;//need to define the input val for the str entered above
	const results = search(inputVal);//run the search function on the input values or str argument and store these in the results variable!


	if (inputVal === '') {
		// Clear the suggestions if the input value is empty
		clearSuggestions();
	  } else {
		showSuggestions(results, inputVal);
	  }
	  function clearSuggestions() {//removes suggestions from the DOM
		suggestions.innerHTML = '';
	 
	  }
	
// showSuggestions(results, inputVal);//THIS IS WHERE IT GOT TRICKY...  This is necessary here in order to update the suggestions list immediately after the search results are obtained- as they type in the input field, but after I realized I want the 
}

function showSuggestions(results, inputVal) {//this function is necesary to create the drop down list of suggested fruit & manipulate.  It takes in two parameters (results- array of filtered items based on user input) & (inputVal- stores the current value of the input field string or character entered by the user)
	suggestions.innerHTML = '';//avoid duplicate suggestions and allows all items to be cleared but no suggestion if applicable

	if (results.length > 0) {
	  results.forEach(item => {//use for each bc don't need return value, just need to populate suggestions list
		const liNew = document.createElement('li');//create li on the DOM
		liNew.textContent = item;//content is the looped variable item- represents each indiv item in the results array
		suggestions.appendChild(liNew);
	  });
	} else {
	  const liNone = document.createElement('li');
	  liNone.textContent = 'No suggestions';//are you susposed to be able to click the nosuggestion
	  suggestions.appendChild(liNone);
	}
  }

function useSuggestion(e) {
	const clickedItem = e.target.textContent;
	if (clickedItem === 'No suggestions') {//prevents 'No suggestions' from being clicked on and added to the input
		return; // Skip further actions 
	  }
	input.value = clickedItem;
	suggestions.innerHTML = '';//clear the drop down once an item is clicked
}

input.addEventListener('keyup', searchHandler);//why are these at the bottom again???
suggestions.addEventListener('click', useSuggestion);//function that uses the event listenr

