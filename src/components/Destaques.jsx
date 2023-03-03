import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://www.qualitytechnology.com.br/wp-content/uploads/2021/04/Design-sem-nome-300x300.png" />
                    <Card.Body>
                        <Card.Title>Novidade mudança de API</Card.Title>
                        <Card.Text>
                           Proveremos mudança de rotas para consumir API do banco de dados, Cliente/Investidor.
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Ler PDF</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/1_1/shutterstock_pvAdf07.jpg" />
                    <Card.Body>
                        <Card.Title>Previsão novos clientes</Card.Title>
                        <Card.Text>
                            A equipe de marketing prevê, que Shar'k Tech irá em 2023 atingir ao menos 80% dos clientes que já possui.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Ler PDF</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../src/img/5190435.jpg" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            Trabalharemos para melhorar cada vez mais nosso suporte ao cliente, Aonde dá destaque ao Shar'k Tech.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Ler PDF</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;