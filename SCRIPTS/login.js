function verificarLogin() {
    const senha = document.getElementById('senha-login').value
    const email = document.getElementById('email-login').value

    if (senha === '' || email === '') {
        const msg = new Comunicado('DdI', 'Dados imcompletos', 'Digite todos os dados!')
        alert(msg.get())
        return
    }

    const url = `http://localhost:3000/login/${email}/${senha}`

    axios.get(url)
        .then(response => {
            if (response.data) {
                if (response.data.cpf === 'null') {
                    receberDados(response.data.email)
                } else {
                    sessionStorage.setItem('_usuario_logado', JSON.stringify(response.data))
                    window.location.href = "../index.html"
                }
            }
        })
        .catch(error => {
            console.log(error)
            if (error.response) {
                const msg = new Comunicado(error.response.data.codigo,
                    error.response.data.mensagem,
                    error.response.data.descricao)
                alert(msg.get())
            }
        })
}

function Comunicado(codigo, mensagem, descricao) {
    this.codigo = codigo
    this.mensagem = mensagem
    this.descricao = descricao

    this.get = function () {
        return (this.codigo + " - " +
            this.mensagem + " - " +
            this.descricao)

    }
}

function receberDados(login) {
    const main = document.querySelector('.main')
    const footer = document.querySelector('.footer-login')
    footer.setAttribute('class', 'footer-dados')
    var parteLogin = document.getElementById('painel-login')
    parteLogin.remove()
    const divDados = document.createElement('div')
    const email = document.createElement('span')
    const cpf = document.createElement('input')
    const nome = document.createElement('input')
    const idade = document.createElement('input')
    const peso = document.createElement('input')
    const altura = document.createElement('input')
    const pescoco = document.createElement('input')
    const cintura = document.createElement('input')
    const quadril = document.createElement('input')
    const divSexo = document.createElement('div')
    const sexoLabel = document.createElement('label')
    const opcaoSexo = document.createElement('select')
    const SexoM = document.createElement('option')
    const SexoF = document.createElement('option')
    const botaoSubmit = document.createElement('button')
    divDados.setAttribute('class', 'painel-receberDados')

    email.setAttribute('class', 'email-painel-dados')
    email.setAttribute('id', 'email-login')
    email.innerHTML = `${login}`

    cpf.setAttribute('class', 'cpf-painel-dados')
    cpf.setAttribute('id', 'cpf-login')
    cpf.setAttribute('oninput', 'mascara(this)')
    cpf.setAttribute('type', 'text')
    cpf.setAttribute('placeholder', 'CPF')

    nome.setAttribute('class', 'nome-painel-dados')
    nome.setAttribute('id', 'nome-login')
    nome.setAttribute('type', 'text')
    nome.setAttribute('placeholder', 'Nome')

    idade.setAttribute('class', 'idade-painel-dados')
    idade.setAttribute('id', 'idade-login')
    idade.setAttribute('type', 'number')
    idade.setAttribute('placeholder', 'Idade (Anos)')

    peso.setAttribute('class', 'peso-painel-dados')
    peso.setAttribute('id', 'peso-login')
    peso.setAttribute('type', 'number')
    peso.setAttribute('placeholder', 'Peso (KG)')

    altura.setAttribute('class', 'altura-painel-dados')
    altura.setAttribute('id', 'altura-login')
    altura.setAttribute('type', 'number')
    altura.setAttribute('placeholder', 'Altura (CM)')

    pescoco.setAttribute('class', 'pescoco-painel-dados')
    pescoco.setAttribute('id', 'pescoco-login')
    pescoco.setAttribute('type', 'number')
    pescoco.setAttribute('placeholder', 'Pescoço (CM)')

    cintura.setAttribute('class', 'cintura-painel-dados')
    cintura.setAttribute('id', 'cintura-login')
    cintura.setAttribute('type', 'number')
    cintura.setAttribute('placeholder', 'Cintura (CM)')

    quadril.setAttribute('class', 'quadril-painel-dados')
    quadril.setAttribute('id', 'quadril-login')
    quadril.setAttribute('type', 'number')
    quadril.setAttribute('placeholder', 'Quadril (CM)')

    divSexo.setAttribute('class', 'div-opcao-sexo')
    sexoLabel.setAttribute('for', 'opcao-sexo')
    sexoLabel.setAttribute('id', 'listaSexo')
    sexoLabel.innerHTML = 'Sexo :'
    opcaoSexo.setAttribute('name', 'opcao-sexo')
    opcaoSexo.setAttribute('id', 'opcao-sexo')
    SexoM.setAttribute('value', 'masculino')
    SexoM.innerHTML = 'Masculino'
    SexoF.setAttribute('value', 'feminino')
    SexoF.innerHTML = 'Feminino'
    opcaoSexo.appendChild(SexoM)
    opcaoSexo.appendChild(SexoF)
    divSexo.appendChild(sexoLabel)
    divSexo.appendChild(opcaoSexo)

    botaoSubmit.setAttribute('class', 'botao-submit-dados')
    botaoSubmit.setAttribute('id', 'botao-submit-dados')
    botaoSubmit.setAttribute('onclick', `registrarDados()`)
    botaoSubmit.innerHTML = 'Registrar'

    divDados.appendChild(email)
    divDados.appendChild(cpf)
    divDados.appendChild(nome)
    divDados.appendChild(idade)
    divDados.appendChild(peso)
    divDados.appendChild(altura)
    divDados.appendChild(pescoco)
    divDados.appendChild(cintura)
    divDados.appendChild(quadril)
    divDados.appendChild(divSexo)
    divDados.appendChild(botaoSubmit)

    main.appendChild(divDados)
}

function mascara(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}

function registrarDados() {
    const validacao = validarDados()
    console.log(validacao)
    if (validacao === true)
    {
        const cpf = document.getElementById('cpf-login').value
        const email = document.getElementById('email-login').textContent
        const nome = document.getElementById('nome-login').value
        const idade = document.getElementById('idade-login').value
        const peso = document.getElementById('peso-login').value
        const altura = document.getElementById('altura-login').value
        const pescoco = document.getElementById('pescoco-login').value
        const cintura = document.getElementById('cintura-login').value
        const quadril = document.getElementById('quadril-login').value
        const listaSexo = document.getElementById('opcao-sexo')
        const opcaoSexo = listaSexo.options[listaSexo.selectedIndex].value
        console.log(opcaoSexo)

        const ObjDados = { cpf: cpf, email: email, nome: nome, idade: idade, peso: peso, altura: altura, pescoco: pescoco, cintura: cintura, quadril: quadril, sexo: opcaoSexo}
        const url = `http://localhost:3000/dados`

        axios.post(url, ObjDados)
            .then(response => {
                const msg = new Comunicado(response.data.codigo,
                    response.data.mensagem,
                    response.data.descricao)
                alert(msg.get())
                window.location.href = "../index.html"
            })
            .catch(error => {
                if (error.response) {
                    const msg = new Comunicado(error.response.data.codigo,
                        error.response.data.mensagem,
                        error.response.data.descricao)
                    alert(msg.get())
                    window.location.href = './login.html'
                }
            })
    }
}

function validarDados() {
    var cont = 0
    const cpf = document.getElementById('cpf-login')
    const nome = document.getElementById('nome-login')
    const idade = document.getElementById('idade-login')
    const peso = document.getElementById('peso-login')
    const altura = document.getElementById('altura-login')
    const pescoco = document.getElementById('pescoco-login')
    const cintura = document.getElementById('cintura-login')
    const quadril = document.getElementById('quadril-login')
    if (cpf.value === "" || cpf.value.length < 14)
    {
        cpf.style.border = "solid 2px red"
        cont++
    } else {
        cpf.style.border = ""
        cpf.style.border = "solid 0px 0px 1px 0px white"
    }
    if (nome.value === '')
    {
        nome.style.border = "solid 2px red"
        cont++
    } else {
        nome.style.border = ""
        nome.style.border = "solid 0px 0px 1px 0px white"
    }
    if (idade.value === '' || idade.value > 150)
    {
        idade.style.border = 'solid 2px red'
        cont++
    } else {
        idade.style.border = ""
        idade.style.border = "solid 0px 0px 1px 0px white"
    }
    if (peso.value === '' || peso.value > 200)
    {
        peso.style.border = "solid 2px red"
        cont++
    } else {
        peso.style.border = ""
        peso.style.border = "solid 0px 0px 1px 0px white"
    }
    if (altura.value === '' || altura.value > 300)
    {
        altura.style.border = "solid 2px red"
        cont++
    } else {
        altura.style.border = ""
        altura.style.border = "solid 0px 0px 1px 0px white"
    }
    if (pescoco.value === '' || pescoco.value > 200)
    {
        pescoco.style.border = "solid 2px red"
        cont++
    } else {
        pescoco.style.border = ""
        pescoco.style.border = "solid 0px 0px 1px 0px white"
    }
    if (cintura.value === '' || cintura.value > 300)
    {
        cintura.style.border = "solid 2px red"
        cont++
    } else {
        cintura.style.border = ""
        cintura.style.border = "solid 0px 0px 1px 0px white"
    }
    if (quadril.value === '' || quadril.value > 500)
    {
        quadril.style.border = "solid 2px red"
        cont++
    } else {
        quadril.style.border = ""
        quadril.style.border = "solid 0px 0px 1px 0px white"
    }
    if( cont > 0)
    {
        return false
    } else {
        return true
    }
}