import LoginPage from '../pages/LoginPage';
const loginPage = new LoginPage();
describe('Login into Orion', () => {

  it('Successfull Login', () => {
    cy.visit('https://isa.jx-orion4x-qa.infobelt.com/webapp/#/login')
    loginPage.getUserName().type('admin@openskye.org')
    cy.get('.ng-pristine').type('changeme').text()
    cy.get('.ui-button-text').click()
    cy.url("include","/webapp/#/home");
  })

  it('Un-Successfull Login', () => {
    cy.visit('https://isa.jx-orion4x-qa.infobelt.com/webapp/#/login')
    loginPage.getUserName().type('admin@openskye.org')
    cy.get('.ng-pristine').type('changeme01').text()
    cy.get('.ui-button-text').click()
    cy.url("include","/webapp/#/home");
    cy.get('.ui-messages-error').contains('Username and password do not match1')    
  })

})