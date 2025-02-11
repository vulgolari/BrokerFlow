// cypress/pages/EndossosPage.js
class EndossosPage {
    visit() {
      cy.visit('https://minhacorretora.uat.fairfax.com.br/endorsements');
    }
  
    getEndossosList() {
      return cy.get('.endossos-list'); // Substitua pelo seletor correto
    }
  }
  
  export default EndossosPage;