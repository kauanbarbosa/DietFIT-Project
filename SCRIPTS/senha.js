function exibirSenha() {
    const senha = document.getElementById('senha-cadastro')
    const botao = document.getElementById('botao-exibirsenha')
    senha.setAttribute('type', 'text')
    botao.setAttribute('onclick', 'esconderSenha()')
    botao.innerHTML = `<img src="../imgs/hidden.png" class="exibirSenha">`
}

function esconderSenha() {
    const senha = document.getElementById('senha-cadastro')
    const botao = document.getElementById('botao-exibirsenha')
    senha.setAttribute('type', 'password')
    botao.setAttribute('onclick', 'exibirSenha()')
    botao.innerHTML = `<img src="../imgs/eye.png" class="exibirSenha">`
}

function exibirSenhaLogin() {
    const senha = document.getElementById('senha-login')
    const botao = document.getElementById('botao-exibirsenha')
    senha.setAttribute('type', 'text')
    botao.setAttribute('onclick', 'esconderSenhaLogin()')
    botao.innerHTML = `<img src="../imgs/hidden.png" class="exibirSenha">`
}

function esconderSenhaLogin() {
    const senha = document.getElementById('senha-login')
    const botao = document.getElementById('botao-exibirsenha')
    senha.setAttribute('type', 'password')
    botao.setAttribute('onclick', 'exibirSenhaLogin()')
    botao.innerHTML = `<img src="../imgs/eye.png" class="exibirSenha">`
}