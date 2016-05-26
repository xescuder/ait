# Checklist comprobación entorno práctica agile testing

## Pruebas unitarias

1. Ir a la ruta 'test/unit'
2. Ejecutar en un terminal:

		jasmine

## Pruebas unitarias con cucumber JS

1. Ir a la ruta 'test/unit-cucumber'
2. Ejecutar en un terminal:

		cucumber.js


## Pruebas de componente

1. Ir a la ruta 'test/component'
2. Ejecutar en un terminal:

		karma init
		karma start

## Pruebas de API o servicios REST


1. Iniciar la aplicación ejecutando en un terminal:

		./scripts/web-server.sh

2. Ir a la ruta 'test/acceptance-rest'
3. Abrir un nuevo terminal y ejecutar:

		jasmine-node spec/restaurants_spec.js		

## Pruebas de aceptación (por interfaz de usuario o pageobjects)


1. Iniciar la aplicación ejecutando en un terminal:

		./scripts/web-server.sh

2. Abrir otro terminal y ejecutar:
		sudo webdriver-manager start
		
3. Ir a la ruta 'test/acceptance'
4. Abrir un nuevo terminal y ejecutar:

		protractor conf.js
