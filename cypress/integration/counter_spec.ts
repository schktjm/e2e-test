describe("The Counter", function () {
    beforeEach(function () {
        cy.visit("/counter")
    });

    it("successfully loads", function () {
        cy.visit("/counter")
    })

    it("increment number if clicked increment button", function () {
        cy.get(".increment-btn").click().get(".counter").should("have.text", "1")
    })

    it("decrement number if cliced decrement button", function () {
        cy.get(".decrement-btn").click().get(".counter").should("have.text", "-1")
    })
})

export { }
