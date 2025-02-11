class LoginPage {
  visit() {
    cy.visit('https://minhacorretora.uat.fairfax.com.br/');
  }

  fillEmail(email) {
    cy.get('div[autocomplete="off"] > .block > .items-center > .flex-1 > .text-label', { timeout: 10000 }).type(email); 
  }

  fillPassword(password) {
    cy.get('div[autocomplete="new-password"] > .block').type(password); 
  }

  submit() {
    cy.get('button[type="submit"]').click(); // Clica no botão "LOGIN"
  }

  acceptCookies() {
    cy.get('#dm876A > .dp-bar-button').click(); // Clica no botão "ACEITAR" dos cookies
  }

  checkErrorMessage() {
    return cy.get('.items-start > .flex > .text-display-bold'); // Retorna o elemento da mensagem de erro
  }
}

export default LoginPage;