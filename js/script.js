const bolinhaElemento = document.querySelector(".bolinha");

let posicao = 0

const moverBolinha = (event) => {
  if(event.keyCode == 39) {
    posicao += 10
    bolinhaElemento.style.marginLeft = `${posicao}px`

    if(posicao == 400) {
      setTimeout(() => {
        alert("Você venceu!")
        reiniciar()
      }, 500)
    }
  }
}

document.addEventListener("keydown", moverBolinha)