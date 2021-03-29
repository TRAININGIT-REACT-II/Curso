import { useState } from "react";
import Layout from "../../../common/components/Layout";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return <Layout title="3.4 Portals">
    <section aria-describedby="desc">
      <p id="desc">
        Los <code>Portals</code> o portales te permiten renderizar contenido en un nodo
        específico del DOM. Esta funcionalidad es especialmente útil cuando determinados
        elementos necesitan estar en una posición determinada del DOM para visualizarse
        correctamente. Un claro ejemplo son los modales o alertas de una aplicación.
      </p>
      <button onClick={openModal}>Mostrar Modal</button>
      <Modal show={showModal} onClose={closeModal}>
        <h3>Esto es un modal</h3>
        <p>Aqui puedes mostrar cualquier tipo de contenido.</p>
      </Modal>
    </section>
  </Layout>
};

export default App;