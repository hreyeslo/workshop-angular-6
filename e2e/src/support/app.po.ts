export const getTitle = () => cy.get('h1');
export const getOptionList = () => cy.get('.cdk-overlay-container .options-list');
export const imageList = () => cy.get('.c-photo__gallery .c-photo__gallery__image');

// Functions
export const changeLang = (lang: string) => {
  cy.get('.c-app__header__selector button.select-button').click();
  getOptionList().within(() => {
    cy.get(`#${lang}`).click();
  });
};

export const selectBreed = () => {
  cy.get('.layout-container .select-button.placeholder').click();
  getOptionList().within(() => {
    cy.get('nb-option').first().click();
  });
};
