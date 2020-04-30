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
        <div>
            <div className="suportButton">
                
                    <FaInbox size={100} color="#0078e7" />
                
            </div>
        </div>
        </div>
        </>
    )
}