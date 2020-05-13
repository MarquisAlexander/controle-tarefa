import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg'

import './styles.css';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [responsavel, setResponsavel] = useState('');

    const history = useHistory();

    const  userId = localStorage.getItem('userId');

 
    function prioBaixa(e) {
        e.preventDefault();

        const prioridade = ("Baixa");

        console.log(prioridade);
    }


    async function handleNewIncident(e) {
        e.preventDefault();
        
        const data = {
            title,
            description,
            prioridade,
            responsavel,
        };
        console.log(data);
        try{ 
            await api.post('tb_tarefas', data, {
                headers: {
                    Authorization: userId,
                }
            })

            history.push('/profile');
        }catch{
            alert('erro ao cadastrar caso, tente novamente');
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="tarefa"/>

                    <h1>Cadastrar novas tarefas</h1>
                    <p>Descreva a tarefa detalhadamente para uma melhor compreensão no futuro</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#0078E7"/>
                        Voltar para a Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título da tarefa"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <input 
                    placeholder="Prioridade"
                    value={prioridade}
                    onChange={e => setPrioridade(e.target.value)}/>

                    <input 
                        placeholder="Responsável pela tarefa"
                        value={responsavel}
                        onChange={e => setResponsavel(e.target.value)}
                    />


                    <button className="button" type="submit">Cadastrar</button>

                    <button className="button" type="submit" value={'Baixa'}
                    onClick={e => setPrioridade(e.target.value)}
                    >teste1</button>

<button className="button" type="submit" value={'Alta'}
                    onClick={e => setPrioridade(e.target.value)}
                    >teste1</button>
                </form>
            
                
                    
            </div>
        </div>
    );
}