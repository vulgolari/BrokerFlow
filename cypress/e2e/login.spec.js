import LoginPage from '../pages/LoginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();
  let credentials;

  before(() => {
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it('Login com credenciais válidas e aceitar o cookies', () => {
    cy.login(credentials.valid.email, credentials.valid.password);

    // Aceita os cookies após o login
    loginPage.acceptCookies();

    // Validações após o login
    cy.contains('Minha Corretora').should('be.visible'); // Valida um elemento exclusivo da página inicial
  });

  it('Login com credenciais inválidas e validar mensagem de erro', () => {
    cy.login(credentials.invalid.email, credentials.invalid.password);

    loginPage.checkErrorMessage().should('be.visible');
  });
});