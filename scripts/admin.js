mystorage = window.localStorage;

function renderData(records) {
  fetch("https://serene-basin-92650.herokuapp.com/show-appointments/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let tableBody = document.getElementById("tableData");
      let dataBody = "";
      data["data"].forEach((person) => {
        dataBody += `<tr><td>${person[0]}</td><td>${person[5]}</td><td>${person[4]}</td><td>${person[3]}</td>
                  <td>${person[2]}</td><td>${person[6]}</td><td>${person[7]}</td></tr>
                  `;
      });

      tableBody.innerHTML += dataBody;
    });
}

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
  let id = document.getElementById("appointment_id").value;
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
  fetch(`https://serene-basin-92650.herokuapp.com/update-appointment/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      check_in_date: document.getElementById("check_in_date").value,
      check_out_date: document.getElementById("check_out_date").value,
      appointment_user: document.getElementById("username").value,
      hotel_name: document.getElementById("hotel_name").value,
      total: parseInt(mystorage.getItem("price")) * results,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}

const url = "https://serene-basin-92650.herokuapp.com/show-appointments/";
let records = [];
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    records = data.data;
    renderData(records);
  });
