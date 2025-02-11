import LoginPage from '../pages/LoginPage';
import ApolicesPage from '../pages/ApolicesPage';

Cypress.Commands.add('login', (email, password) => {
  const loginPage = new LoginPage();
  loginPage.visit();
  loginPage.fillEmail(email);
  loginPage.fillPassword(password);
  loginPage.submit();
});

Cypress.Commands.add('navigateToApolices', () => {
  const apolicesPage = new ApolicesPage();
  apolicesPage.visit();
});