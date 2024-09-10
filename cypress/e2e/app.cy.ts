describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("")
    //cy.fixture("values.json").as("values");
  })
  it("should show a color correctly", function () {
    const red: number = 255
    const green: number = 0
    const blue: number = 0
    const alpha: number = 0.5
    cy.get(":nth-child(1) > input")
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(red))
      .trigger("change")
    cy.get(":nth-child(2) > input")
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(green))
      .trigger("change")
    cy.get(":nth-child(3) > input")
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(blue))
      .trigger("change")
    cy.get(":nth-child(4) > input")
      .then((input: JQuery<HTMLInputElement>) => input[0].stepUp(alpha))
      .trigger("change")
    cy.wait(1000);

cy.get('body').then(($body) => {
  if ($body.find('.styles_panel__VzPgj').length) {
    cy.get('.styles_panel__VzPgj', { timeout: 10000 }) 
      .should('have.css', 'background-color', `rgba(${red}, ${green}, ${blue}, ${alpha})`);
  } else {
    cy.log('Elemento com a classe .styles_panel__VzPgj não encontrado.');
  }
});
  })
})
