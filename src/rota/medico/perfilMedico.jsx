import { Link, useNavigate } from 'react-router-dom';
import styled from '../../styles/medico/perfilMedico/perfil.module.css'

function PerfilMedico(){
    const navigate = useNavigate();

    const handleLogout = () => {
      // Limpar dados de autenticação
      sessionStorage.removeItem('userData');
      sessionStorage.removeItem('senhaData');
  
      // Redirecionar para a página de login
      navigate('/'); // Substitua '/login' pelo caminho da sua página de login
    };
    
    return(
        <>
        <div className={styled.container}>
            <div className={styled.opcoes}>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/medico/perfil/iniciarConsulta">Inicar Consulta</Link></button>
                    <button className='button'><Link to="/medico/perfil/consultasMedicas">Consultas</Link></button>
                    <button className='button'><Link to="/medico/perfil/agendaMedica">Agenda</Link></button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PerfilMedico