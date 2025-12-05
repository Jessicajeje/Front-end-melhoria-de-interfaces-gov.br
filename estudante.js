//para o botão "Concluir"
botaoConcluir.addEventListener('click', function() {
    if (isEstudante) {
        
        alert('Cadastro confirmado, redirecionando para menu Estudantil govbr.');
        window.location.href = 'inicioEstudante.html';
    } else {
        alert('Cadastro confirmado, redirecionando para menu Cidadão govbr.');
       window.location.href="inicioCidadao.html"
    }
});
