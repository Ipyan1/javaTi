function somar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando uma variável 
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "Impossível dividir por número menores ou iguais a zero!";
    }else{
        res = num1 / num2;
    }
    //Faço a resposta
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do metodo

//Faca uma funcao para calcular a potencia

function potencia(){
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    res= Math.pow(num1,num2)
    
    document.getElementById("resultado").innerHTML= "A potencia é: " + res;

}// fim do método

//Faça uma funçao para calcular a raiz dos dois números

function raiz(){
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

     
    res = "Raiz de: " + num1 + "=" + Math.sqrt(num1) + "\nRaiz de: " + num2 + "=" + Math.sqrt(num2);

    document.getElementById("resultado").innerHTML = res;
}// fim do método0

//Faça uma função para calcular a fórmula de bhaskara
function bhaskara(){
    var a;
    var b;
    var c;
    var res;
    var res2;

    a = parseInt(document.getElementById("tpNum").value);
    b = parseInt(document.getElementById("tsNum").value);
    c = parseInt(document.getElementById("tpNum").value);
    
    // calular Delta
    delta=Math.pow(b,2) - 4* a * c;
    
    //calcular res e res2 se delta não for negativo

    if(delta>=0){
        res = (-b + Math.sqrt(delta))/(2*a);
        res2 =(-b - Math.sqrt(delta))/(2*a);

    }else{
        res = "Impossível calcular x1, pois o delta é negativo";
        res2= "Impossivel calcular x2, pois o delta é negativo";
    }
    //Mostrar na tela
    document.getElementById("resultado").innerHTML = "\nDelta: " + delta + "\n\nres: " + res + "\nres2: " + res2;

}// fim do método

// Faça um programa que peça ao usuário um numero e imprima se é par ou impar

function parImpar(){

    var num1;
    var num2;
    var num3;
    var res1;
    var res2;
    var res3;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    num3 = parseInt(document.getElementById("ttnum").value);
    




}//fim do método



// Faça um programa que peça ao usário um número e imprima
// se é positivo, negativo ou zero