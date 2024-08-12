/// <reference types="cypress-xpath" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    cy.xpath('(//a[@title="T-shirts"])[2]').click()
    cy.xpath('//span[@class="category-name" and normalize-space("T-shirts")]').should("be.visible")
    cy.get('.product-container').first().within(() => {
      cy.get('.product-name').click();
    });
    cy.get('h1').should('contain.text', 'Faded Short Sleeve T-shirts');
    cy.get('#add_to_cart').click();
    cy.get('.layer_cart_product').should('be.visible');
    cy.get('.layer_cart_product h2').should('contain.text', 'Product successfully added to your shopping cart');
    cy.get('.button-container a[href$="order"]').click();
    cy.url().should('include', 'controller=order');
    cy.get('h1').should('contain.text', 'Shopping-cart summary');
    cy.get('.cart_description .product-name').should('contain.text', 'Faded Short Sleeve T-shirts');
    cy.get('.cart_quantity_input').should('have.value', '1');
  })
})