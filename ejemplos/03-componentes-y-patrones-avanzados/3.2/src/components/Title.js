import React from "react";

/**
 * Renderiza un título y lanza un error si es necesario
 */
const Title = ({ children, sendError }) => {
  if (sendError === true) {
    throw new Error("Error desde title!")
  }

  return <h1>{children}</h1>
}

export default Title;
