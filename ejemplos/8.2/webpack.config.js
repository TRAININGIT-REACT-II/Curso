const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  // En este caso necesitamos que sea la propia configuracion la que indice la ruta de
  // entrada
  entry: resolve(__dirname, "./index.js"),
  output: {
    // Almacenamos los ficheros finales en la propia carpeta del ejemplo
    path: resolve(__dirname, "dist"),
    // Modificamos el nombre para incluir el hash del contenido y permitir una cache
    // de permanente
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
    // Fuerza a que los distintos ficheros se sirvan partiendo del directorio raiz /.
    // Si no se fuerza este comportamiento, al utilizar react-router y definir rutas,
    // webpack utilizara URLs relativas como /mi-ruta/main.js causando errores.
    publicPath: "/",
  },
  module: {
    // Definimos los distintos modulos de transpilacion disponibles
    rules: [
      // Pasamos todos los ficheros .js por el transpilador de babel
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        },
      },
      // Cargamos los estilos de CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Definimos los plugins de webpack
  plugins: [
    // Utilizamos una plantilla HTML para todos los ejemplos por defecto
    new HtmlWebPackPlugin({
      template: "./common/templates/index.html",
      filename: "index.html",
    }),
  ],
  // Por ahora, incluimos siempre los source maps para que las herramientas
  // de desarrollo del navegador muestren el codigo fuente
  devtool: "eval-cheap-module-source-map",
  // Configuracion del servidor de desarrollo
  devServer: {
    // Forzamos a que cualquier ruta que sea la de un fichero conocido por
    // webpack la sirva con el fichero index.html. Imprescindible cuando trabajas
    // con gestores de rutas como react-router
    historyApiFallback: true,
    // Actualiza la aplicacion en caliente de manera que el navegador carga los
    // nuevos cambios automaticamente
    hot: true,
    // Abre el navegador cuando se inicia el servidor de desarrollo.
    open: true,
  },
};
