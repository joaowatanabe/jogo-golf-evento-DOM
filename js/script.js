const bolinhaElemento = document.querySelector(".bolinha");

let posicao = 0

const moverBolinha = (event) => {
  if(event.keyCode == 39) {
    posicao += 10
    bolinhaElemento.style.marginLeft = `${posicao}px`
  }
}

document.addEventListener("keydown", moverBolinha)