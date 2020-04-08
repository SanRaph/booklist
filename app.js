//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;  
}

//UI Constructor
function UI() {}
//create prototype of UI addBookToList
//add book to list
UI.prototype.addBookToList = function(book) {
    //create dynamic elements
    const list = document.getElementById('book-list');
    //create row
    const row = document.createElement('tr');
    //append html into row(tr) which will be the actual col(td)
    //use book dot notation to drill down to properties
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    //append all these to list
    list.appendChild(row);
}

//clearfields function, when adding prototypes
//it is to the obj itself and not instance of it
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners

//get form from ui
const form = document.getElementById('book-form');
//listen to submit
form.addEventListener('submit', submitForm);
//submit form function
function submitForm(e) {
    //what do we want to happen when we submit
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

        //once submit, we want to create/instantiate the book object
        //with our form values by parsing in
        const book = new Book(title, author, isbn);

        //we want to add book to the app by creating/instantiating UI
        //dynamically and our UI object handles it
        const ui = new UI();
        //add book to list
        //parse in book obj as param to access it's properties
        ui.addBookToList(book);

        //call clearfield after adding book
        ui.clearFields();
        

    
    //prevent default submit behaviour
    e.preventDefault();
}