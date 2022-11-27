const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '64db85f9d9msh7f9fdec7c456bdfp1d80e8jsn8b8b4e8c7992',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};


function generateQuote () {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(data => createDiv(data.content, data.originator.name))
	.catch(err => console.error(err));
    
}

function createDiv (innerText, author) {
    let div = document.createElement('div');
    let quotes = document.getElementById('quotes');
    quotes.innerHTML = "";
    div.className = "quote";
    div.innerText = innerText + '\n~ ' + author;
    quotes.prepend(div);
}
