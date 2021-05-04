import { Container, Navbar, Form, Button, Col } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useState } from 'react';
import Popup from '../Popup';



export default function Header() {

    const [popupState, setpopupState] = useState(false)
    const handleShow = () => setpopupState(true);
    const handleClose = () => setpopupState(false);

    const criptos = [ //pegar da api
        {
            id: 1,
            image: 'https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg',
            title: 'Moeda 1',
            value: '130895854.2944564577'
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg',
            title: 'Moeda 2',
            value: '130895854.2944564577'
        }
    ]

    return (
        <Container fluid>
            <Navbar bg="light">
                <Col sm={10}>
                    <h1 className={styles.title}>Cripto-Graph</h1>
                </Col>
                <Col sm={2}>
                    <Form inline>
                        <Button variant="outline-info" onClick={handleShow}>Adicionar moeda</Button>
                    </Form>
                </Col>
            </Navbar>
            <Popup criptos={criptos} status={popupState}>
                <Button variant="primary" className={styles.closebtn} onClick={handleClose}>Fechar</Button>
            </Popup>
        </Container>
    )
}
