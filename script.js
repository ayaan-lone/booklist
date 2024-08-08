//Fetching hte book data from js filre

const bookList = document.getElementById('books');


let debounceTimer;


//Function for displaying the books

function displayBooks(books) {
    
    bookList.innerHTML = ''; 
    
    books.forEach(book => {
        
        const bookItem = document.createElement('div');

        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-cover">
            <div class="book-info">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            </div>
            `;
            bookList.appendChild(bookItem);
        });
    }
    



    const searchInput = document.getElementById('searchQuery');
    
    
    function searchBooks() {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(searchBooks, 300);
});

// Display all books initially
displayBooks(books);