// juntando vários arrays

const zero = 0;
const positiveNumbers = [1,2,3];
const negativeNumbers = [-3,-2,-1];

let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(`utilizando o metodo concat para juntar dois arrays: \n ${numbers}`);

// funções de interação

const newNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// metodo every intera pelos elementos do array até devolver false
const isEven = x =>x%2==0;

console.log(newNumbers.every(isEven));

//metodo some, que apresenta o comportamento oposto ao método every. Intera até devolver true

console.log(newNumbers.some(isEven));

//foreach para fazer a interaçao em todo o array. Mesmo resultado do que usar um laço
newNumbers.forEach(x => console.log(x%2===0));

// dois metodos interadores que devolvem um novo array com um resultado
// metodo MAP

const myMap = newNumbers.map(isEven);

console.log(myMap);

// metodo filter
const evenNumbers = newNumbers.filter(isEven);

console.log(evenNumbers);

// metodo reduce, recebe uma funcao com os seguintes parametros:
// previousValue, currentValue, index e array. Index e array são opcionais
console.log(newNumbers.reduce((previous, current)=>previous +current));

// Vimos que podemos interar por um array usando o laço for e o metodo for Each
// a ES2015 introduziu o laço for...of para interar pelos valores de um array


for (const n of newNumbers){
    console.log(n%2===0 ?'even':'odd');
}

// o metodo array.of cria outro arrau a partir de argumentos passados para o metodo
// tbm podemos usar esse metodo para fazer uma copia

let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5,6);

console.log(numbers3);
console.log(numbers4);

// usando o metodo fill: o metodo fill preenche o array com um valor

let numbersCopy = Array.of(1,2,3,4,5,6);
numbersCopy.fill(0)

console.log(numbersCopy);

//tambem podemos passar o indice de inicio a partir do qual queremos preencher o array

numbersCopy.fill(2,1);

console.log(numbersCopy);

//tambem podemos passa o indice final até o qual queremos preencher o arry
numbersCopy.fill(1,3,5);

console.log(numbersCopy);

 
/*o metodo copyWhithin copia uma sequenia de valores do array para
a posição de um índice de início */

let copyArray = [1,2,3,4,5,6];

// vamos supor que queremos copiar os valores 4,5,6 para as primeiras 3 posições

copyArray.copyWithin(0,3);

console.log(copyArray);