import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Styles/FormContato.css"

export default function FormContato({onAdicionarContato}) {
    const [nome, setNome] = useState("");
    const [tel, setTel] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const contato = { nome, tel };
    
        try {
            const response = await axios.post("http://localhost:5000/api/contatos", contato, {
                headers: { "Content-Type": "application/json" }
            });
    
            onAdicionarContato(response.data);
            setNome("");
            setTel("");
        } catch (error) {
            console.error("Erro ao adicionar o contato:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-contact"> 
            <h2 className="form-subtitle">Registrar Contato</h2>
            <div className="form-content">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input 
                    className="input" 
                    type="text" value={nome} 
                    id="nome" name="nome" 
                    onChange={e => setNome(e.target.value)} 
                    placeholder="Digite um nome..." 
                    autoComplete="none"
                />
                </div>
                <div className="form-content">
                    <label htmlFor="tel" className="form-label">Telefone</label>
                    <input 
                        className="input" 
                        type="text" value={tel} 
                        id="tel" name="tel" 
                        onChange={e => setTel(e.target.value)} 
                        placeholder="Digite um número..." 
                        autoComplete="none"
                    />
            </div>
            <button className="btn btn-submit" type="submit">Registrar</button>
        </form>
    );
}