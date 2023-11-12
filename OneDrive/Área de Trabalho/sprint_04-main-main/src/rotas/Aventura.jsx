import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Topo = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;

const Titulo = styled.h2`
    font-size: 2.5rem;
    font-family: Arial, Helvetica, sans-serif;
`;

const Titulo02 = styled.h2`
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    padding: 2rem;
`;


const Categoria = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
`;

const Bloco = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Img = styled.img`
    height: 250px;
    width: 450px;
`;

const Nome = styled.span`
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;  
`;

const Raft = styled.div`
`;

function Aventura(){
    return(
        <>
            <Container>
                <Topo>
                    <Titulo>
                        Aventuras
                    </Titulo>
                </Topo>
                <Titulo02>
                    Acampar
                </Titulo02>
                    <Categoria>
                        <Bloco>
                            <Img src="https://www.viajali.com.br/wp-content/uploads/2020/02/lugares-para-acampar-em-sp-2.png" alt="Camping do Eugênio"></Img>
                            <Nome>Camping do Eugênio</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://www.viajali.com.br/wp-content/uploads/2020/02/lugares-para-acampar-em-sp-4.png" alt="Parque Estadual Intervales"></Img>
                            <Nome>Parque Estadual Intervales</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://www.viajali.com.br/wp-content/uploads/2020/02/lugares-para-acampar-em-sp-8.png" alt="Velinn Camping Ilhabela"></Img>
                            <Nome>Velinn Camping Ilhabela</Nome>
                        </Bloco>
                    </Categoria>

                    <Titulo02>
                        RAFTING
                    </Titulo02>

                    <Categoria>
                        <Bloco>
                            <Img src="https://quantocustaviajar.com/blog/wp-content/uploads/2021/06/Rio_Atibaia-rafting-sao-paulo.jpg" alt="RAFTING EM CAMPINAS"></Img>
                            <Nome>RAFTING EM CAMPINAS</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://quantocustaviajar.com/blog/wp-content/uploads/2021/06/Cachoeira_Dalva_rafting_saopaulo.jpg" alt="RAFTING EM JUQUITIBA"></Img>
                            <Nome>RAFTING EM JUQUITIBA</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://quantocustaviajar.com/blog/wp-content/uploads/2018/07/boia-cross-petar.jpg" alt="RAFTING EM IPORANGA"></Img>
                            <Nome>RAFTING EM IPORANGA</Nome>
                        </Bloco>
                    </Categoria>

            </Container>
        </>
    )
}

export default Aventura;