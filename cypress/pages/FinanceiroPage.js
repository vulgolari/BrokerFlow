class FinanceiroPage {
    visit() {
      // Realiza o login usando as credenciais do fixture
      cy.fixture('credentials').then((credentials) => {
        cy.login(credentials.valid.email, credentials.valid.password);
      });
  
      // Aguarda o carregamento da página após o login
      cy.url({ timeout: 10000 }).should('include', ''); // Verifica se está na página inicial após o login
  
      // Clica na aba de Financeiro
      cy.contains('Financeiro', { timeout: 10000 }) // Localiza a aba de Financeiro pelo texto
        .should('exist')
        .and('be.visible')
        .click();
  
      // Verifica se a URL foi atualizada corretamente
      cy.url({ timeout: 10000 }).should('include', '/late-payments'); // Aumenta o tempo limite para 10 segundos
  
      // Espera pelos indicadores de inadimplência
      cy.get('div.w-full > .py-6', { timeout: 20000 })
        .should('exist')
        .and('be.visible');
    }
  
    // Método para validar os indicadores de inadimplência
    validarIndicadoresInadimplencia() {
        cy.get('div.w-full > .py-6', { timeout: 10000 }).within(() => {
          // Verifica se os rótulos dos indicadores estão presentes
          cy.contains('Apólices com Inadimplência').should('exist');
          cy.contains('Prêmio em atraso').should('exist');
          cy.contains('Taxa de inadimplência').should('exist');
          cy.contains('Média de dias em atraso').should('exist');
          cy.contains('Cancelamento por inadimplência').should('exist');
          
    // Valida o formato dos valores dos indicadores
    cy.contains('Apólices com Inadimplência').next().invoke('text').then((text) => {
        expect(text.trim()).to.match(/^\d+$/); // Deve ser um número inteiro
      });
  
      cy.contains('Prêmio em atraso').next().invoke('text').then((text) => {
        expect(text.trim()).to.match(/^\s*R\$\s*\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/); // Deve ser um valor monetário (R$ X,XX)
      });
  
      cy.contains('Taxa de inadimplência').next().invoke('text').then((text) => {
        expect(text.trim()).to.match(/^\d{1,3}\s*%$/); // Deve ser uma porcentagem (X % ou X%)
      });
  
      cy.contains('Média de dias em atraso').next().invoke('text').then((text) => {
        expect(text.trim()).to.match(/^\d+$/); // Deve ser um número inteiro
      });
  
      cy.contains('Cancelamento por inadimplência').next().invoke('text').then((text) => {
        expect(text.trim()).to.match(/^\d+$/); // Deve ser um número inteiro
      });
    });
  }
    // Método para extrair e validar dados da tabela de ações financeiras
    extrairDadosAcoesFinanceiras() {
      const dados = [];
      cy.get('.table-auto').within(() => {
        cy.get('tr').each(($row, index) => {
          if (index > 0) { // Ignora o cabeçalho da tabela
            const acoes = $row.find('td').eq(0).text().trim();
            const diasAtraso = $row.find('td').eq(1).text().trim();
            const numeroApolice = $row.find('td').eq(2).text().trim();
            const seguracao = $row.find('td').eq(3).text().trim();
            const cpfCnpj = $row.find('td').eq(4).text().trim();
            const produto = $row.find('td').eq(5).text().trim();
            const premioAtraso = $row.find('td').eq(6).text().trim();
            const fimVigencia = $row.find('td').eq(7).text().trim();
  
            dados.push({
              acoes,
              diasAtraso,
              numeroApolice,
              seguracao,
              cpfCnpj,
              produto,
              premioAtraso,
              fimVigencia
            });
          }
        });
      });
      return dados;
    }
  }
  
  export default new FinanceiroPage();