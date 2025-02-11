// cypress/pages/RenovacoesPage.js
class RenovacoesPage {
    visit() {
      cy.visit('https://minhacorretora.uat.fairfax.com.br/policies-to-renew');
    }
  
    getRenovacoesList() {
      return cy.get('.renovacoes-list'); // Substitua pelo seletor correto
    }
  }
  
  export default RenovacoesPage;