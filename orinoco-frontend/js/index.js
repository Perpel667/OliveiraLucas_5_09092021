const camURL = "http://localhost:3000/api/cameras";

 fetch(camURL)
  .then(response => response.json())
  .then(data => console.log(data));

