// cypress/pages/NovaCotacaoPage.js
class NovaCotacaoPage {
    visit() {
        cy.visit('https://minhacorretora.uat.fairfax.com.br/nova-cotacao');
    }

    selecionarProdutoDO() {
        cy.contains('D&O').click(); // Seleciona o produto D&O
    }

    iniciarCotacao() {
        cy.get('#botaoIniciarCotacao').click(); // Clica no botão para iniciar a cotação
    }
}

export default NovaCotacaoPage;