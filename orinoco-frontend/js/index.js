/* Variables */
const productsList = document.getElementById("productsList");
const url = "http://localhost:3000/api/cameras";

/* Functions */

function append(parent,el){
    return parent.appendChild(el);
}
/* fetch + intégration des données sur la page index.html*/

fetch(url)
.then(function(res) {
return res.json()
  })
  .then(function(data){
      for (let i = 0; i < data.length; i++){
           let col = document.createElement('div');
          let card = document.createElement('div');
          let cardBody = document.createElement('div');
          let cardTitle = document.createElement('h5');
          let cardText = document.createElement('p');
          let img = document.createElement('img');
          let cardBtn = document.createElement('a');
          img.setAttribute('src',data[i].imageUrl);
          cardBtn.setAttribute('href',"produit.html");
          col.className = "col12 col-lg-4 d-flex align-items-stretch";
          card.className = ("card border-muted shadow text-center mb-4");
          cardBody.className = ("card-body");
          img.className = ("card-img-top");
          cardTitle.className = ("card-title");
          cardText.className = ("card-text");
          cardBtn.className = ("btn btn-outline-dark");
          cardBtn.innerText = "Voir le produit";
          cardText.innerHTML = data[i].description;
          cardTitle.innerHTML = data[i].name;
          append(productsList,col);
          append(col,card);
          append(card,img);
          append(card,cardBody);
          append(cardBody,cardTitle);
          append(cardBody,cardText);
          append(cardBody,cardBtn);
          
      } 
  })
.catch(function(error) {
 document.getElementById("footer").classList.add('fixed-bottom');
 document.getElementById("productsList").innerHTML = "<h3 class='text-center'>Oups!</h3><br/>" + "<p class='text-center'>Une erreur s'est produite, veuillez réessayer ulterieument. Si le problème persiste veuillez contacter notre support.</p>";
});



