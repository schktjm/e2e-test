describe("The Home Page", () => {
    beforeEach(() => {
        cy.visit("/")
    });

    it("successfully loads", () => {
        cy.visit("/")
    })

    it("increment number if clicked increment button", () => {
        cy.get(".increment-btn").click().get(".counter").should("have.text", "1")
    })

    it("decrement number if cliced decrement button", () => {
        cy.get(".decrement-btn").click().get(".counter").should("have.text", "-1")
    })
})
