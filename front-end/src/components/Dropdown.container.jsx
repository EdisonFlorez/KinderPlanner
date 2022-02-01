import styled from "styled-components";
const DropdownContainer = styled.div`
  background: white;
  border-radius: 1rem ;
  border: solid black;
  position: absolute;
  width: 250px;
  right: 0;
  top:  60px;
  z-index: 2;
`;
export function Dropdow() {
  return (
    <DropdownContainer>
      <nav>
        <ul>
          <li>Ver perfil</li>
          <li>Editar perfil</li>
          <li>Ver mis actividades</li>
        </ul>
      </nav>
    </DropdownContainer>
  );
}
