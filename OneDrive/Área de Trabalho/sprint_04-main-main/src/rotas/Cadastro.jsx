import { useState } from 'react';
import { Dropdown, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainerCadastro = styled.div`
    padding: 7rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`;

const OverlayContainerCadastro = styled.div`
    display: flex;
    padding: 0 2rem;
    width: 80vh;
`;

const FormContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 3rem;
    border-radius: 2rem;
    background: #038C3E;
`;

const InputCadastro = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  width: 100%;
`;

const CadastroButtonCadastro = styled(Button)`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    background-color: #049DBF;
    width: 100%;
    height: 3rem;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
    background-color: #ffff00;
    clip-path: circle(1500px at 90% -15%);
    transition: 1s ease-out;
    pointer-events: all;
    color: black;
}
`;

const StyledDropdownToggleCadastro = styled(Dropdown.Toggle)`
  &&& {
    background-color: #4CAF50;
    border-radius: 15px;
    transition: background-color 0.1s ease;
    border: none;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const Cadastro = () => {
  const [selectedTipoDocumento, setSelectedTipoDocumento] = useState(null);
  const [documentoValue, setDocumentoValue] = useState('');
  const [isAgradecimentoVisible, setIsAgradecimentoVisible] = useState(false);

  const handleTipoDocumentoSelect = (tipoDocumento) => {
    setSelectedTipoDocumento(tipoDocumento);
    setDocumentoValue('');
  };

  const handleCadastrar = () => {
    if (selectedTipoDocumento && documentoValue.trim() !== '') {
      setIsAgradecimentoVisible(true);
    } else {
      alert('Preencha todos os campos antes de cadastrar.');
    }
  };

  const handleCloseAgradecimento = () => {
    setIsAgradecimentoVisible(false);
  };

  return (
    <MainContainerCadastro>
      <OverlayContainerCadastro>
        <FormContainerCadastro>
          <InputCadastro type="text" placeholder="Nome Completo" />
          <InputCadastro type="date" placeholder="Data de Nascimento" />
          <InputCadastro type="text" placeholder="Endereço" />
          <InputCadastro type="email" placeholder="Email" />
          <InputCadastro type="password" placeholder="Senha" />
          <InputCadastro type="password" placeholder="Confirmar Senha" />

          <Dropdown className="mb-3">
            <StyledDropdownToggleCadastro variant="primary" id="dropdown-basic">
              {selectedTipoDocumento || 'CPF/CNPJ'}
            </StyledDropdownToggleCadastro>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleTipoDocumentoSelect('CPF')}>CPF</Dropdown.Item>
              <Dropdown.Item onClick={() => handleTipoDocumentoSelect('CNPJ')}>CNPJ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {selectedTipoDocumento && (
            <InputCadastro
              type="text"
              placeholder={`Digite seu ${selectedTipoDocumento}`}
              value={documentoValue}
              onChange={(e) => setDocumentoValue(e.target.value)}
            />
          )}

          <CadastroButtonCadastro onClick={handleCadastrar}>Cadastrar</CadastroButtonCadastro>

          <Modal show={isAgradecimentoVisible} onHide={handleCloseAgradecimento} centered>
            <Modal.Header closeButton>
              <Modal.Title>Agradecemos pelo Cadastro!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Seu cadastro foi recebido com sucesso. Agradecemos por escolher nosso serviço.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseAgradecimento}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </FormContainerCadastro>
      </OverlayContainerCadastro>
    </MainContainerCadastro>
  );
};

export default Cadastro;