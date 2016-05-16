
# Instalar Sonarqube


## Java

> sudo apt-get install openjdk-8-jre

## Mysql


> sudo apt-get install mysql-server

> mysql -u root -p < create_database.sql

CREATE DATABASE sonar CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER 'sonar' IDENTIFIED BY 'sonar';
GRANT ALL ON sonar.* TO 'sonar'@'%' IDENTIFIED BY 'sonar';
GRANT ALL ON sonar.* TO 'sonar'@'localhost' IDENTIFIED BY 'sonar';
FLUSH PRIVILEGES;



## Instalar SonarQube
http://www.sonarqube.org/downloads/


## Instalar scanner

1. Abrir la carpeta home/upc
2. Escoger 'View → Show Hidden Files'
3. Abrir fichero .profile
4. Al final de todo añadir

PATH="$PATH:/etc/sonar-scanner-2.6.1/bin"


En el fichero /conf/sonar-scanner.properties apuntar a

sonar.host.url=http://127.0.0.1:9000/sonar


## Instalar plugins
http://docs.sonarqube.org/display/PLUG/Plugin+Library

> mv sonar-javascript-plugin-2.12.jar /etc/sonarqube-5.5/extensions/plugins/


