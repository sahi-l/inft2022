import {AnimalService} from './js/animal.service.js';

const arrayOfAnimals = await AnimalService.getAll();

renderAnimalTable(arrayOfAnimals);

function renderAnimalTable (arrayOfAnimals){
    const tbody = document.querySelector('#table-content');
    
    arrayOfAnimals.array.forEach(item => {
        const row= tbody.insertRow();
        const nameCell= row.insertCell();
        nameCell.innerHTML = item.name;
        const headsCell = row.insertCell();
        headsCell.innerHTML = item.heads;
        const legsCell = row.insertCell();
        legsCell.innerHTML = item.legs;
        const soundCell = row.insertCell();
        soundCell.innerHTML = item.sound;
        
    });
}