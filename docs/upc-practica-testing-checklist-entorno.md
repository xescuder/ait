# Checklist comprobación entorno práctica agile testing

## Pruebas unitarias

1. Ir a la ruta 'test/unit'
2. Ejecutar en un terminal:

		jasmine-node specs/

## Pruebas de componente

1. Ir a la ruta 'test/component'
2. Ejecutar en un terminal:

		karma init
		karma start

## Pruebas de aceptación

1. Iniciar la aplicación ejecutando en un terminal:

		./scripts/web-server.sh

2. Abrir otro terminal y ejecutar:
		sudo webdriver-manager start
		
3. Ir a la ruta 'test/acceptance'
4. Abrir un nuevo terminal y ejecutar:

		protractor conf.js



## Pruebas de servicios REST


1. Iniciar la aplicación ejecutando en un terminal:

		./scripts/web-server.sh

2. Ir a la ruta 'test/acceptance-rest'
3. Abrir un nuevo terminal y ejecutar:

		jasmine-node restaurants-spec.js

## Pruebas de aceptación BDD "real"


1. Iniciar la aplicación ejecutando en un terminal:

		./scripts/web-server.sh

2. Abrir otro terminal y ejecutar:
		sudo webdriver-manager start
		
3. Ir a la ruta 'test/bdd'
4. Abrir un nuevo terminal y ejecutar:

		protractor protractor.js

## Pruebas exploratorias

https://aitm-silk.atlassian.net
Usar usuarios consecutivos:

test1, test2, test3, test4, test5, test6, test7, test8, test9, test10
