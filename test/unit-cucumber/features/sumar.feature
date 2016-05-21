Feature: Sumar números
  As a usuario de la calculadora
  Yo quiero poder añadir 2 números

  
  Scenario: Añadir 2 números
    Given la calculadora está inicializada
    When Yo sumo 3 y 7
    Then el resultado debería ser 10

  