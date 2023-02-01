function sessaoUsuario() {
    const sessaoString = sessionStorage.getItem('_usuario_logado')
    console.log(sessaoString)
    if (sessaoString === null)
    {
        return 
    }
    else {
        const sessao = JSON.parse(sessaoString) 
        
        const div = document.querySelector('.options-header')
        const botaoCadastrar = document.querySelector('.botao-header-cadastro')
        const botaoLogin = document.querySelector('.botao-header-login')
        botaoCadastrar.remove()
        botaoLogin.remove()

        const usuario = document.createElement('a')
        usuario.setAttribute('class', 'botao-header-usuario')
        usuario.setAttribute('href', './perfil.html')
        usuario.innerHTML = `Bem-vindo, ${sessao.nome}`
        div.appendChild(usuario)
    }
}