/* Variables */
const productsList = document.getElementById("productsList");
const url = "http://localhost:3000/api/cameras";

/* Function */
function createElement(element){
    return element.createElement(element);
};

function append(parent,el){
    return parent.appendChild(el);
}

fetch(url)
.then(function(res) {
return res.json()
  })
  .then(function(data){
      document.getElementById("productsList").innerHTML = data[0].name;
  })
.catch(function(error) {
 document.getElementById("productsList").innerHTML = "<h3>erreur</h3>"
});
  




