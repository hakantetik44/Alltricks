Feature: Alltricks

  Scenario: Accéder au site web de Alltricks
    Given Aller dans la page de "Google"
    When Chercher le mot clé "Alltricks"
    Then Vérifier que le premier résultat de recherche est "Alltricks: Matériel Vélo, VTT, Route, Running et Outdoor"
    And Cliquer dessus
    And Vérifier que le résultat est bien "https://www.alltricks.fr/"


  Scenario: Rechercher un produit
    Given Aller dans la page de "Google"
    When Chercher le mot clé "Alltricks"
    And Cliquer dessus
    And Rechercher un produit dans le Search
    And Voir tous les produits
    And Faites défiler jusqu'à la section catégorie

