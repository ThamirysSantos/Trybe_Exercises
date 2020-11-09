let n = 5;
let quadrado = '';

if (n > 1) {
    for (let colunas = 1; colunas <= n; colunas += 1) {
        quadrado += '*';
    }
    for (let linhas = 1; linhas <= n; linhas +=1) {
        console.log(quadrado);
    }
}

