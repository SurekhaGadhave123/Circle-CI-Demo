import {AdminLoginPageElement} from "../../pageObjects/admin/loginPage";
import {HomePageElement} from "../../pageObjects/admin/homePage";

describe("Search functionality",()=>{
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    })
    it("User should be able to search item",()=>{
        const adminLoginPage= new AdminLoginPageElement()
        const homePage=new HomePageElement()
        adminLoginPage.getUsernameInput()
            .clear()
            .type("Admin")
        adminLoginPage.getPasswordInput()
            .clear()
            .type("admin123")
        adminLoginPage.getLoginBtn()
            .click()
        homePage.getSearchInput()
            .should('be.visible')
            .clear()
            .type("admin")
        homePage.getAdminLink()
            .should("be.visible")
            .click()
    })
})