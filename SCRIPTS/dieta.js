function sessaoDieta() {
    const sessaoString = sessionStorage.getItem('_usuario_logado')
    console.log(sessaoString)
    if (sessaoString !== null) {
        const div = document.querySelector('.flex-container-dieta')
        div.remove()
        montarDieta()
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

function montarDieta() {

    const main = document.querySelector('.main')

    main.innerText = ""
    const Progress = document.createElement('div')
    const progresso = document.createElement('img')
    const texto1 = document.createElement('h1')
    const opcoes = document.createElement('div')
    const cuttingDiv = document.createElement('div')
    const cuttingInput = document.createElement('input')
    const cuttingBox = document.createElement('label')
    const cuttingText = document.createElement('span')
    const cuttingImg = document.createElement('img')
    const cuttingSubText = document.createElement('span')
    const bulkingDiv = document.createElement('div')
    const bulkingInput = document.createElement('input')
    const bulkingBox = document.createElement('label')
    const bulkingText = document.createElement('span')
    const bulkingImg = document.createElement('img')
    const bulkingSubText = document.createElement('span')
    const manterpesoDiv = document.createElement('div')
    const manterpesoInput = document.createElement('input')
    const manterpesoBox = document.createElement('label')
    const manterpesoText = document.createElement('span')
    const manterpesoImg = document.createElement('img')
    const manterpesoSubText = document.createElement('span')

    const divButton = document.createElement('div')
    const nextButton = document.createElement('a')
    const previousButton = document.createElement('a')

    Progress.setAttribute('class', 'flex-progresso')
    progresso.setAttribute('src', '../imgs/progresso-1.png')
    progresso.setAttribute('class', 'imagem-progresso')

    texto1.setAttribute('class', 'texto-montar-dieta-1')
    texto1.innerHTML = `Selecione o objetivo da sua dieta...`
    Progress.appendChild(progresso)
    Progress.appendChild(texto1)

    opcoes.setAttribute('class', 'flex-opcoes-dieta')

    cuttingDiv.setAttribute('class', 'cuttingbox-div')
    cuttingBox.setAttribute('class', 'cuttingbox')
    cuttingInput.setAttribute('type', 'radio')
    cuttingInput.setAttribute('name', 'objetivo')
    cuttingInput.setAttribute('value', 'cutting')
    cuttingInput.setAttribute('alt', 'Opcao Cutting')
    cuttingText.setAttribute('class', 'texto-cutting')
    cuttingText.innerHTML = `Cutting`
    cuttingImg.setAttribute('src', '../imgs/lose-weight.png')
    cuttingSubText.setAttribute('class', 'subtexto-cutting')
    cuttingSubText.innerHTML = `Déficit Calórico <br> Redução do peso <br> Redução da gordura corporal <br> Perda mínima de massa muscular`
    cuttingBox.appendChild(cuttingText)
    cuttingBox.appendChild(cuttingInput)
    cuttingBox.appendChild(cuttingImg)
    cuttingBox.appendChild(cuttingSubText)
    cuttingDiv.appendChild(cuttingBox)

    bulkingDiv.setAttribute('class', 'bulkingbox-div')
    bulkingBox.setAttribute('class', 'bulkingbox')
    bulkingInput.setAttribute('type', 'radio')
    bulkingInput.setAttribute('name', 'objetivo')
    bulkingInput.setAttribute('value', 'bulking')
    bulkingInput.setAttribute('alt', 'Opcao bulking')
    bulkingText.setAttribute('class', 'texto-bulking')
    bulkingText.innerHTML = `Bulking`
    bulkingImg.setAttribute('src', '../imgs/gain-weight.png')
    bulkingSubText.setAttribute('class', 'subtexto-bulking')
    bulkingSubText.innerHTML = `Superávit calórico <br> Aumento do peso <br> Ganho de massa magra <br> Ganho mínimo de gordura`
    bulkingBox.appendChild(bulkingText)
    bulkingBox.appendChild(bulkingInput)
    bulkingBox.appendChild(bulkingImg)
    bulkingBox.appendChild(bulkingSubText)
    bulkingDiv.appendChild(bulkingBox)

    manterpesoDiv.setAttribute('class', 'manterpesobox-div')
    manterpesoBox.setAttribute('class', 'manterpesobox')
    manterpesoInput.setAttribute('type', 'radio')
    manterpesoInput.setAttribute('name', 'objetivo')
    manterpesoInput.setAttribute('value', 'manterpeso')
    manterpesoInput.setAttribute('alt', 'Opcao manter peso')
    manterpesoText.setAttribute('class', 'texto-manterpeso')
    manterpesoText.innerHTML = `Manter peso`
    manterpesoImg.setAttribute('src', '../imgs/balanced-diet.png')
    manterpesoSubText.setAttribute('class', 'subtexto-manterpeso')
    manterpesoSubText.innerHTML = `Consumo calórico = gasto calórico <br> Sem ganho de peso <br> Recuperação muscular suficiente <br> Manutenção da composição corporal`
    manterpesoBox.appendChild(manterpesoText)
    manterpesoBox.appendChild(manterpesoInput)
    manterpesoBox.appendChild(manterpesoImg)
    manterpesoBox.appendChild(manterpesoSubText)
    manterpesoDiv.appendChild(manterpesoBox)

    divButton.setAttribute('class', 'botoes-dieta')
    nextButton.setAttribute('onclick', 'gastoCalorico()')
    nextButton.innerHTML = "Próximo"
    nextButton.setAttribute('class', 'botao-next')
    previousButton.setAttribute('href', '../HTMLS/index.html')
    previousButton.innerHTML = "Voltar"
    previousButton.setAttribute('class', 'botao-previous')
    divButton.appendChild(nextButton)
    divButton.appendChild(previousButton)

    opcoes.appendChild(cuttingDiv)
    opcoes.appendChild(bulkingDiv)
    opcoes.appendChild(manterpesoDiv)

    main.appendChild(Progress)
    main.appendChild(opcoes)
    main.appendChild(divButton)

}

function gastoCalorico() {
    this.objetivo = document.querySelector('input[name="objetivo"]:checked')

    if (objetivo === null) {
        alert('Selecione o seu objetivo!')
        return
    } else {
        objetivo = this.objetivo.value
    }

    const img = document.querySelector('.imagem-progresso')
    img.setAttribute('src', '../imgs/progresso-2.png')
    const texto_antigo = document.querySelector('.texto-montar-dieta-1')
    texto_antigo.innerHTML = 'Insira alguns dados...'

    const botaoPrevious = document.querySelector('.botao-previous')
    botaoPrevious.setAttribute('onclick', 'montarDieta()')
    botaoPrevious.removeAttribute('href')

    const nextPrevious = document.querySelector('.botao-next')
    nextPrevious.setAttribute('onclick', 'divisaoMacros()')


    const div = document.querySelector('.flex-opcoes-dieta')
    div.innerText = ""
    div.setAttribute('class', 'flex-dados-dieta')

    const divAtividades = document.createElement('div')
    divAtividades.setAttribute('class', 'montardieta-atividades')
    const labelAtividade = document.createElement('label')
    labelAtividade.setAttribute('for', 'atividade')
    labelAtividade.innerHTML = 'Taxa de atividade : '
    const selectAtividade = document.createElement('select')
    selectAtividade.setAttribute('name', 'atividade')
    selectAtividade.setAttribute('id', 'atividade')
    const op1 = document.createElement('option')
    op1.setAttribute('value', 'sedentario')
    op1.innerHTML = 'Sedentário (pouco ou nenhum exercício)'
    const op2 = document.createElement('option')
    op2.setAttribute('value', 'levementeativo')
    op2.innerHTML = 'Levemente Ativo (exercício leve 1 a 3 dias por semana)'
    const op3 = document.createElement('option')
    op3.setAttribute('value', 'moderadamenteativo')
    op3.innerHTML = 'Moderadamente Ativo (execício moderado 3 a 5 dias por semana)'
    const op4 = document.createElement('option')
    op4.setAttribute('value', 'altamenteativo')
    op4.innerHTML = 'Altamente ativo (exercício pesado de 5 a 6 dias por semana)'
    const op5 = document.createElement('option')
    op5.setAttribute('value', 'extremamenteativo')
    op5.innerHTML = 'Extremamente ativo (exercício pesado diariamente e até 2 vezes por dia)'
    selectAtividade.appendChild(op1)
    selectAtividade.appendChild(op2)
    selectAtividade.appendChild(op3)
    selectAtividade.appendChild(op4)
    selectAtividade.appendChild(op5)
    labelAtividade.appendChild(selectAtividade)
    divAtividades.appendChild(labelAtividade)

    const botao = document.createElement('button')
    botao.setAttribute('class', 'calcularTMB-montardieta')
    botao.setAttribute('onclick', 'TMB()')
    botao.innerHTML = 'Calcular Gasto Calórico'

    divAtividades.appendChild(botao)
    div.appendChild(divAtividades)

}

function TMB() {
    if (document.getElementById('resultadoTMB-montardieta')) document.querySelector('#resultadoTMB-montardieta').remove()
    const div = document.querySelector('.montardieta-atividades')
    const selectAtividade = document.getElementById('atividade')
    const taxaAtividade = selectAtividade.options[selectAtividade.selectedIndex].value

    const sessaoString = sessionStorage.getItem('_usuario_logado')
    const sessao = JSON.parse(sessaoString)
    this.resultadoTMB

    if (sessao.sexo = 'masculino') // sexo masculino
    {
        switch (taxaAtividade) {
            case 'sedentario':
                resultadoTMB = TMBmasculino(1.2, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'levementeativo':
                resultadoTMB = TMBmasculino(1.375, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'moderadamenteativo':
                resultadoTMB = TMBmasculino(1.55, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'altamenteativo':
                resultadoTMB = TMBmasculino(1.725, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'extremamenteativo':
                resultadoTMB = TMBmasculino(1.9, sessao.peso, sessao.altura, sessao.idade)
                break;
            default:
                console.log('erro');
        }
    } else {
        switch (taxaAtividade) {
            case 'sedentario':
                resultadoTMB = TMBfeminino(1.2, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'levementeativo':
                resultadoTMB = TMBfeminino(1.375, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'moderadamenteativo':
                resultadoTMB = TMBfeminino(1.55, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'altamenteativo':
                resultadoTMB = TMBfeminino(1.725, sessao.peso, sessao.altura, sessao.idade)
                break;
            case 'extremamenteativo':
                resultadoTMB = TMBfeminino(1.9, sessao.peso, sessao.altura, sessao.idade)
                break;
            default:
                console.log('erro');
        }
    }
    const resultado = document.createElement("span")
    resultado.setAttribute('id', 'resultadoTMB-montardieta')
    resultado.setAttribute('class', 'resultadoTMB-montardieta')

    resultado.innerHTML = `Gasto calórico diário (taxa metabólica basal) : <br> ${resultadoTMB.toFixed(2)} Kcal`

    div.appendChild(resultado)
    return resultadoTMB
}

function TMBmasculino(fator, peso, altura, idade) {
    const TMB = fator * (66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)))
    return TMB
}

function TMBfeminino(fator, peso, altura, idade) {
    const TMB = fator * (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)))
    return TMB
}

function divisaoMacros() {
    if (document.querySelector('#resultadoTMB-montardieta')) {
        this.TMB = resultadoTMB

    } else {
        alert('Calcule a sua taxa metabólica basal diária !')
        return
    }

    const main = document.querySelector('.main')

    const divInfos = document.createElement('div')
    divInfos.setAttribute('class', 'div-infos-montardieta')

    this.caloriasDieta = dietaKcal(TMB, objetivo)

    const div = document.querySelector('.flex-dados-dieta')
    div.setAttribute('class', 'flex-montar-macros')
    div.innerText = ''

    const div2 = document.createElement('div')
    div2.setAttribute('class', 'div-dados-macros-dieta')

    const img = document.querySelector('.imagem-progresso')
    img.setAttribute('src', '../imgs/progresso-3.png')

    const texto = document.querySelector('.texto-montar-dieta-1')
    texto.innerHTML = `Vamos calcular alguns macros...`


    const calDieta = document.createElement('span')
    calDieta.setAttribute('class', 'caldieta')
    const quantidade = document.createElement('h1')
    quantidade.setAttribute('class', 'qtd-caldieta')
    quantidade.innerHTML = `${caloriasDieta} Kcal`
    calDieta.innerHTML = `Calorias da dieta :`
    calDieta.appendChild(quantidade)


    const macroProteinaDiv = document.createElement('div')
    macroProteinaDiv.setAttribute('class', 'div-macro-proteina')
    macroProteinaDiv.setAttribute('id', 'div-macro-proteina')
    const Proteina = document.createElement('span')
    Proteina.setAttribute('class', 'texto-proteina')
    Proteina.innerHTML = 'Quantidade de proteína '
    const macroProteina = document.createElement('input')
    const macroProteinaSpan = document.createElement('span')
    macroProteinaSpan.setAttribute('id', 'spanProteina')
    macroProteinaSpan.innerHTML = '1.6 g por Kg'
    macroProteina.setAttribute('class', 'range-proteina')
    macroProteina.setAttribute('type', 'range')
    macroProteina.setAttribute('id', 'macroproteina')
    macroProteina.setAttribute('name', 'macro-proteina')
    macroProteina.setAttribute('min', '1')
    macroProteina.setAttribute('max', '2')
    macroProteina.setAttribute('step', '0.1')
    macroProteina.setAttribute('value', '1.6')
    macroProteina.setAttribute('oninput', 'updateValor()')
    macroProteinaDiv.appendChild(Proteina)
    macroProteinaDiv.appendChild(macroProteina)
    macroProteinaDiv.appendChild(macroProteinaSpan)

    const macroGorduraDiv = document.createElement('div')
    macroGorduraDiv.setAttribute('class', 'div-macro-gordura')
    macroGorduraDiv.setAttribute('id', 'div-macro-gordura')
    const Gordura = document.createElement('span')
    Gordura.setAttribute('class', 'texto-gordura')
    Gordura.innerHTML = 'Quantidade de gordura '
    const macroGordura = document.createElement('input')
    const macroGorduraSpan = document.createElement('span')
    macroGorduraSpan.setAttribute('id', 'spanGordura')
    macroGorduraSpan.innerHTML = '0.5 g por Kg'
    macroGordura.setAttribute('class', 'range-gordura')
    macroGordura.setAttribute('type', 'range')
    macroGordura.setAttribute('id', 'macrogordura')
    macroGordura.setAttribute('name', 'macro-gordura')
    macroGordura.setAttribute('min', '0.3')
    macroGordura.setAttribute('max', '1')
    macroGordura.setAttribute('step', '0.1')
    macroGordura.setAttribute('value', '0.5')
    macroGordura.setAttribute('oninput', 'updateValor()')
    macroGorduraDiv.appendChild(Gordura)
    macroGorduraDiv.appendChild(macroGordura)
    macroGorduraDiv.appendChild(macroGorduraSpan)

    const macroCarboidratoDiv = document.createElement('div')
    macroCarboidratoDiv.setAttribute('class', 'div-macro-carboidrato')
    macroCarboidratoDiv.setAttribute('id', 'div-macro-carboidrato')
    const Carboidrato = document.createElement('span')
    Carboidrato.setAttribute('class', 'texto-carboidrato')
    Carboidrato.innerHTML = 'Quantidade de carboidrato '
    const macroCarboidratoSpan2 = document.createElement('span')
    macroCarboidratoSpan2.setAttribute('class', 'spanCarboidrato2')
    macroCarboidratoSpan2.setAttribute('id', 'spanCarboidrato2')
    const macroCarboidratoSpan = document.createElement('span')
    macroCarboidratoSpan.setAttribute('id', 'spanCarboidrato')
    macroCarboidratoSpan.innerHTML = 'A quantidade de carboidrato da sua dieta é a quantidade restante <br> de gramas retirando a de gordura e de proteína!'
    macroCarboidratoDiv.appendChild(Carboidrato)
    macroCarboidratoDiv.appendChild(macroCarboidratoSpan)
    macroCarboidratoDiv.appendChild(macroCarboidratoSpan2)

    const gasto = document.createElement('span')
    gasto.setAttribute('class', 'gasto-montar-dieta')
    gasto.innerHTML = `Gasto calórico : ${TMB.toFixed(2)} kcal `

    const divBotoes = document.querySelector('.botoes-dieta')
    const botaoNext = document.querySelector('.botao-next')
    botaoNext.setAttribute('onclick', 'revisao()')

    div.appendChild(macroProteinaDiv)
    div.appendChild(macroGorduraDiv)
    div.appendChild(macroCarboidratoDiv)
    divInfos.appendChild(calDieta)
    div2.appendChild(gasto)
    divInfos.appendChild(div2)
    main.appendChild(divInfos)
    main.appendChild(div)
    main.appendChild(divBotoes)
    updateValor()
}

function dietaKcal(gasto, objetivo) {
    let resultado
    switch (objetivo) {
        case 'cutting':
            resultado = gasto * 0.82
            break;
        case 'bulking':
            resultado = gasto * 1.09
            break;
        case 'manterpeso':
            resultado = gasto
            break;
        default:
            resultado = gasto
    }
    return Math.round(resultado.toFixed(2))
}

function updateValor() {
    const sessaoString = sessionStorage.getItem('_usuario_logado')
    const sessao = JSON.parse(sessaoString)
    const peso = sessao.peso
    const protein = document.getElementById('macroproteina').value
    const gordura = document.getElementById('macrogordura').value
    document.getElementById('spanProteina').innerHTML = `${protein} g por Kg`
    document.getElementById('spanGordura').innerHTML = `${gordura} g por Kg`

    this.kcalProtein = Math.round(peso * protein * 4)
    this.kcalGordura = Math.round(peso * gordura * 9)
    this.kcalCarbo = Math.round((caloriasDieta - kcalGordura - kcalProtein))
    const carboidrato = Math.round(kcalCarbo / 4)
    this.gProtein = Math.round(peso * protein)
    this.gGordura = Math.round(peso * gordura)
    this.gCarbo = carboidrato
    document.getElementById('spanCarboidrato2').innerHTML = ` ${carboidrato} g`
    updateDados()
    return
}

function updateDados() {
    const div = document.querySelector('.div-infos-montardieta')
    div.innerText = ''

    const div2 = document.createElement('div')
    div2.setAttribute('class', 'div-dados-macros-dieta')

    const calDieta = document.createElement('span')
    calDieta.setAttribute('class', 'caldieta')
    const quantidade = document.createElement('h1')
    quantidade.setAttribute('class', 'qtd-caldieta')
    quantidade.innerHTML = `${caloriasDieta} Kcal`
    calDieta.innerHTML = `Calorias da dieta :`
    calDieta.appendChild(quantidade)
    const gasto = document.createElement('span')
    gasto.setAttribute('class', 'gasto-montar-dieta')
    gasto.innerHTML = ` Gasto calórico : ${TMB.toFixed(2)} kcal `
    const gProteina = document.createElement('span')
    gProteina.setAttribute('class', 'proteina-montar-dieta')
    gProteina.innerHTML = ` Proteína : ${gProtein} g / ${kcalProtein} kcal `
    const gramaGordura = document.createElement('span')
    gramaGordura.setAttribute('class', 'gordura-montar-dieta')
    gramaGordura.innerHTML = ` Gordura : ${gGordura} g / ${kcalGordura} kcal `
    const gCarboidrato = document.createElement('span')
    gCarboidrato.setAttribute('class', 'carbo-montar-dieta')
    gCarboidrato.innerHTML = ` Carboidrato : ${gCarbo} g / ${kcalCarbo} kcal `

    div.appendChild(calDieta)
    div2.appendChild(gasto)
    div2.appendChild(gProteina)
    div2.appendChild(gramaGordura)
    div2.appendChild(gCarboidrato)
    div.appendChild(div2)
    return
}

function revisao() {
    sessionStorage.setItem('_dieta', JSON.stringify({
        objetivo: objetivo, calDieta: caloriasDieta, gastoCalorico: TMB.toFixed(2), gramaProteina: gProtein, gramaGordura: gGordura, gramaCarbo: gCarbo,
        kcalProteina: kcalProtein, kcalGordura: kcalGordura, kcalCarbo: kcalCarbo,
    }))

    const sessaoString = sessionStorage.getItem('_dieta')
    const sessao = JSON.parse(sessaoString)

    document.querySelector('.imagem-progresso').setAttribute('src', '../imgs/progresso-4.png')
    document.querySelector('.texto-montar-dieta-1').innerHTML = 'Revisão e finalização da dieta...'

    document.querySelector('.div-infos-montardieta').remove()
    document.querySelector('.flex-montar-macros').remove()

    const infos = document.createElement('div')
    infos.setAttribute('class', 'box-revisaoinfos')

    const botoes = document.querySelector('.botoes-dieta')

    const calDieta = document.createElement('span')
    calDieta.innerHTML = `Calorias da dieta : ${sessao.calDieta} Kcal`
    const gastoCalorico = document.createElement('span')
    gastoCalorico.innerHTML = `Gasto calórico : ${sessao.gastoCalorico} Kcal`
    const qtdProteina = document.createElement('span')
    qtdProteina.innerHTML = `Gramas de proteína diária : ${sessao.gramaProteina} g`
    const qtdGordura = document.createElement('span')
    qtdGordura.innerHTML = `Gramas de gordura diária : ${sessao.gramaGordura} g` 
    const qtdCarbo = document.createElement('span')
    qtdCarbo.innerHTML = `Gramas de carboidrato diário : ${sessao.gramaCarbo} g`

    const obj = document.createElement('span')
    obj.setAttribute('class', 'revisao-objetivo')
    switch(sessao.objetivo) {
        case 'manterpeso': 
            obj.innerHTML = `Manter Peso`
            break;
        case 'bulking': 
            obj.innerHTML = `Bulking`
            break;
        case 'cutting' :
            obj.innerHTML = `Cutting`
            break;
        default :
            obj.innerHTML = 'Objetivo não definido!'
    }

    const spanRefeicoes = document.createElement('span')
    spanRefeicoes.setAttribute('id', 'spanRefeicoes')
    spanRefeicoes.innerHTML = 'Quantidade de refeições : 3 '
    const qtdRefeicoes = document.createElement('input')
    qtdRefeicoes.setAttribute('class', 'range-refeicoes')
    qtdRefeicoes.setAttribute('type', 'range')
    qtdRefeicoes.setAttribute('id', 'qtdRefeicoes')
    qtdRefeicoes.setAttribute('name', 'qtdRefeicoes')
    qtdRefeicoes.setAttribute('min', '3')
    qtdRefeicoes.setAttribute('max', '6')
    qtdRefeicoes.setAttribute('step', '1')
    qtdRefeicoes.setAttribute('value', '3')
    qtdRefeicoes.setAttribute('oninput', 'updateRefeicoes()')
    const divSelecaoRefeicoes = document.createElement('div')
    divSelecaoRefeicoes.setAttribute('class', 'divSelecaoRefeicoes')
    divSelecaoRefeicoes.appendChild(spanRefeicoes)
    divSelecaoRefeicoes.appendChild(qtdRefeicoes)

    infos.appendChild(obj)
    infos.appendChild(calDieta)
    infos.appendChild(gastoCalorico)
    infos.appendChild(qtdProteina)
    infos.appendChild(qtdGordura)
    infos.appendChild(qtdCarbo)
    infos.appendChild(divSelecaoRefeicoes)

    const divCardsRefeicoes = document.createElement('div')
    divCardsRefeicoes.setAttribute('class', 'div-cards-refeicoes')

    const divInfosComp = document.createElement('div')
    divInfosComp.setAttribute('class', 'div-infos-comp')
    const CompCarbo = document.createElement('span')
    CompCarbo.innerHTML = `Carboidrato : 0 g / ${sessao.gramaCarbo} g`
    CompCarbo.setAttribute('class', 'comp-carbo')
    const CompProt = document.createElement('span')
    CompProt.innerHTML = `Proteína : 0 g / ${sessao.gramaProteina} g`
    CompProt.setAttribute('class', 'comp-prot')
    const CompGord = document.createElement('span')
    CompGord.innerHTML = `Gordura : 0 g / ${sessao.gramaGordura} g`
    CompGord.setAttribute('class', 'comp-gord')
    const CompKcal = document.createElement('span')
    CompKcal.innerHTML = `Calorias : 0 kcal / ${sessao.calDieta} kcal`
    CompKcal.setAttribute('class', 'comp-kcal')   
    divInfosComp.appendChild(CompKcal)
    divInfosComp.appendChild(CompProt)
    divInfosComp.appendChild(CompGord)
    divInfosComp.appendChild(CompCarbo)
    
    const main = document.querySelector('.main')
    main.insertBefore(infos, botoes)
    main.insertBefore(divCardsRefeicoes, botoes)
    main.insertBefore(divInfosComp, botoes)
    updateRefeicoes()
}

function updateRefeicoes() {
    const refeicoes = document.getElementById('qtdRefeicoes').value
    const span = document.getElementById('spanRefeicoes')
    span.innerHTML = `Quantidade de refeições : ${refeicoes}`
    updateCardsRefeicoes(refeicoes)
    return
}
 
function updateCardsRefeicoes(qtd) {
    const div = document.querySelector('.div-cards-refeicoes')
    if (div.querySelector('div') !== null) {
        div.innerText = ''
    }
    for(let i = 0; i< qtd; i++)
    {
        const divRefeicao = document.createElement('div')
        divRefeicao.setAttribute('class', 'card-refeicao')
        const titulo = document.createElement('span')
        titulo.setAttribute('class', 'nome-refeicao')
        titulo.innerHTML =  `Refeição ${i+1}`
        divRefeicao.appendChild(titulo)
        div.appendChild(divRefeicao)
    }
    return 
}