// fetch('https://serene-basin-92650.herokuapp.com/show-appointments/')
// .then(res => res.json())
// .then(data =>{
//     products = data
//     console.log(data)
//     let productContainer = document.querySelector('#product-container')
//         productContainer.innerHTML = "";
//         data['data'].forEach(product => {
//         productContainer.innerHTML += `<div class='table-items'>
        
//         <table class="table">
//         <tr>
//           <th>Date Made</th>
//           <th>Check-in Date</th>
//           <th>Check-out Date</th>
//           <th>User</th>
//           <th>Hotel</th>
//           <th>room number</th>
//         </tr>
//         <tr>
//           <td>${product[1]}</td>
//           <td>${product[2]}</td>
//           <td>${product[3]}</td>
//           <td>${product[4]}</td>
//           <td>${product[5]}</td>
//           <td>${product[6]}</td>
//         </tr>
//       </table>
//       </div>`     
     
// })
// })

// delete

// function addClicked(id){
//   fetch(`https://tashwill-system.herokuapp.com/get-product/${id}/`, {
//               method: "GET",
//               body: JSON.stringify(),
//               headers: {
//                   'Content-type': 'application/json',
//               }
//       })
//       .then(res => res.json())
//           .then(data => {
//               console.log(data)
//               console.log(data['data'][0])
//               let title = `${data['data'][0][1]}`
//               let price = `${data['data'][0][4]}`
//               let imageSrc = `${data['data'][0][6]}`
//               console.log(title)
//               addItemToCart(title, price, imageSrc)
//               cartTotal()
//       })
//       }
 

  fetch('https://serene-basin-92650.herokuapp.com/show-appointments/')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  let cartItems = document.getElementsByClassName('cart-items')[0]
  let cartRowContent = `<div class="cart-item cart-column">
                        <span class="hotel-name">${data.data[0][5]}</span>
                        <span class="cart-item-title">${data.data[0][4]}</span>
                        <span class="check-out-span">${data.data[0][2]}</span>
                        <span class="check-in">${data.data[0][3]}</span>
                        <span class="room-price-span">${data.data[0][6]}</span>
                        <span class="room-total-span">${data.data[0][7]}</span>
                        </div>
                      <button class="btn btn-danger" type="button" onClick="removeAppoint(${data.data[0][0]})">REMOVE</button>
                  </div>`
  cartRow.innerHTML = cartRowContent
  cartItems.append(cartRow)
  // // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChange)
})


function removeAppoint(id){
  fetch(`https://serene-basin-92650.herokuapp.com/delete-appointment/${id}`,{
      method: "GET",
      body: JSON.stringify(),
      headers: {
          'Content-type': 'application/json',
      }
  })
  .then(res => res.json())
              .then(data => {
                  console.log(data)
                  window.location.reload()
          })
      }
