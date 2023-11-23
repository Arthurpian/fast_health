import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from '../../styles/medico/iniciarConsulta/iniciarConsulta.module.css';

import pacientesData from '../../API/pacientes_register.json';

function IniciarConsulta() {
  const { register, handleSubmit, setValue } = useForm();
  const [patientData, setPatientData] = useState(null);
  const [cpfNotFound, setCPFNotFound] = useState(false);
  const [consultaSalva, setConsultaSalva] = useState(false);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    setExpanded(Array(pacientesData.length).fill(false));
  }, []);

  const formatCPF = (cpf) => {
    const numericCPF = cpf.replace(/\D/g, '');
    const limitedCPF = numericCPF.substring(0, 11);
    const formattedCPF = limitedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedCPF;
  };

  const handleCPFChange = (e) => {
    const rawCPF = e.target.value.replace(/[.-]/g, '');
    const formattedCPF = formatCPF(rawCPF);
    setValue('cpf', formattedCPF);
    fetchPatientData(rawCPF);
  };

  const fetchPatientData = (cpf) => {
    try {
      const patient = pacientesData.find((p) => p.cpf === cpf);
  
      if (patient) {
        setPatientData(patient);
        setCPFNotFound(false);
  
        // Atualiza todos os campos do formulário com os dados do paciente
        setValue('nome', patient.nome);
        setValue('idade', patient.idade);
        setValue('peso', patient.peso);
        setValue('alergia', patient.alergia);
        setValue('tipoSanguineo', patient.tipoSanguineo);
        setValue('altura', patient.altura);
  
        // Se há consultas, atualiza os dados da última consulta (assumindo que a lista está ordenada por data)
        if (patient.consultas && patient.consultas.length > 0) {
          const lastConsulta = patient.consultas[patient.consultas.length - 1];
          setValue('nome_medico', lastConsulta.medico.nome_medico);
          // Adicione outros campos relacionados à consulta, se necessário
        }
      } else {
        setPatientData(null);
        setCPFNotFound(true);
  
        // Limpa os campos do formulário se o paciente não for encontrado
        setValue('nome', '');
        setValue('idade', '');
        setValue('peso', '');
        setValue('alergia', '');
        setValue('tipoSanguineo', '');
        setValue('altura', '');
        setValue('nome_medico', '');
  
        console.error('Paciente não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do paciente', error);
      setCPFNotFound(true);
    }
  };
  

  const onSubmit = async (data) => {
    // Simulate saving the consultation (replace this with your actual logic)
    // For demonstration purposes, we setConsultaSalva to true after 2 seconds
    setTimeout(() => {
      setConsultaSalva(true);
    }, 100);
  };

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };

  useEffect(() => {
    if (consultaSalva) {
      window.alert('Consulta salva');
      setConsultaSalva(false);
    }
  }, [consultaSalva]);

  return (
    <div className={styled.container}>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={`${styled.cpf} ${cpfNotFound ? styled.cpfNotFound : ''}`}>
            <strong>CPF:</strong>
            <input
              {...register('cpf')}
              onBlur={(e) => fetchPatientData(e.target.value.replace(/[.-]/g, ''))}
              onChange={handleCPFChange}
              maxLength="14"
            />
          </label>
          <div className={styled.part1}>
            <img src={patientData?.foto} alt="Foto do paciente" style={{ maxWidth: '100px' }} />
            <label className={styled.perfil}>
              <div>
                <strong>Nome:</strong>
                <input {...register('nome')} />
              </div>
              <div>
                <strong>Idade:</strong>
                <input {...register('idade')} />
              </div>
              <div>
                <strong>Alergia:</strong>
                <input {...register('alergia')} />
              </div>
            </label>
          </div>

          <div className={styled.part2}>
            <label>
              <strong>Altura:</strong>
              <input {...register('altura')} />
              <strong>Peso:</strong>
              <input {...register('peso')} />
              <strong>Tipo Sanguíneo:</strong>
              <input {...register('tipoSanguineo')} />
            </label>
            <label className={styled.descricao}>
              <strong>Descrição:</strong>
              <input type="text" />
            </label>
          </div>

          <div className={styled.part3}>
            <strong>Receita:</strong>
            <input type="text" />
            <button type="submit">Enviar</button>
          </div>
        </form>
        <div className={styled.historico}>
          <h1>Histórico</h1>
          {patientData && (
            <>
              {patientData.consultas.map((consulta, index) => (
                <div key={index} className={styled.consulta}>
                  <div className={styled.medicoInfo}>
                    <div className={styled.nomes}>
                      <h2>{consulta.data}</h2>
                      
                      <button onClick={() => toggleExpand(index)}>
                        {expanded[index] ? '-' : '+'}
                      </button>
                    </div>
                  </div>
                  {expanded[index] && (
                    <div className={styled.detalhes}>
                       <p><strong>Médico:</strong> {consulta.medico.nome_medico}</p>
                      <p><strong>Sintomas: </strong>{consulta.sintomasRelatados.join(', ')}</p>
                      <p><strong>Remédios Prescritos: </strong>{consulta.remediosPrescritos.join(', ')}</p>
                      <p className={styled.anotacaoMedica}>
                        <strong>Anotações Médicas: </strong>{consulta.anotacaoMedica}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default IniciarConsulta;
