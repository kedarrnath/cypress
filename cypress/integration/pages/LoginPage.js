class LoginPage
{
    getUserName()
    {
        return cy.get(':nth-child(1) > .ui-inputtext');
    }
}
export default LoginPage