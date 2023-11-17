import {Link} from 'react-router-dom'
import styled from '../styles/perfilPaciente/perfilPaciente.module.sass'

import ia from '../imgs/iaa.png'

function PerfilPaciente(){
    return(
        <>
        <div className={styled.container}>
            <div className={styled.opcoes}>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/">Consultas</Link></button>
                </div>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/">Exames</Link></button>
                </div>
                <div className={styled.categorias}>
                    <button className='button'><Link to="/">Marca consulta</Link></button>
                </div>
            </div>
            <div className={styled.ia}>
                <img src={ia} alt='ia'></img>
                <button className='button'><Link to="/">Fazer teste</Link></button>
            </div>
        </div>
        </>
    )
}

export default PerfilPaciente