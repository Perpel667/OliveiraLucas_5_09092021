//fonction pour structurer Parent > Enfant //
function append(parent,el){
    return parent.appendChild(el);
};

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