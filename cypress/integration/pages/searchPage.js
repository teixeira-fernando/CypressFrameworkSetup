class SearchPage {
    visit() {
        cy.visit('/');
    }

    getSearchField() {
        return cy.get('[name="q"]');
    }

    fillSearchField(searchterm){
        this.getSearchField()
            .clear()
            .type(searchterm);
    }

    submit() {
        this.getSearchField().type('{enter}');
    }
}

export default SearchPage;