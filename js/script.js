const bolinhaElemento = document.querySelector(".bolinha");

let posicao = 0;

const moverBolinha = (event) => {
  if (event.keyCode == 39) {
    posicao += 10;
    bolinhaElemento.style.marginLeft = `${posicao}px`;

    if (posicao == 400) {
      ganhou();
    }
  }
};

document.addEventListener("keydown", moverBolinha);

const ganhou = () => {
  setTimeout(() => {
    alert("Você venceu!");
    reiniciar();
  }, 50);
};

const perdeu = () => {
  setTimeout(() => {
    alert("Você perdeu!");
    reiniciar();
  }, 500);
};

const reiniciar = () => {
  posicao = 0;
  bolinhaElemento.style.marginLeft = `${posicao}px`;
};

const girar = () => {
  posicao = Math.random() * 400;
  bolinhaElemento.style.marginLeft = `${posicao}px`;
  if (posicao == 400) {
    ganhou();
  } else {
    perdeu()
  }
};
