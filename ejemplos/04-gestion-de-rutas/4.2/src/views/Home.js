/**
 * Pagina principal
 */
const Home = () => (
  <section aria-describedby="desc">
    <p id="desc">
      Los parámetros en rutas te permiten renderizar una vista utilizando
      elementos variables o patrones en lugar de una URL fija. Esto es muy útil
      a la hora de crear rutas para acceder a recursos.
    </p>
    <p>
      Para probarlo, modifica la ruta del navegador a{" "}
      <code>/hello/TUNOMBRE</code>
    </p>
  </section>
);

export default Home;
