import Swal from "sweetalert2";

// SELETORES
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

// Token de acesso, necessário para realizar a requisição com a api
const ACCESS_TOKEN = '#'

// URL base concatenada com o ACCES_TOKEN
const BASE_URL = 
  `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

// Esta constante vai injetar 1000 heróis para simular os erros da api
// A api possui apenas 731 heróis.
const MAX_HEROES = 1000;

// Função auxiliar par retorar um valor inteiro aleatório
const randomID = () => Math.floor(Math.random() * MAX_HEROES);

// Escutador de eventos para o botão
button.addEventListener('click', (e) => {
  // preventDefault para evitar o carregamento da página.
  e.preventDefault();
})