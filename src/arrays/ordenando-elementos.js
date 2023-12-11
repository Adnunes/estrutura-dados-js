// numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// console.log(numbers.reverse());


// // o metodo sort deixa os elementos em ordemo lexicográfica e pressupoe que todos os elementso são strings
// console.log(numbers.sort());

// console.log(numbers.sort((a,b)=>a-b));


// // Ordenacao personalizada 
// /*podemos ordenar um array qye contenha qualquer tipo de objeto.
// Podemos também criar uma comparFunction para comparar os elementos de acordo com o que for necessário
// */

// const friends = [
//     {name:'John', age: 30},
//     {name: 'Ana', age: 20},
//     {name:'Chris', age:25},
// ];

// function comparePerson(a,b){
//     if(a.age<b.age){
//         return -1;
//     }
//     if(a.age>b.age){
//         return 1
//     }
//     return 0;
// };

// console.log(friends.sort(comparePerson));

// Ordenando strings

let names = ['Ana', 'ana', 'john', 'John'];


console.log(names.sort());

console.log(names.sort((a,b)=>{
    if (a.toLowerCase()<b.toLocaleLowerCase())
        return -1;
    if (a.toLowerCase()>b.toLowerCase())
        return 1;
    return 0
}))