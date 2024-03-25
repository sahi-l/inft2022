// Name: Sahil Tankaria
// Student ID: 100867174
// Date: March 17th, 2024 

let element= document.createElement("li");
element.setAttribute('class','nav-item');
let link = document.createElement("a");
link.setAttribute('class', 'nav-link');
link.setAttribute('href','./humanResources.html');
link.innerHTML = 'Human Resources';
element.appendChild(link);
document.getElementById("about").after(element);

document.getElementById('product').textContent="Interest";