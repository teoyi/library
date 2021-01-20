let myLibrary = [];

// Parent that contains information about the object
function book(title, author, pages, status){
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.status = status; // Indication of yes or no will relate to read or not read respectively
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

// Function to flip status 
function flip(book){
    if (myLibrary[book].status === 'READ'){
        myLibrary[book].status = 'NOT READ';
    } else {
        myLibrary[book].status = 'READ';
    };
};



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
        flip(loc(myLibrary, currentTarget.innerHTML));
    };
    update();
});


// Initial Config 
const hobbit = new book('The Hobbit', 'J.R.R Tolkien', '295', 'READ');
const got = new book('The Game of Thrones', 'George R.R Martin', '694', 'NOT READ');

addBook(hobbit);
addBook(got);
update();
