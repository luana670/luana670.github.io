var tabuleiro = document.querySelector('.tabuleiro')
var quadrados = document.querySelectorAll('.quadrado')
var vezDoX = true
tabuleiro.classList.add('x');

var player1 = document.querySelector('#player1')
var player2 = document.querySelector('#player2')


function jogar(quadradoClicado) {
    let quadrado = quadradoClicado.target;
    if (vezDoX == true) {
        quadrado.classList.add('x');
        tabuleiro.classList.remove('x')
        tabuleiro.classList.add('circ')
        vezDoX = false
    } else {
        quadrado.classList.add('circ')
        tabuleiro.classList.remove('circ')
        tabuleiro.classList.add('x')
        vezDoX = true
    }
    let xGanhou = verificaVitoriaX();
    if (xGanhou == true) {
        //alert('X GANHOU');
        let ganhador = document.querySelector("#vencedor");
        ganhador.innerHTML = player1.value + " ganhou com o X"
        ganhador.style.color = 'green';
        ganhador.style.fontSize = '50px'
        for (let i = 0; i < 9; i++) {
            quadrados[i].removeAttribute("onclick");
        }
        tabuleiro.classList.remove('circ');
        let btnReset = document.querySelector('#reset')
        btnReset.style.display = 'block'
        btnReset.style.marginLeft = '48%'
        ganhador.style.textAlign = 'center'
    }
    let circGanhou = verificaVitoriaCirc();
    if (circGanhou == true) {
        let ganhador2 = document.querySelector("#vencedor");
        ganhador2.innerHTML = player2.value + " ganhou com a bolinha"
        ganhador2.style.color = 'green';
        ganhador2.style.fontSize = '50px'
        for (let i = 0; i < 9; i++) {
            quadrados[i].removeAttribute("onclick");
        }
        tabuleiro.classList.remove('x');
        let btnReset = document.querySelector('#reset')
        btnReset.style.display = 'block'
        btnReset.style.marginLeft = '48%'
        ganhador2.style.textAlign = 'center'
    }
    let empatou = verificaEmpate();
    if (empatou == true) {
        let empate = document.querySelector("#vencedor");
        empate.innerHTML = " Empatou "
        empate.style.color = 'green';
        empate.style.fontSize = '50px'
        for (let i = 0; i < 9; i++) {
            quadrados[i].removeAttribute("onclick");
        }
        let btnReset = document.querySelector('#reset')
        btnReset.style.display = 'block'
        btnReset.style.marginLeft = '48%'
        empate.style.textAlign = 'center'
    }


}

function verificaVitoriaX() {
    if (quadrados[0].classList.contains('x') &&
        quadrados[1].classList.contains('x') &&
        quadrados[2].classList.contains('x')) {
        return true;
    }
    if (quadrados[3].classList.contains('x') &&
        quadrados[4].classList.contains('x') &&
        quadrados[5].classList.contains('x')) {
        return true;
    }
    if (quadrados[6].classList.contains('x') &&
        quadrados[7].classList.contains('x') &&
        quadrados[8].classList.contains('x')) {
        return true;
    }
    if (quadrados[0].classList.contains('x') &&
        quadrados[3].classList.contains('x') &&
        quadrados[6].classList.contains('x')) {
        return true;
    }
    if (quadrados[1].classList.contains('x') &&
        quadrados[4].classList.contains('x') &&
        quadrados[7].classList.contains('x')) {
        return true;
    }
    if (quadrados[2].classList.contains('x') &&
        quadrados[5].classList.contains('x') &&
        quadrados[8].classList.contains('x')) {
        return true;
    }
    if (quadrados[0].classList.contains('x') &&
        quadrados[4].classList.contains('x') &&
        quadrados[8].classList.contains('x')) {
        return true;
    }
    if (quadrados[2].classList.contains('x') &&
        quadrados[4].classList.contains('x') &&
        quadrados[6].classList.contains('x')) {
        return true;
    }
    return false;
}

function verificaVitoriaCirc() {
    if (quadrados[0].classList.contains('circ') &&
        quadrados[1].classList.contains('circ') &&
        quadrados[2].classList.contains('circ')) {
        return true;
    }
    if (quadrados[3].classList.contains('circ') &&
        quadrados[4].classList.contains('circ') &&
        quadrados[5].classList.contains('circ')) {
        return true;
    }
    if (quadrados[6].classList.contains('circ') &&
        quadrados[7].classList.contains('circ') &&
        quadrados[8].classList.contains('circ')) {
        return true;
    }
    if (quadrados[0].classList.contains('circ') &&
        quadrados[3].classList.contains('circ') &&
        quadrados[6].classList.contains('circ')) {
        return true;
    }
    if (quadrados[1].classList.contains('circ') &&
        quadrados[4].classList.contains('circ') &&
        quadrados[7].classList.contains('circ')) {
        return true;
    }
    if (quadrados[2].classList.contains('circ') &&
        quadrados[5].classList.contains('circ') &&
        quadrados[8].classList.contains('circ')) {
        return true;
    }
    if (quadrados[0].classList.contains('circ') &&
        quadrados[4].classList.contains('circ') &&
        quadrados[8].classList.contains('circ')) {
        return true;
    }
    if (quadrados[2].classList.contains('circ') &&
        quadrados[4].classList.contains('circ') &&
        quadrados[6].classList.contains('circ')) {
        return true;
    }
    return false;
}

function verificaEmpate() {
    if ((quadrados[0].classList.contains('circ') || quadrados[0].classList.contains('x')) &&
        (quadrados[1].classList.contains('circ') || quadrados[1].classList.contains('x')) &&
        (quadrados[2].classList.contains('circ') || quadrados[2].classList.contains('x')) &&
        (quadrados[3].classList.contains('circ') || quadrados[3].classList.contains('x')) &&
        (quadrados[4].classList.contains('circ') || quadrados[4].classList.contains('x')) &&
        (quadrados[5].classList.contains('circ') || quadrados[5].classList.contains('x')) &&
        (quadrados[6].classList.contains('circ') || quadrados[6].classList.contains('x')) &&
        (quadrados[7].classList.contains('circ') || quadrados[7].classList.contains('x')) &&
        (quadrados[8].classList.contains('circ') || quadrados[8].classList.contains('x'))) {
        return true;
    }
    return false;
}

function aparecerTabuleiro(){
    tabuleiro.style.display = 'flex'
}
