export class HomePageElement
{

    getSearchInput()
    {
        return cy.get('.oxd-input')
    }
    getAdminLink()
    {
        return cy.get('.oxd-main-menu-item > .oxd-text')
    }

}

