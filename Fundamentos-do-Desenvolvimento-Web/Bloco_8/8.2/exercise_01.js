const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

function formatedBookNames() {
  // Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  let result = [];
  books.map((book) => {
      result.push(`${book.name} - ${book.genre} - ${book.author.name}`);
  });
  return result;
}

assert.deepStrictEqual(formatedBookNames(), expectedResult);