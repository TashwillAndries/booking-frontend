mystorage = window.localStorage

function login(){
    fetch('https://serene-basin-92650.herokuapp.com/user-login/', {
    method: "POST",
    body: JSON.stringify({
        'username': document.getElementById("username").value,
        'password': document.getElementById("password").value,
    }),
    headers: {
        'Content-type': 'application/json',
    }
    }).then(response => response.json()).then(data => {
        console.log(data)
        if (data['status_code'] == 401 ){
        alert("Error not valid login in!")
        }
    else{
        mystorage.setItem('username', document.getElementById("username").value)
        window.location.href = 'rooms.html'
        console.log('welcome user')
    }    
    });
    
}

function admin(){
    fetch('https://serene-basin-92650.herokuapp.com/admin-login/', {
        method: "POST",
        body: JSON.stringify({
            'admin_username': document.getElementById("admin_username").value,
            'admin_password': document.getElementById('admin_password').value,
        }),
        headers:{
            'Content-type': 'application/json',
        }
    }) .then(response => response.json()).then(data => {
        if (data['status_code'] == 401 ){
            alert("Error not valid login in!")
            }
        else{
            mystorage.setItem('username', document.getElementById("username").value)
            window.location.href = 'admin.html'
            console.log('welcome user')
        }    
    })
}