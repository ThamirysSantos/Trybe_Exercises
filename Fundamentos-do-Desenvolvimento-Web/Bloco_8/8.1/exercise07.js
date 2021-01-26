const assert = require('assert');
const { books } = require('./data');
const data = require('./data');

const expectedResult = false;

function authorUnique() {
  // Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário
  return books.every((book)=>
  !books.some((bookSome)=> 
      (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)
  ));
}

assert.strictEqual(authorUnique(), expectedResult);