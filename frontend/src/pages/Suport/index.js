import React from 'react'
import { useHistory } from 'react-router-dom';

import './styles.css'

import { FaLongArrowAltLeft, FaInbox } from 'react-icons/fa';

import logoImg from '../../assets/logo.svg';

export default function Suport() {

    const history = useHistory()

    function handleBackProfile() {
        history.push('/profile')
    }

    return (
        <>
        <div className="profile-container-suport">
            <header>
                <div className="buttonBack">
                    <button onClick={handleBackProfile} type="buttonSuport">
                        <FaLongArrowAltLeft size={40} color="#0078e7" />
                    </button>
                </div>
                <img src={logoImg} alt="minhas tarefas" />
            </header>
        <div className="text-title">   
                    Você tem uma IDEIA? ÓTIMO!
        </div>
                <p>A sua opinião é de extrema importancia para o nossa equipe 
                   de desenvolvimento💻.
                </p>
                <p>
                Caso você tenha alguma dica de funcionalidade ou estilo, por favor
                compartilhe ela, vamos ficar extremamente grato.
                </p>

                    <div className="email">
                        <FaInbox size={40} color="#0078e7" />
                        <text>marquissantos123@gmail.com</text>
                    </div>
                <div className="endpag">
                Obrigado por utilizar a nossa solução!
                </div>
    
        </div>
        </>
    )
}