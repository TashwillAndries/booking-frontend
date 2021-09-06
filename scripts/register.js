let form = document.getElementById("user-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  fetch("https://serene-basin-92650.herokuapp.com/user-registration/", {
    method: "POST",
    body: JSON.stringify({
      user_id: document.getElementById("user_id").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      address: document.getElementById("address").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["message"] == "Please enter a valid email address") {
        alert("Please enter a valid email address!");
      } else {
        alert("registered");
      }
    });
});
