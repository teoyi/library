let myLibrary  = []; 


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

