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
                        Parques
                    </Titulo>
                </Topo>
                <Titulo02>
                    Mais visitados
                </Titulo02>
                    <Categoria>
                        <Bloco>
                            <Img src="https://saopaulosao.com.br/wp-content/uploads/2018/12/parque_independencia-768x512.jpg" alt="Parque da Independência "></Img>
                            <Nome>Parque da Independência </Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://saopaulosao.com.br/wp-content/uploads/2018/12/parque-lage-fora.jpg" alt="Parque Lage"></Img>
                            <Nome>Parque Lage</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://saopaulosao.com.br/wp-content/uploads/2018/12/jardim-botanico.jpg" alt="Jardim Botânico"></Img>
                            <Nome>Jardim Botânico</Nome>
                        </Bloco>
                    </Categoria>

                    <Titulo02>
                        Parques mais diferentes
                    </Titulo02>

                    <Categoria>
                        <Bloco>
                            <Img src="https://quantocustaviajar.com/blog/wp-content/uploads/2021/06/Rio_Atibaia-rafting-sao-paulo.jpg" alt="RAFTING EM CAMPINAS"></Img>
                            <Nome>RAFTING EM CAMPINAS</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://saopaulosao.com.br/wp-content/uploads/2018/12/mangal.jpg" alt="Parque Mangal das Garças"></Img>
                            <Nome>Parque Mangal das Garças</Nome>
                        </Bloco>
                        <Bloco>
                            <Img src="https://saopaulosao.com.br/wp-content/uploads/2018/12/parque_dunas.jpeg" alt="Parque das Dunas"></Img>
                            <Nome>Parque das Dunas</Nome>
                        </Bloco>
                    </Categoria>

            </Container>
        </>
    )
}

export default Aventura;