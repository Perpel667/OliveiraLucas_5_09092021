///////////////////////////////////////////
 /*Variables*/
///////////////////////////////////////////
let params = new URL(document.location).searchParams;
let id = params.get('orderId');
///////////////////////////////////////////
 /*recuperation des produits selectionnés */
///////////////////////////////////////////
let produits = JSON.parse(localStorage.getItem('produits'));

/*************/
/* Functions */
/*************/
// calcul du prix total //
function calculTotal(){
    toutLesPrix = [];
   for (let j = 0; j < produits.length; j++){
       toutLesPrix.push(produits[j].prix);
   }
    prixTotal = toutLesPrix.reduce(function(a, b){
       return a + b;
   },0);
   return prixTotal;
}
// vide le localStorage //
function removeItems(){
    localStorage.removeItem('produits');
}
/* Affichage du message de la confirmation */
calculTotal();
main = document.getElementById('main');
main.innerHTML = `<div class="container vh-100 d-flex align-items-center justify-content-center">
<div class="card">
<div class="card-body text-center">
  <h5 class="card-title text-success">Achat confirmé</h5>
  <p class="card-text">Merci de nous avoir fait confiance pour votre achat d'un montant de <strong>${prixTotal}€</strong>.</p>
  <p class="card-text">Voici votre numero de commande : <strong>${id}</strong>.</p>
  <a class="text-secondary" href="index.html" id="returnLink"><i class="bi bi-arrow-left-short"></i>Retour vers l'acceuil<a></a>
</div>
</div>
                    </div>`;

// vide le localStorage au clic //
returnLink = document.getElementById('returnLink');
returnLink.addEventListener('click',function(e){
    removeItems();
})