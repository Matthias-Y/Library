let myLibrary = [];

function Book(author, title, pages, isRead){
    this.author = author;
    this.title = title;
    this.pages = parseInt(pages);
    this.isRead = isRead;
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

function removeBookFromLibrary() {

}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.add-button');
const closeModal = document.querySelector('.close-button')

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

