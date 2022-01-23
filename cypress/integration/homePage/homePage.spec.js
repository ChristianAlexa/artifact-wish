describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have a PageHeader that reads Artifact Wish', () => {
    cy.get('h1').should('have.text', 'Artifact Wish')
  })
})