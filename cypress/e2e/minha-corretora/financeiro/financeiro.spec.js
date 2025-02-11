import FinanceiroPage from '../../../pages/FinanceiroPage';

describe('Testes de Financeiro', () => {
  beforeEach(() => {
    // Usar cy.session para manter o estado da sessão entre os testes
    cy.session('login', () => {
      // Carregar os dados de login do fixture
      cy.fixture('credentials').then((credentials) => {
        // Realizar o login antes de acessar a página de financeiro
        cy.login(credentials.valid.email, credentials.valid.password);
      });
    });

    // Acessar a página de financeiro após o login
    FinanceiroPage.visit();
  });

  it('Validar os indicadores de inadimplência', () => {
    // Valida os indicadores de inadimplência
    FinanceiroPage.validarIndicadoresInadimplencia();
  });

  it('Deve extrair e validar dados da tabela de ações financeiras', () => {
    const dados = FinanceiroPage.extrairDadosAcoesFinanceiras();

    // Exibir os dados no console
    cy.log('Dados da tabela de ações financeiras:', dados);

    // Validar os dados
    dados.forEach((item) => {
      const premioAtrasoNumero = parseFloat(item.premioAtraso.replace('R$ ', '').replace(',', '.'));
      expect(premioAtrasoNumero).to.be.greaterThan(0); // Exemplo de validação
    });
  });
});