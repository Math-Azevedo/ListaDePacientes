var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);


    //EFETUANDO VALIDAÇÃO DE PESO
    if(!pesoEhValido){
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;

        //ESTILIZANDO CASO A CONDIÇÃO SEJA VERDADEIRA
        paciente.classList.add("paciente-invalido");
    }

    //VALIDANDO ALTURA
    if(!alturaEhValida){
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;

        //ESTILIZANDO CASO A CONDIÇÃO SEJA VERDADEIRA (FOI CRIADO UMA CLASSSE NO CSS COM O NOME PACIENTE-INVALIDO PARA UTILIZAÇÃO NOS CASOS DE NECESSIDADE DE ESTILIZAÇÃO)
        paciente.classList.add("paciente-invalido");
    }

    //VALIDANDO SE FOR VERDADEIRO AS CONDIÇÕES
    if(alturaEhValida && alturaEhValida ){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; 
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else{
        return false;
    } 
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else{
        return false;
    }
};


function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);//TOFIXED É PARA FIXAR A QUANTIDADE DE CASAS DECIMAIS APÓS A VIRGULA 

}

