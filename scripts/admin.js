fetch('https://serene-basin-92650.herokuapp.com/show-appointments/')
.then(res => res.json())
.then(data =>{
    products = data
    console.log(data)
    let productContainer = document.querySelector('#product-container')
        productContainer.innerHTML = "";
        data['data'].forEach(product => {
        productContainer.innerHTML += `<div class='table-items'>
        
        <table class="table">
        <tr>
          <th>Date Made</th>
          <th>Check-in Date</th>
          <th>Check-out Date</th>
          <th>User</th>
          <th>Hotel</th>
          <th>room number</th>
        </tr>
        <tr>
          <td>${product[1]}</td>
          <td>${product[2]}</td>
          <td>${product[3]}</td>
          <td>${product[4]}</td>
          <td>${product[5]}</td>
          <td>${product[6]}</td>
        </tr>
      </table>
      </div>`     
     
})
})
