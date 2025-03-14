import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FormContato from "./FormContato";
import AgendaItem from "./AgendaItem";
import '../Styles/Agenda.css'

export default function Agenda() {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        const fetchContatos = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/contatos");
                setContatos(response.data);
            } catch (error) {
                console.error("Erro ao carregar os contatos:", error);
            }
        };
    
        fetchContatos();
    }, []);

    const handleAdicionarContato = (contato) => {
        setContatos((prevContato) => [...prevContato, contato]);
    }

    const apagarContato = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/contatos/${id}`);
            setContatos(contatos.filter(contato => contato.id !== id));
        } catch (error) {
            console.error("Erro ao apagar contato:", error);
        }
    };

    return (
        <div className="container">
            <FormContato onAdicionarContato={handleAdicionarContato} />
            <h1 className="title">Agenda</h1>

            <ul className="contact-list">
                {contatos.map((contato) => (
                    <AgendaItem key={contato.id} contato={contato} onApagarContato={apagarContato} />
                ))}
            </ul>
        </div>
    )
}