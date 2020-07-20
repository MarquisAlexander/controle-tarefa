import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { FaCheck, FaInbox, FaSun }from "react-icons/fa";
import { BsSun } from "react-icons/bs"

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [tasks, setTasks] = useState([]);


    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    const history = useHistory()

    const [state, setState] = useState({isSwitchOn: false});
        

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: userId,
            }
        }).then(response => {
            setTasks(response.data)
        })
    }, [userId])

    async function handleTerminarTarefa(id) {
        try{
            await api.delete(`tb_tarefas/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

        setTasks(tasks.filter(task => task.id !== id));
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

    console.log(state.isSwitchOn)

    return (
        
        <>
      <div className={state.isSwitchOn ? "body-on" : "body-off"}>

        <div className={state.isSwitchOn ? "profile-container-on" : "profile-container-off"}>
            <header>
                <img src={logoImg} alt="minhas tarefas" />
                <span> Bem vindo(a), {userName}</span>

                <Link className="button01" to="/task/new">Cadastrar nova tarefa</Link>

                <button onClick={handleLogout}type="button">
                    <FiPower size={18} color="#0078E7" />
                </button>
                <buttonMode 
                value={state}
                onClick={() => setState({isSwitchOn: !state.isSwitchOn})}>
                    <FaSun size={22} color="#0078e7" />
                </buttonMode>
            </header>

            <h1>Tarefas encontradas</h1>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                    <strong>Tarefa:</strong>
                    <p>{task.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{task.description}</p>

                    <strong>Prioridade:</strong>
                    <p>{task.priority}</p>

                    <strong>Responsável:</strong>
                    <p>{task.responsavel}</p>

                    <button onClick={() => handleTerminarTarefa(task.id)}type="button">
                        <p></p>
                        <FaCheck size={40} color="#80C55F" />
                    </button>
                
                    <button onClick={() => handleTerminarTarefa(task.id)}type="button">
                        <p></p>
                        <FiTrash2 size={40} color="#DB3B3B" />
                    </button>
              
                </li>
                ))}
            </ul>
            <div className="div-button">
            <div className="suportButton">
                    <button onClick={handleBackProfile}>
                    <FaInbox size={30} color="#0078E7" /> <p>Entre em contato com a nossa equipe</p>
                </button>
            </div>
        </div>
        </div>

        </div>    
</>
    );
}