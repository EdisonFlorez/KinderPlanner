import { Button } from "./Button";
import styled from "styled-components";

const StyledModal = styled.article`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  .modal.is-open {
    display: flexbox;
  }
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
  return (
    <StyledModal className="modal is-open">
      <div className="modal-container">
        <Button value="X" type="button" className="modal-close" />
        {children}
      </div>
    </StyledModal>
  );
}
