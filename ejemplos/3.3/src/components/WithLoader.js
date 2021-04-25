// Este High Order Component renderiza una animcación de carga
// basada en la propiedad "loading". Si esta propiedad no está

import Loader from "./Loader";

// definida o su valor es false, devuelve el contenido.
const withLoader = (WrappedComponent) => {
  // El primer paso es devolver un nuevo componente
  const newComponent = (props) => {
    const { loading } = props;

    if (loading == null || loading == false) {
      return <WrappedComponent {...props} />;
    } else {
      return <Loader />;
    }
  };

  // Le damos un nombre identificativo
  newComponent.displayName = `withLoader(${WrappedComponent.displayName})`;

  // Lo devolvemos
  return newComponent;
};

export default withLoader;
