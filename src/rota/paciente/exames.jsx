import { useState, useEffect } from 'react';
import style from '../../styles/paciente/exames/exames.module.css';
import API from '../../API/exames.json';

function Exames() {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    setData(API);
    setExpanded(Array(API.pacientes.length).fill(false));
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = Array(data.pacientes.length).fill(false);
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };
  
  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          {data &&
            data.pacientes.map((paciente, index) => (
              <div key={index} className={style.exames}>
                {paciente.resultados.map((resultado, index) => (
                  <div key={index} className={style.exameInfo}>
                    <div className={style.grupo}>
                      <img src={resultado.local.logo} alt={resultado.local.empresa} />
                      <h1>{resultado.local.empresa}</h1>
                      <h1>Data de Realização: {resultado.local.data_realizacao}</h1>
                      <button onClick={() => toggleExpand(index)}>
                        {expanded[index] ? '-' : '+'}
                      </button>
                    </div>
                      {expanded[index] && (
                      <div className={style.detalhes}>
                        <h3>Exames:</h3>
                        {paciente.resultados[index].exames.map((exame, index) => (
                          <p key={index}>
                            <strong>{exame.nome}:</strong> {exame.valor} , {exame.descricao}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Exames;