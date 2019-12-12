/ <reference types="Cypress" />

describe('My First Test', function () {
    it('Does not do much!', function () {
        cy.visit("/");
        cy.fixture('users').as('usersJSON');

        cy.get("@usersJSON").then((user) => {
            cy.get('[name="q"]').type(user.name);
        });
       
        expect(true).to.equal(true);
    });
});