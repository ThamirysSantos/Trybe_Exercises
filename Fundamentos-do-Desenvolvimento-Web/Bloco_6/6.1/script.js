let estados = {
    AC: "Acre",
    AL: "Alagoas", 
    AP: "Amapá",
    AM: "Amazonas",
    BA: "Bahia",
    CE: "Ceará",
    ES: "Espírito Santo", 
    GO: "Goiás",
    MA: "Maranhão",
    MT: "Mato Grosso",
    MS: "Mato Grosso do Sul", 
    MG: "Minas Gerais",
    PA: "Pará",
    PB: "Paraíba",
    PR: "Paraná", 
    PE: "Pernambuco",
    PI: "Piauí", 
    RJ: "Rio de Janeiro", 
    RN: "Rio Grande do Norte",
    RS: "Rio Grande do Sul",
    RO: "Rondônia",
    RR: "Roraima",
    SC: "Santa Catarina",
    SP: "São Paulo", 
    SE: "Sergipe", 
    TO: "Tocantins", 
    DF: "Distrito Federal"
};

//Cria os elementos 'option' na 'select'
let option = '';
let elementoPai = '';

for (let key in estados) {
    option = document.createElement('option')
    elementoPai = document.getElementById('input-estado');
    elementoPai.appendChild(option);
    option.innerHTML = estados[key];
    option.value = key;
}

//Valida o campo data de início
let form = document.getElementById('data-inicio');
let dataInicio = document.getElementById('data-inicio');

form.addEventListener('blur', function(){
    let data = this.value;
    
    // trata data sem '/' ou data, e valida o tamanho da data no formato ddmmaaaa
    if (data.length == 8) {
        data = data[0] + data[1] + '/' + data[2] + data[3] + '/' + data[4] + data[5] + data[6] + data[7];
        this.value = data;
    } else if (data.length < 8) {
        alert('Data inválida');
        this.value = '';
    }
    
    // separa  dia mes e ano para validação
    let dia = data[0] + data[1];
    let mes = data[3] + data[4];
    let ano = data[6] + data[7] + data[8] + data[9];
    
    //valida com dia, ano e mes positivo acima de '0' e mes abaixo de '31'
    if (dia <= 0 || mes > 31 || mes <= 0 || ano <= 0 ) {
        alert('Data inválida');
        this.value = '';
    }   
})
