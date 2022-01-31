import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flexbox;

  .modal-container {
    max-width: 350px;
    padding: 40px 40px;
    background-color: #ff96ad;
    margin: 0 auto 25px;
    margin-top: 50px;
    border-radius: 20px;
  }
  .modal-close {
    position: relative;
    left: 200px;
  }
`;
export function Modal({ children }) {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  }
  return (
    <Overlay onClick={closeModal}>
      <div className="modal-container" onClick={(event)=> event.stopPropagation()}>
        {/* Si hago que el botón en vez de cambiar la visibilidad elimine el componente y vuelva a la ruta "padre"
         */}
        <button
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </Overlay>
  );
}
