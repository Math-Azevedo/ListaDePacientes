var tabela = document.querySelector("#tabela-pacientes");

 tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); //adicionando uma classe de css no momento da exclusao da linha da tabela
    
    setTimeout(function(){ //funcão utilizada para fazer o javaScript esperar 0.5s pare depois executar a exclusao do desenho das linhas, isso após efetuar a animação da classe fadeOut
        event.target.parentNode.remove();
    }, 500);

    
 });
