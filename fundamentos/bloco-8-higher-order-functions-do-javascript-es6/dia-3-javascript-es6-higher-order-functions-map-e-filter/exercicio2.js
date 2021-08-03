const books = require('./data');
const assert = require('assert');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  const book = books.map((book)=> ({
    age :book.releaseYear-book.author.birthYear,
    author: book.author.name  
  }));
  book.sort((a,b)=> a.age - b.age);
  return book;
}
console.log(nameAndAge());
assert.deepStrictEqual(nameAndAge(), expectedResult);