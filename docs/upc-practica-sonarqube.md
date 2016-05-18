
# Instalar Sonarqube


## Java

> sudo apt-get install openjdk-8-jre

## Mysql


> sudo apt-get install mysql-server

user: ait
pass: ait

> mysql -u root -p < create_database.sql

CREATE DATABASE sonar CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER 'sonar' IDENTIFIED BY 'sonar';
GRANT ALL ON sonar.* TO 'sonar'@'%' IDENTIFIED BY 'sonar';
GRANT ALL ON sonar.* TO 'sonar'@'localhost' IDENTIFIED BY 'sonar';
FLUSH PRIVILEGES;



## Instalar SonarQube

http://www.sonarqube.org/downloads/
http://docs.sonarqube.org/display/SONAR/Installing+the+Server

Fichero sonar.properties:

sonar.jdbc.username=sonar
sonar.jdbc.password=sonar

#----- Embedded Database (default)
# H2 embedded database server listening port, defaults to 9092
#sonar.embeddedDatabase.port=9092


#----- MySQL 5.x
# Only InnoDB storage engine is supported (not myISAM).
# Only the bundled driver is supported. It can not be changed.
sonar.jdbc.url=jdbc:mysql://localhost:3306/sonar?useUnicode=true&characterEncoding=utf8&rewriteBatchedStatements=true&useConfigs=maxPerformance

# Binding IP address. For servers with more than one IP address, this property specifies which
# address will be used for listening on the specified ports.
# By default, ports will be used on all IP addresses associated with the server.
sonar.web.host=127.0.0.1

# Web context. When set, it must start with forward slash (for example /sonarqube).
# The default value is root context (empty value).
sonar.web.context=/sonar

# TCP port for incoming HTTP connections. Disabled when value is -1.
sonar.web.port=9000


## Instalar scanner

http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner



1. Abrir la carpeta home/ait
2. Escoger 'View → Show Hidden Files'
3. Abrir fichero .profile
4. Al final de todo añadir

PATH="$PATH:/etc/sonar-scanner-2.6.1/bin"


En el fichero /conf/sonar-scanner.properties apuntar a

#----- Default SonarQube server
sonar.host.url=http://127.0.0.1:9000/sonar


## Instalar plugins
http://docs.sonarqube.org/display/PLUG/Plugin+Library

> mv sonar-javascript-plugin-2.12.jar /etc/sonarqube-5.5/extensions/plugins/


## Ejecutar análisis

### sonar-project.properties (raíz proyecto)

# Required metadata
sonar.projectKey=ait:agile
sonar.projectName=AIT
sonar.projectVersion=1.0

# Comma-separated paths to directories with sources (required)
sonar.sources=app/js

# Language
sonar.language=js

# Encoding of sources files
sonar.sourceEncoding=UTF-8



> cd /etc/sonarqube-5.5/bin/linux-x86-64
> ./sonar.sh console

Ejecutar scanner en el proyecto:

http://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner


Des del directorió raíz del proyecto:
> sonar-scanner

