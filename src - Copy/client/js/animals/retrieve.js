import AnimalService from "./animal.service.js";

const arrayOfAnimals = await AnimalService-getAnimals();

renderAnimalTable(arrayOfAnimals);

function renderAnimalTable(arrayOfAnimals) {
    const tbody = document-querySelector ('#animal-client-')
    arrayOfAnimals.forEach(item=>{
        const row = tbody. insertRow();
        const nameCell = row. insertCell();
        nameCe11. innerHTML = item. name;
        const headsCell = row. insertCell();
        headsCell. innerHTML = item. heads;
        const legsCell = row.insertCell();
        legsCell. innerHTML = item.legs;
        const soundCell = row.insertCell();
        soundCell. innerHTML = item. sound;

    });
}