# Fast Health

O propósito fundamental da Fast Health é oferecer uma solução inovadora que otimize o gerenciamento de informações médicas e aprimore a experiência do paciente. A plataforma visa centralizar o histórico médico, proporcionando fácil acesso a informações pessoais, detalhes de consultas passadas, resultados de exames e agendamentos futuros. A abordagem intuitiva do Fast Health busca simplificar a interação entre pacientes e profissionais de saúde, tornando o processo mais transparente e acessível.

## [Dupla](#)
Arthur Bessa Pian - RM99215 <br/>
Márcio Gastaldi - RM98811

## [Site](#)

### [Proposta](#)
Explore a ideia por trás do nosso projeto nesta seção do site.

Essa parte foi desenvolvida usando grid, com CSS para estilização.

### [Paciente ou Médico](#)
Escolha fazer login como paciente ou médico. Ambos compartilham a senha `Usuário: admin | Senha: 12345`. O sistema rastreia os logins usando `sessionScore`.

Observação: Se fizer login como paciente e voltar à página inicial, não será necessário fazer login novamente como paciente. No entanto, se quiser entrar como médico, precisará fazer login como médico.

### [Login Paciente](#)
Após o login como paciente, tenha acesso a:

#### [Consultas](#) 
Histórico médico, informações sobre medicamentos prescritos e descrições.
#### [Exames](#) 
Visualize exames realizados, resultados e descrições.
#### [Agenda](#) 
Próximas consultas agendadas. (Em desenvolvimento para marcação de consultas)

#### [Logout](#)
Realize logout, limpe `sessionScore` e redirecione para a página inicial.

#### [Fazer Consulta](#)
Estamos desenvolvendo integração com uma API de sintomas em Python e aplicando-a em JavaScript.

### [Login Médico](#)
#### [Iniciar Consulta](#)
Ao iniciar o atendimento, o médico insere o CPF do paciente, visualiza as últimas consultas do paciente e seus dados, como idade, alergias, altura, peso e tipo sanguíneo. O médico pode fazer recomendações e prescrever medicamentos na seção de receita.

#### [Consulta](#)
O médico acessa informações de consultas anteriores.

#### [Agenda](#)
Exibe as próximas consultas (presenciais ou online) e o respectivo paciente.

#### [Logout](#)
Efetua logout, limpa `sessionScore` e redireciona para a página inicial.

*O projeto está em constante desenvolvimento, incluindo a marcação de consultas e a expansão da funcionalidade da API de sintomas.*

