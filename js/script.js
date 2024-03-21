/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! :muscle:

*/


let teamMembers = [
    {
        name: 'Wayne Barnett',
        jobPosition: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        jobPosition: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        jobPosition: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        jobPosition: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        jobPosition: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        jobPosition: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamMembers)
let containerEl = document.getElementById('container')
let card = document.createElement('div')
card.classList.add('row', 'gap-5','justify-content-between' )
for (value of teamMembers){
    console.log(value['name']);
    
    card.innerHTML += `
    <div class="card col-3 text-center ">
        <img src="img/${value['img']}" class="card-img-top" alt="${value['img']}">
        <div class="card-body">
            <h4 class="card-title">${value['name']}</h4>
            <h5 class="card-title">${value['jobPosition']}</h5>
        </div>
    </div>
    `
    containerEl.appendChild(card)
}

