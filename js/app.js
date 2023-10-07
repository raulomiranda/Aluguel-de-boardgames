// Reconhece o click do botão determinado
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    //let nomeJogo = gameClicado.querySelector(".dashboard__item__name");
    
    if(botao.innerHTML == "Alugar"){
        botao.classList.add(" dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented")
        botao.innerHTML = "Devolver"
    }else{
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        botao.innerHTML = "Alugar"
    }
}
