import { Toast } from 'react-bootstrap';
import styles from './styles.module.scss';


export default function Msg(props) {
    return (
        <>
            <Toast show={props.toast} className={styles.toast}>
                <Toast.Header>
                    <strong className="mr-auto">Moeda adicionada</strong>
                </Toast.Header>
                <Toast.Body>Moeda foi adicionada na lista</Toast.Body>
            </Toast>
            {props.children}
        </>
    )
}
