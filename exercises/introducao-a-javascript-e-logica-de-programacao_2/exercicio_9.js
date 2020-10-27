let numeros =[];
let resultado = [];

for(let contador = 0; contador < numeros.length; contador += 1){
    for(let indice = 1; indice <= 25; indice += 1){
        numeros.push(indice);
    }
    let divisao = numeros[contador] / 2;
    console.log(divisao);
    resultado.push(divisao);
}

console.log(resultado);