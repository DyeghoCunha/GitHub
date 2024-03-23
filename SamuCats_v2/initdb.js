const sql = require('better-sqlite3');
const db = sql('projects.db');


const dummyProjects = [
  {
    title: 'Calculadora Simples',
    slug: 'calculadora-simples',
    image: './src/assets/projectDummyImg.jpg',
    summary:
      'Um projeto de uma calculadora simples que realiza operações básicas como adição, subtração, multiplicação e divisão.',
    instructions: `
      1. Configurar o ambiente:
         Instale um editor de código, como o Visual Studio Code, e o Node.js.

      2. Criar o projeto:
         Inicie um novo projeto Node.js e crie um arquivo chamado 'calculadora.js'.

      3. Desenvolver a calculadora:
         No arquivo 'calculadora.js', escreva funções para adição, subtração, multiplicação e divisão.

      4. Testar a calculadora:
         Execute o arquivo 'calculadora.js' no terminal para testar as funções da calculadora.
    `,
    creator: 'João Silva',
    creator_email: 'joaosilva@example.com',
  },
  {
    title: 'API de Clima',
    slug: 'api-de-clima',
    image: './src/assets/projectDummyImg.jpg',
    summary:
      'Um projeto de uma API de clima que retorna informações meteorológicas atuais e previsões.',
    instructions: `
      1. Configurar o ambiente:
         Instale um editor de código, como o Visual Studio Code, e o Node.js.

      2. Criar o projeto:
         Inicie um novo projeto Node.js e crie um arquivo chamado 'clima.js'.

      3. Desenvolver a API:
         No arquivo 'clima.js', escreva funções para buscar e retornar dados de um serviço de clima.

      4. Testar a API:
         Execute o arquivo 'clima.js' no terminal para testar as funções da API.
    `,
    creator: 'Maria Santos',
    creator_email: 'mariasantos@example.com',
},
{
    title: 'Blog Pessoal',
    slug: 'blog-pessoal',
    image: './src/assets/projectDummyImg.jpg',
    summary:
      'Um projeto de um blog pessoal onde você pode compartilhar seus pensamentos e ideias.',
    instructions: `
      1. Configurar o ambiente:
         Instale um editor de código, como o Visual Studio Code, e o Node.js.

      2. Criar o projeto:
         Inicie um novo projeto Node.js e crie arquivos para as páginas do blog.

      3. Desenvolver o blog:
         Escreva o código HTML, CSS e JavaScript para as páginas do blog.

      4. Publicar o blog:
         Hospede o blog em um serviço de hospedagem e compartilhe o link com seus amigos.
    `,
    creator: 'Carlos Oliveira',
    creator_email: 'carlosoliveira@example.com',
}

];

db.prepare(`
   CREATE TABLE IF NOT EXISTS projects (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO projects VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const project of dummyProjects) {
    stmt.run(project);
  }
}

initData();
