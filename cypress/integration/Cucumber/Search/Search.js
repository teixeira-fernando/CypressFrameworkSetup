import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given(`I am in the search page`, () => {
    //Visit ExecuteAutomation Website
    cy.visit('/');
});


When(`I fill the search field`, () => {
     cy.fixture('users').as('usersJSON');

     cy.get("@usersJSON").then((user) => {
         cy.get('[name="q"]').type(user.name);
     });
});

When(`I click on the search button`, () => {
     cy.get('[name="q"]').type('{enter}');
});

Then(`I am redirected to the results page`, () => {
    cy.contains('hdtbSum').should('exist');
    // using this lib: https://github.com/testing-library/cypress-testing-library
    cy.queryByText('Shopping').should('exist');
});