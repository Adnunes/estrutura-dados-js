// Declarando um array
let numbers = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12,13);



Array.prototype.insertFirstPosition = function(value){
    for (let i = this.length; i>=0; i--){
        this[i] = this[i-1];
    }
    this[0] = value;
};

numbers.insertFirstPosition(-1);
console.log(`inserindo o primeiro elemento com insertFirstPosition: \n${numbers}\n`);


// o metodo unshift insere no inicio do array os valores passados como argumentos, tem a mesma logica da funcao acima

numbers.unshift(-2);

console.log(`inserindo o primeiro elemento com unshift: \n${numbers}`);

// para remover um valor no final do array, podemos utilizar o metodo pop

numbers.pop();

console.log(`Array depois do metodo pop: \n ${numbers}`);

// para remover um valor no início do array
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1];
}

console.log(`removendo o primeiro elemento: \n ${numbers}`);

Array.prototype.reIndex = function(myArray){
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i]!==undefined) {
            newArray.push(myArray[i]);
        }    
    }
    return newArray;
}

Array.prototype.removeFirstPosition = function(){
 
 for (let i = 0; i < this.length; i++) {
    this[i] = this[i+1];

 }
 return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();

console.log(`removendo primero elemento: \n ${numbers}`);

//  o codigo anterior deve ser usado somente com finalidade pedagógica, não devendo ser utilizado em projetos de verdade.
// para remover o primeiro elemendo de um array devemos sempre suar shift

numbers.shift();

console.log(`Array depois de usar o metodo shift: \n ${numbers}`);


// o metodo splice pode ser usado para remover um elemento de um array, simplismente indicando sua posicao
numbers.splice(5,3);

console.log(`removendo com splice: \n${numbers}`);


// adicionando numeros no Array com splice

numbers.splice(5,0,6,7,8);
// o primeiro argumentodo médoto é o índice a partir do qual queremos remover ou inserir elementos. O segundo argumento é a quantidade de elementos que queremos remover. Do terceiro argumento em diante, temos os valores que gostarimos de inerir no array

console.log(`numbers depois de utilizar o splice para acrescentar os numeros: \n${numbers}`);