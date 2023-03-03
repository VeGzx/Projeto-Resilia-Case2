import Container from 'react-bootstrap/Container';
import "../../styles/Footer.css"
function Rodape() {
    return (
        <footer className=" bg-dark ">
        <Container className='text-center py-3 text-light' >
            <p>&copy; Shar'k Tech 2023</p> 
        </Container>
        </footer>
    );
}

export default Rodape