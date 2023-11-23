import { useState, useEffect } from 'react';
import style from '../../styles/paciente/exames/exames.module.css';
import API from '../../API/pacientes_register.json';

function Exames() {
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    setData(API);
    setExpanded(Array(API.length).fill(false));
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          <div className={style.titulo}>
            <h1>Meus exames</h1>
          </div>
          {data &&
            data.map((paciente, index) => {
              if (paciente.nome === 'João Silva') {
                return (
                  <div key={index} className={style.exames}>
                    {paciente.exames.map((resultado, exameIndex) => (
                      <div key={exameIndex} className={style.exameInfo}>
                        <div className={style.grupo}>
                          <img src={resultado.local.logo} alt={resultado.local.empresa} />
                          <h1>{resultado.local.empresa}</h1>
                          <h1>Data de Realização: {resultado.local.data_realizacao}</h1>
                          <button onClick={() => toggleExpand(exameIndex)}>
                            {expanded[exameIndex] ? '-' : '+'}
                          </button>
                        </div>
                        {expanded[exameIndex] && (
                          <div className={style.detalhes}>
                            <h3>Exames:</h3>
                            {resultado.resultados.map((exame, resultIndex) => (
                              <p key={resultIndex}>
                                <strong>{exame.nome}:</strong> {exame.valor}, {exame.descricao}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </>
  );
}

export default Exames;