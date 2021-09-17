/*************/
/* Functions */
/*************/
/* append */
function append(parent,el){
    return parent.appendChild(el);
  }
  // creation de la table panier //
function createTableElem(){
         tbody = document.getElementById('tbody');
         tr = document.createElement('tr');
         th = document.createElement('th')
         td = document.createElement('td');
         td2 = document.createElement('td');
}
// structure du panier //
 function structurePanier(){
    append(tbody, tr);
    append(tr,th);
    append(tr,td);
    append(tr,td2);
 }
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
 //recuperation des produits selectionnés //

let produits = JSON.parse(localStorage.getItem('produits'));
console.log(produits);

//si il y a des elements dans le panier //

if(produits){
for (let i = 0; i < produits.length; i++) {
    createTableElem();
    structurePanier();
    th.setAttribute('scope','row');
    td2.className = 'text-end';
    th.innerHTML = produits[i].nom;
    td.innerHTML = produits[i].option;
    td2.innerHTML = produits[i].prix + " €";
}
//Calcul qui me retourne le prix total //
    calculTotal();
// footer table panier //
let tablePanier = document.getElementById("tablePanier");
let tfoot = document.createElement('tfoot');
let th2 = document.createElement('th');
let tr2 = document.createElement('tr');
let td3 = document.createElement('td');
let td4 = document.createElement('td');
append(tablePanier,tfoot)
append(tfoot,th2);
append(tfoot,td3);
append(tfoot,td4);
th2.setAttribute('scope','row');
    th2.className ="border"
    td3.className = 'text-end';
    td4.className = 'text-end border';
    th2.innerText = "";
    td3.innerHTML = "<h6>Prix total :</h6>";
    td4.innerHTML = `<h6>${prixTotal} €</h6>`;
    //si il n'y a rien dans le panier //
}else{
    let table = document.getElementById("tablePanier");
    let pagePanier = document.getElementById("pagePanier");
    let panierVide = document.createElement("div");
    //supression de la table //
    table.remove();
    append(pagePanier,panierVide);
    panierVide.innerHTML = '<h5 class="text-center">Aucun article ce trouve dans votre panier !</h5>';
}

