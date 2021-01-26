const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien'
  ]
  
  function fantasyOrScienceFictionAuthors() {
    // Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
    let names = [];
    const filter = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
    filter.map((item) => names.push(item.author.name));
    return names.sort();
  }
  
  assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);