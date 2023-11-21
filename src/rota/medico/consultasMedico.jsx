import { useState, useEffect } from 'react';
import style from '../../styles/medico/consultasMedicas/consultasMedica.module.css';
import API from '../../API/consultas_medias.json';

function Consultas() {
  const [data, setData] = useState(API);
  const [expanded, setExpanded] = useState(Array(API.consultas.length).fill(false));

  useEffect(() => {
    // Simule uma chamada à API para obter os dados do médico
    // Você pode substituir isso pela lógica real de chamada à API
    setData(API);
    setExpanded(Array(API.consultas.length).fill(false));
  }, []);

  const toggleExpand = (index) => {
    const newExpanded = Array(data.consultas.length).fill(false);
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };

  // Filtra as consultas do médico "Marcio Pereira Santos"
  const consultasMarcio = data.consultas.filter(
    (consulta) => consulta.medico.nome === 'Marcio Pereira Santos'
  );

  return (
    <>
      <div className={style.container}>
        <div className={style.menu}>
            <div className={style.medicoInfo}>
                <img src={consultasMarcio[0].medico.foto} alt={`Foto de ${consultasMarcio[0].medico.nome}`} />
                <h2>{consultasMarcio[0].medico.nome}</h2>
            </div>
          {consultasMarcio.map((consulta, index) => (
            <div key={index} className={style.consulta}>
              <div className={style.pacienteInfo}>
                <img src={consulta.paciente.foto} alt={`Foto de ${consulta.paciente.nome}`} />
                <div className={style.nomes}>
                  <h2 className={style.nome_paciente}>{consulta.paciente.nome}</h2>
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
