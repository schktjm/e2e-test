describe("The Todos", function () {
    it("Assertion Text", () => {
        const typeText = "texttexttext"
        cy.visit("/todos")
            .get("#text-field")
            .type(typeText)
            .should("have.value", typeText)
    })

    it("Create New Item", () => {
        const typeText = "texttext"
        cy.visit("/todos")
            .get("#text-field")
            .type(`${typeText}{enter}`)

        cy.get('#todo-list .todo-item')
            .first()
            .contains(typeText)
    })

    it("Should Erased Text If Enter Pushed", () => {
        const typeText = "text"
        cy.visit("/todos")
            .get("#text-field")
            .type(`${typeText}{enter}`)
            .should("have.value", "")
    })

    it("Delete Item", () => {
        const textArr = ["hoge", "huga", "aaa", "piyo"];
        cy.visit("/todos")
            .get("#text-field")
            .type(`${textArr[0]}{enter}`)
            .type(`${textArr[1]}{enter}`)
            .type(`${textArr[2]}{enter}`)
            .type(`${textArr[3]}{enter}`)

        cy.get("#todo-list .todo-item")
            .contains(textArr[2])
            .within(() => {
                cy.get(".delete-btn")
                    .click()
            })

        cy.get("#todo-list .todo-item")
            .should((item) => {
                expect(item).to.not.text(textArr[2])
            })
    })

    it("Check Item", () => {
        const textArr = ["hoge", "huga", "aaa", "piyo"];
        cy.visit("/todos")
            .get("#text-field")
            .type(`${textArr[0]}{enter}`)
            .type(`${textArr[1]}{enter}`)
            .type(`${textArr[2]}{enter}`)
            .type(`${textArr[3]}{enter}`)

        cy.get("#todo-list .todo-item")
            .within(() => {
                cy.get("input[type=checkbox]")
                    .check()
            })
    })

    it("Uncheck Item", () => {
        const textArr = ["hoge", "huga", "aaa", "piyo"];
        cy.visit("/todos")
            .get("#text-field")
            .type(`${textArr[0]}{enter}`)
            .type(`${textArr[1]}{enter}`)
            .type(`${textArr[2]}{enter}`)
            .type(`${textArr[3]}{enter}`)

        cy.get("#todo-list .todo-item")
            .within(() => {
                cy.get("input[type=checkbox]")
                    .check()
                    .uncheck()
            })
    })

})

export { }
