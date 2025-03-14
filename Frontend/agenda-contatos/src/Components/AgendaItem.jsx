import React from "react";
import '../Styles/AgendaItem.css';

export default function AgendaItem({ contato, onApagarContato, onEditarContato }) {
    return (
        <li className="contact-item">
            <div className="contact-infos">
                <p className="contact-span contact-name">{contato.nome}</p>
                <p className="contact-span contact-tel">{contato.tel}</p>
            </div>
            <div className="contact-options">
                <button 
                    className="btn btn-edit" 
                    onClick={() => onEditarContato(contato)}  // Chama o handler para editar
                >
                    <i className="bi bi-pencil"></i>
                </button>
                <button 
                    className="btn btn-erase" 
                    onClick={() => onApagarContato(contato.id)}
                >
                    <i className="bi bi-trash3"></i>
                </button>
            </div>
        </li>
    );
}
