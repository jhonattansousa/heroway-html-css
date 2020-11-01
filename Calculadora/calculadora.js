let inputResultado = document.getElementById('resultado')    

let calculo = {
    primeiroValor : 0,
    segundoValor : 0,
    funcaoParaCalcular: null,
};

// adicionar evento para iniciar quando a janela carregar
window.addEventListener("load", function (){
    atribuirEventos();
})

// Atribuir eventos para os botoões da calculadora
function atribuirEventos(){
    
    documento.getElementById("clear").addEventListener("onclick", Apagar)
}

const soma = (x,y) => {
    return x + y;
}  

const sub = (x,y) => {
    return x - y;
} 

const mult = (x,y) => {
    return x * y;
} 

const div = (x,y) => {
    if(y == 0){
        return "Erro, divisão por zero";
    }
        return x / y
} 

const calculadora = (x,y,operacao) => {
    return operacao(x,y)
}

function limparDados(){
   inputResultado.value = "";

   calculo.primeiroValor = 0;
   calculo.segundoValor = 0;
   calculo.funcaoParaCalcular= null;

}

function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = soma;
    }
}


/*function somar () {
    let tn1 = window.document.getElementById('entrada-1')
    let tn2 = window.document.getElementById('entrada-2')
    let res = window.document.getElementById('resultado')
    let n1 = Number(tn1.value)
    let n2 = Number (tn2.value)
    let s = n1 + n2
    res.innerHTML = `<strong> ${s} </strong>`
    }

function subtrair () {
    let tn1 = window.document.getElementById('entrada-1')
    let tn2 = window.document.getElementById('entrada-2')
    let res = window.document.getElementById('resultado')
    let n1 = Number(tn1.value)
    let n2 = Number (tn2.value)
    let s = n1 - n2
    res.innerHTML = `<strong> ${s} </strong>`
    }
    
function multiplicar () {
    let tn1 = window.document.getElementById('entrada-1')
    let tn2 = window.document.getElementById('entrada-2')
    let res = window.document.getElementById('resultado')
    let n1 = Number(tn1.value)
    let n2 = Number (tn2.value)
    let s = n1 * n2
    res.innerHTML = `<strong> ${s} </strong>`
    }

function dividir () {
    let tn1 = window.document.getElementById('entrada-1')
    let tn2 = window.document.getElementById('entrada-2')
    let res = window.document.getElementById('resultado')
    let n1 = Number(tn1.value)
    let n2 = Number (tn2.value)
    let s = n1 / n2
    res.innerHTML = `<strong> ${s} </strong>`
    }*/