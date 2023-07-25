var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");//abrindo o endereço da API

    xhr.addEventListener("load",function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){ //STATUS 200 É QUANDO DÁ TUDO CERTO NA REQUISIÇÃO!!!!!

            erroAjax.classList.add("invisivel")

            //console.log(xhr.responseText); //imprimido os dados coletados da api no console
            var resposta = xhr.responseText;
            console.log(resposta);//imprimido os dados coletados da api no console
            var pacientes = JSON.parse(resposta);//CONVENDO O JSON PARA ARRAY E USAR COMO OBJETO
            console.log(pacientes);

            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(hr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        };
    });

    xhr.send();//Utilizado para enviar a requisição ao navegador, ou servidor que esta hospedado a API de consumo
});