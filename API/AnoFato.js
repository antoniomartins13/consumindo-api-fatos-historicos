import fatosHistoricos from './dados/fatosHistoricos.js';

function validaAno(ano){
    if(isNaN(ano)){
        return false 
    }else{
        if(ano >= 1920 && ano <= 2023){
            return true
        }else{
            return false
        }
    }
};

function retornaFato(ano){
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano}
    )
    return fatoSelecionado.Fato

};

export {validaAno, retornaFato};