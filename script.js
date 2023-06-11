const input = document.querySelector('#fruit'); //these need defined for the events- typing in the search bar- use keyup- key is released.
const suggestions = document.querySelector('.suggestions ul');//event of clicking on a suggestion in the drop down menu

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {//this function is first to check the characters entered in the search bar against the fruit array
	let searchResults = [];

	if (str.length > 0) {//check to see if a character has been entered in the search bar
	  searchResults = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));//filter out the fruit array to see if there is a match against each character added in the search bar. Filter is best- only returns values in new array if true!
	}
	return searchResults;
}

function searchHandler(e) {//this event is necessary to make the search function work
	const inputVal = e.target.value;//need to define the input val for the str entered above
	const results = search(inputVal);//run the search function on the input values or str argument and store these in the results variable!

showSuggestions(results, inputVal);//THIS IS WHERE IT GOT REALLY TRICKY...  This is necessary here in order to update the suggestions list immediately after the search results are obtained- as they type in the input field
}

function showSuggestions(results, inputVal) {//this function is necesary to create the drop down list of suggested fruit & manipulate.  It takes in two parameters (results- array of filtered items based on user input) & (inputVal- stores the current value of the input field)
	suggestions.innerHTML = '';

	if (results.length > 0) {
	  results.forEach(item => {
		const li = document.createElement('li');
		li.textContent = item;
		suggestions.appendChild(li);
	  });
	} else {
	  const li = document.createElement('li');
	  li.textContent = 'No suggestions';// how to make it go away when not highlighted
	  suggestions.appendChild(li);
	}
  }


function useSuggestion(e) {
	const clickedItem = e.target.textContent;
	input.value = clickedItem;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);//why are these at the bottom again???
suggestions.addEventListener('click', useSuggestion);

