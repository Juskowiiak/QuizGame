//-----------------------PERGUNTAS na TELA
let pergunta = document.querySelector(".pergunta");
let perguntaNr = document.querySelector(".nr");
//-----------------------OPCOES texto
let opcaoA = document.querySelector(".opcaoA");
let opcaoB = document.querySelector(".opcaoB");
let opcaoC = document.querySelector(".opcaoC");
//-----------------------Radio Id
let radioA = document.querySelector("#op1");
let radioB = document.querySelector("#op2");
let radioC = document.querySelector("#op3");
//-------------------------- PERGUNTAS
let perguntas = [
  "Who was the eldest son of King Afonso III of Portugal?",
  "The most venomous snake in the world?",
  "How many equal sides does the isosceles triangle have?",
  "Jordanian is situated on which continent?",
  "Which is the smallest bone in the human body?",
  "Who is the artist of the song Purple rain?",
  "What the chemical symbol of silver?",
  "Salvador Dali, Francisco de Goya, Claude Monet. What these people have in common?",
  "How many colors has the flag of Madagascar?",
  "What's the coldest planet in the solar system?",
];
//--------------------------- RESPOSTAS
let respostaA = [
  "D.Dinis",
  "Black Mamba",
  "2",
  "Europe",
  "Fibula",
  "Elvis",
  "Ag",
  "Philosophers",
  "Four",
  "Uranus",
];
let respostaB = [
  "D.Afonso",
  "Inland Taipan",
  "3",
  "Africa",
  "Sacro",
  "Prince",
  "Pb",
  "Painters",
  "Two",
  "Neptune",
];
let respostaC = [
  "D.Filipe",
  "King Cobra",
  "1",
  "Asia",
  "Estribo",
  "Michael Jackson",
  "Hg",
  "Geologists",
  "Three",
  "Pluton",
];

let guardaResposta = [];
let posicao = 1;

function next() {
  if (posicao < perguntas.length) {
    if (radioA.checked) {
      guardaResposta.push(radioA.value);
    }
    if (radioB.checked) {
      guardaResposta.push(radioB.value);
    }
    if (radioC.checked) {
      guardaResposta.push(radioC.value);
    }

    pergunta.innerHTML = perguntas[posicao];
    perguntaNr.innerHTML = posicao + 1 + "/10";
    opcaoA.innerHTML = respostaA[posicao];
    opcaoB.innerHTML = respostaB[posicao];
    opcaoC.innerHTML = respostaC[posicao];
    radioA.setAttribute("value", respostaA[posicao]);
    radioB.setAttribute("value", respostaB[posicao]);
    radioC.setAttribute("value", respostaC[posicao]);

    radioA.checked = false;
    radioB.checked = false;
    radioC.checked = false;

    posicao++;
  } else {
    if (radioA.checked) {
      guardaResposta.push(radioA.value);
    }
    if (radioB.checked) {
      guardaResposta.push(radioB.value);
    }
    if (radioC.checked) {
      guardaResposta.push(radioC.value);
    }
    /* ******************************************************************************** */
    //let no screen
    let hidePerguntas = document.querySelector(".caixa-screen-tela-pergunta");
    hidePerguntas.style.cssText = "display:none";
    let showPontos = document.querySelector(".caixa-screen-tela-pontos");
    showPontos.style.cssText = "opacity:1";

    //***********************let no touch
    let nextBtn = (document.querySelector(
      ".caixa-touch-tela-next"
    ).style.cssText = "display:none");
    let telaOpcao = (document.querySelector(
      ".caixa-touch-tela-opcoes"
    ).style.cssText = "display:none");
    let telaResult = document.querySelector(".caixa-touch-tela-resultado");
    telaResult.style.cssText = "display:flex";
    pontuacao();
  }
}
/* ******************************************************************************** */
// -------------------------- -COMPARAR RESPOSTAS
let respostas = [
  "D.Dinis",
  "Inland Taipan",
  "2",
  "Asia",
  "Estribo",
  "Prince",
  "Ag",
  "Painters",
  "Three",
  "Uranus",
];

let respostaCerta = [];
let respostaErrada = [];
let pos = 0; //posicao das respostas
let somaPontos = 0;
let telaScreen = document.querySelector(".caixa-screen-tela-solucao");
let telaTouch = document.querySelector(".caixa-screen-tela-solucao");
pontuacao = () => {
  guardaResposta.forEach(function (elemento) {
    // se a respostaGuardada nao estiver dentro do array Respostas
    if (respostas.indexOf(elemento) == -1) {
      respostaErrada.push(elemento);
      /*console.log( `A sua resposta foi ${respostaErrada[respostaErrada.length - 1]}`);
      console.log(`A resposta esta errada, era ${respostas[pos]}`);*/
      telaScreen.innerHTML += `
      <div classe="caixa-screen-tela-solucao-questao ">
        <h4 class="caixa-screen-tela-solucao-questao-perg ">${
          perguntas[pos]
        }</h4>
        <div class="caixa-screen-tela-solucao-questao-perg-resp">
          <h5>Chosen: <span class="caixa-screen-tela-solucao-questao-perg-resp-select">${
            respostaErrada[respostaErrada.length - 1]
          }<i class='bx bx-x errada'></i></span></h5>
          <h5>Answer: <span class="caixa-screen-tela-solucao-questao-perg-resp-respost">${
            respostas[pos]
          }</span></h5>
        </div>
        
      </div>`;
      somaPontos += 1;
    } else {
      respostaCerta.push(elemento);
      /*console.log(`Sua resposta foi ${respostaCerta[respostaCerta.length - 1]}`);
      console.log(`A resposta esta certa era ${respostaCerta[respostaCerta.length - 1]}`);*/

      telaScreen.innerHTML += `
      <div classe="caixa-screen-tela-solucao-questao ">
        <h4 class="caixa-screen-tela-solucao-questao-perg">${
          perguntas[pos]
        }</h4>
        <div class="caixa-screen-tela-solucao-questao-perg-resp">
          <h5>Chosen: <span class="caixa-screen-tela-solucao-questao-perg-resp-select">${
            respostaCerta[respostaCerta.length - 1]
          }<i class='bx bx-check certa'></i></span></h5>
          <h5> Answer: <span class="caixa-screen-tela-solucao-questao-perg-resp-respost">${
            respostaCerta[respostaCerta.length - 1]
          }</span></h5>
        </div>
         </div>`;

      somaPontos += 3;
    }
    pos++;
  });
  sessionStorage.setItem("Pontos", somaPontos);
  document.querySelector(".recebePonto").innerHTML =
    sessionStorage.getItem("Pontos");
};
/* ******************************************************************************** */
// -------------------------- VER RESULTADOS

let verResult = document.querySelector(".ver-resultado");
verResult.addEventListener("click", function () {
  paraTempo();
  let showPontos = document.querySelector(".caixa-screen-tela-pontos");
  showPontos.style.cssText = "display:none";
  let telaScreen = document.querySelector(".caixa-screen-tela-solucao");
  telaScreen.style.display = "display:block";

  let telaResultado = document.querySelector(".caixa-touch-tela-resultado");
  telaResultado.style.cssText = "display:none";
  let telaReiniciar = document.querySelector(".caixa-touch-tela-reiniciar");
  telaReiniciar.style.cssText = "display:flex";
  sessionStorage.removeItem("Pontos");
});
