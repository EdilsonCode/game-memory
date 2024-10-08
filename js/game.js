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

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter){

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = ''; 

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
    //const card = document.createElement('div');
    const card = createElement('div','card');
    const front = createElement('div','face front');
    const back = createElement('div','face back');

    //adicionando o nome das classes
    //card.className = 'card';
    //front.className = 'face front';
    
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

    //Adicionando os elementos/personagens do array espalhados 
    const duplicateCharacters = [ ...characters, ...characters];

    //sorteando as cartas
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    })
}

loadGame();