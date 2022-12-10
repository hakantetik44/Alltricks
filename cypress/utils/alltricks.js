export class Google {

    elements= {

        googleSearch: () =>cy.get('.gLFyf')
    }

    googleUrl (){

        cy.visit('www.google.com')
    }
}

export const google = new Google();
export class Alltricks {
    alltricksUrl (){

        cy.visit('https://alltricks.com/fr/')
    }

}

export const alltricks = new Alltricks ();


