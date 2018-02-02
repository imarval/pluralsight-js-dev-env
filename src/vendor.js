/* Este archivo contiene referencias para los proveedores
de librerias que nosotros estamos usando en el proyecto.
Esto sera usado para webpack en el build de produccion only.
Un bundle separado para proveedores de codigo es util ya que
es poco probable que cambie tan a menudo como el codigo de
la aplicacion. Entonces todas las bibliotecas que hagamos
referencia aqui seran escritas en vendor.js para que puedan
ser almacenadas en cache hasta que una de ellas cambie. Basicamente,
esto evita que los clientes tengan que descargar un gran archivo
JS cada vez que cambia una linea de codigo. Solo tienen que
descargar vendor.js cuando cambia la biblioteca de un proveedor,
lo que deberia ser menos frecuente.
Todos los archivos que no se mencionan aqui se agruparan en main.js
para la build de produccion.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
