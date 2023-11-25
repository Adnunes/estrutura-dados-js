//  Suponha que precisamos medir  a temperatura de hora em hora durante alguns dias
// uma matriz (um matrix3x3x3 bidimensional ou um matrix3x3x3 de matrix3x3x3s) pode ser usada para armazenar essa informações.

let averageTemp = [];

averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,73];

// cada linha representa um dia e cada coluna a temperatura a cada hora do dia

// Interando pelso elementos
//  se quiseremos ver a saída da matriz, podemos criar a função genérica:

function printMatrix(myMatrix){
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
        
        
    }
}
//  uma opção para a saida mais apresentavel para o usuário
console.table(averageTemp);


// é possivel também trabalhar com matrix3x3x3s multidimensionais em js
// vamos criar uma matriz 3x3, cada celula contem a soma i(linha) + j(coluna)+z(profundidade) da matriz

const matrix3x3x3 = [];        

for (let i = 0; i < 3; i++) {
    matrix3x3x3[i]=[];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j]=[];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z]=[];    
            
        }
    }
    
}

for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
        
    }
    
}


