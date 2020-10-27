let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for(let indice = 0; indice < numbers.length; indice += 1){
    if(numbers[indice] % 2 !== 0){
        impares += 1; 
    }
}

if(impares > 0){
    console.log("numeros impares:" + impares);
}else{
    console.log("nenhum valor ímpar encontrado");
}