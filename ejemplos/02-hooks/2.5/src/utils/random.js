/**
 * Obten un valor aleatorio
 */
const random = (elements) => 
  elements[Math.floor(Math.random() * elements.length)];

export default random;