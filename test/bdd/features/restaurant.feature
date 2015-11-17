Feature: Añadir platos a mi pedido 
    Scenario: Añadir un plato a mi pedido vacio
      Given Estoy en el restaurante "robatayaki"
      When Selecciono el plato "Chicken teriyaki"      
      Then Deberia ver mi orden con el plato "Chicken teriyaki"