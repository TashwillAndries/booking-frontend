mystorage = window.localStorage;
let records = [];
function renderData() {
  fetch("https://serene-basin-92650.herokuapp.com/show-appointments/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      actualRender(data.data);
    });
}

function actualRender(records) {
  let tableBody = document.getElementById("tableData");
  tableBody.innerHTML = "";
  records.forEach((person) => {
    tableBody.innerHTML += `<tr><td>${person[0]}</td><td>${person[5]}</td><td>${person[4]}</td><td>${person[3]}</td>
              <td>${person[2]}</td><td>${person[6]}</td><td class="price">${person[7]}</td></tr>
              `;
  });
}

let row = document.getElementsByClassName("price").rows;
console.log(row);

let modalBtn = document.querySelector(".btn-danger");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function removeAppoint() {
  let id = document.getElementById("remove-appointment_id").value;
  console.log(id);
  fetch(`https://serene-basin-92650.herokuapp.com/delete-appointment/${id}`, {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.reload();
    });
}

let updateModalBtn = document.querySelector(".update");
let updateModalBg = document.querySelector(".update-modal-bg");
let updateModalClose = document.querySelector("#update-close");

updateModalBtn.addEventListener("click", function () {
  updateModalBg.classList.add("update-active");
});

updateModalClose.addEventListener("click", function () {
  updateModalBg.classList.remove("update-active");
});

// update data
function updateAppoint() {
  let id = document.getElementById("appointment_id").value;
  console.log(id);
  let dateOne = new Date(document.querySelector("#check_in_date").value);
  let dateTwo = new Date(document.querySelector("#check_out_date").value);
  let difference = dateTwo.getTime() - dateOne.getTime();
  let days = 1000 * 3600 * 24;
  let results = difference / days;
  if (document.getElementById("hotel_name").value == "L hotel") {
    price = 1000;
  } else if (document.getElementById("hotel_name").value == "Gaylord hotel") {
    price = 600;
  } else {
    price = 3500;
  }

  fetch(`https://serene-basin-92650.herokuapp.com/update-appointment/${id}/`, {
    method: "PUT",
    body: JSON.stringify({
      check_in_date: document.getElementById("check_in_date").value,
      check_out_date: document.getElementById("check_out_date").value,
      appointment_user: document.getElementById("username").value,
      hotel_name: document.getElementById("hotel_name").value,
      room_no: document.getElementById("room_no").value,
      total: price * results,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  // window.location.reload();
}

const url = "https://serene-basin-92650.herokuapp.com/show-appointments/";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    records = data.data;
    console.log(records);
    renderData(records);
  });

function searchAppoint() {
  document.getElementById("tableData").innerHTML = "";
  let searchitem = document.querySelector("#searchbar").value;
  console.log(searchitem);
  let searchUser = records.filter((data) =>
    data[4].toLowerCase().includes(searchitem.toLowerCase())
  );
  console.log(searchUser);
  actualRender(searchUser);
}
