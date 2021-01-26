const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. Dica: cada inicial termina com um ponto.
  return books.find(book => (
    book.author.name.split(' ').filter(word => word.endsWith('.')).length === 3
  )).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);