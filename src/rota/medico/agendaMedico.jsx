import { useState, useEffect } from 'react';
import style from '../../styles/medico/agendaMedica/agendaMedica.module.css';
import API from '../../API/agendaMedico.json'; 

function AgendaMedico() {
    const [data, setData] = useState(null);
    const [expanded, setExpanded] = useState([]);
  
    useEffect(() => {
      setData(API);
      setExpanded(Array(API.medicos.length).fill(false));
    }, []);
  
    const toggleExpand = (index) => {
      const newExpanded = Array(data.medicos.length).fill(false);
      newExpanded[index] = !expanded[index];
      setExpanded(newExpanded);
    };
  
    return(
      <>
      <div className={style.container}>
          <div className={style.menu}>
            <div className={style.titulo}>
              <h1>Agenda Médica</h1>
            </div>
                  {data &&
                  data.medicos.map((medico, index)=>(
                      <div key={index} className={style.consultas}>
                          {medico.consultas.map((consulta, index) =>(
                              <div key={index} className={style.consultaInfo}>
                                  <div className={style.grupo}>
                                      <img src={consulta.foto} alt={consulta.paciente}/>
                                      <h1>{consulta.paciente}</h1>
                                      <h1>{consulta.data}</h1>
                                      <h1>{consulta.horario}</h1>
                                      <button onClick={() => toggleExpand(index)}>
                                          {expanded[index]? '-' : '+'}
                                      </button>
                                  </div>
                                  {expanded[index] && (
                                      <div className={style.detalhes}>
                                          <h1>Detalhes</h1>
                                          <h2>Local : {consulta.local}</h2>
                                          <h2>Motivo : {consulta.motivo}</h2>
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>
                  ))} 
          </div>
      </div> 
      </>
  )
}
  
  export default AgendaMedico;