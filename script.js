let quotes = [
	"I love JavaScript",
	"I love Go",
	"I love Java",
	"I love Python",
	"I love C#",
	"I love C++",
	"I love Rust",
	"I love C",
	"I love PHP",
];

let quotebtn = document.querySelector('.quote-btn');
quotebtn.addEventListener('click', foo)


function foo() {
	let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	document.querySelector('.quote').innerHTML = randomQuote;
}

