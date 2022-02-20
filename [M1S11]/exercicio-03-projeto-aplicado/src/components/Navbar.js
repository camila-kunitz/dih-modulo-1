import styled from 'styled-components';

const Nav = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor2};
`;

const Titulo = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.corPrimaria};
`;

const BotaoTema = styled.button`
  height: 40px;
  width: 80px;
  color: ${(props) => props.theme.corPrimaria};
  background-color: ${(props) => props.theme.corSecundaria};
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.corPrimaria};
  border-radius: 50px;
  &:hover {
    color: ${(props) => props.theme.corPrimaria};
    background-color: ${(props) => props.theme.backgroundColor1};
  }
  &:active {
    color: ${(props) => props.theme.corSecundaria};
    background-color: ${(props) => props.theme.backgroundColor2};
  }
`;

const Navbar = ({ tema, handleTema }) => {
  return (
    <Nav>
      <Titulo>Lista de perfis</Titulo>
      <BotaoTema onClick={() => handleTema()}>{tema}</BotaoTema>
    </Nav>
  );
};

export default Navbar;
