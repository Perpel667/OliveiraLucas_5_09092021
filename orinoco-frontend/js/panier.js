/* Structure de la carte produit */
function append(parent,el){
    return parent.appendChild(el);
  }

let produits = JSON.parse(localStorage.getItem('produits'));
console.log(produits);

for (let i = 0; i < produits.length; i++) {
    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    let th = document.createElement('th')
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    append(tbody, tr);
    append(tr,th);
    append(tr,td);
    append(tr,td2);
    th.setAttribute('scope','row');
    td2.className = 'text-end';
    th.innerHTML = produits[i].nom;
    td.innerHTML = produits[i].option;
    td2.innerHTML = produits[i].prix + " €";
}
//Calcul du prix total //
let toutLesPrix = [];
    for (let j = 0; j < produits.length; j++){
        toutLesPrix.push(produits[j].prix);
    }
    let prixTotal = toutLesPrix.reduce(function(a, b){
        return a + b;
    },0);
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

