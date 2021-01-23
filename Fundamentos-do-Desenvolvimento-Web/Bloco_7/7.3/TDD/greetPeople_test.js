const assert = require('assert');

const greetPeople = (people) => {
    const greeting = []; // let greeting = 'Hello ';

    for (let index = 0; index < people.length; index++) {
        greeting.push(`Hello ${people[index]}`); // greeting += people[person];
    };
    return greeting;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  assert.deepStrictEqual(greetPeople(parameter), result);