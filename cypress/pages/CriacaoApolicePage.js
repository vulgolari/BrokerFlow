// cypress/pages/CriacaoApolicePage.js
class CriacaoApolicePage {
    preencherDadosApolice(dadosApolice) {
        cy.get('#campoNomeSegurado').type(dadosApolice.nomeSegurado);
        cy.get('#campoCNPJ').type(dadosApolice.cnpj);
        cy.get('#campoValorSegurado').type(dadosApolice.valorSegurado);
        // Adicione mais campos conforme necessário
    }

    submeterCotacao() {
        cy.get('#botaoSubmeterCotacao').click(); // Submete a cotação
    }

    verificarMensagemSucesso() {
        return cy.contains('Cotação realizada com sucesso!'); // Verifica a mensagem de sucesso
    }
}

export default CriacaoApolicePage;