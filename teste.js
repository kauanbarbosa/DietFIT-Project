const oracledb = require('oracledb')
const CryptoJS = require('crypto-js')

function BD() {
    this.getconexao = async function () {
        try {
            const conexao = await oracledb.getConnection({ user: 'SYSTEM', password: 'ospiri', connectionString: 'localhost/xe' })
            global.conexao = conexao
            return conexao;
        } catch (err) {
            console.log(`Não foi possível estabelecer a conexão com o banco de dados!${err}`)
            process.exit(1)
        }
    }

    this.estruturandoCadastro = async function () {
        const conexao = await this.getconexao()

        if (conexao == undefined) return null;
        const sql = `CREATE TABLE CADASTRO_USUARIOS (
            ID_CADASTRO number(20),
            LOGIN_CADASTRO varchar2(64),
            SENHA_CADASTRO varchar2(64),
            PRIMARY KEY (ID_CADASTRO))`
        try {
            await conexao.execute(sql)
            return true
        } catch (erro) {
            console.log(`Não foi possível criar a tabela de Cadastros! ${erro}`)
            return false
        }
    }

    this.estruturandoLogin = async function () {
        const conexao = await this.getconexao()

        if (conexao == undefined) return null
        const sql = `CREATE TABLE DADOS_USUARIOS (
            CPF_USUARIO varchar2(64),
            EMAIL_USUARIO varchar2(64),
            NOME_USUARIO varchar(80),
            IDADE_USUARIO number(3),
            PESO_USUARIO varchar2(7),
            ALTURA_USUARIO number(3),
            PESCOCO_USUARIO varchar2(7),
            CINTURA_USUARIO varchar2(7),
            QUADRIL_USUARIO varchar2(7),
            SEXO_USUARIO varchar(10),
            PRIMARY KEY (CPF_USUARIO))`
        try {
            await conexao.execute(sql)
            return true
        } catch (erro) {
            console.log(`Não foi possível criar a tabela de Dados! ${erro}`)
            return false
        }
    }
}


function Cadastros(bd) {
    this.bancodedados = bd;

    this.cadastrar = async function (cadastro) {
        const conexao = await this.bancodedados.getconexao()

        const sql = "INSERT INTO CADASTRO_USUARIOS (ID_CADASTRO, LOGIN_CADASTRO, SENHA_CADASTRO)" + "VALUES (:0, :1, :2)"
        const dados = [cadastro.id, cadastro.login, cadastro.senha]
        console.log(sql, dados)
        await conexao.execute(sql, dados)

        const sql1 = "COMMIT"
        await conexao.execute(sql1)
    }
}

function Logins(bd) {
    this.bancodedados = bd;

    this.validarLogin = async function (login) {
        const conexao = await this.bancodedados.getconexao()

        const sql = `SELECT SENHA_CADASTRO FROM CADASTRO_USUARIOS WHERE LOGIN_CADASTRO = :0`
        const dados = [login.login]

        console.log(sql, dados)
        const password = await conexao.execute(sql, dados)
        return password.rows
    }

    this.validarDados = async function (login) {
        const conexao = await this.bancodedados.getconexao()

        const sql = `SELECT * FROM DADOS_USUARIOS WHERE EMAIL_USUARIO = :0`
        const dados = [login.login]

        console.log(sql, dados)
        const resultadoDados = await conexao.execute(sql, dados)
        return resultadoDados.rows
    }

    this.registrardados = async function (dados) {
        const conexao = await this.bancodedados.getconexao()

        const sql = `INSERT INTO DADOS_USUARIOS` + ` VALUES (:0, :1, :2, :3, :4 , :5, :6, :7, :8, :9)`
        const dado = [dados.cpf, dados.email, dados.nome, dados.idade, dados.peso, dados.altura, dados.pescoco, dados.cintura, dados.quadril, dados.sexo]
        console.log(sql, dado)
        await conexao.execute(sql, dado)

        const sql1 = "COMMIT"
        await conexao.execute(sql1)
    }
}

function middleWareGlobal(req, res, next) {
    console.time('Requisição'); // marca o início da requisição
    console.log('Método: ' + req.method + '; URL: ' + req.url); // retorna qual o método e url foi chamada

    next(); // função que chama as próximas ações

    console.log('Finalizou'); // será chamado após a requisição ser concluída

    console.timeEnd('Requisição'); // marca o fim da requisição
}

async function cadastro(req, res) {
    console.log(req.body)
    if (req.body.login == '' || req.body.senha == '') {
        const erro1 = new Comunicado('DdI', 'Dados imcompletos',
            'Não foram informados todos os dados cadastrais!');
        return res.status(422).json(erro1)
    }

    const cadastro = new Cadastro(req.body.id, req.body.login, req.body.senha);

    try {
        await global.cadastro.cadastrar(cadastro);
        const sucesso = new Comunicado('CBS', 'Cadastro bem sucedido!',
            'O cadastro foi realizado com sucesso!')
        return res.status(201).json(sucesso)
    } catch (erro) {
        console.log(`Erro no cadastro de um novo cliente! ${erro}`)
        const msgErro = new Comunicado('Erro', 'Falha no cadastro',
            'Ocorreu uma falha no cadastro!')
        return res.status(409).json(msgErro)
    }
}

async function realizarLogin(req, res) {
    const login = new Login(req.params.email, req.params.senha)

    let validacao = await global.login.validarLogin(login)
    const resultado = validarSenha(validacao, login.senha)
    console.log(resultado)
    if (resultado === 1) {
        const dados = await global.login.validarDados(login)
        if (dados.length === 0) {
            const resposta = new Dados('null', login.login, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null')
            return res.status(201).json(resposta)
        }
        const sucesso = new Comunicado('LBS', 'Login bem sucedido!',
            'O login foi realizado com sucesso!')
        return res.status(201).json(sucesso)
    }
    if (resultado === 0) {
        const senhaInvalida = new Comunicado('SI', 'Senha Incorreta',
            'A senha digitada está incorreta!')
        return res.status(409).json(senhaInvalida)
    }
}

async function realizarRegistroDados(req, res) {
    const dados = new Dados(req.body.cpf, req.body.email, req.body.nome, req.body.idade, req.body.peso, req.body.altura, req.body.pescoco, req.body.cintura, req.body.quadril, req.body.sexo)

    try {
        await global.login.registrardados(dados)
        const sucesso = new Comunicado('RCS', 'Registros com sucesso!',
        'Os dados foram registrados com sucesso!')
    return res.status(201).json(sucesso)
    } catch(erro)
    {
        console.log(`Erro no registro de novos dados! ${erro}`)
        const msgErro = new Comunicado('Erro', 'Falha no registro',
            'Ocorreu uma falha no registro dos dados!')
        return res.status(409).json(msgErro)
    }
}

function Cadastro(id, login, senha) {
    this.id = id
    this.login = login
    this.senha = senha
}

function Login(login, senha) {
    this.login = login
    this.senha = senha
}

function Comunicado(codigo, mensagem, descricao) {
    this.codigo = codigo;
    this.mensagem = mensagem;
    this.descricao = descricao;
}

function Dados(cpf, email, nome, idade, peso, altura, pescoco, cintura, quadril, sexo) {
    this.cpf = cpf
    this.email = email
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.pescoco = pescoco
    this.cintura = cintura
    this.quadril = quadril
    this.sexo = sexo
}

async function AtivacaoDoServidor() {
    const banco = new BD()
    await banco.estruturandoCadastro()
    await banco.estruturandoLogin()
    global.cadastro = new Cadastros(banco)
    global.login = new Logins(banco)

    const express = require('express')
    const app = express()
    const cors = require('cors')

    app.use(express.json())
    app.use(cors())
    app.use(middleWareGlobal)

    app.post('/cadastro', cadastro)
    app.get('/login/:email/:senha', realizarLogin)
    app.post('/dados', realizarRegistroDados)

    console.log('Servidor ativo na porta 3000...')
    app.listen(3000)
}

AtivacaoDoServidor()


function validarSenha(senhaOficial, senhaDigitada) {
    var senha = String(senhaOficial)
    const frase = 'palavrasecreta'
    var decrypted = CryptoJS.AES.decrypt(senha, `${frase}`);

    if (decrypted.toString(CryptoJS.enc.Utf8) == senhaDigitada) {
        return 1
    } else {
        return 0
    }
}