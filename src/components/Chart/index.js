import styles from './styles.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

export default function Chart() {

    const [nova, setNova] = useState([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const i = Math.floor(Math.random() * 10);
            const x = {
                name: i,
                value: i
            }
            setNova((currentData) => [...currentData, x]);
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [nova]);

    return (
        <ResponsiveContainer width="95%" height={400}>
            <LineChart width="50%" height="100%" data={nova}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="value" />
            </LineChart>
        </ResponsiveContainer>
    );
}