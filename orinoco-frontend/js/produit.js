/* recuperation de l'id */
let params = new URL(document.location).searchParams;
let id = params.get('id');
/* Variable */
let url = 'http://localhost:3000/api/cameras';

/*************/
/* Fonctions */
/*************/

/* Structure de la carte produit */
function append(parent,el){
  return parent.appendChild(el);
}

// supressions des classes pour l'error //
function removeClasses() {
  var col1 = document.getElementById("col1");
  var col2 = document.getElementById("col2");
  col1.classList.remove("col-lg-6");
  col2.classList.remove("col-lg-6");
}
/* Structure de la carte produit */


/*************/
/* Fonctions */
/*************/

//Recuperation des elements //
const title = document.querySelector('title');
const cardHeader = document.querySelector('.card-header');
const cardImg = document.querySelector('.card-img-top');
const cardTitle = document.querySelector('.card-title');
const cardDescr = document.querySelector('.card-descr');
const cardPrice = document.querySelector('.card-price');
const cardBtn = document.querySelector('.card-btn');
const cardForm = document.querySelector('.form-group');
const addToCart = document.getElementById('addToCart');

/* fetch + l'id */

fetch(url +"/"+ id)
.then(function(res) {
  return res.json()
    })
    .then(function(data){
      donnees = data;

      // ajout des attributs et des textes //
      title.innerHTML = "Orinoco | " + data.name;
      cardHeader.innerText = data.name;
      cardImg.src = data.imageUrl;
      cardDescr.innerText = data.description;
      cardPrice.innerText = `${donnees.price / 100} €`;

      // options objectifs //
      for (let i = 0; i < donnees.lenses.length; i++) {
        let lensesSelect = document.createElement('option');
        let formGroup = document.getElementById('lens');
        append(formGroup,lensesSelect);
        lensesSelect.setAttribute('value',[i]);
        lensesSelect.innerHTML = donnees.lenses[i];
        const lens = document.getElementById('lens');

      }
      cardBtn.addEventListener("click", function(e) {
        e.preventDefault();
        // recuperation du choix d'achat //
        const product = {
          nom : data.name,
          option : lens.options[lens.selectedIndex].text,
          prix: donnees.price/100,
          id : data._id
        };
        // Local Storage // 

        //fonction ajout d'un produit dans le localStorage //
        const addProductInLocalStorage = () =>{
          productsDansLocalStorage.push(product);
         localStorage.setItem('produits',JSON.stringify(productsDansLocalStorage));
        }
        //fonction ajout d'un produit dans le localStorage //
        let productsDansLocalStorage = JSON.parse(localStorage.getItem("produits"))
       if(productsDansLocalStorage){
        addProductInLocalStorage();
       }else{
         productsDansLocalStorage = [];
         addProductInLocalStorage();
       }
      })
    })
    .catch(function(error) {
      cardHeader.remove();
      cardBtn.remove();
      cardForm.remove();
       removeClasses();
      cardDescr.innerHTML = "<h3 class='text-center'>Oups!</h3><br/>" + "<p class='text-center'>Une erreur s'est produite, veuillez réessayer ulterieument. Si le problème persiste veuillez contacter notre support.</p>";
     });

