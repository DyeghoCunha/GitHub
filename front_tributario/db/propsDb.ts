import { TiPinOutline } from "react-icons/ti";

export interface ForumTopicCardProps {
  title: string;
  category: string[];
  avatar: any[]
  answersCount: string;
  views: string;
  date: string;
  pin: any;
}

export const forumTopics = [
  {
    title: "Como implementar herança múltipla em Python?",
    category: ["Python", "Backend", "Programação Orientada a Objetos"],
    avatar: ["https://randomuser.me/api/portraits/women/43.jpg", "https://randomuser.me/api/portraits/men/23.jpg", "https://randomuser.me/api/portraits/men/13.jpg"],
    answersCount: "42",
    views: "10000",
    date: "01/01/2024",
    pin: "pin",
  },
  {
    title: "Qual a melhor maneira de gerenciar dependências em um projeto Java?",
    category: ["Java", "Backend", "Gerenciamento de Projetos"],
    avatar: ["https://randomuser.me/api/portraits/men/43.jpg", "https://randomuser.me/api/portraits/men/23.jpg", "https://randomuser.me/api/portraits/men/3.jpg"],
    answersCount: "35",
    views: "8000",
    date: "15/01/2024",
    pin: null,
  },
{
    title: "Como posso otimizar consultas SQL em um aplicativo Java?",
    category: ["Java", "Backend", "Banco de Dados"],
    avatar: ["https://randomuser.me/api/portraits/men/9.jpg", "https://randomuser.me/api/portraits/women/23.jpg", "https://randomuser.me/api/portraits/women/13.jpg"],
    answersCount: "27",
    views: "15000",
    date: "20/01/2024",
    pin: null,
},
{
    title: "Qual é a melhor biblioteca para testes unitários em Python?",
    category: ["Python", "Backend", "Testes"],
    avatar: ["https://randomuser.me/api/portraits/men/5.jpg", "https://randomuser.me/api/portraits/men/31.jpg", "https://randomuser.me/api/portraits/women/33.jpg"],
    answersCount: "50",
    views: "12000",
    date: "25/01/2024",
    pin: null,
},
{
    title: "Como posso usar o Spring Boot para criar uma API RESTful em Java?",
    category: ["Java", "Backend", "Spring Boot"],
    avatar: ["https://randomuser.me/api/portraits/women/10.jpg", "https://randomuser.me/api/portraits/men/23.jpg", "https://randomuser.me/api/portraits/men/13.jpg"],
    answersCount: "30",
    views: "9000",
    date: "30/01/2024",
    pin: null,
},
{
    title: "Qual é a melhor maneira de lidar com exceções em Python?",
    category: ["Python", "Backend", "Gerenciamento de Erros"],
    avatar: ["url_da_imagem_16", "url_da_imagem_17", "url_da_imagem_18"],
    answersCount: "45",
    views: "11000",
    date: "05/02/2024",
    pin: null,
},
{
    title: "Como posso melhorar o desempenho de um aplicativo Java?",
    category: ["Java", "Backend", "Otimização de Desempenho"],
    avatar: ["url_da_imagem_19", "url_da_imagem_20", "url_da_imagem_21"],
    answersCount: "38",
    views: "13000",
    date: "10/02/2024",
    pin: null,
},
{
    title: "Como posso usar o Django para criar um site em Python?",
    category: ["Python", "Backend", "Django"],
    avatar: ["url_da_imagem_22", "url_da_imagem_23", "url_da_imagem_24"],
    answersCount: "50",
    views: "12000",
    date: "15/02/2024",
    pin: null,
},
{
    title: "Como posso usar o JUnit para testar um aplicativo Java?",
    category: ["Java", "Backend", "Testes"],
    avatar: ["url_da_imagem_25", "url_da_imagem_26", "url_da_imagem_27"],
    answersCount: "40",
    views: "14000",
    date: "20/02/2024",
    pin: null,
}


];

console.log(forumTopics);
