fetch('https://serene-basin-92650.herokuapp.com/get-rooms/')
.then(res => res.json())
.then(data =>{
    products = data
    console.log(data)
    let productContainer = document.querySelector('#product-container')
        productContainer.innerHTML = "";
        data['data'].forEach(product => {
        productContainer.innerHTML += `<div class = 'shop-item'>
        <div class="container">
            <h5 class="section-heading">
                <span class="heading">Luxurios</span>
                <span class="sub-heading">Affordable rooms</span>
            </h5>
            <div class='grid room-grid'>
            <div class='grid-item featured-rooms'>
            <div class='image-wrap'>
            <img class="room-image" src="${product[5]}" alt="room-image">
            </div>
            </div>
            </div>
        </div>`
  
        
        })
  
})

