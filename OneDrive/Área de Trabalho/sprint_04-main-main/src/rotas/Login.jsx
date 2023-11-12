import { useRef } from 'react'
import styled from 'styled-components';
import Logo from '../componentes/Logo'
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 7rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`;

const Loginn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    border-radius: 2rem;
    background: #038C3E;
`;

const Logo1 = styled.div`
    padding-top: 2rem;
`;

const Dados = styled.div`
    padding: 2rem;
`;

const Form = styled.form`
`;

const Input = styled.input`
    width: 100%;
    outline: none;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid black;
    font-size: 2rem;
    padding: 0.4rem;

`;

const Texto = styled.p`
    font-size: 1rem;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
`;

const Texto2 = styled.p`
    display: flex;
    text-align: center;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
`;

const Input_button = styled.input`
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

const Button = styled.p`
    display: flex;
    justify-content: center;
`;

const RegisterButton = styled(Button)`
    border-radius: 5px;
    background-color: #049DBF;
    width: 100%;
    height: 3rem;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
    display: flex;
    align-items: center;

&:hover {
    background-color: #ffff00;
    clip-path: circle(1500px at 90% -15%);
    transition: 1s ease-out;
    pointer-events: all;
    color: black;
}
`;

const RegisterContainer = styled.div`

`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Login(){

  const user = useRef();
  const password = useRef();
  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');


  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };


    return(
        <>
        <Container>
            <Loginn>
                <Logo1>
                    <Logo />
                </Logo1>
                <Dados>
                    <Form onSubmit={handleSubmit}>
                        <Texto>
                            USUÁRIO:
                            <Input type="text" ref={user} />
                        </Texto>
                        <br />
                        <Texto>
                            SENHA:
                            <Input type="password" ref={password} />
                        </Texto>
                        <br />
                        <Button>
                            <Input_button type="submit" value="Login" />
                        </Button>
                        <RegisterContainer>
                            <Texto2 style={{ marginBottom: '10px' }}>Ainda não é cadastrado?</Texto2>
                            <StyledLink to="/login/cadastro">
                                <RegisterButton variant="primary">
                                Cadastre-se
                                </RegisterButton>
                            </StyledLink>
                        </RegisterContainer>
                    </Form>
                </Dados>
            </Loginn>
        </Container>
        </>
    );
}

export default Login;