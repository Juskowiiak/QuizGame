// *****************************  tela de loading  ****************************
setTimeout(function () {
  let telaLoading = document.querySelector(".caixa-touch-tela-loading");
  telaLoading.style.cssText = "display:none";
}, 15000);
// *****************************  Butao Go   ****************************
//pega todas as divs
let telaIntro = document.querySelectorAll(".caixa-touch-tela-intro div");
let btnGo = document.querySelector(".btnGo");
//posicao inicial da div
let divPosition = 0;
let paginaIntro = document.querySelector(".pagGo");
//a pagina comeca no nr 1, proxima sera 2
let pagPosition = 2;
let quantidade = 0;
//introduz nome
let recebeNome = document.querySelector(".meuNome");
let mostraNome = document.querySelector(".recebeNome");

//**********************   ao clicar no botao GO ****************************
btnGo.addEventListener("click", function () {
  if (recebeNome.value) {
    //salva o nome no localstorage
    sessionStorage.setItem("Player", recebeNome.value);
    mostraNome.innerHTML = sessionStorage.getItem("Player");
    if (divPosition < 4) {
      //sempre que clicado elimina a mesma div
      telaIntro[divPosition].style.cssText = "margin-top: -58%";
      //mostra o numero da pagina das intros
      paginaIntro.innerHTML = pagPosition;
    }
    if (divPosition == 3) {
      btnGo.style.cssText = "display:none";
      let btnIniciar = document.querySelector(".iniciarJogo");
      btnIniciar.addEventListener("click", function () {
        iniciarTempo();
        //vai fechar a tela intro e loading, e da inicio a tela das opcoes
        let telaIntro = document.querySelector(".caixa-touch-tela-intro");
        telaIntro.style.cssText = "display:none";
        let telaLoading = document.querySelector(".caixa-screen-tela-loading");
        telaLoading.style.cssText = "display:none";
        //chamar opcoes
        let screenOpcao = document.querySelector(".caixa-screen-tela-pergunta");
        screenOpcao.style.cssText = "display: block";
        let touchOpcao = document.querySelector(".caixa-touch-tela-opcoes");
        touchOpcao.style.cssText = "display: flex";
        //chamar botao Next
        let btnNext = document.querySelector(".caixa-touch-tela-next");
        btnNext.style.cssText = "display:block";
      });
    }
    divPosition++;
    pagPosition++;
  } else {
    alert("Introduza seu nome!!");
  }
});
//************************* TELA GAME OVER
function nao() {
  document.querySelector(".caixa-touch-tela-over-opcao").style.display = "none";
  document.querySelector(".caixa-touch-tela-reiniciar-opcao").style.display =
    "none";
}
function sim() {
  window.close();
}
function fechar() {
  document.querySelector(".caixa-touch-tela-over-opcao").style.display = "flex";
  document.querySelector(".caixa-touch-tela-reiniciar-opcao").style.display =
    "flex";
}
function inicio() {
  //atualiza a pagina
  window.location.reload();
  sessionStorage.removeItem("Player");
  sessionStorage.removeItem("Pontos");
}
// ************************ TEMPO POR PERGUNTA
let intervaloID;
let segundos = 59;
let minutos = 2;
function tempo() {
  if (segundos >= 0) {
    document.querySelector(".segundos").innerHTML = segundos;
    document.querySelector(".minutos").innerHTML = minutos;
    //if dos segundos
    if (segundos == 0) {
      segundos = 59;
      minutos--;
    }
    segundos--;

    if (minutos == 0 && segundos == 0) {
      // quando temmpo ambas as telas do Game Over vao aparecer
      document.querySelector(".caixa-screen-tela-over").style.display = "flex";
      document.querySelector(".caixa-touch-tela-over").style.display = "flex";
      // fechar botao next
      document.querySelector(".caixa-touch-tela-next").style.display = "none";
      // fechar as telas screen e touch
      document.querySelector(".caixa-screen-tela-solucao").style.display =
        "none";
      document.querySelector(".caixa-screen-tela-pergunta").style.display =
        "none";
      document.querySelector(".caixa-screen-tela-pontos").style.display =
        "none";
      document.querySelector(".caixa-touch-tela-opcoes").style.display = "none";
    }
  }
}
function iniciarTempo() {
  intervaloID = setInterval(tempo, 1000);
}
function paraTempo() {
  clearInterval(intervaloID);
}
