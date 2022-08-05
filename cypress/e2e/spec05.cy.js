/// <reference types="cypress" />

it('shows a different fruit after reloading the page', () => {
  // visit the site using https://on.cypress.io/visit
  // grab the fruit name from the page
    cy.visit('/');


  // (make sure it is not "loading...")
    cy.get('#fruit')
        .should('not.include.text', 'loading...')
        .invoke('text')
        .then(cy.log)
        .then((fruit) => {
        // reload the page using https://on.cypress.io/reload
            cy.reload()
        // grab the fruit name from the page again
        // confirm the fruit name is different
                cy.get('#fruit')
                .should('not.contain.text', 'loading...')
                .and('not.have.text', fruit)
        })
  // tip: use nested https://on.cypress.io/then callbacks
})
