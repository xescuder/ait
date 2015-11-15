# Instalación entorno virtual
## Activar Guest Additions
Por qué? Para poder visualizar a pantalla completa, poder copiar/pegar entre host y contenedor,...

[Ver referencia de ayuda](https://www.youtube.com/watch?v=fbMDZJsMZg8). Los pasos son:

1. Opcionalmente actualizar el sistema a la última versión:
    sudo apt-get update
    sudo apt-get upgrade
    sudo apt-get install dkms

2. Cerrar la consola del terminal
3. Hacer reboot (Menú izquierda abajo>Salir>Reiniciar)
4. Ir a 'Dispositivos' y seleccionar 'Insertar la imagen de CD de Guest Additions'.
5. Ir abajo al icono de 'File Manager'.  A la izquierda aparece un icono de nombre 'VBOXAdditions'. Hacer click izquierdo en él. Se abrirá a la derecha su contenido.
6. Herramientas>Abrir la carpeta actual en un terminal y ejecutar:
  ```sudo sh ./VBoxLinuxAdditions.run```
7. Volver a reiniciar

## Compartir con el host carpetas

1. En Oracle VirtualBox ir a 'Máquina>Parámetros' y acceder a 'Carpetas Compartidas'.
2. Pulsar al icono de añadir y buscar en el host la ruta que queremos compartir.Indicar que se monte automáticamente y sea permanente.
3. Añadir nuestro usuario al grupo vboxsf:
    sudo adduser upc vboxsf
4. Reiniciar

## Instalación editor Sublime

[Fuente](http://lubuntuhowto.blogspot.com.es/2015/03/how-to-install-sublime-text-3-on-lubuntu.html)

Abrir terminal y ejecutar:

    sudo add-apt-repository ppa:webupd8team/sublime-text-3
    sudo apt-get update
    sudo apt-get install sublime-text-installer

A partir de este momento tendremos con el menú contextual la posibilidad de abrir cualquier fichero en este editor.

[Generación de salidas HTML basadas en documentación de markdown](http://mixu.net/markdown-styles/)

> generate-md --layout mixu-gray --input ./input --output ./output
