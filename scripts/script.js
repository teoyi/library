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
console.log(hobbit.info());

function addBook(bookObj){
    myLibrary.push(bookObj);
};

addBook(hobbit);
console.log(myLibrary);


// Navigation tings 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    

    burger.addEventListener('click', ()=>{

        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links 
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            };
        });

        // Burger Cross
        burger.classList.toggle('toggle');
    });
};
navSlide();