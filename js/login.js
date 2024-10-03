const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validadeInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    } 
    
    button.setAttribute('disabled', true);    
}

const handleSubmit = (event) => {
    event.preventDefault(); //previne o carregamento padrão da página
    
    localStorage.setItem('player', input.value); //salva os valores digitados no local storage do navegador
    window.location = 'pages/game.html';
}


input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);