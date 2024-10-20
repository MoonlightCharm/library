const myLibrary = [];
const button = document.querySelector('.btn');
const bookContainer = document.querySelector('.book-container');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

button.addEventListener('click', () => {
    const title = prompt('Please enter the name of the book');
    const author = prompt('Please enter the author of the book');
    const pages = prompt('Please enter the number of pages');
    const read = prompt('Have you read this book yet? Type either yes or no.');

    if (!title || !author || isNaN(pages) || (read !== 'yes' && read !== 'no')) {
        alert('Please provide valid inputs.');
        return;
    }

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    addBookToLibrary(myLibrary.length - 1);
});

function addBookToLibrary(index) {
    const book = myLibrary[index];
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
        <p><strong>Title:</strong> ${book.title}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p class='read'><strong>Is read:</strong> ${book.read}</p>
    `;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'DELETE BOOK';
    delBtn.addEventListener('click', () => {
        bookContainer.removeChild(div);
    });

    const isReadBtn = document.createElement('button');
    isReadBtn.textContent = 'TOGGLE READ STATUS';
    
    const paraRead = div.querySelector('.read');
    
    isReadBtn.addEventListener('click', () => {
        if (book.read === 'yes') {
            book.read = 'no';
        } else {
            book.read = 'yes';
        }

        paraRead.innerHTML = `<strong>Is read:</strong> ${book.read}`;
    });

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btnContainer');

    btnContainer.appendChild(delBtn);
    btnContainer.appendChild(isReadBtn);
    div.appendChild(btnContainer);
    bookContainer.appendChild(div);
}
