# Agenda de Contatos

Este é um projeto simples de **Agenda de Contatos**, desenvolvido com **React** e **Axios** para gerenciar contatos de forma interativa. O sistema permite adicionar, editar, apagar e visualizar contatos, com uma integração com uma API backend.

## Objetivo

O objetivo deste projeto é oferecer uma interface simples e intuitiva para gerenciar contatos. A aplicação permite aos usuários adicionar, editar, excluir e visualizar contatos de maneira eficiente e organizada, interagindo com um backend via API para persistência de dados.

## Principais Features

- **Adicionar Contato**: Permite adicionar novos contatos à agenda, preenchendo informações como nome, telefone e e-mail.
- **Editar Contato**: Permite editar os detalhes de um contato existente, atualizando suas informações.
- **Apagar Contato**: Permite excluir contatos da agenda com um clique.
- **Visualizar Contatos**: Exibe a lista de contatos cadastrados com a opção de visualizar detalhes de cada um.

## Tecnologias Utilizadas

- **React**: Framework para construção da interface de usuário, oferecendo uma experiência dinâmica e reativa.
- **Axios**: Biblioteca para realizar requisições HTTP à API backend, permitindo operações CRUD (Create, Read, Update, Delete).
- **CSS**: Utilizado para estilizar a interface e garantir uma experiência de usuário agradável e responsiva.
- **API Backend**: Um servidor local (em `http://localhost:5000`) que gerencia os dados dos contatos, utilizando Express para gerenciar as rotas e operações do banco de dados.

## Arquitetura

A arquitetura do projeto segue um padrão cliente-servidor:

- **Frontend**: Desenvolvido em React, onde o usuário interage com a interface. O React gerencia o estado dos dados localmente e se comunica com o backend através de requisições HTTP utilizando Axios.
- **Backend**: Um servidor simples configurado com Express, que oferece uma API RESTful com rotas para CRUD de contatos. O servidor é responsável por armazenar e manipular os dados dos contatos em um banco de dados ou estrutura de dados simples.

## Como Rodar o Projeto

### 1. Clone o repositório:

`git clone https://github.com/seu-usuario/agenda-de-contatos.git`

### 2. Navegue até a pasta do projeto

`cd agenda-de-contatos`

### 3. Instale as dependências:

`npm install`

### 4. Inicie o servidor backend (se não tiver o servidor configurado, você pode precisar de uma API backend configurada para fazer as requisições):

`npm run server`

### 5. Inicie o projeto React:

`npm start`

## Endpoints da API

- **GET** `/api/contatos`: Retorna todos os contatos cadastrados.
- **POST** `/api/contatos`: Adiciona um novo contato.
- **PUT** `/api/contatos/:id`: Atualiza um contato existente.
- **DELETE** `/api/contatos/:id`: Apaga um contato.