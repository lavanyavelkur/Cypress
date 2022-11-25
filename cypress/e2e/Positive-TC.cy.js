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
      //Login with valid credentails-TC4
      cy.get('input[name="email"]').type('zujutest+automation@gmail.com')
      cy.get('input[name="password"]').type('TestAuto123')
      cy.contains('button', 'Log In').click()
      //Search Manchester City-TC4
      cy.visit('https://beta-app.zujudigital.com/reputation')
      cy.get('input[placeholder="Search for a team"]').type('Manchester City')
      cy.contains('All Teams')
      //Favourite Manchester City-TC5
      cy.get ('[alt="Manchester City"]').click () 
      cy.xpath('(//*[contains(text(),"Favourite")])[1]').click()
      //Validating all the options and text-TC6
      cy.xpath('//*[contains(text(),"Predict")]').click()
      cy.contains('All matches')
      cy.xpath('//*[contains(text(),"Live Quiz")]').click()
      cy.contains('All matches')
      cy.xpath('//*[contains(text(),"#ZujuFans")]').click()
      cy.contains('Posts')
      cy.xpath('//*[contains(text(),"Fixtures")]').click()
      cy.contains('Fixtures of all EPL matches')
      cy.xpath('//*[contains(text(),"Challenges")]').click()
      //Validating the Footer text-TC7
      cy.contains('Current Challenges')
      cy.contains('Contact Us')
      cy.contains('Privacy Notice')
      cy.contains('Terms of Use')
      cy.contains('Disclaimer')

      
      

       
      
     
   
     
           
  })
 
})