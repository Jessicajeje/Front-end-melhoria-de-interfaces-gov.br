//menu
const menu = document.querySelector('.menu-lateral');
const botao = document.querySelector('.menu-btn');

// abrir/fechar menu ao clicar no botão
botao.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.toggle('aberto');
});

// fechar ao clicar fora do menu
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !botao.contains(e.target)) {
    menu.classList.remove('aberto');
  }
});
