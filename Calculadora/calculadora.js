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

const soma = (x,y) => {
    return x+y
}  

const sub = (x,y) => {
    return x-y
} 

const mult = (x,y) => {
    return x*y
} 

const div = (x,y) => {
    return x/y
} 

const calculadora = (x,y,operacao) => {
    return operacao(x,y)
}

// calculadora(10,2,soma) //
//const resultado = calculadora(x,y,operacao) //

    
