// home.jsx
import { Link, useNavigate } from 'react-router-dom';
import "../styles/home/home.module.css";
import style from "../styles/home/home.module.css";

function Home() {
  const navigate = useNavigate();

  const handlePacienteClick = () => {
    const isAuthenticated = sessionStorage.getItem('userData') && sessionStorage.getItem('senhaData');
    const isPaciente = sessionStorage.getItem('userData') === 'paciente';

    if (isAuthenticated && isPaciente) {
      navigate('/paciente/perfil');
    } else {
      navigate('/paciente');
    }
  };

  const handleMedicoClick = () => {
    const isAuthenticated = sessionStorage.getItem('userData') && sessionStorage.getItem('senhaData');
    const isMedico = sessionStorage.getItem('userData') === 'medico';

    if (isAuthenticated && isMedico) {
      navigate('/medico/perfil');
    } else {
      navigate('/medico');
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.proposta}>
          <a href='/proposta'><button className={style.proposta}>Proposta</button></a>
        </div>
        <main>
          <div className={style.paciente}>
            <button className={style.paciente_button} onClick={handlePacienteClick}>Paciente</button>
          </div>
          <div className={style.medico}>
            <button className={style.medico_button} onClick={handleMedicoClick}>Médico</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;