let numeros =[];
let resultadoDivisao =[];

for(let indice = 1; indice <= 25; indice += 1){
    numeros.push(indice);
}
for(contador = 1; contador < numeros.length; contador += 1){
    let Divisao = numeros[contador] / 2;
    resultadoDivisao.push(Divisao);
}

console.log(resultadoDivisao);