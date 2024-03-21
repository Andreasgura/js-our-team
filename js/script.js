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
let prvaEl = document.getElementById('prova')
for (value of teamMembers){
    console.log(value['name']);
    let card = document.createElement('ul')
    card.innerHTML += `
    <li>${value['name']}</li>
    <li>${value['jobPosition']}</li>
    <li><img src="img/${value['img']}"></li>
    `
    prvaEl.appendChild(card)
}
// for ( let key in studente) {
//     console.log(studente[key]);
// }

// let n = 3;
// let arraystudenti = [];

//  for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//  }
// // let newstudent= newstudent 