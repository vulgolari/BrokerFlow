// cypress/e2e/criacao-apolice-do.spec.js
import MinhaCorretoraPage from '../pages/MinhaCorretoraPage';
import NovaCotacaoPage from '../pages/NovaCotacaoPage';
import CriacaoApolicePage from '../pages/CriacaoApolicePage';
import LoginPage from '../pages/LoginPage'; // Supondo que você já tenha uma página de login
import credentials from '../fixtures/credentials.json';

describe('Criação de Apólice D&O', () => {
    const minhaCorretoraPage = new MinhaCorretoraPage();
    const novaCotacaoPage = new NovaCotacaoPage();
    const criacaoApolicePage = new CriacaoApolicePage();
    const loginPage = new LoginPage();

    it('Deve criar uma nova apólice D&O com sucesso', () => {
        // Login na Minha Corretora
        loginPage.visit();
        loginPage.preencherLogin(credentials.valid.email, credentials.valid.password);
        loginPage.submeterLogin();

        // Navegar para Nova Cotação
        minhaCorretoraPage.navegarParaNovaCotacao();

        // Selecionar o produto D&O
        novaCotacaoPage.selecionarProdutoDO();
        novaCotacaoPage.iniciarCotacao();

        // Preencher os dados da apólice
        const dadosApolice = {
            nomeSegurado: 'Empresa XYZ',
            cnpj: '12.345.678/0001-99',
            valorSegurado: '1000000'
        };
        criacaoApolicePage.preencherDadosApolice(dadosApolice);

        // Submeter a cotação
        criacaoApolicePage.submeterCotacao();

        // Verificar mensagem de sucesso
        criacaoApolicePage.verificarMensagemSucesso();
    });
});