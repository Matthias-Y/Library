let myLibrary = [];

function Book(author, title, pages, isRead){
    this.author = author;
    this.title = title;
    this.pages = parseInt(pages);
    this.isRead = isRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function removeBookFromLibrary(e) {
    let bookCard = e.currentTarget.parentNode;
    let bookTitle = e.currentTarget.parentNode.firstChild.textContent;
    bookCard.remove();

    for (let i = 0; i < myLibrary.length; i++){
        if (myLibrary[i].title == bookTitle){
            myLibrary.splice(i, 1);
        }
    }
}

function renderBookCard(book){
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = "Pages: " + book.pages;
    removeButton.textContent = 'Remove Book';
    readButton.id = 'toggle-button';
    
    bookCard.className = "book-card";
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeButton);

    if (book.isRead){
        bookCard.classList.add('read')
        readButton.textContent = 'Read';
    } else {
        bookCard.classList.add('not-read')
        readButton.textContent = 'Not Read';
    }

    readButton.addEventListener('click', () => {
        readButton.textContent = readButton.textContent == 'Read' ? 'Not Read' : 'Read';

        if (readButton.textContent == 'Read'){
            readButton.parentNode.classList.remove('not-read');
            readButton.parentNode.classList.add('read');
            book.isRead = true;
        } else {
            readButton.parentNode.classList.remove('read');
            readButton.parentNode.classList.add('not-read');
            book.isRead = false;
        }
    })

    removeButton.addEventListener('click', removeBookFromLibrary);

    return bookCard;
}

function renderBookGrid(myLibrary){
    booksContainer.textContent = '';

    for (let book of myLibrary) {
        let bookCard = renderBookCard(book);
        booksContainer.appendChild(bookCard);
    }
}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.add-button');
const closeModal = document.querySelector('.close-button');
const submitButton = document.querySelector('button[type="submit"]');
const booksContainer = document.querySelector('.books-container');
const readToggleButton = document.querySelector('#toggle-button');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let form = document.querySelector("form");

    if (form.checkValidity()) {
        form.reportValidity();

        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;
        let isRead = document.querySelector('#read').checked;

        let book = new Book(title, author, pages, isRead);
        addBookToLibrary(book);
        renderBookGrid(myLibrary);
        form.reset();
        modal.close();
    } else {
        form.reportValidity();
    }
})

