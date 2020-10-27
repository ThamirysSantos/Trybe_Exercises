let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMenor = 500;

for(let indice = 0; indice < numbers.length; indice += 1) {
    if(numbers[indice] < valorMenor){ 
        valorMenor = numbers[indice];
    }   
 }

 console.log(valorMenor);