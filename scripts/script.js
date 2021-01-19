let myLibrary = [];

function book(title, author, pages, status){
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = status; // False would imply having not read the book yet
    this.info = function() {
        if (this.read === 'no') {
            console.log(this.title + ' by ' + this.author + ', ' + this.pages + 'pages' + ', ' + 'Not Read');
        } else if (this.read === 'yes'){
            console.log(this.title + ' by ' + this.author + ', ' + this.pages + 'pages' + ', ' + 'Read');
        };
    };
};

const hobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', 'yes');
const got = new book('The Game of Thrones', 'George R.R Martin', '694', 'no');
console.log(hobbit.info());
console.log(got.info())

function addBook(bookObj){
    myLibrary.push(bookObj);
};

addBook(hobbit);
addBook(got);
console.log(myLibrary[0]);