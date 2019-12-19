import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "../../pages/searchPage";

const searchPage = new SearchPage();

Given(`I am in the search page`, () => {
    //Visit ExecuteAutomation Website
    searchPage.visit();
});


When(`I fill the search field`, () => {
     cy.fixture('users').as('usersJSON');

     cy.get("@usersJSON").then((user) => {
         searchPage.fillSearchField(user.name);
         //cy.get('[name="q"]').type(user.name);
     });
});

When(`I click on the search button`, () => {
     searchPage.submit();
});

Then(`I am redirected to the results page`, () => {
    cy.contains('hdtbSum').should('exist');
    // using this lib: https://github.com/testing-library/cypress-testing-library
    cy.queryByText('Shopping').should('exist');

    cy.eyesOpen({
        appName: 'Search feature!',
        testName: 'Search results page test!',
        browser: {
            width: 800,
            height: 600
        },
    });
    cy.eyesCheckWindow('Search results page');
    cy.eyesClose();
});