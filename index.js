






fetch('https://fakestoreapi.com/products').then((data)=>{

    return data.json();

}).then((dataFromApi)=>{


  let arrayOfData = "";

   dataFromApi.map((value)=>{
    arrayOfData += ` <div class="card">
         <h1 class="title">${value.title}</h1>
        <img src=${value.image} alt="image from API">
        <P class="price">$ ${value.price}.00</P>
        <p class="category">${value.category}</p>
        <p class="description">${value.description}</p>
          </div> `
   })
   document.getElementById("card").innerHTML = arrayOfData;

}).catch((err)=>{
    console.log(err);
})