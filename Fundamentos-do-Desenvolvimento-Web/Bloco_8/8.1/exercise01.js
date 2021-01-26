const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

function authorBornIn1947() {
  // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.escreva aqui o seu código
  const match = books.find((book) => book.author.birthYear === 1947);
  return match.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');