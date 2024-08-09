document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const input = document.getElementById('input');

    function displayBooks(filteredBooks) {
        bookList.innerHTML = '';
        filteredBooks.forEach(book => {
            const bookInfo = document.createElement('div');
            bookInfo.classList.add('book-item');
            bookInfo.innerHTML = `
                <img src="${book.imgSrc}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Description: ${book.description}</p>
            `;
            bookList.appendChild(bookInfo);
        });
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function filterBooks() {
        const query = input.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    }

    const debouncedFilterBooks = debounce(filterBooks, 500);

    input.addEventListener('input', debouncedFilterBooks);

    displayBooks(books);
});
