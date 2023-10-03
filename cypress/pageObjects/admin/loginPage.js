export class AdminLoginPageElement
{

    getUsernameInput()
    {
        return cy.get("input[placeholder='Username']")
    }
    getPasswordInput()
    {
        return cy.get("input[placeholder='Password']")
    }
    getLoginBtn()
    {
        return cy.get("button[type='submit']")
    }

}

