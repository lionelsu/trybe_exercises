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

  // Guardamos a chamada da função randomID() em uma variável.
  const id = randomID()

  // Faremos o fetch via fetch mas o recomendado é usar async e await já que isso já existe no ano em que essa atividade é feita (2023).
  fetch(`${BASE_URL}/${id}`)
  // Então, extraimos o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      // Com o objeto extraído, extraímos as imformações desejadas
      img.src = data.img.url;
      name.textContent = data.name;
    })
    // Caso haja erro, trataremos com o .catch().
      .catch((error) => Swal.fire({
        // Usaremos a biblioteca exportada no topo.
        title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
      }));
});
