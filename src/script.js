/**
 * FUNÇÃO PARA ESCONDER PARÁGRAFO NO CLICK
 * @param button elemento botão a receber
 * @param paragraph elemento paragrapho a receber
 */

// function createButton(button, paragraph) {
//     let showMore = false;

//     button.onclick = () => {
//         paragraph.classList.toggle('card__hide');

//         if (!showMore) {
//             button.innerHTML = 'Show Less'
//         } else {
//             button.innerHTML = 'Show More'
//         }
//         showMore = !showMore;
//     }
// }

const createButton = (button, paragraph) => {
    let showMore = false;

    button.onclick = () => {
        paragraph.classList.toggle('card__hide');

        button.innerHTML = !showMore ? 'Show Less' : 'Show More'
        showMore = !showMore;
    }
}

/** 
 * FUNÇÃO PARA "MAPEAR" OS BUTTONS E PARAGRAPHS
 */

const cardMap = () => {
    let buttons = document.querySelectorAll('.card__btn');
    let paragraphs = document.querySelectorAll('.card__body');
    // estudar mais foreach para substituir**
    // for (let i = 0; i < buttons.length; i++) {
    //     createButton(buttons[i], paragraphs[i]);
    // }
    buttons.forEach((bt, key) => { //
        createButton(bt, paragraphs[key])
    })
}

/**
 * FUNÇAO PARA CRIAR CARD
 */

const createCard = () => {

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const radio = document.querySelector('input[name="client"]:checked').value;
    const coment = document.getElementById('coment').value;
    const button = 'Show More';

    //TODO: JSdoc estudar isso ai

    let bodyElement = document.querySelector('.card')

    let templateCard = `
        <div class="card__item">
            <div class="card__header">
                <img src="images/hacker.png" class="card__image">
                <div class="card__titles">
                    <h2 class="card__title"> ${name} ${lastName}</h2>
                    <h3 class="card__subtitle">${radio}</h3>
                </div>
            </div>
            <div class="card__body card__hide">
                <p class="card__copy">${coment}</p>
            </div>
            <button class="card__btn" style="${ (coment==='') && 'display:none' }">${button}</button>
        </div>`

    bodyElement.innerHTML += templateCard;

    cardMap();

    /**
     * RESETAR CAMPOS DO FORMULARIO
     */

    const resetForm = () => {
        let form = document.getElementById('form')
        form.reset()
    }
    resetForm();
}


cardMap();




/**
 * PREVIEW DA IMAGEM
 */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#imagePreview').addEventListener('change', imagem => {
        const preview = imagem.target.files.item(0);
        const source = new FileReader();
        source.onloadend = () => {
            document.querySelector('#imageUpload').setAttribute('src', source.result);
        }
        source.readAsDataURL(preview);
    })
})


/**
 * NÃO ENVIAR O FORMULÁRIO
 */
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
});