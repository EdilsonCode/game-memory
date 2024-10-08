const grid = document.querySelector('.grid');

//nome das imagens
const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20){
        alert('Parabéns, você ganhou!');
    }
}

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');
        
        firstCard = '';
        secondCard = ''; 

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = ''; 

            checkEndGame();

        }, 500);
    }
}

const revealCard = ({target}) => {
    if(target.parentNode.classList.add('reveal-card')){
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
}

const createCard = (character) => {
    
    const card = createElement('div','card');
    const front = createElement('div','face front');
    const back = createElement('div','face back');
    
    front.style.backgroundImage = `url('../images/${character}.png')`;

    //adicionando as divs front e back dentro de card
    card.appendChild(front);
    card.appendChild(back);

    //adicionando a div card dentro da div grid  
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {

    //Adicionando os elementos/personagens do array espalhados nesse novo array duplicateCharacters
    const duplicateCharacters = [ ...characters, ...characters];

    //sorteando as cartas
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    })
}

loadGame();