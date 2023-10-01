//                         ╔══════════════════════════════════╗
//                         ║                                  ║
//                         ║   Don't Change any Code Here     ║
//                         ║               Please.            ║
//                         ║                                  ║
//                         ╚══════════════════════════════════╝
//

export const numbersArray = [10, 22, 30, 44, 50];
export const booleansArray = [true, false, true, false, true];
export const hunterData = [
    {
        name: "Gon Freecss",
        description: "The main protagonist of the series. Gon is a young and adventurous boy who aspires to become a Hunter to find his father.",
        image: "image_url_for_gon.webp",
        nenType: "Enhancement",
        stats: {
            strength: 8,
            speed: 7,
            intelligence: 6,
            endurance: 9,
            charisma: 5,
        },
    },
    {
        name: "Killua Zoldyck",
        description: "Gon's best friend and a member of the famous Zoldyck family of assassins. He has incredible agility and electrical Nen abilities.",
        image: "image_url_for_killua.webp",
        nenType: "Transmutation",
        stats: {
            strength: 7,
            speed: 9,
            intelligence: 8,
            endurance: 7,
            charisma: 4,
        },
    },
    {
        name: "Kurapika",
        description: "A skilled Hunter from the Kurta Clan, seeking to avenge his clan's massacre by the Phantom Troupe.",
        image: "image_url_for_kurapika.webp",
        nenType: "Conjuration",
        stats: {
            strength: 6,
            speed: 6,
            intelligence: 9,
            endurance: 7,
            charisma: 5,
        },
    },
    {
        name: "Leorio Paradinight",
        description: "A medical student and one of Gon's friends. He aspires to become a doctor and participates in the Hunter Exam for that purpose.",
        image: "image_url_for_leorio.webp",
        nenType: "Unknown",
        stats: {
            strength: 5,
            speed: 4,
            intelligence: 7,
            endurance: 6,
            charisma: 8,
        },
    },
    {
        name: "Hisoka Morrow",
        description: "A mysterious and powerful Hunter with a love for combat and a fixation on Gon and Killua.",
        image: "image_url_for_hisoka.webp",
        nenType: "Transmutation",
        stats: {
            strength: 9,
            speed: 8,
            intelligence: 7,
            endurance: 6,
            charisma: 3,
        },
    },
    {
        name: "Chrollo Lucilfer",
        description: "The leader of the Phantom Troupe, a notorious group of thieves and murderers.",
        image: "image_url_for_chrollo.webp",
        nenType: "Unknown",
        stats: {
            strength: 8,
            speed: 7,
            intelligence: 9,
            endurance: 8,
            charisma: 6,
        },
    },
];
export function createList(arr, container) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}

export function createGallery(data, container) {
    data.forEach((character) => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;

        const name = document.createElement('p');
        name.textContent = `Name: ${character.name}`;

        const description = document.createElement('p');
        description.textContent = `Description: ${character.description}`;

        const nenType = document.createElement('p');
        nenType.textContent = `Nen Type: ${character.nenType || 'Unknown'}`;

        // Create a stats container div
        const statsContainer = document.createElement('div');
        statsContainer.classList.add('stats-container');

        // Add stats
        for (const statName in character.stats) {
            if (character.stats.hasOwnProperty(statName)) {
                const stat = document.createElement('p');
                stat.textContent = `${statName}: ${character.stats[statName]}`;
                statsContainer.appendChild(stat);
            }
        }

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(nenType);
        div.appendChild(statsContainer);
        container.appendChild(div);
    });
}


export const numbersContainer = document.querySelector('#numbers-list');
export const booleansContainer = document.querySelector('#booleans-list');
export const hunterGalleryContainer = document.querySelector('.gallery');