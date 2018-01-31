// Este archivo no se transpila, por lo que debe usarse CommonJS y ES5

// Registrar babel para transpilar antes que corramos nuestras pruebas
require('babel-register')();

// Desactiva webpack features que Mocha no entiende
require.extensions['.css'] = function(){};
