const url = "https://api.sampleapis.com/coffee/";
let form = document.querySelector('form');
let expdetail = document.getElementById("coffe-exp");
let picsec = document.getElementById('pict');
let sectionCofeees = document.querySelector('.container');
console.log(sectionCofeees);
console.log(expdetail);

async function hotcoffee(cofee){
    console.log(cofee);
    let url = `https://api.sampleapis.com/coffee/${cofee}`;
    console.log(url);
    let response = await fetch(url);
   console.log(response);
   
    let data = await response.text();
    if (!response.ok) {
        throw new Error('Request failed');
      }
    console.log(JSON.parse(data));
    let cof = JSON.parse(data);
    console.log(cof.length);
    console.log(cof);
    
    for (let i = 0; i < cof.length; i++){
        let cc = cof[i];
        let image = `<img src="${cc.image}" alt="a image of coffee" id="picture">`;
         console.log(image);
         console.log(cc.i)
    
         let complex = `<div class="dividCo" > <h1> ${cc.title} </h1>`;
         complex += `<img src="${cc.image}" alt="a image of coffee" id="picture">  <br> <h2>ingredients</h2> <ul>  `;

         for ( let j=1; j < cc.ingredients.length; j++){
           complex += `<li> ${cc.ingredients[j]} </li>`;
         };
         complex += ` <br> </ul>`;
         complex += `<p> ${cc.description} </p> <br> </div>`;
         console.log(complex);
         sectionCofeees.innerHTML += complex;
         console.log(sectionCofeees);
        
    
    }
  

}

form.addEventListener("submit" , event =>  {
    event.preventDefault();
    console.log(event.target.search.value);
    let kindcofee = event.target.search.value;
    console.log(kindcofee);
    if (kindcofee === "hot" || kindcofee === "iced") {
        hotcoffee(kindcofee);
       
     } else {
         let complex = `<div class="dividCo" > <br> <br> <h3> Unexpected data sent in! GET NOT accepted. Please send valid data next time! </h3> <br> <br></div> `  
         sectionCofeees.innerHTML = complex;
        
       } 

})

