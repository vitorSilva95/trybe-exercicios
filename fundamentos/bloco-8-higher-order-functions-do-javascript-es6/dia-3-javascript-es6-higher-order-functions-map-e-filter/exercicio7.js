const books = require('./data');
const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
const book = books.filter((book)=> book.author.name.startsWith('J. R. R.')).map((booksName)=> booksName.name);
return book[0];
}
console.log(authorWith3DotsOnName());
assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);