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

function removeBookFromLibrary() {

}

const modal = document.querySelector('#modal');
const openModal = document.querySelector('.add-button');
const closeModal = document.querySelector('.close-button');
const submitButton = document.querySelector('button[type="submit"]');

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
        form.reset();
        modal.close();
    } else {
        form.reportValidity();
    }
})
