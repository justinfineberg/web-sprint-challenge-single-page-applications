describe('Pizza App', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const textInputName = () => cy.get('input[name=name]')
    const checkboxOnions = () => cy.get('input[name="onions"]')
    const checkboxBacon = () => cy.get('input[name="bacon"]')
    const checkboxSasuage = () => cy.get('input[name="sasuage"]')
    const checkboxMushrooms = () => cy.get('input[name="mushrooms"]')
    const submitBtn = () => cy.get(`button[id="order-button"]`)

    it('Sanity check to make sure that tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
        expect({}).not.to.equal({}) // equal ie ===
        expect({}).to.eql({}) // eql ie ==
    })
    
    it('Testing that you can add text to box', () =>{
        textInputName()
            .should('have.value', '')
            .type('Justin')
            .should('have.value', 'Justin')
    })

    it('Testing that you can add multiple toppings', () =>{
        checkboxBacon().check()
        .should("be.checked")
        
        checkboxOnions().check()
        .should("be.checked")

        checkboxMushrooms().check()
        .should("be.checked")

        checkboxSasuage().check()
        .should("be.checked")
    })

    it('Testing that submit button starts out disabled', () => {
        submitBtn().should('be.disabled')
      })

    it('Testing to see if you can submit the form', ()=>{
        submitBtn().should('be.disabled')
        textInputName().type('Justin')
        checkboxSasuage().check()
        submitBtn().should('not.be.disabled')
        submitBtn().click()
        textInputName().should('have.value', '')
    })

})




   

//       authorInput()
//         .should('have.value', '')
//         .type('Casey!')
//         .should('have.value', 'Casey!')
//     })

//     it('the submit button enables when both inputs are filled out', () => {
//       authorInput().type('Casey')
//       textInput().type('Have fun!')
//       submitBtn().should('not.be.disabled')
//     })

//     it('the cancel button can reset the inputs and disable the submit button', () => {
//       authorInput().type('Casey')
//       textInput().type('Have fun!')
//       cancelBtn().click()
//       textInput().should('have.value', '')
//       authorInput().should('have.value', '')
//       submitBtn().should('be.disabled')
//     })
//   })

//   describe('Adding a new quote', () => {
//     it('can submit and delete a new quote', () => {
//       textInput().type('Have fun!')
//       authorInput().type('Casey')
//       submitBtn().click()