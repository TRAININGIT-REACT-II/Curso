import Counter from "./components/Counter";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { THEMES } from "./constants/themes";
import Theme from "./contexts/theme";

const App = () => {
  // App es el componente que va a almacenar la referencia y
  // la funcion de actualizacion
  const [theme, setTheme] = useState(THEMES.light);

  // Para aplicar el theme global, vamos a aplicar una clase al elemento
  // body. Luego, cada componente debera realizar sus cambios necesarios
  useEffect(() => {
    // En este caso, document.body no debe de mutar ya que React no
    // modifica dicho nodo. Por ello, es seguro acceder a el sin hacer
    // uso de referencias
    if (document.body.classList.value == "") {
      document.body.classList.add(theme);
    } else {
      document.body.classList.replace(
        document.body.classList.value,
        theme
      );
    }

  }, [theme]);

  return <Theme.Provider value={{ current: theme, update: setTheme}}>
    <Layout title="2.5 Contextos y useContext">
      <section aria-labelledby="counter" aria-describedby="counter-desc">
        <h3 id="counter">Contador</h3>
        <p id="counter-desc">
          ¡Y aquí tenemos la funcionalidad más esperada de todo el proyecto! Dark mode
        </p>
        <Counter />
      </section>
    </Layout>
  </Theme.Provider>
};

export default App;