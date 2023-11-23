import { Link, useNavigate } from 'react-router-dom';
import styled from '../../styles/paciente/perfilPaciente/perfilPaciente.module.css';
import ia from '../../imgs/iaa.png';

function PerfilPaciente() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar dados de autenticação
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');

    // Redirecionar para a página de login
    navigate('/'); // Substitua '/login' pelo caminho da sua página de login
  };

  return (
    <>
      <div className={styled.container}>
        <div className={styled.opcoes}>
          <div className={styled.categorias}>
            <Link to="/paciente/perfil/consultas">
              <button className='button'>Consultas</button>
            </Link>
            <Link to="/paciente/perfil/exames">
              <button className='button'>Exames</button>
            </Link>
            <Link to="/paciente/perfil/agendaPaciente">
              <button className='button'>Agenda</button>
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </div>

        </div>
        <div className={styled.ia}>
          <img src={ia} alt='ia'></img>
          <Link to="">
            <button className='button'>Fazer teste</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PerfilPaciente;
