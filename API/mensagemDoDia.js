let dados = require('./dados');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;