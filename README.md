# Agenda de Contatos

Este é um projeto simples de **Agenda de Contatos**, desenvolvido com **React** e **Axios** para gerenciar contatos de forma interativa. O sistema permite adicionar, editar, apagar e visualizar contatos, com uma integração com uma API backend.

## Funcionalidades

- **Adicionar Contato**: Permite adicionar novos contatos à agenda.
- **Editar Contato**: Permite editar os detalhes de um contato existente.
- **Apagar Contato**: Permite excluir contatos da agenda.
- **Visualizar Contatos**: Exibe a lista de contatos cadastrados.

## Tecnologias Utilizadas

- **React**: Para construção da interface de usuário.
- **Axios**: Para realizar requisições HTTP à API backend.
- **CSS**: Para estilização da interface.
- **API Backend**: Um servidor local (em `http://localhost:5000`) que gerencia os dados dos contatos.

## Como Rodar o Projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/agenda-de-contatos.git
```

### 2. Navegue até a pasta do projeto
```bash
cd agenda-de-contatos
```
### 3. Instale as dependências:
```bash
npm install
```
### 4. Inicie o servidor backend (se não tiver o servidor configurado, você pode precisar de uma API backend configurada para fazer as requisições):
```bash
npm run server
```
### 5. Inicie o projeto React:
```bash
npm start
```

## Como Funciona

- **Adicionar Contato**: Preencha o formulário e clique em "Registrar Contato". O contato será adicionado à agenda.
- **Editar Contato**: Clique no botão de edição ao lado de um contato e altere as informações. Após salvar, a lista de contatos será atualizada.
- **Apagar Contato**: Clique no ícone de lixeira ao lado de um contato para apagá-lo da lista.

## Endpoints da API

- **GET** `/api/contatos`: Retorna todos os contatos cadastrados.
- **POST** `/api/contatos`: Adiciona um novo contato.
- **PUT** `/api/contatos/:id`: Atualiza um contato existente.
- **DELETE** `/api/contatos/:id`: Apaga um contato.
