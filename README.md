# Boilerplate

Microsserviço desenvolvido como uma base para novos projetos.

## 🚀 Começando

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 📋 Pré-requisitos

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Kafka](https://kafka.apache.org/downloads)
- [Datadog](https://www.datadoghq.com/)

### 🔧 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/gabrielhsantos/boilerplate.git

# Acesse a pasta do projeto no terminal/cmd
$ cd boilerplate

# Instale as dependências
$ npm install
```

Na raiz do projeto, existe o arquivo **env-example.txt**, contendo as variáveis que serão utilizadas no projeto. Copie seu conteúdo.

Crie um arquivo também na raiz, com nome **.env** e cole as variáveis dentro.

O preenchimento dessas variáveis são obrigatórias, então segue um exemplo de uso:

VARIÁVEL  | VALOR
--------- | ------
API_PORT | 3001
LOGGER_ON | true
JWT_SECRET | #abc1234
DB_POSTGRES_PORT | 5432
DB_POSTGRES_USER | postgres
DB_POSTGRES_DIALECT | postgres
DB_POSTGRES_TIMEZONE | UTC
DB_POSTGRES_LOGGING | false
DB_POSTGRES_SCHEMA | public
DB_POSTGRES | postgres
DB_POSTGRES_HOST | localhost
DB_POSTGRES_PASSWORD | postgres
DB_MONGO_URL | mongodb+srv://USER:PASS@cluster0.h5mtb.mongodb.net
DB_MONGO | mongo
KAFKA_CLIENT_ID | boilerplate
KAFKA_INITIAL_RETRY_TIME | 300
KAFKA_RETRIES | 10
KAFKA_LOGLEVEL | false
KAFKA_PRODUCER | MESSAGE_SENT
KAFKA_CONSUMER | MESSAGE_RECEIVED
KAFKA_CONSUMER_GROUP | MESSAGE_RECEIVED_GROUP

### 🎲 Rodando o Back End (servidor)

```bash
# Execute as migrations
$ npm run db:migrate

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3001 - acesse <http://localhost:3001> (ou a porta que foi definida no arquivo .env)
```

### ⚙️ Executando os testes

Para rodar os testes, basta utilizar este comando via terminal/cmd:

```bash
$ npm test
```

>**Observação**:
> O *Coverage* não está em 100%

### 📦 Documentação

Um arquivo com extensão .json se encontra na pasta:
```src/config/docs```

O mesmo pode ser importado dentro do [Postman](https://www.postman.com/), para facilitar o acesso aos endpoints.

Também é possível acessar a documentação da api pelo endpoint [/doc](http://localhost:3001/api/docs/) com o servidor rodando.



