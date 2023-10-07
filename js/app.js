// Zera todos os botões por padrão em alugar
function zerarBotoes(){
let botoes = document.querySelectorAll("a");
botoes.forEach(function(zerar){
    zerar.innerHTML = "Alugar";
    zerar.setAttribute("class", "dashboard__item__button");
})
}
//Zera todas as imagenss por padrão em alugar 
function zerarImagens(){
let botoes = document.querySelectorAll("div");
botoes.forEach(function(zerar){
    zerar.setAttribute("class", "dashboard__item__img");
})
}

zerarImagens()
zerarBotoes()


// Reconhece o click do botão determinado
function alterarStatus(id){
    console.log(`Botão ${id} acionado`);
}
