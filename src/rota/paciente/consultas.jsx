import { useState, useEffect } from 'react';
import style from '../../styles/paciente/consultas/consultas.module.css';
import API from '../../API/paciente.json';

function Consultas() {
  const [data, setData] = useState(API);
  const [expanded, setExpanded] = useState(Array(API.consultas.length).fill(false));

  useEffect(() => {
    fetch({ API })
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setExpanded(Array(jsonData.consultas.length).fill(false));
      })
      .catch((error) => console.error('Erro ao carregar os dados da API', error));
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = Array(data.consultas.length).fill(false);
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          {data &&
            data.consultas.map((consulta, index) => (
              <div key={index} className={style.consulta}>
                <div className={style.medicoInfo}>
                  <img src={consulta.medico.foto} alt={`Foto de ${consulta.medico.nome}`} />
                  <div className={style.nomes}>
                    <h2 className={style.nome_medico}>{consulta.medico.nome}</h2>
                    <h2>{consulta.data}</h2>
                  </div>
                  <button onClick={() => toggleExpand(index)}>
                    {expanded[index] ? '-' : '+'}
                  </button>
                </div>
                {expanded[index] && (
                  <div className={style.detalhes}>
                    <p>Sintomas: {consulta.sintomasRelatados.join(', ')}</p>
                    <p>Remédios Prescritos: {consulta.remediosPrescritos.join(', ')}</p>
                    <p className={style.anotacaoMedica}>
                      Anotações Médicas: {consulta.anotacaoMedica}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Consultas;
