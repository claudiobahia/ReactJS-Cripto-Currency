import { Carousel, Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import { useState } from 'react';
import Msg from '../Msg'
export default function Cripto(props) {


    const [toast, setToast] = useState(false);

    const adicionar = (id) => {
        setToast(true);
        setTimeout(function () {
            setToast(false);
        }, 2000);
    };

    return (
        <div className={styles.Cripto}>
            <Carousel>
                {props.criptos.map((e, index) => {
                    return (
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={e.image}
                                alt="Foto da moeda"
                            />
                            <Carousel.Caption>
                                <h2>{e.title}</h2>
                                <h3>{e.value}</h3>
                                {props.children}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            {props.button ? (
                <Msg  toast={toast}>
                    <Button className={styles.addButton} variant="primary" onClick={adicionar}>Adicionar</Button>
                </Msg>)
                : (
                    <></>
                )}

        </div>
    )
}