const Form_URL = '/#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.MuiTypography-h2')
      .should('contain', 'Welcome to ZUJU KICKOFF')
      //Login with blank Credentials -TC1
      cy.get('input[name="email"]').type('zujutest+automation@gmail.com')
      cy.get('input[name="password"]').type('TestAuto12')
      cy.contains('button', 'Log In').click()
      cy.contains('Email is required!')
      cy.contains('Password is required!')
      //Login with Invalid Email -TC2
      cy.get('input[name="email"]').type('zujutest+automationgmail.com')
      cy.contains('button', 'Log In').click()
      cy.contains('Email Invalid')
      //Login with Invalid Credentials -TC3
      cy.get('input[name="email"]').type('zujutest+automation@gmail.com')
      cy.get('input[name="password"]').type('TestAuto12')
      cy.contains('button', 'Log In').click()
      cy.wait(100)
      cy.contains('The email or password you entered is incorrect. Please try again.')
      
      
           
      

       
      
     
   
     
           
  })
 
})