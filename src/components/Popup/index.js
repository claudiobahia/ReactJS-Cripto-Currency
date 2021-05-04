import { Modal } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useState } from 'react';
import Cripto from '../Cripto'



export default function Popup(props) {

    let [popupState, setpopupState] = useState(false);
    popupState = props.status;
    const handleClose = () => setpopupState(false);

    return (
        <>
            <Modal show={popupState} onHide={handleClose} >
                <Modal.Header >
                    <Modal.Title>Escolha uma moeda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cripto button={true} criptos={props.criptos} />
                </Modal.Body>
                <Modal.Footer>
                    {props.children}
                </Modal.Footer>
            </Modal>
        </>
    )
}
