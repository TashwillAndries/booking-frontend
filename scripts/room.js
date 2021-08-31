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
            <h5 class="hotel-name">${product[1]}</h5>
            <span class="room-number">Room:${product[2]}</span>
            <div class='book-form'>
            <form action="" class="form">
            <div class="input-group">
            <label for="check-in" class="input-label">check-in</label>
            <input type="date" class="input" id="check-in">
            </div>
            <div class="input-group">
            <label for="check-out" class="input-label">check-out</label>
            <input type="date" class="input" id="check-out">
            </div>
            </form>     
            </div>
            </div>
            <div class="room-info">
            <span class="room-price">R${product[6]}<span class="per-night">Per Night</span></span>
            <p class="paragraph">${product[3]}</p>
            <button class="btn rooms-btn" onClick="bookRoom()">Book Now</button>
            </div>
            </div>
            </div>
        </div>`      
        })
})



function bookRoom(){
    fetch('https://serene-basin-92650.herokuapp.com/create-appointment/',{
        method: "POST",
        body: JSON.stringify({
            "check_in_date": document.querySelector('#check-in').value,
            "check_out_date": document.querySelector('#check-out').value,
            "appointment_user": "Mick",
            "hotel_name": document.querySelector(".hotel-name").innerText,
            "room_no": document.querySelector(".room-price").innerText
        }),
        headers: {
            'Content-type': 'application/json',
    }
})

.then(res => res.json())
.then(res => {
console.log(res);

})
}


fetch('https://serene-basin-92650.herokuapp.com/show-appointments/')
.then(res => res.json())
.then(data =>{
    console.log(data)
})