/*  This code creates a web application for managing a library catalog.
    The filename for this code is libraryApp.js.
    It includes an elaborate set of functions and classes for adding, editing, and removing books from the catalog, as well as searching for books and displaying the catalog on the webpage. */

// Book class represents a book with a title, author, genre, and number of copies.
class Book {
  constructor(title, author, genre, copies) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.copies = copies;
  }
}

// LibraryCatalog class represents a catalog of books in the library.
class LibraryCatalog {
  constructor() {
    this.books = [];
  }

  // Add a book to the catalog.
  addBook(book) {
    this.books.push(book);
  }

  // Edit the details of a book in the catalog.
  editBook(bookIndex, newTitle, newAuthor, newGenre, newCopies) {
    if (bookIndex >= 0 && bookIndex < this.books.length) {
      const book = this.books[bookIndex];
      book.title = newTitle;
      book.author = newAuthor;
      book.genre = newGenre;
      book.copies = newCopies;
    }
  }

  // Remove a book from the catalog.
  removeBook(bookIndex) {
    if (bookIndex >= 0 && bookIndex < this.books.length) {
      this.books.splice(bookIndex, 1);
    }
  }

  // Search for books based on title.
  searchByTitle(searchTitle) {
    return this.books.filter((book) => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
  }
  
  // Search for books based on author.
  searchByAuthor(searchAuthor) {
    return this.books.filter((book) => book.author.toLowerCase().includes(searchAuthor.toLowerCase()));
  }
  
  // Display the catalog on the webpage.
  displayCatalog() {
    const catalogElement = document.getElementById('catalog');
    catalogElement.innerHTML = '';

    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Genre: ${book.genre}</p>
        <p>Copies: ${book.copies}</p>
      `;

      catalogElement.appendChild(bookElement);
    });
  }
}

// Create an instance of LibraryCatalog.
const libraryCatalog = new LibraryCatalog();

// Add sample books to the catalog.
libraryCatalog.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction', 5));
libraryCatalog.addBook(new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 3));
libraryCatalog.addBook(new Book('1984', 'George Orwell', 'Science Fiction', 2));

// Edit book details.
libraryCatalog.editBook(1, 'To Kill a Mockingbird', 'Harper Lee', 'Classic Fiction', 4);

// Remove a book from the catalog.
libraryCatalog.removeBook(2);

// Search for books by title.
const searchResults = libraryCatalog.searchByTitle('gatsby');

// Display the catalog on the webpage.
libraryCatalog.displayCatalog();