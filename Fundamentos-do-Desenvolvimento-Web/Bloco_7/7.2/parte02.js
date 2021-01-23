const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Adiciona nova chave e valor ao objeto
 const adicionaTurno = (objeto, key, value) => {
    objeto[key] = value;
    return objeto;
 };

 //Lista as chaves do objeto
 const listaKeys = (objeto) => {
     return Object.keys(objeto);
 };

 //Exibe tamanho do objeto
 const tamanhoObjeto = (objeto) => {
    console.log(Object.keys(objeto).length); 
 };

 // Lista os valores das chaves do objeto
 const listaValor = (objeto) => {
    return Object.values(objeto);
 };

 // Agrupa os objetos
 const allLessons = (objeto1, objeto2, objeto3) => {
    const all = Object.assign({}, { objeto1, objeto2, objeto3 });
    return all;
 };

 // retorna o total dos alunos do objeto criado no código acima
function totalDeAlunos() {
    const arrayDeAlunos = allLessons(lesson1,lesson2,lesson3);
    let total = 0;
    for(key in arrayDeAlunos) {
        total += arrayDeAlunos[key].numeroEstudantes;
    }
    return total;
}

// retorna o valor da chave contido no objeto passado por parâmetro
const retornaValor = (objeto, key) => {
    const converteParaArray = Object.values(objeto);
    return converteParaArray[key];
};

// Verifica se existe chave e valor no objeto
const validacao = (objeto, key, value) => {
    const array = Object.entries(objeto);
    let valido = false;
    for(index in array) {
       return array[index][0] === key && array[index][1] === value ? valido = true : valido;
    }
};
