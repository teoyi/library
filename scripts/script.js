let myLibrary = [];

// Parent that contains information about the object
function book(title, author, pages, status){
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = status; // Indication of yes or no will relate to read or not read respectively
};

// Function to create book object and append to array 
function addBook(bookObj){
    myLibrary.push(bookObj);
};

// Function to iterate and print information about books in library 
function iter(lst){
    lst.forEach(book => console.log(book));
};

// Function to update the table
const tableContent = document.querySelector('.book-list');
function update(){
    tableContent.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><button class="status-button">${book.status}</button></td>
                <td><button class="delete">x</button></td>
            </tr>
            `;
        tableContent.insertAdjacentHTML("afterbegin", htmlBook);
    });
    console.log('updated!');
};

// Function to remove book from library array 
function delBook(currentBook){
    myLibrary.splice(currentBook, currentBook+1);
};

// Function to locate index of book in library array 
function loc(arr, title){
    if (arr.length === 0 || arr.length === null){
        return;
    };
    for (book of myLibrary){
        if (book.title === title) {
            return myLibrary.indexOf(book);
        };
    };
};



const tbl = document.querySelector('table');
tbl.addEventListener('click', (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML === 'x'){
        delBook(loc(myLibrary, currentTarget.innerHTML));
        console.log(myLibrary);
    };
    update();
});



const hobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', 'yes');
const got = new book('The Game of Thrones', 'George R.R Martin', '694', 'no');

addBook(hobbit);
addBook(got);
iter(myLibrary);
console.log(loc(myLibrary, 'The Hobbit'));
update();