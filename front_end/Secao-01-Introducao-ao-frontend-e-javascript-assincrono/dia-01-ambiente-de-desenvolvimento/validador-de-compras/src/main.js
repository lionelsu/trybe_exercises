import './style.css';
import validator from 'validator';

// Declaração das variáveis de seletores
const input = document.querySelector('#input');
const list = document.querySelector('#list');
const btn = document.querySelector('#button');
const text = document.querySelector('#text');

const UUID_VERSION = 4;

// Aqui colocamos um escutador de eventos para adicionar o click no botão.
btn.addEventListener('click', (e) => {
  // Prever o funcionamento do envio de formulários.
  e.preventDefault();

  // Declaração da variável para os campos do select, cada um deles para um tipo de validação dependendo da opção selecionada.
  const campos = {
    CPF: validator.isTaxID(input.value, 'pt-BR'),
    hexColor: validator.isHexColor(input.value),
    email: validator.isEmail(input.value),
    uuid: validator.isUUID(input.value, UUID_VERSION),
    url: validator.isURL(input.value),
  };

  // Esta linha serve para injetar o texto no HTML a contar da chave campos na posição da lista e seu valor.
  text.innerHTML = `A validação retornou ${campos[list.value]}`;
});
