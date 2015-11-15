Feature: Homepage 
  Como usuario
  Quiero poder acceder a la aplicacion
  Para acceder a los restaurantes mas proximos a mi direccion

  Scenario: Ver restaurantes mas proximos
  	Given Estoy en el login
  	When Introduzco mi nombre y direccion
  	Then Deberian aparecer los restaurantes mas proximos

  Scenario: Visitar restaurante
    Given Veo el listado de restaurantes
    When Selecciono un restaurante
    Then Deberia ver un titulo