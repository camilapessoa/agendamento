# Aplicação de Agendamento

Este projeto é uma aplicação de agendamento que permite aos usuários cadastrar, editar e visualizar agendamentos com informações de nome, data, hora e local. A aplicação é desenvolvida com um backend em **Nest.js** e frontend em **React.js** usando **Next.js**, com persistência de dados em um banco de dados relacional **PostgreSQL**.

## Tecnologias e Bibliotecas Utilizadas

### Backend
- **Nest.js**: Framework Node.js para construção do backend.
- **TypeScript**: Tipagem estática para JavaScript, garantindo segurança e qualidade do código.
- **TypeORM**: ORM (Object Relational Mapper) para integração com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento de dados.
- **Docker**: Usado para facilitar o desenvolvimento e a execução do banco de dados em um contêiner.

### Frontend
- **React.js**: Biblioteca JavaScript para construção da interface de usuário.
- **Next.js**: Framework React que permite renderização híbrida e otimização para SEO.
- **NextUI**: Biblioteca de componentes UI para estilização moderna da aplicação.
- **Axios**: Cliente HTTP para comunicação entre o frontend e o backend.
- **Date-fns**: Biblioteca para manipulação e formatação de datas.
- **React Icons**: Ícones para os botões de edição e exclusão.

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter as seguintes ferramentas instaladas:
- **Node.js**: Para executar o servidor e o cliente.
- **Docker**: Para executar o contêiner do PostgreSQL.
- **Git**: Para clonar o repositório.

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/camilapessoa/agendamento.git
   cd agendamento

2. Configure o banco de dados PostgreSQL usando Docker:
    ```bash
    docker run --name agendamento-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=agendamento -p 5432:5432 -d postgres

3. Configure as variáveis de ambiente:
    Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis para o banco de dados PostgreSQL e outras configurações:
    ```bash
    DATABASE_URL=postgresql://postgres:postgres@localhost:5432/agendamento

## Instruções para rodar o projeto

### Backend

1. Navegue até a pasta do backend:
    ```cd backend```

2. Instale as dependências:
    ``` npm install ```
3. Execute as migrações do banco de dados com o TypeORM:
```npm run migration:run```

4. Inicie o servidor do backend:
```npm run start:dev```

O backend estará disponível em http://localhost:3000.


### Frontend
1. Navegue até a pasta do frontend:
```cd frontend```

2. Instale as dependências:
```npm install```

3. Inicie o servidor do frontend:
```npm run dev```

O frontend estará disponível em http://localhost:3001.

### Endpoints

- GET /appointments: Retorna a lista de agendamentos.
- POST /appointments: Cria um novo agendamento.
- PUT /appointments/:id: Atualiza um agendamento existente.
- DELETE /appointments/:id: Deleta um agendamento.
