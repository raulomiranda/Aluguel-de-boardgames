// Reconhece o click do botão determinado
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let nomeJogo = gameClicado.querySelector(".dashboard__item__name");
    
    if(botao.innerHTML == "Alugar"){
        botao.setAttribute("class", "dashboard__item__button dashboard__item__button--return");
        imagem.setAttribute("class", "dashboard__item__img dashboard__item__img--rented")
        botao.innerHTML = "Devolver"
    }else{
        botao.setAttribute("class", "dashboard__item__button");
        imagem.setAttribute("class", "dashboard__item__img");
        botao.innerHTML = "Alugar"
    }
}
