/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

// Entorno para configuracion de babelrc y saber en que entorno se esta
// para la ejecucion del build
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generando minify bundle para production. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
  if (err) { // Por si algun error grave sucede
    console.log(chalk.red(err));
    return 1
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack genero las siguientes warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('La app ha sido construida para produccion y escrita en /dist:'));
  return 0
});
