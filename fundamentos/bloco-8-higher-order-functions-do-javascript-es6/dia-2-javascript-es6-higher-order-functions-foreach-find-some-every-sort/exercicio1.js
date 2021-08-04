const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//Exercicio 1 Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = () => {
  let book = books.find((book) => book.author.birthYear === 1947);
  return book.author.name;
  }

console.log(authorBornIn1947());
assert.strictEqual(authorBornIn1947(), 'Stephen King');

// 2 - Retorne o nome do livro de menor nome.

const smallerName =()=> {
  let nameBook = books[0].name;
  books.forEach((item,index)=>{
    if (books[index].name.length < nameBook.length) {
      nameBook = books[index].name;
    }
  })
  return nameBook;
}
console.log(smallerName());
assert.strictEqual(smallerName(), 'Duna');

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};
const some = (_,index)=>{
  return books[index].name.length === 26;
}
const getNamedBook = () => books.find(some);
  
console.log(getNamedBook());
assert.deepStrictEqual(getNamedBook(), expectedResult);

// // 4 - Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult2 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  const book = books.sort((a,b) => b.releaseYear - a.releaseYear);
  return book;
}
console.log(booksOrderedByReleaseYearDesc());
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult2);

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const expectedResult3 = false;

function everyoneWasBornOnSecXX() {
return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
}
console.log(everyoneWasBornOnSecXX());
assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult3);

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const expectedResult4 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear > 1980 && book.releaseYear <= 1990)
}
console.log(someBookWasReleaseOnThe80s());
assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult4);

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult5= false;

function authorUnique() {
  return books.every((book) =>book.author.birthYear !== book.author.birthYear);
}
console.log(authorUnique())
assert.strictEqual(authorUnique(), expectedResult5);