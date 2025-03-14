import React from "react";
import '../Styles/AgendaItem.css'

const handleEditar = (id) => {
    console.log("Editar contato com ID:", id);
    // Aqui você pode abrir um formulário para editar o contato
};

export default function AgendaItem ({contato, onApagarContato}) {
    return (
        <li className="contact-item">
            <div className="contact-infos">
                <p className="contact-span contact-name">{contato.nome}</p>
                <p className="contact-span contect-tel">{contato.tel}</p>
            </div>
            <div className="contact-options">
                <button className="btn btn-edit" onClick={() => handleEditar(contato.id)}><i className="bi bi-pencil"></i></button>
                <button className="btn btn-erase" onClick={() => onApagarContato(contato.id)}><i className="bi bi-trash3"></i></button>
            </div>
        </li>
    )
}