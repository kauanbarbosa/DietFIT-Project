function perfilUsuario() {
    const div = document.querySelector('.flex-container-perfil')
    const cpf = document.getElementById('cpf-perfil') 
    const email = document.getElementById('email-perfil') 
    const nome = document.getElementById('nome-perfil') 
    const idade = document.getElementById('idade-perfil') 
    const peso = document.getElementById('peso-perfil') 
    const altura = document.getElementById('altura-perfil') 
    const pescoco = document.getElementById('pescoco-perfil') 
    const cintura = document.getElementById('cintura-perfil') 
    const quadril = document.getElementById('quadril-perfil') 
    const sexo = document.getElementById('sexo-perfil') 

    const dados = sessionStorage.getItem('_usuario_logado')
    const dados2 = JSON.parse(dados)

    cpf.innerHTML = `<img src="../imgs/licenca.png"> CPF : ${dados2.cpf}`
    nome.innerHTML = `<img src="../imgs/do-utilizador.png"> Nome : ${dados2.nome}`
    email.innerHTML = `<img src="../imgs/o-email.png"> Email : ${dados2.email}`
    idade.innerHTML = `<img src="../imgs/idade.png"> Idade : ${dados2.idade} anos`
    peso.innerHTML = `<img src="../imgs/perda-de-peso.png"> Peso : ${dados2.peso} kg`
    altura.innerHTML = `<img src="../imgs/altura.png"> Altura : ${dados2.altura} cm`
    pescoco.innerHTML = `<img src="../imgs/pescoco.png"> Pescoço : ${dados2.pescoco} cm`
    cintura.innerHTML = `<img src="../imgs/fita-metrica.png"> Cintura : ${dados2.cintura} cm`
    quadril.innerHTML = `<img src="../imgs/ancas.png"> Quadril : ${dados2.quadril} cm`
    sexo.innerHTML = `<img src="../imgs/sexos.png"> Sexo : ${dados2.sexo}`
}