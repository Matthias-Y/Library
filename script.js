let myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = parseInt(pages);
    this.read = read;
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}

function removeBookFromLibrary() {

}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.add-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})