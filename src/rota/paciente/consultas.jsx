import { useState, useEffect } from 'react';
import style from '../../styles/paciente/consultas/consultas.module.css';
import API from '../../API/pacientes_register.json';

function Consultas() {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    // Encontrar o índice do paciente João Silva nos dados
    const joaoSilvaIndex = API.findIndex((paciente) => paciente.nome === 'João Silva');

    if (joaoSilvaIndex !== -1) {
      const joaoSilvaData = API[joaoSilvaIndex];
      setData(joaoSilvaData.consultas);
      setExpanded(Array(joaoSilvaData.consultas.length).fill(false));
    } else {
      console.error('Paciente João Silva não encontrado na API');
    }
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = Array(data.length).fill(false);
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
          <div className={style.titulo}>
            <h1>Minhas Consultas</h1>
          </div>
          {data &&
            data.map((consulta, index) => (
              <div key={index} className={style.consulta}>
                <div className={style.medicoInfo}>
                  <img src={consulta.medico.foto} alt={`Foto de ${consulta.medico.nome}`} />
                  <div className={style.nomes}>
                    <h2 className={style.nome_medico}>{consulta.medico.nome_medico}</h2>
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