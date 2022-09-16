/// <reference types="cypress" />

it('uses the fixture to stub and check the page', () => {
  // load the data from the fixture file "apple.json"
    cy.fixture('apple.json')
        .then(cy.log)
        .then((data) => {
            // using the command https://on.cypress.io/fixture
            cy.intercept('GET', '/fruit', {
                fixture: 'apple.json'
            });
            // intercept the GET call to /fruit with fixture "apple.json"
            // https://on.cypress.io/intercept
            cy.visit('/');
            // visit the site
            // https://on.cypress.io/visit
            cy.contains('#fruit', data.fruit)
                .should('be.visible');
            // confirm the fruit from the fixture is shown on the page
            // https://on.cypress.io/contains
        });
})
