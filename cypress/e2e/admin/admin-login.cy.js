import {AdminLoginPageElement} from "../../pageObjects/admin/loginPage";

describe("Login functionality",()=>{
    before(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    })
    it("User should be able to perform login",()=>{
        const adminLoginPage= new AdminLoginPageElement()
        adminLoginPage.getUsernameInput()
            .clear()
            .type("Admin")
        adminLoginPage.getPasswordInput()
            .clear()
            .type("admin123")
        adminLoginPage.getLoginBtn()
            .click()
        cy.title()
            .should("contain","OrangeHRM")
    })
})