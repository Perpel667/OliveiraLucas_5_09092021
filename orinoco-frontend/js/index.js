
/* Variables */
const productsList = document.getElementById("productsList");
const url = "http://[::1]:3000/api/cameras";
/* Variables */

/*************/
/* Functions */
/*************/

// Creation des elements //
function create(){
     col = document.createElement('div');
     card = document.createElement('div');
     cardBody = document.createElement('div');
     cardTitle = document.createElement('h5');
     cardText = document.createElement('p');
     img = document.createElement('img');
     cardBtn = document.createElement('a');
};


function structure(){
    append(productsList,col);
          append(col,card);
          append(card,img);
          append(card,cardBody);
          append(cardBody,cardTitle);
          append(cardBody,cardText);
          append(cardBody,cardBtn);
}
// Ajout des classes //
function addClass(){
    col.className = "col12 col-lg-4 d-flex align-items-stretch";
          card.className = "card border-muted shadow text-center mb-4";
          cardBody.className = "card-body";
          img.className = "card-img-top";
          cardTitle.className = "card-title";
          cardText.className = "card-text";
          cardBtn.className = "btn btn-outline-dark";
}

/*************/
/* Functions */
/*************/

/* fetch + intégration des données sur la page index.html*/

fetch(url)
.then(function(res) {
return res.json()
  })
  .then(function(data){
      for (let i = 0; i < data.length; i++){
          
         create();
         structure();
         addClass();

          // Ajout des attributs //

           img.setAttribute('src',data[i].imageUrl);
          cardBtn.setAttribute('href',"pages/produit.html?id=" + data[i]._id);

          // Ajout des textes (description, nom, etc..) //
          cardBtn.innerText = "Voir le produit";
          cardText.innerHTML = data[i].description;
          cardTitle.innerHTML = data[i].name;

      } 
  })
.catch(function(error) {
 document.getElementById("main").classList.add("vh-100");
 document.getElementById("productsList").innerHTML = "<h3 class='text-center'>Oups!</h3><br/>" + "<p class='text-center'>Une erreur s'est produite, veuillez réessayer ulterieument. Si le problème persiste veuillez contacter notre support.</p>";
});


