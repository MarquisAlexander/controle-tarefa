import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api.js';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Logon() {
    const [email, setEmail] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post("sessions", { email });

            localStorage.setItem('userId', email );
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userName', response.data.id);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente!')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">

                <img src={logoImg} alt="Minhas tarefas" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                    placeholder="Sua ID"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <button className='button' type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#0078E7"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

        </div>
    );
}