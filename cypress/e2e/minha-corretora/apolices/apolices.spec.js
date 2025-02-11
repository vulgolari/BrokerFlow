import ApolicesPage from '../../../pages/ApolicesPage';

describe('Testes da Tela de Apólices', () => {
  const apolicesPage = new ApolicesPage();

  beforeEach(() => {
     // Carregar os dados de login do fixture
   cy.fixture('credentials').then((credentials) => {
    // Realizar o login antes de acessar a página de financeiro
    cy.login(credentials.valid.email, credentials.valid.password);
    cy.navigateToApolices();
  });
});

  it('Deve buscar uma apólice por número', () => {
    const policyNumber = '123456';
    apolicesPage.searchByPolicyNumber(policyNumber);
    apolicesPage.clickSearchButton();
    apolicesPage.verifyPolicyInTable(policyNumber);
  });

  it('Deve filtrar apólices por data de emissão', () => {
    const issueDate = '2023-01-01';
    apolicesPage.filterByIssueDate(issueDate);
    apolicesPage.verifyFilteredPolicies(issueDate);
  });

  it('Deve exibir detalhes de uma apólice', () => {
    apolicesPage.clickFirstPolicy();
    apolicesPage.verifyPolicyDetails();
  });
});