import { useState, useEffect } from 'react';
import style from '../../styles/consultas/consultas.module.css';
import API from '../../API/paciente.json'

function Consultas() {
    const [data, setData] = useState(API);
    const [expanded, setExpanded] = useState(Array(API.consultas.length).fill(false));
  

  useEffect(() => {
    fetch({API})
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setExpanded(Array(jsonData.consultas.length).fill(false));
      })
      .catch((error) => console.error('Erro ao carregar os dados da API', error));
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
          {data && data.consultas.map((consulta, index) => (
            <div key={index} className={style.consulta}>
                <div className={style.medicoInfo}>
                    <img src={consulta.medico.foto} alt={`Foto de ${consulta.medico.nome}`} />
                    <div className={style.nomes}>
                        <p>{consulta.medico.nome}</p>
                        <p>{consulta.data}</p>
                    </div>
                </div>
                <button onClick={() => toggleExpand(index)}>
                    {expanded[index] ? '-' : '+'}
                </button>
                {expanded[index] && (
                <div className={style.detalhes}>
                  <p>Sintomas: {consulta.sintomasRelatados.join(', ')}</p>
                  <p>Remédios Prescritos: {consulta.remediosPrescritos.join(', ')}</p>
                  <p>Anotações Médicas: {consulta.anotacaoMedica}</p>
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
