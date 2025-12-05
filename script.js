
//navegações entre páginas

function irMensagem(){
  window.location.href="mensagemPostal.html";
}
function irSenha(){
  window.location.href="loginSenha.html";
}
function irCadastro(){
  window.location.href="cadastro.html";
}
function irDetalhes(){
  window.location.href="detalhes.html";
}
  function irConfirmEstudante(){
    window.location.href ="confirmacaoEstudante.html"
  }
  function irCarteiraEstudante(){
    window.location.href="carteiraEstudante.html"
  }
  function irEnemSISU(){
     window.location.href="enem&sisu.html"
  }
  function irDocumentos(){
window.location.href="documentos.html"
  }
  function irPasso(){
window.location.href="passo.html"
  }
  function irAssinarDoc(){
    window.location.href="assinarDoc.html"
  }
  function irCLT(){
    window.location.href="carteiraCLT.html"
  }
  function irPostal(){
    window.location.href="caixaPostal.html"
  }
  function irCertidao(){
    window.location.href="baixarCertidoes.html"
  }
  function irBeneficios(){
      window.location.href="beneficiosSociais.html"
  }
function irParaInicio() {
  const isEstudante = localStorage.getItem("isEstudante") === "true";

  if (isEstudante) {
    window.location.href = "inicioEstudante.html";
  } else {
    window.location.href = "inicioCidadao.html";
  }
}

//voltar
function voltar() {
  window.history.back();
}

//condição entrada menu estudante
let isEstudante = false;

const botoesSelect = document.querySelectorAll('.botaoSelect');


const botaoConcluir = document.querySelector('.botaoVerde');

botoesSelect.forEach(botao => {
    botao.addEventListener('click', function() {
        botoesSelect.forEach(btn => btn.classList.remove('selecionado'));
        this.classList.add('selecionado');
        isEstudante = (this.textContent.trim() === 'Sim');
localStorage.setItem("isEstudante", isEstudante);
    });
});

