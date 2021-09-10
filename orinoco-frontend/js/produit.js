/* recuperation de l'id */

let params = new URL(document.location).searchParams;
let id = params.get('id');
let url = 'http://localhost:3000/api/cameras';

fetch(url +"/"+ id)
  .then(response => response.json())
  .then(data => console.log(data));