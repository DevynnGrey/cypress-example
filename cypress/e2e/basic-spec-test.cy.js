import { pageObject } from "../pageObjects"

describe('Basic Test Spec using NIKE.com', () => {
    it('Goes to the URL and validates an icon on the page', () => {
      cy.visit(pageObject.url).then(() => {
        cy.url().should('include', 'nike')
      })
      cy.get(pageObject.homePageIcon).should('be.visible')
    })
  })