import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { google } from "../../utils/alltricks";






Given("Aller dans la page de {string}", () => {(async () => {

  google
    .googleUrl()
  cy.get('#L2AGLb > .QS5gu')
      .click({force:true})
})()
});



Given('Chercher le mot clé {string}', (chercher)=>{

  google.
  elements.
  googleSearch()
      .type(chercher)
   google.elements.
   googleSearch()
       .should('be.visible','Alltricks')

  cy.contains('Alltricks').
  first().
  click()


})

When("Vérifier que le premier résultat de recherche est {string}",(x) => {(async () => {


  cy.contains(x).
  should('be.visible')


})()
});

Then("Cliquer dessus",
    () => {

      cy.contains('Alltricks: Matériel Vélo, VTT, Route, Running et Outdoor')
          .click()






    })

When("Vérifier que le résultat est bien {string}", (Url)=>{




  // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000)
    cy.url()
      .should('include',Url)



  cy.contains('Accepter & Fermer')
    .click()

})

Then("Rechercher un produit dans le Search",()=>{

  cy.wait(2000)

  cy.contains('Accepter & Fermer')
    .click({force:true})

  cy.xpath("//input[@placeholder='Rechercher un produit, une marque...']")

    .type('Trek')



})


Then("Voir tous les produits",()=>{
  cy.contains('Voir tous les produits')
  .should('be.visible').
    click()

  cy.scrollTo('bottom')
})

Then("Faites défiler jusqu'à la section catégorie",()=>{


  cy.get(':nth-child(2) > .col-md-8 > .title')
    .should('be.visible','LES CATÉGORIES')



})







