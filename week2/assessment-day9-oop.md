**my solution:**

```js 

class Bookstore {
  constructor(name) {
    this.name = name
    this.books= []
  }
  storeBook(book) {
    this.books.push(book)
  }
  getBook(title) {
    for ( let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        return this.books[i]
      } else {
        return false
      }
    }
  }
  getAllBooks() {
    return this.books
  }
}


class Book {
  constructor(title, quantity) {
    this.title = title
    this.quantity = quantity
  }
  changeTitle(titleStr) {
    this.title = titleStr
  }
}

``` 

**solution Ironhack**


```js

class Bookstore{
  constructor(name){
    this.name = name;
    this.books = [];
  }
  
  storeBook(book){
    this.books.push(book);
  }
  
  getBook(title){
    const bookPicked = this.books.find(book => book.title === title);
    
    if (!bookPicked) return false;
    return bookPicked;
  }
  
  getAllBooks(){
    return this.books;
  }
}

class Book {
  constructor(title, quantity){
    this.title = title;
    this.quantity = quantity;
  }
  
  changeTitle(newTitle){
    this.title = newTitle;
  }
}

module.exports = { Bookstore, Book }

