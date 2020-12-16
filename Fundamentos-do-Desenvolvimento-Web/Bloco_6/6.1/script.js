const estados = {
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
function populaEstados (estados) {
    const elementoPai = document.querySelector('#input-estado');
    for (let key in estados) {
        const option = document.createElement('option');
        elementoPai.appendChild(option);
        option.innerHTML = estados[key];
        option.value = key;
    }
};

window.onload = populaEstados(estados);

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

// não deixa atualizar a page ao clicar em enviar
const button = document.getElementById('enviar');

button.addEventListener('click', function(event) {
    event.preventDefault();
})

//Validação do form inteiro
button.addEventListener('click', function() {

    const camposInput = document.getElementsByClassName('required');
    console.log(camposInput);
    const campoTipo = document.querySelectorAll('#button-tipo');
    const div = document.getElementById('curriculo-pronto');
    let CamposVazios = [];

    for (let index; index < camposInput.length; index += 1) {
        if (camposInput[key].value == undefined) {
            CamposVazios.push(camposInput[key].name);
        }
    }
    if (CamposVazios.length >= 1) {
        alert('O preenchimento do(s) campo(s) ' + CamposVazios + ' são obrigatório(s)!');
        return false
    } else {
      for (key in camposInput){
        if (camposInput[key].value !== undefined) {
            let nameValue = camposInput[key].name + ':' + camposInput[key].value; 
            const p = document.createElement('p');
            div.appendChild(p);
            p.innerHTML = nameValue;
        }
      }
    }
})

//reseta o form
const reset = document.getElementById("limpar");

reset.addEventListener('click', function() {
    let curriculoPronto = document.getElementById('curriculo-pronto');
    camposInput = document.querySelectorAll('[required]');
    campoTipo   = document.querySelectorAll('#button-tipo');

    curriculoPronto.innerHTML = '';
    for (key in campoTipo) {
        campoTipo[key].value = '';
    }
    for (key in camposInput) {
        camposInput[key].value = '';
    }
})
