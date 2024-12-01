function AgeCalculator(year, month, day) {
	// Date uses month values beggining on 0, so 7 is august, 6 is july and so on
	let birthday = new Date(year, month - 1, day, 0, 0, 0, 0);
	let now = new Date();
	var age = now.getFullYear() - birthday.getFullYear();
	if (now.getMonth() < birthday.getMonth() || (now.getMonth() == birthday.getMonth() && now.getDate() < birthday.getDate())) {
		age -= 1;
	}
	return age;
}

function RandomNumber() {
	return Math.floor(Math.random() * 100);
}

function RandomFromArray(array) {
	var index = Math.floor(Math.random() * array.length);
	var result = array.at(index);
	return result;
}

function SubmitForm(e, message_form) {
	e.preventDefault();

	var message = message_form.querySelector('#msg').value;

	const response = fetch('/api/message', {
		method: 'POST',
		body: JSON.stringify({ message: message }),
		headers: { 'Content-type': 'application/json; charset=UTF-8', },
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
	console.log("response=", response);
}

function createBook(title, description, stars) {
	const book = document.createElement('div');
	const book_title = document.createElement('h3');
	book_title.innerText = title;

	const book_description = document.createElement('p');
	book_description.innerText = description;

	const book_stars = document.createElement('p');
	book_stars.innerText = stars;

	book.append(book_title);
	book.append(book_description);

	return book
}

function populateHeader() {
	const header = document.getElementById('page-header');
	const navigation = document.createElement('div');

	navigation.setAttribute("class", "page-title");

	function createLink(text, link) {
		const path = window.location.pathname;
		let filename = path.substring(path.lastIndexOf('/') + 1);
		if (filename === "index.html") {
			filename = "home.html"
		}
		if (filename != text + ".html") {
			const html = document.createElement('a');
			html.setAttribute("href", link);
			html.setAttribute("class", "nav-button");
			html.innerText = text;
			navigation.append(html);
		}
	}

	createLink("home", "/index.html");
	createLink("about-me", "/pages/about-me.html");
	createLink("message", "/pages/message.html");
	createLink("books", "/pages/books.html");
	createLink("art", "/pages/art.html");

	header.append(navigation);
	header.append(document.createElement('hr'));
}

document.addEventListener('DOMContentLoaded', (e) => {
	populateHeader();

	if (document.title == "Message") {
		const form = document.querySelector('#messageForm');
		if (form) {
			form.addEventListener('submit', function(e) {
				SubmitForm(e, this);
			});
		}
	}

	if (document.title == "Books") {
		const library = document.getElementById("books-holder");
		// TODO: make an array of books
		// TODO: get books instead of createBook
		const book1 = createBook("Dune Vol I", "Very nice", 4);
		const book2 = createBook("Dune Vol II", "Not nice", 2);
		const book3 = createBook("Dune Vol III", "Meh", 3);

		library.append(book1);
		library.append(book2);
		library.append(book3);
	}
});


