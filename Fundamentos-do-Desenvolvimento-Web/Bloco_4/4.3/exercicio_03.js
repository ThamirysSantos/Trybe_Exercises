const n = 5;
let caracter = '*';
let espaco = '';
let posicao = n;

for (let index = 0; index < n; index += 1) {
    for(let linha = 0; linha <= n; linha += 1) {
        if (linha < posicao) {
            espaco += ' ';
        } else {
            espaco += caracter;
        }
    }
    console.log(espaco);
    posicao -= 1;
    espaco = '';
}
