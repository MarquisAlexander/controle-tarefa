import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api.js';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data ={
            name,
            email,
            whatsapp,
            password,
        };

        try{
        const response = await api.post('users', data)

        alert(`Seu ID de acesso: ${response.data.id}`)

        history.push('/')
        } catch(err){
            alert('Erro no cadastro tente novamente.');
        }

        console.log(data);
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="minhas tarefas"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e deixe-nos ajudá lo a organizar seu dia</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#0078E7"/>
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    type="email" placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input
                    maxlength="11"
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                    <input
                    placeholder="Sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <div className="input-group">
                    
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}