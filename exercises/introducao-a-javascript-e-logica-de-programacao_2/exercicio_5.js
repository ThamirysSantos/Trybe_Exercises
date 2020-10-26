let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorMaior = 0;

for(let indice = 0; indice < numbers.length; indice += 1) {
    if(numbers[indice] > valorMaior){ 
        valorMaior = numbers[indice];
    }   
 }

 console.log(valorMaior);