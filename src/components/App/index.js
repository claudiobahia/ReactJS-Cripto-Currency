import styles from './styles.module.scss';
import Cripto from '../Cripto';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from '../Chart';


export default function App() {

    //let criptos_selecionadas = ()=> localstorage;
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
        <div className={styles.container}>
            <header className={styles.header}>
                <Header />
            </header>
            <body fluid className={styles.body}>
                <div className={styles.chart}>
                    <Chart/>
                </div>
                <div className={styles.cripto}>
                    <Cripto button={false} criptos={criptos} />
                </div>
                
            </body>
            <footer className={styles.footer}>
                estudar paginação, deixar limite de cripto
            </footer>
        </div>
    );
}