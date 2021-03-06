 ///////////////////////////////////////////
 /*recuperation des produits selectionnés */
///////////////////////////////////////////
 let produits = JSON.parse(localStorage.getItem('produits'));
 console.log(produits);
 
/*************/
/* Functions */
/*************/

  /* creation de la table panier */
function createTableElem(){
    // recuperation du parent et creation des elements //
        tbody = document.getElementById('tbody');
        tr = document.createElement('tr');
        th = document.createElement('th')
        td = document.createElement('td');
        td2 = document.createElement('td');
        // attributions des enfants aux elements parents //
        append(tbody, tr);
        append(tr,th);
        append(tr,td);
        append(tr,td2);
}
 /*creation du footer de la table panier */
 function createTableFooter(){
     // recuperation du parent et creation des elements //
    tablePanier = document.getElementById("tablePanier");
    tfoot = document.createElement('tfoot');
    th2 = document.createElement('th');
    tr2 = document.createElement('tr');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    // attributions des enfants aux elements parents //
    append(tablePanier,tfoot)
    append(tfoot,th2);
    append(tfoot,td3);
    append(tfoot,td4);
 }
 /* Fetch Post */
 function confirmPanier(){
   // recuperation des informations dans l'objet contact //
  let contact = {
    firstName : document.getElementById("prenom").value,
    lastName : document.getElementById("nom").value,
    address : document.getElementById("adresse").value,
    city : document.getElementById("ville").value,
    email : document.getElementById("email").value
  };
// recuperation des produits dans le panier dans l'array products //
  let products = [];
  for (let k = 0; k < produits.length; k++){
    products.push(produits[k].id);
  }
  // envoi des données au backend //
  fetch('http://[::1]:3000/api/cameras/order',{
    method :"POST",
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    mode:'cors',
    body : JSON.stringify({contact : contact,
    products : products
    })
  })
  .then(function(res){
    return res.json()
  })
  .then(function(data){
     window.location.href = `${window.location.origin}/orinoco-frontend/pages/confirm.html?orderId=${data.orderId}`
  })
 }
 /* Validation des informations */
(function valid() {
    'use strict'
  
    // Recupere tout les formulaires ou l'ont souhaite appliquer la validation customisée
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop dans les formulaires et empeche la confirmation si ce n'est pas valide //
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            // si tout les champs remplis sont corrects //
          }else{
            event.preventDefault()
            // creation de l'objet contact pour le backend //
            confirmPanier();
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

/*************/
/* Functions */
/*************/

/*si il y a des elements dans le panier */
if(produits){
for (let i = 0; i < produits.length; i++) {
    // table panier //
    createTableElem();
    // attributions des attributs,des classes, et du contenu //
    th.setAttribute('scope','row');
    td2.className = 'text-end';
    th.innerHTML = produits[i].nom;
    td.innerHTML = produits[i].option;
    td2.innerHTML = produits[i].prix + " €";
}
//fonction qui me retourne le prix total //
    calculTotal();
// footer table panier //
createTableFooter()
// attributions des attributs,des classes, et du contenu //
th2.setAttribute('scope','row');
    th2.className ="border"
    td3.className = 'text-end';
    td4.className = 'text-end border';
    th2.innerText = "";
    td3.innerHTML = "<h6>Prix total :</h6>";
    td4.innerHTML = `<h6>${prixTotal} €</h6>`;

    /*si il n'y a rien dans le panier */
}else{
    let pagePanier = document.getElementById("pagePanier");
    //supression de la table //
    pagePanier.innerHTML = `<h5 class="text-center">Aucun article ce trouve dans votre panier</h5><a href="../index.html" class="link-secondary text-decoration-none"><i class="bi bi-arrow-left-short"></i>Retour vers l'acceuil<a>`;
}


