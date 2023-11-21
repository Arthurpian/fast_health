import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from '../../styles/medico/iniciarConsulta/iniciarConsulta.module.css';

import pacientesData from '../../API/pacientes_register.json';

function IniciarConsulta() {
  const { register, handleSubmit, setValue } = useForm();
  const [patientData, setPatientData] = useState(null);
  const [cpfNotFound, setCPFNotFound] = useState(false);
  const [consultaSalva, setConsultaSalva] = useState(false);

  useEffect(() => {
    if (patientData) {
      setValue('nome', patientData.nome);
      setValue('foto', patientData.foto);
      setValue('idade', patientData.idade);
      setValue('peso', patientData.peso);
      setValue('alergia', patientData.alergia);
      setValue('altura', patientData.altura);
      setValue('tipoSanguineo', patientData.tipoSanguineo);
    }
  }, [patientData, setValue]);

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
      } else {
        setPatientData(null);
        setCPFNotFound(true);
        setValue('nome', '');
        setValue('foto', '');
        setValue('idade', '');
        setValue('peso', '');
        setValue('alergia', '');
        setValue('tipoSanguineo', '');
        setValue('altura', '');
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

  useEffect(() => {
    if (consultaSalva) {
      window.alert('Consulta salva');
      setConsultaSalva(false);
    }
  }, [consultaSalva]);

  return (
    <div className={styled.container}>
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
    </div>
  );
}

export default IniciarConsulta;
