
const assert = require('assert');
const removeVowels = (word) => {
    const characters = word.split('');
    let results = ''; // const results = [];
    let number = 0; // adicionado

    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        number += 1; // adicionado
        results += number; // results.push(characters[i]);
      } else {
        results += characters[i]; // results.push('_');
      }
    }
    return results;
  };
  
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  assert.strictEqual(removeVowels(parameter), result);