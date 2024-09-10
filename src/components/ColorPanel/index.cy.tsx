import ColorPanel from "./index";

describe("<ColorPanel />", () => {
  it("should correctly color", () => {
    cy.mount(<ColorPanel red={25} green={45} blue={50} alpha={0.3} />);
    const result = `rgba(25, 45, 50, 0.3)`;
    cy.get('[data-cy-root=""] > div').should('have.css', "background-color", result);
  });

  it("should display a transparent ", () => {
    cy.mount(<ColorPanel red={0} green={0} blue={0} alpha={0} />);    
    const result = 'rgba(0, 0, 0, 0)';
    cy.get('[data-cy-root=""] > div').should('have.css', 'background-color', result);
  });
});