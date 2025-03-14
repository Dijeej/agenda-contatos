import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/FormContato.css";

export default function FormContato({ onAdicionarContato, contatoEditando, setContatoEditando }) {
    const [nome, setNome] = useState("");
    const [tel, setTel] = useState("");

    useEffect(() => {
        if (contatoEditando) {
            setNome(contatoEditando.nome);
            setTel(contatoEditando.tel);
        }
    }, [contatoEditando]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const contato = { nome, tel };

        try {
            if (contatoEditando) {
                // Se estiver editando, faz a requisição PUT
                await axios.put(`http://localhost:5000/api/contatos/${contatoEditando.id}`, contato, {
                    headers: { "Content-Type": "application/json" }
                });
                setContatoEditando(null); // Limpa o contato editando após a atualização
            } else {
                // Se não estiver editando, faz a requisição POST
                const response = await axios.post("http://localhost:5000/api/contatos", contato, {
                    headers: { "Content-Type": "application/json" }
                });
                onAdicionarContato(response.data);
            }

            setNome("");
            setTel("");
        } catch (error) {
            console.error("Erro ao adicionar ou editar o contato:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-contact"> 
            <h2 className="form-subtitle">{contatoEditando ? "Alterar Contato" : "Registrar Contato"}</h2>
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
            <button className="btn btn-submit" type="submit">{contatoEditando ? "Alterar" : "Registrar"}</button>
        </form>
    );
}