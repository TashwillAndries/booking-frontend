mystorage = window.localStorage;

// display all the rooms i have in my database
fetch("https://serene-basin-92650.herokuapp.com/get-rooms/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // room one
    document.querySelector(".room-image").src = `${data["data"][0][5]}`;
    document.querySelector(".hotel-name").innerHTML = `${data["data"][0][1]}`;
    document.querySelector(
      ".room-number"
    ).innerHTML = `Room: ${data["data"][0][2]}`;
    document.querySelector(
      ".room-price"
    ).innerHTML = `R${data["data"][0][6]} Per Night`;
    document.querySelector(".paragraph").innerHTML = `${data["data"][0][3]}`;

    // room two
    document.querySelector(".room-image-two").src = `${data["data"][1][5]}`;
    document.querySelector(
      ".hotel-name-two"
    ).innerHTML = `${data["data"][1][1]}`;
    document.querySelector(
      ".room-number-two"
    ).innerHTML = `Room: ${data["data"][1][2]}`;
    document.querySelector(
      ".room-price-two"
    ).innerHTML = `R${data["data"][1][6]} Per Night`;
    document.querySelector(
      ".paragraph-two"
    ).innerHTML = `${data["data"][1][3]}`;

    // room three
    document.querySelector(".room-image-three").src = `${data["data"][2][5]}`;
    document.querySelector(
      ".hotel-name-three"
    ).innerHTML = `${data["data"][2][1]}`;
    document.querySelector(
      ".room-number-three"
    ).innerHTML = `Room: ${data["data"][2][2]}`;
    document.querySelector(
      ".room-price-three"
    ).innerHTML = `R${data["data"][2][6]} Per Night`;
    document.querySelector(
      ".paragraph-three"
    ).innerHTML = `${data["data"][2][3]}`;
    dateSetup();
  });

window.onbeforeunload = function () {
  mystorage.removeItem("username");
  return "";
};

// function that makes the appointment
function bookRoom() {
  try {
    if (mystorage.getItem("username") != null) {
      let dateOne = new Date(document.querySelector("#check-in").value);
      let dateTwo = new Date(document.querySelector("#check-out").value);
      let difference = dateTwo.getTime() - dateOne.getTime();
      let days = 1000 * 3600 * 24;
      let results = difference / days;
      fetch("https://serene-basin-92650.herokuapp.com/create-appointment/", {
        method: "POST",
        body: JSON.stringify({
          check_in_date: document.querySelector("#check-in").value,
          check_out_date: document.querySelector("#check-out").value,
          appointment_user: mystorage.getItem("username"),
          hotel_name: document.querySelector(".hotel-name").innerText,
          room_no: document.querySelector(".room-number").innerText,
          total: parseInt(mystorage.getItem("price")) * results,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("appointment made");
        });
    } else {
      alert("must be logged in to book a room");
    }
  } catch (err) {
    alert("must be logged in to book a room");
  }
}

// function to book room two
function bookRoomTwo() {
  try {
    if (mystorage.getItem("username") != null) {
      let dateOne = new Date(document.querySelector("#check-in-two").value);
      let dateTwo = new Date(document.querySelector("#check-out-two").value);
      let difference = dateTwo.getTime() - dateOne.getTime();
      let days = 1000 * 3600 * 24;
      let results = difference / days;
      fetch("https://serene-basin-92650.herokuapp.com/create-appointment/", {
        method: "POST",
        body: JSON.stringify({
          check_in_date: document.querySelector("#check-in-two").value,
          check_out_date: document.querySelector("#check-out-two").value,
          appointment_user: mystorage.getItem("username"),
          hotel_name: document.querySelector(".hotel-name-two").innerText,
          room_no: document.querySelector(".room-number-two").innerText,
          total: parseInt(mystorage.getItem("price")) * results,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("appointment made");
        });
    } else {
      alert("must be logged in to book a room");
    }
  } catch (err) {
    alert("must be logged in to book a room");
  }
}

// book room three function

function bookRoomThree() {
  try {
    if (mystorage.getItem("username") != null) {
      let dateOne = new Date(document.querySelector("#check-in-three").value);
      let dateTwo = new Date(document.querySelector("#check-out-three").value);
      let difference = dateTwo.getTime() - dateOne.getTime();
      let days = 1000 * 3600 * 24;
      let results = difference / days;
      fetch("https://serene-basin-92650.herokuapp.com/create-appointment/", {
        method: "POST",
        body: JSON.stringify({
          check_in_date: document.querySelector("#check-in-three").value,
          check_out_date: document.querySelector("#check-out-three").value,
          appointment_user: mystorage.getItem("username"),
          hotel_name: document.querySelector(".hotel-name-three").innerText,
          room_no: document.querySelector(".room-number-three").innerText,
          total: parseInt(mystorage.getItem("price")) * results,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("appointment made");
          mystorage.setItem(
            "total",
            parseInt(mystorage.getItem("price")) * results
          );
          sendEmail();
        });
    } else {
      alert("must be logged in to book a room");
    }
  } catch (err) {
    alert("must be logged in to book a room");
  }
}

// code to block out dates that has passed
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
  let checkinTwo = document.querySelector("#check-in-two");
  let checkinThree = document.querySelector("#check-in-three");
  let checkOut = document.querySelector("#check-out");
  let checkOutTwo = document.querySelector("#check-out-two");
  let checkOutThree = document.querySelector("#check-out-three");
  let attrib = document.createAttribute("min");
  let atrribTwo = document.createAttribute("min");
  let atrribThree = document.createAttribute("min");
  let atrribute = document.createAttribute("min");
  let atrributeTwo = document.createAttribute("min");
  let atrributeThree = document.createAttribute("min");
  atrribute.value = minDate;
  attrib.value = minDate;
  atrribTwo.value = minDate;
  atrribThree.value = minDate;
  atrributeTwo.value = minDate;
  atrributeThree.value = minDate;

  checkOut.setAttributeNode(atrribute);
  checkOutTwo.setAttributeNode(atrributeTwo);
  checkOutThree.setAttributeNode(atrributeThree);
  checkin.setAttributeNode(attrib);
  checkinTwo.setAttributeNode(atrribTwo);
  checkinThree.setAttributeNode(atrribThree);
}

// user profile modal
let profileBtn = document.querySelector("#open-modal");
let profileBg = document.querySelector(".profile-bg");
let profileClose = document.querySelector(".profile-modal-close");

profileBtn.addEventListener("click", function () {
  profileBg.classList.add("profile-active");
});

profileClose.addEventListener("click", function () {
  profileBg.classList.remove("profile-active");
});

// function to delete a user
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

// function to show user profile
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
    if (mystorage.getItem("username") == null) {
      document.querySelector(".first-name").innerHTML = "no user signed in";
    } else {
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
    }
  });

// function to send confirmation email
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
