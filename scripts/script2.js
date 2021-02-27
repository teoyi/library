// Creating class for Book 
class Book { 
    constructor(title, author, pages, status){
        this.title = title; 
        this.author = author;
        this.pages = pages; 
        this.status = status;
    };

    flip = () => {
        if (this.status === 'READ'){
            this.status = 'NOT READ';
        } else {
            this.status = 'READ';
        };
    };
};


// Creating the library 
let myLibrary  = []; 

// Function to create book object and append to array 
function addBook(bookObj){
    myLibrary.push(bookObj);
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

// Function to update the table
const tableContent = document.querySelector('.book-list');
function update(){
    tableContent.innerHTML = "";
    myLibrary.forEach((book) => {
        if (book.status === 'READ'){
            const htmlBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><button class="status-button" id="read">${book.status}</button></td>
                <td><button class="delete">x</button></td>
            </tr>
            `;
            tableContent.insertAdjacentHTML("afterbegin", htmlBook);
        } else if (book.status === 'NOT READ'){
            const htmlBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td><button class="status-button" id="not-read">${book.status}</button></td>
                <td><button class="delete">x</button></td>
            </tr>
            `;
            tableContent.insertAdjacentHTML("afterbegin", htmlBook);
        }
 
    });
    console.log('updated!');
};

// Table Event 
const tbl = document.querySelector('table');
tbl.addEventListener('click', (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'x'){
        if (confirm(`Are you sure you want to remove '${currentTarget.innerHTML}' from the library?`)){
            delBook(loc(myLibrary, currentTarget.innerHTML));
        };
    };
    if (e.target.innerHTML === 'READ' || e.target.innerHTML === 'NOT READ'){
        myLibrary[loc(myLibrary, currentTarget.innerHTML)].flip();
    };
    update();
});

// Form Submission Event 
let form_status = ''; 
const checkBox = document.getElementById("status");

function testCheck() {
    if (checkBox.checked) {
        return form_status = 'READ';
    } else {
        return form_status = 'NOT READ';
    };
};

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    testCheck();
    if (title.length === 0 || author.length === 0) {
        alert('Insufficient information. Please try again.')
    } else if (!/^\d+$/.test(pages)){
        alert('Invalid entry for number of pages. Please try again')
    } else {
        const book_new = new Book(title, author, pages, form_status);
        if (myLibrary.some(book => book.title === book_new.title)) {
            alert('This book already exists within the library.');
        } else {
            addBook(book_new);
            update();
            form.reset();
        };
    };
});

// Initial Config 
const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'READ');
const got = new Book('The Game of Thrones', 'George R.R Martin', '694', 'NOT READ');

addBook(hobbit);
addBook(got);
update();
