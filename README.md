# Exercício - Jogo de Golf - Pratica de DOM

Este é um jogo de golf para exercicitar os conhecimentos em DOM

## Índice

- [Visão Geral](#visão-geral)
  - [Capturas de tela](#capturas-de-tela)
- [Meu Processo](#meu-processo)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão Geral

### Capturas de tela

![Web](jogo-golf-evento-DOM/assets/screenshots/01.png)

## Meu Processo

### Tecnologias utilizadas

- HTML5 semântico
- Propriedades customizadas de CSS
- Flexbox
- CSS Grid
- JS manipulação do DOM

### O que eu aprendi

Neste desafio consegui colocar em prática os conhecimentos obtidos em manipulação e sobre os eventos na DOM, nessa minha jornada como desenvolvedor atualmente estou estudando o front-end e a prática resulta em fixação dos conhecimentos. Fiquei muito feliz com o resultado obtido.

Aprendi algumas coisas novas em JS:

```js
//Para obter o objeto da bola a fim de conectar o raciocinio de move-la
const bolinhaElemento = document.querySelector(".bolinha");

//O uso do event para obter a tecla digitada, e executar o movimento
const moverBolinha = (event) => {
  if (event.keyCode == 39) {
    posicao += 10;
    bolinhaElemento.style.marginLeft = `${posicao}px`;

    if (posicao == 400) {
      ganhou();
    }
  }
};

//O addEventListener para escutar a tecla e mover a bolinha
document.addEventListener("keydown", moverBolinha);
```

## Autor

- João Vicente Watanabe [@joaowatanabe](https://www.frontendmentor.io/profile/joaowatanabe)
