import {Link} from 'react-router-dom'
import styled from '../../styles/medico/perfilMedico/perfil.module.css'

function PerfilMedico(){
    return(
        <>
        <div className={styled.container}>
            <div className={styled.opcoes}>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/medico/perfil/iniciarConsulta">Inicar Consulta</Link></button>
                </div>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/medico/perfil/consultasMedicas">Consultas</Link></button>
                </div>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/">Agenda</Link></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PerfilMedico