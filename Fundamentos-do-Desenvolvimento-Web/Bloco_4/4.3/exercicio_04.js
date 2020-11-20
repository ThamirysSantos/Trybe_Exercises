const n = 5;
let caracter = '*';
let espaco = '';
let centroDoTriangulo = (n + 1) / 2;
let direita = centroDoTriangulo;
let esquerda = centroDoTriangulo;


for (let index = 0; index <= centroDoTriangulo; index += 1) {
    for (let linha = 1; linha <= n; linha += 1) {
        if (linha > direita && linha < esquerda) {
            espaco = espaco + caracter;
        } else {
            espaco = espaco + ' ';
        }
    }
    console.log(espaco);

    espaco = '';
    direita -= 1;
    esquerda +=1;
}

