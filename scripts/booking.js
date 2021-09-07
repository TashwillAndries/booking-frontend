function differentPage() {
  window.location.href = "rooms.html";
}

let hotelNames = ["L hotel", "gaylord hotel", "Veyron Hotel"];

function searchNames() {
  let search = document.getElementById("Destination").value;
  console.log(search);
  let searchHotel = hotelNames.filter((hotelNames) => {
    hotelNames.toLowerCase().includes(search.toLowerCase());
  });
  console.log(searchHotel);
}
