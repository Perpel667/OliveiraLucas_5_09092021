/* recuperation de l'id */
let params = new URL(document.location).searchParams;
let id = params.get('id');
let url = 'http://localhost:3000/api/cameras';

function append(parent,el){
  return parent.appendChild(el);
}

//Recuperation des elements //
const title = document.querySelector('title');
const cardHeader = document.querySelector('.card-header');
const cardImg = document.querySelector('.card-img-top');
const cardTitle = document.querySelector('.card-title');
const cardDescr = document.querySelector('.card-descr');
const cardPrice = document.querySelector('.card-price');

fetch(url +"/"+ id)
.then(function(res) {
  return res.json()
    })
    .then(function(data){
      donnees = data;
      console.log(donnees);
      title.innerHTML = "Orinoco | " + data.name;
      cardHeader.innerText = data.name;
      cardImg.src = data.imageUrl;
      cardDescr.innerText = data.description;
      cardPrice.innerText = `${donnees.price / 100} €`;

      // objectifs //
      for (let i = 0; i < donnees.lenses.length; i++) {
        let lensesSelect = document.createElement('option');
        let formGroup = document.getElementById('lens');
        append(formGroup,lensesSelect);
        lensesSelect.innerHTML = donnees.lenses[i];
      }
    })