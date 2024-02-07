import { nikePageObject } from "@devynngrey/pageobject-helper"

describe('Basic Test Spec using NIKE.com', () => {
    it('Goes to the URL and validates an icon on the page', () => {
      cy.visit(nikePageObject.url).then(() => {
        cy.url().should('include', 'nike')
      })
      cy.get(nikePageObject.homePageIcon).should('be.visible')
    })
  })