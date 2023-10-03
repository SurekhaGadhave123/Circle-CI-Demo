// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// import {SellerLoginPageElement} from "../PageObjects/seller/sellerLoginPageElement";
// import {BidderLoginPageElement} from "../PageObjects/bidder/bidderLoginPageElement";
// import {AdminLoginPageElement} from "../PageObjects/admin/adminLoginElement";
//
// const sellerLoginPage = new SellerLoginPageElement();
// const bidderLoginPage=new BidderLoginPageElement();
// const adminLoginPage = new AdminLoginPageElement();
//
// Cypress.Commands.add('sellerLogin', (username,password)=>
// {
//     sellerLoginPage.getUserNameInput().type(username)
//     sellerLoginPage.getPasswordInput().type(password + '{enter}')
// })
//
// Cypress.Commands.add('sellerLoginWithEmail', (email,password)=>
// {
//     sellerLoginPage.getUserNameInput().type(email)
//     sellerLoginPage.getPasswordInput().type(password + '{enter}')
// })
// Cypress.Commands.add('bidderLogin', (username,password)=>
// {
//     bidderLoginPage.getUserNameInput().type(username)
//     bidderLoginPage.getPasswordInput().type(password + '{enter}')
// })
// Cypress.Commands.add('bidderLoginWithEmail', (email,password)=>
// {
//     bidderLoginPage.getUserNameInput().type(email)
//     bidderLoginPage.getPasswordInput().type(password + '{enter}')
// })
//
// Cypress.Commands.add('adminLogin', (username,password)=>
// {
//     adminLoginPage.getUsernameInput().type(username)
//     adminLoginPage.getPasswordInput().type(password + '{enter}')
// })
//
