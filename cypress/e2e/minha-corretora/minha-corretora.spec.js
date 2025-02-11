// cypress/pages/MinhaCorretoraPage.js
class MinhaCorretoraPage {
    visit() {
      cy.visit('https://minhacorretora.uat.fairfax.com.br/minha-corretora');
    }
  
    getApolicesRenovar() {
      return cy.contains('Apólices a Renovar (45 Dias)').siblings();
    }
  
    getApolicesEmitidas() {
      return cy.contains('Apólices Emitidas (Mês atual)').siblings();
    }
  }
  
  export default MinhaCorretoraPage;