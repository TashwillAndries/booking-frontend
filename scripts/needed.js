fetch("https://serene-basin-92650.herokuapp.com/get-rooms/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // const imageOne = document.createElement("img");
    // imageOne.classList.add("room-image");
    // imageOne.src = `${data["data"][0][5]}`;
    // document.querySelector(".image-wrap").appendChild(imageOne);
    // const imageTwo = document.createElement("img");
    // imageTwo.classList.add("room-image-two");
    // imageTwo.src = `${data["data"][1][5]}`;
    // document.querySelector(".image-").appendChild(imageTwo);
    document.querySelector(".room-image").innerHTML = `
    <img src="${data["data"][0][5]} ">`;
    document.querySelector(".hotel-name").innerHTML = `${data["data"][0][1]}`;
    document.querySelector(
      ".room-number"
    ).innerHTML = `Room Number: ${data["data"][0][2]}`;
    document.querySelector(
      ".room-price"
    ).innerHTML = `R${data["data"][0][6]} Per Night`;
    document.querySelector(".paragraph").innerHTML = `${data["data"][0][3]}`;

    document.querySelector(".room-image-two").innerHTML = `
    <img src="${data["data"][1][5]} ">`;
    document.querySelector(
      ".hotel-name-two"
    ).innerHTML = `${data["data"][1][1]}`;
    document.querySelector(
      ".room-number-two"
    ).innerHTML = `Room Number: ${data["data"][1][2]}`;
    document.querySelector(
      ".room-price-two"
    ).innerHTML = `R${data["data"][1][6]} Per Night`;
    document.querySelector(
      ".paragraph-two"
    ).innerHTML = `${data["data"][1][3]}`;
  });

fetch(
  `https://serene-basin-92650.herokuapp.com/show-user/${mystorage.getItem(
    "username"
  )}`,
  {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector(
      ".id-number"
    ).innerHTML = `ID Number: ${data["data"][0]}`;
    document.querySelector(
      ".first-name"
    ).innerHTML = `First Name: ${data["data"][1]}`;
    document.querySelector(
      ".surname"
    ).innerHTML = `Surname: ${data["data"][2]}`;
    document.querySelector(
      ".address"
    ).innerHTML = `Address: ${data["data"][3]}`;
    document.querySelector(".email").innerHTML = `Email: ${data["data"][4]}`;
    document.querySelector(
      ".username"
    ).innerHTML = `Username: ${data["data"][5]}`;
    mystorage.setItem("id", `${data["data"][0]}`);
    mystorage.setItem("email", `${data["data"][4]}`);
  });

function dateSetup() {
  let date = new Date();
  let tdate = date.getDate();
  let month = date.getMonth() + 1;

  if (tdate < 10) {
    tdate = "0" + tdate;
  }

  if (month < 10) {
    month = "0" + month;
  }

  let year = date.getUTCFullYear();
  let minDate = year + "-" + month + "-" + tdate;

  let checkin = document.querySelector("#check-in");
  console.log(checkin);
  let attrib = document.createAttribute("min");
  attrib.value = minDate;
  checkin.setAttributeNode(attrib);
}

function checkOutSetup() {
  let date = new Date();
  let tdate = date.getDate();
  let month = date.getMonth() + 1;

  if (tdate < 10) {
    tdate = "0" + tdate;
  }

  if (month < 10) {
    month = "0" + month;
  }

  let year = date.getUTCFullYear();
  let minDate = year + "-" + month + "-" + tdate;
  let checkOut = document.querySelector("#check-out");
  let atrribute = document.createAttribute("min");
  atrribute.value = minDate;
  checkOut.setAttributeNode(atrribute);
}

function deleteUser() {
  fetch(
    `https://serene-basin-92650.herokuapp.com/delet-user/${mystorage.getItem(
      "id"
    )}`,
    {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  if (data["status_code"] == 200) {
    alert("profile deleted successful");
    window.location.reload();
  } else {
    alert("profile not deleted");
  }
}

function sendEmail() {
  fetch(`https://serene-basin-92650.herokuapp.com/send-email/`, {
    method: "POST",
    body: JSON.stringify({
      email: mystorage.getItem("email"),
      total: mystorage.getItem("total"),
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}
