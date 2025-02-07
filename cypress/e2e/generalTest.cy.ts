describe('Test para testear mi página', () => {
  it('Abrimos la web', () => {
    cy.visit('http://localhost:4200/');
    cy.contains('home works!');
  });
  it('what_it_does', function () {

    cy.visit('http://localhost:4200/');

    cy.get('body > app-root > app-header > a:nth-child(2)').click();

    cy.contains('about works!');

    cy.get('body > app-root > app-header > a:nth-child(3)').click();

    cy.get(
      'body > app-root > app-contact > .ng-untouched > #first-name'
    ).click();

    cy.get('body > app-root > app-contact > .ng-untouched > #first-name').type(
      'pepito@gmail.com'
    );

    cy.get('body > app-root > app-contact > .ng-valid > #last-name').type(
      '123456'
    );

    cy.get('body > app-root > app-contact > .ng-valid > button').click();
  });
});
