const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = [
    'O Senhor dos Anéis',
    'Fundação',
    'O Chamado de Cthulhu'
  ]
  
  function oldBooks() {
    // Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
    const date = new Date().getFullYear();
    let result = [];
    return books
            .filter((book) =>  date - book.releaseYear >= 60)
            .map(book => book.name);
  }
  
  assert.deepStrictEqual(oldBooks(), expectedResult);