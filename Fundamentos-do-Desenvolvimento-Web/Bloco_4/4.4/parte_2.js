//1-Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome (string) {
    let recebeStringInversa = '';

    for (let index = string.length - 1; index >= 0; index -= 1) {
        recebeStringInversa += string[index];
    }
    if (recebeStringInversa === string) {
        return 'true';
    } else {
        return 'false';
    }
};

//2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function VerificaMaiorValor (array) {
    let maiorValor = 0;

    for (let key in array) {
        if (array[key] > array[maiorValor]) {
            maiorValor = key;
        }
    }
    return maiorValor;
};


//3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function VerificaMenorValor (array) {
    let maiorValor = 0;

    for (let key in array) {
        if (array[key] < array[maiorValor]) {
            maiorValor = key;
        }
    }
    return maiorValor;
};

//4-Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function retornaMaiorString (array) {
    let tamanhoDoNome = 0;
    let nome = '';
    
    for (key in array) {
        if (array[key].length > tamanhoDoNome) {
            tamanhoDoNome = array[key].length;
            nome = array[key];
        }
    }
    return nome;
};

//5-Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//6-Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N
function soma (numero) {
    let soma = 0;

    for (index = 1; index <= numero; index += 1) {
        soma += index;    
    }
    return soma;
};

//7-Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verificaFimPalavra (palavra,final) {
    let palavraFim = palavra.length - final.length - 1;
    let compara = palavra.slice(-palavraFim);
    
    if (compara === final) {
        return 'true';
    } else {
        return 'false';
    }
};



