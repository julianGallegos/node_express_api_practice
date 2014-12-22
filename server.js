// creates and configures our server

var application_root = __dirname,
	express = require('express');

	var app = express();

	app.configure(function(){
		app.use(express.bodyParser() );

		app.use(express.methodOverride() );

		app.use(app.router);

		app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
	});


	//create the router



//list all the books
app.get('/api/books', function(request, response){
	var books = [
		{
			title: "World War Z",
			author: "Max Brooks",
			releaseDate: "sometime before the movie"
		},

		{
			title: "Harry Potter and the Deathly Hallows",
			author: "JK Rowling",
			releaseDate: "A few years ago"
		}
	];
	response.send(books)
});

// adds a new book

app.post('/api/books', function(request, response){
	var book = {
		title: "New book",
		author: "New Author",
		releaseDate: "12/21/2014"
	};
	response.send(book);
})

// get a single book by it's id

app.get('/api/books/:id', function(request, response){
	var book = {
		title: "Book by ID",
		author: "Single book by id",
		releaseDate: "12/21/2014"
	};
	response.send(book);
});

// updates a book 

app.put('/api/books/:id', function(request, response){
	response.send("updated your book...mother fucka!");
});

// deletes the book

app.delete('/api/books/:id', function(request, response){
	response.send("deleted your book...")
});

//start our server here

var port = 3000;

app.listen(port, function(){
	console.log("Express server at port 3000");
});

