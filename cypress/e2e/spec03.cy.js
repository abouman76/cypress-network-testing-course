/// <reference types="cypress" />

it('shows the fruit returned from the test', () => {
  // stub the network call the application makes
  // to the server using "GET /fruit"
    const fruit = 'Kiwi'
    cy.intercept('GET', '/fruit', { fruit }).as('selectedFruit');
    cy.visit('/')

    cy.wait('@selectedFruit');

    // cy.get('#fruit')
    //     .should('contain', fruit);

    cy.contains('#fruit', fruit);

  // return "Kiwi" json object
  // tip: use https://on.cypress.io/intercept
  //
  // visit the page
  // https://on.cypress.io/visit
  //
  // wait for the app to make the network call
  // to make sure the stub was used
  // https://on.cypress.io/wait
  //
  // confirm the application shows the fruit "Kiwi"
  // https://on.cypress.io/contains
})
