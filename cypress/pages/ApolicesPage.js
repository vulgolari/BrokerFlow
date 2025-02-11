class ApolicesPage {
  visit() {
    // Realiza o login usando as credenciais do fixture
    cy.fixture('credentials').then((credentials) => {
      cy.login(credentials.valid.email, credentials.valid.password);
    });

    // Aguarda o carregamento da página após o login
    cy.url({ timeout: 10000 }).should('include', ''); // Verifica se está na página inicial após o login

    // Clica na aba de Financeiro
    cy.contains('Apólices', { timeout: 10000 }) // Localiza a aba de Apólices pelo texto
      .should('exist')
      .and('be.visible')
      .click();

  }

  searchByPolicyNumber(policyNumber) {
    cy.get('input[name="numeroApolice"]').type(policyNumber); // Preenche o campo de busca com o número da apólice
  }

  clickSearchButton() {
    cy.get('button[type="submit"]').click(); // Clica no botão de buscar
  }

  verifyPolicyInTable(policyNumber) {
    cy.get('table tbody tr').should('have.length', 1); // Verifica se há uma linha na tabela
    cy.get('table tbody tr td').first().should('contain', policyNumber); // Verifica se o número da apólice está na tabela
  }

  filterByIssueDate(date) {
    cy.get('input[name="dataEmissao"]').type(date); // Preenche o campo de data de emissão
    this.clickSearchButton(); // Clica no botão de buscar
  }

  verifyFilteredPolicies(date) {
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td').eq(2).should('contain', date); // Verifica se a data de emissão está correta
    });
  }

  clickFirstPolicy() {
    cy.get('table tbody tr').first().click(); // Clica na primeira apólice da tabela
  }

  verifyPolicyDetails() {
    cy.get('.modal').should('be.visible'); // Verifica se o modal de detalhes está visível
    cy.get('.modal h2').should('contain', 'Detalhes da Apólice'); // Verifica o título do modal
  }
}

export default ApolicesPage;