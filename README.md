# Documentação da API

# Tabela de conteúdis

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Endpoints](#4-endpoints)

---

## 1. Visão Geral

visão geral do projeto, um pouco das tecnologias usadas.

- - [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/)

A URL da aplicação no render:
https://mycontacts-api-u7ov.onrender.com

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem a relação entre as tabelas de banco de dados.

![DER].(DER.drawio.pgn)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.exemple**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postrgres e em uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

## 4.Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /user](#11-criação-de-usuário)
  - [GET - /user](#12-listando-usuários)
  - [GET - /user/:user_id](#13-listar-usuário-por-id)
  - [PATCH - /user/:user_id](#14-atualizar-usuário-por-id)
  - [DELETE - /user/:user_id](#15-deletar-usuário-por-id)
- [Contacts](#2-contacts)
  - [POST - /contact](#21-criação-de-contatos)
  - [GET - /contact](#22-listando-contatoss)
  - [GET - /contact/:contact_id](#23-listar-contatos-por-id)
  - [PATCH - /contact/:contact_id](#24-atualizar-contato-por-id)
  - [DELETE - /contact/:contact_id](#25-deletar-contato-por-id)

---

## 1. **Users**

[ Voltar para os Endpoints ](#4-endpoints)

O objeto User é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do usuário |
| name  | string | O nome do usuário.             |
| email | string | O e-mail do usuário.           |
| phone | string | O contato do usuário.          |

### Endpoints

| Método | Rota          | Descrição                                         |
| ------ | ------------- | ------------------------------------------------- |
| POST   | user          | Criação de um usuário.                            |
| GET    | user          | Lista todos os usuários                           |
| GET    | user/:user_id | Lista um usuário usando seu ID como parâmetro     |
| PATCH  | user/:user_id | Atualizar um usuário usando seu ID como parâmetro |
| DELETE | user/:user_id | Deletar um usuário usando seu ID como parâmetro   |

---

### 1.1. **Criação de usuário**

[ Voltar para os Endpoints ](#4-endpoints)

### `/user`

### Exemplo de Request:

```
POST /user
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "matheus",
  "email": "matheus@mail.com",
  "phone": "1122275213"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "matheus",
  "email": "matheus@mail.com",
  "phone": "1122275213",
  "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
  "createdAt": "2023-03-25T19:16:38.008Z"
}
```

### Possíveis Erros

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

---

### 1.2. **Listando Usuários**

[ Voltar para os Endpoints ](#4-endpoints)

### `/user`

### Exemplo de Request:

```
GET /user
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "name": "matheus",
    "email": "matheus@mail.com",
    "phone": "1122275213",
    "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
    "createdAt": "2023-03-25T19:16:38.008Z",
    "contacts": []
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.3. **Listar Usuário po ID**

[ Voltar para os Endpoints ](#4-endpoints)

### `/user/:user_id`:

```
GET /user/d8805ae4-9c46-4921-a4e4-ba55de4312be
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "matheus",
  "email": "matheus@mail.com",
  "phone": "1122275213",
  "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
  "createdAt": "2023-03-25T19:16:38.008Z",
  "contacts": []
}
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.4. **Atualizar Usuário po ID**

[ Voltar para os Endpoints ](#4-endpoints)

### `/user/:user_id`:

```
PATCH /user/d8805ae4-9c46-4921-a4e4-ba55de4312be
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "name": "Matheus Carneiro"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Matheus Carneiro",
  "email": "matheus@mail.com",
  "phone": "1122275213",
  "id": "d8805ae4-9c46-4921-a4e4-ba55de4312be",
  "createdAt": "2023-03-25T19:16:38.008Z",
  "contacts": []
}
```

### 1.5. **Deletar Usuário po ID**

[ Voltar para os Endpoints ](#4-endpoints)

### `/user/:user_id`:

```
DELETE /user/d8805ae4-9c46-4921-a4e4-ba55de4312be
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

## 2. **Contacts**

[ Voltar para os Endpoints ](#4-endpoints)

O objeto Contact é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do contato |
| name  | string | O nome do contato.             |
| email | string | O e-mail do contato.           |
| phone | string | O contato do contato.          |
| user  | string | O usuário do contato.          |

### Endpoints

| Método | Rota                | Descrição                                         |
| ------ | ------------------- | ------------------------------------------------- |
| POST   | contact             | Criação de um contato.                            |
| GET    | contact             | Lista todos os contatos                           |
| GET    | contact/:contact_id | Lista um contato usando seu ID como parâmetro     |
| PATCH  | contact/:contact_id | Atualizar um contato usando seu ID como parâmetro |
| DELETE | contact/:contact_id | Deletar um contato usando seu ID como parâmetro   |

---

### 2.1. **Criação de contato**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contact`

### Exemplo de Request:

```
POST /contact
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Contato 5",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "user": "d8805ae4-9c46-4921-a4e4-ba55de4312be"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "Contato 5",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
  "createdAt": "2023-03-21T13:22:48.992Z"
}
```

### Possíveis Erros

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

---

### 2.2. **Listando Contatos**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contact`

### Exemplo de Request:

```
GET /contact
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "name": "Contato 5",
    "email": "contato1@mail.com",
    "phone": "113422244",
    "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
    "createdAt": "2023-03-21T13:22:48.992Z"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.3. **Listar Contato po ID**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contact/:contact_id`:

```
GET /contact/c569d2ae-3603-4848-9a4d-8feb00238348
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| contact_id | string | Identificador único do usuário (Contact) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Contato 5",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
  "createdAt": "2023-03-21T13:22:48.992Z"
}
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.4. **Atualizar Contato po ID**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contact/:contact_id`:

```
PATCH /contact/c569d2ae-3603-4848-9a4d-8feb00238348
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| contact_id | string | Identificador único do usuário (Contact) |

### Corpo da Requisição:

```json
{
  "name": "Contato Atualizado"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Contato Atualizado",
  "email": "contato1@mail.com",
  "phone": "113422244",
  "id": "c569d2ae-3603-4848-9a4d-8feb00238348",
  "createdAt": "2023-03-21T13:22:48.992Z"
}
```

### 2.5. **Deletar Contato po ID**

[ Voltar para os Endpoints ](#4-endpoints)

### `/contact/:contact_id`:

```
DELETE /contact/c569d2ae-3603-4848-9a4d-8feb00238348
Host: https://mycontacts-api-u7ov.onrender.com
Authorization: None
Content-type: application/jso
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| contact_id | string | Identificador único do usuário (Contact) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```
