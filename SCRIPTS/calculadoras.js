function ocultar() {
    const display = document.querySelector('#resultado')
    display.innerHTML = ''
    const calculadoraBF = document.getElementById('calculadoraBF')
    const calculadoraIMC = document.getElementById('calculadoraIMC')
    const calculadoraTMB = document.getElementById('calculadoraTMB')
    calculadoraIMC.setAttribute('onclick', 'calculoIMC()')
    calculadoraBF.setAttribute('onclick', 'calculoBF()')
    calculadoraTMB.setAttribute('onclick', 'calculoTMB()')
}

function calculoIMC() {
    const calculadoraBF = document.getElementById('calculadoraBF')
    const calculadoraIMC = document.getElementById('calculadoraIMC')
    const calculadoraTMB = document.getElementById('calculadoraTMB')
    const peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    altura = altura/100
    console.log(altura)
    const resultado = document.getElementById('resultado')
    if (peso === '' || altura === '0') { 
        console.log('aqui')
        calculadoraBF.setAttribute('onclick', 'calculoBF()')
        calculadoraTMB.setAttribute('onclick', 'calculoTMB()')
        calculadoraIMC.setAttribute('onclick', 'ocultar()')
        resultado.innerHTML = 'Digite um valor válido!'
        resultado.style.color = 'red'
        calculadoraIMC.setAttribute('onclick', 'ocultar()')
        return 
    }
    const IMC  = peso / (altura ** 2)
    resultado.style.color = 'green'
    resultado.innerHTML = `IMC : ${IMC.toFixed(2)}`
    calculadoraBF.setAttribute('onclick', 'calculoBF()')
    calculadoraTMB.setAttribute('onclick', 'calculoTMB()')
    calculadoraIMC.setAttribute('onclick', 'ocultar()')
}

function exibirBFMasculino() {
    document.getElementById('labelsexoM').innerHTML = '<img src="../imgs/masculino-selected.png" class="masculino-imagem">'
    document.getElementById('labelsexoF').innerHTML = '<img src="../imgs/feminino.png" class="feminino-imagem">'
    document.getElementById('idade').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('pescocoBF').value = ''
    document.getElementById('cinturaBF').value = ''
    document.getElementById('quadrilBF').value = ''
    const quadril = document.getElementById('quadrilBF')
    quadril.setAttribute('class', 'oculto')
}

function exibirBFFeminino() {
    document.getElementById('labelsexoM').innerHTML = '<img src="../imgs/masculino.png" class="masculino-imagem">'
    document.getElementById('labelsexoF').innerHTML = '<img src="../imgs/feminino-selected.png" class="feminino-imagem">'
    document.getElementById('idade').value = ''
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
    document.getElementById('pescocoBF').value = ''
    document.getElementById('cinturaBF').value = ''
    document.getElementById('quadrilBF').value = ''
    const quadril = document.getElementById('quadrilBF')
    quadril.setAttribute('class', 'quadrilBF')
}

function calculoBF() {
    let quadril = document.getElementById('quadrilBF')
    const botao = document.getElementById('calculadoraBF')
    const botao2 = document.getElementById('calculadoraIMC')
    const botao3 = document.getElementById('calculadoraTMB')
    if (quadril.getAttribute('class') === 'oculto') // SEXO MASCULINO
    {
        const cintura = document.getElementById('cinturaBF').value
        const altura = document.getElementById('altura').value
        const pescoco = document.getElementById('pescocoBF').value
        const resultado = document.getElementById('resultado')

        if (cintura == '' || altura == '' || pescoco == '') {
            resultado.innerHTML = 'Valores inválidos'
            resultado.style.color = 'red';
            resultado.setAttribute('class', 'resultado')
        } else {
            const BF = (495 / (1.0324 - 0.19077*(Math.log10(parseInt(cintura)-parseInt(pescoco))) + 0.15456*(Math.log10(parseInt(altura))))) - 450 
            console.log(BF)
            resultado.innerHTML = `BF: ${BF.toFixed(2)}%`
            resultado.style.color = 'green';
            resultado.setAttribute('class', 'resultado')
        }   
    } else {
        quadril = quadril.value
        const cintura = document.getElementById('cinturaBF').value
        const altura = document.getElementById('altura').value
        const pescoco = document.getElementById('pescocoBF').value
        const resultado = document.getElementById('resultado')

        if (cintura == '' || altura == '' || pescoco == '' || quadril == '') {
            resultado.innerHTML = 'Valores inválidos'
            resultado.style.color = 'red';
            resultado.setAttribute('class', 'resultado')
        } else {
            const BF = (495 / (1.29579-(0.35004*(Math.log10(parseInt(cintura)+parseInt(quadril)-parseInt(pescoco))))+(0.22100*(Math.log10(parseInt(altura)))))) - 450
            
            resultado.innerHTML = `BF: ${BF.toFixed(2)}%`
            resultado.style.color = 'green';
            resultado.setAttribute('class', 'resultado')
        }
    }
    botao2.setAttribute('onclick', 'calculoIMC()')
    botao.setAttribute('onclick', 'ocultar()')
    botao3.setAttribute('onclick', 'calculoTMB()')
}


function calculoTMB() {
    const idade = document.getElementById('idade').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const quadril = document.getElementById('quadrilBF')
    const listaAtividade = document.getElementById('atividade')
    const taxaAtividade = listaAtividade.options[listaAtividade.selectedIndex].value
    const resultado = document.getElementById('resultado')
    let resultadoTMB

    const botao1 = document.getElementById('calculadoraIMC')
    const botao2 = document.getElementById('calculadoraBF')
    const botao3 = document.getElementById('calculadoraTMB')

    if (quadril.getAttribute('class') === 'oculto') // SEXO MASCULINO
    {
        switch (taxaAtividade) {
            case 'sedentário': 
                resultadoTMB = TMBmasculino(1.2, peso, altura, idade)
                break;
            case 'levementeativo':
                resultadoTMB = TMBmasculino(1.375, peso, altura, idade)
                break;
            case 'moderadamenteativo':
                resultadoTMB = TMBmasculino(1.55, peso, altura, idade)
                break;
            case 'altamenteativo':
                resultadoTMB = TMBmasculino(1.725, peso, altura, idade)
                break;
            case 'extremamenteativo':
                resultadoTMB = TMBmasculino(1.9, peso, altura, idade)
                break;
            default :
                console.log('erro');
        }
    } else {
        switch (taxaAtividade) {
            case 'sedentário': 
                resultadoTMB = TMBfeminino(1.2, peso, altura, idade)
                break;
            case 'levementeativo':
                resultadoTMB = TMBfeminino(1.375, peso, altura, idade)
                break;
            case 'moderadamenteativo':
                resultadoTMB = TMBfeminino(1.55, peso, altura, idade)
                break;
            case 'altamenteativo':
                resultadoTMB = TMBfeminino(1.725, peso, altura, idade)
                break;
            case 'extremamenteativo':
                resultadoTMB = TMBfeminino(1.9, peso, altura, idade)
                break;
            default:
                console.log('erro');
        }
    }
    if (peso == '' || idade == '' || altura == '')
    {
        resultado.innerHTML = 'Digite todos os valores!'
        resultado.style.color = 'red'
        resultado.setAttribute('class', 'resultado')
    } else {
        resultado.innerHTML = `TMB: ${resultadoTMB.toFixed(2)} Kcal`
        resultado.style.color = 'green'
        resultado.setAttribute('class', 'resultado')
    }
    botao1.setAttribute('onclick', 'calculoIMC()')
    botao2.setAttribute('onclick', 'calculoBF()')
    botao3.setAttribute('onclick', 'ocultar()')
}

function TMBmasculino(fator, peso, altura, idade) {
    const TMB = fator * ( 66 + ((13.7 * peso) + (5 * altura) - (6.8 * idade)))
    return TMB
}

function TMBfeminino(fator, peso, altura, idade) {
    const TMB = fator * ( 655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)))
    return TMB
}