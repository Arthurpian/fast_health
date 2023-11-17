import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../../styles/paciente/paciente.module.css';

function Paciente() {
  const [loginError, setLoginError] = useState(false);
  const user = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'paciente');
      sessionStorage.setItem('senhaData', token);
      setLoginError(false);
      navigate('/paciente/perfil');
    } else {
      setLoginError(true);
    }
  };


  return (
    <>
      <div className={style.container}>
        <div className={style.login}>
          <div className={style.logo}>
            <h1>Fast Health</h1>
            <h2>Paciente</h2>
          </div>
          <form className={style.logar} onSubmit={handleSubmit}>
            <h2>Usuários:</h2>
            <input type="text" ref={user} />
            <br />
            <h2>Senha:</h2>
            <input type="password" ref={password} />
            <br />
            {loginError && <p>Usuário ou senha inválidos!</p>}
            <div className={style.button}>
              <input className={style.input_button} type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Paciente;
