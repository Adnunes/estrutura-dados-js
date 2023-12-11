class Stack{
    constructor(){
        this.items = [];
    }

    // insere um elemento na pilha
    push(element){
        this.items.push(element);
    }

    // exclui o último elemento inserido na pilha
    pop(){
        this.items.pop();
    }

    // busca o primeiro elemento inserido na pilha
    peak(){
        return this.items[this.items.length - 1];
    }

    // verifica se a pilha está vazia
    
    isEmpty(){

        return this.items.length === 0;
    }

    // limpando os elementos da pilha

    clear(){
        this.items = [];
    }
}



const stack = new Stack();

console.log(stack.isEmpty());
