function realizarCadastro() {
    const email = document.getElementById('email-cadastro').value
    const senha = senhaCriptografada()
    const idCadastro = document.getElementById('id_cadastro')

    let ObjCadastro = { id: parseInt(idCadastro.textContent), login: email, senha: senha };
    let url = `http://localhost:3000/cadastro`

    axios.post(url, ObjCadastro)
        .then(response => {
            console.log(response)
            if (response.data) {
                const msg = new Comunicado(response.data.codigo,
                    response.data.mensagem,
                    response.data.descricao)
                alert(msg.get())
                window.location.href = "../HTMLS/index.html"
            }
        })
        .catch(error => {
            if (error.response) {
                const msg = new Comunicado(error.response.data.codigo,
                    error.response.data.mensagem,
                    error.response.data.descricao)
                alert(msg.get())
            }
        })
}

function Comunicado (codigo, mensagem, descricao) {
    this.codigo = codigo
    this.mensagem = mensagem
    this.descricao = descricao

    this.get = function ()
    {
        return (this.codigo + " - " +
                this.mensagem +  " - " + 
                this.descricao)

    }
}

function senhaCriptografada() {
    const senha = document.getElementById('senha-cadastro').value
    const frase = "palavrasecreta"
    const encrypted = CryptoJS.AES.encrypt(`${senha}`, `${frase}`)

    return encrypted.toString()
}

function descriptografarSenha(senha) {
    const frase = "palavrasecreta"
    var decrypted = CryptoJS.AES.decrypt(senha, `${frase}`);

    return decrypted.toString(CryptoJS.enc.Utf8)
} 
