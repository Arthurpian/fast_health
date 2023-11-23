import style from "../styles/proposta/proposta.module.css"

function Proposta(){
    return(
        <>
            <div className={style.container}>
                <div className={style.header}> 
                    <div>
                        <h1>Fast Health</h1>
                    </div>
                    <div>
                        <h1>Glocal Solution 2023 - Engenharia de Sofware</h1>
                    </div>
                </div>
                <div className={style.tema}>
                    <div>
                        <img  className={style.imagem} src="https://i.pinimg.com/736x/b4/61/c7/b461c73dfd9677eeead5bec150cf7795.jpg" alt="tema"></img>
                    </div>
                    <div className={style.nome_soluçao}>
                        <div>
                            <h1>Fast Health</h1>
                        </div>
                        <div>
                            <h2>A Fast Health oferece uma plataforma inovadora que simplifica o acesso a informações médicas, centraliza históricos de pacientes e fortalece a comunicação entre profissionais de saúde e pacientes. Com uma interface intuitiva, agendamento eficiente de consultas e ferramenta de autoconsulta, a solução promove uma experiência de cuidado mais integrada e personalizada. Vantagens incluem eficiência, transparência e uma conexão significativa entre pacientes e profissionais de saúde.</h2>
                        </div>
                    </div>
                </div>
                <div className={style.solucao}>
                    <div>
                        <h1>Solução</h1>
                        <h2>A Fast Health é uma plataforma inovadora que simplifica a gestão de informações médicas, proporcionando uma experiência de cuidado mais integrada</h2>
                    </div>
                    <div>
                        <h1>O que ela faz?</h1>
                        <h2>Centraliza históricos médicos, facilita o agendamento de consultas e oferece uma ferramenta de autoconsulta para sugestões de diagnóstico, fortalecendo a comunicação entre pacientes e profissionais de saúde.</h2>
                    </div>
                    <div>
                        <h1>Como funciona?</h1>
                        <h2>A plataforma implementa uma arquitetura online, integra dados de forma segura e apresenta uma interface amigável. A ferramenta de autoconsulta é desenvolvida para aprimorar a compreensão durante as consultas médicas.</h2>
                    </div>
                </div>
                <div className={style.vantagem}>
                    <div>
                        <h1>Vantagem</h1>
                        <h4>-Eficiência no acesso a informações médicas.<br></br></h4>
                        <h4>-Agendamento de consultas simplificado.<br></br></h4>
                        <h4>-Comunicação aprimorada entre pacientes e profissionais de saúde.<br></br></h4>
                        <h4>-Experiência de cuidado mais transparente e personalizada.</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export  default Proposta