import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { FaCalendarCheck, FaCheck, FaInbox }from "react-icons/fa";

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([]);


    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    const history = useHistory()



    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setIncidents(response.data)
        })

    }, [userId])

    async function handleTerminarTarefa(id) {
        try{
            await api.delete(`tb_tarefas/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

        setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err) {
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    function handleBackProfile() {

        history.push('/suport');
    }

    return (
        <>
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="minhas tarefas" />
                <span> Bem vindo(a), {userName}</span>

                <Link className="button" to="/incidents/new">Cadastrar nova tarefa</Link>
                <button onClick={handleLogout}type="button">
                    <FiPower size={18} color="#0078E7" />
                </button>
            </header>

            <h1>Tarefas encontradas</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Tarefa:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>Prioridade:</strong>
                    <p>{incident.prioridade}</p>

                    <strong>Responsável:</strong>
                    <p>{incident.responsavel}</p>

                    <button onClick={() => handleTerminarTarefa(incident.id)}type="button">
                        <p></p>
                        <FaCheck size={40} color="#80C55F" />
                    </button>
                
                    <button onClick={() => handleTerminarTarefa(incident.id)}type="button">
                        <p></p>
                        <FiTrash2 size={40} color="#DB3B3B" />
                    </button>
              
                </li>
                ))}
            </ul>
            <div className="suportButton">
                    <button onClick={handleBackProfile} type="buttonSuport">
                    <FaInbox size={30} color="#0078E7" /> <p>Entre em contato com a nossa equipe</p>
                </button>
        </div>
        </div>

</>
    );
}