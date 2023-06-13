const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let searchResults = [];

	if (str.length > 0) {
	  searchResults = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));
	} 
	return searchResults;
}

function clearSuggestions() {
	suggestions.innerHTML = '';
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	if (inputVal === '') {
		clearSuggestions();
	  } else {
		showSuggestions(results, inputVal);
	  }
	}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if (results.length > 0) {
	  results.forEach(item => {
		const liNew = document.createElement('li');
		liNew.textContent = item;
		suggestions.appendChild(liNew);
	  });
	} else {
	  const liNone = document.createElement('li');
	  liNone.textContent = 'No suggestions';
	  suggestions.appendChild(liNone);
	}
  }

function useSuggestion(e) {
	const clickedItem = e.target.textContent;
	if (clickedItem === 'No suggestions') {
		return; 
	  }
	input.value = clickedItem;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

