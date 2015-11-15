var frisby = require('/usr/local/lib/node_modules/frisby');
frisby.create('Obtener Robatayaki Hachi')
  .get('http://localhost:3000/api/restaurant/robatayaki')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON('menuItems.0', {
    name: function(val) { expect(val).toMatch("California roll"); }, // Comprobacion que el atributo 'name' tiene este valor
  })
.toss();
