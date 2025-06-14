const users = JSON.parse(localStorage.getItem('birthdaySiteUsers')) || {};

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
   if ((users[username] && users[username] === password) || (username === "KokohBby" && password === "2008")) {
    sessionStorage.setItem('birthdaySiteAuthenticated', 'true');
    sessionStorage.setItem('birthdaySiteUser', username);
    window.location.href = "../index.html";
} else {
    alert("Incorrect username or secret code!");
}

    }
);

function checkAuth() {
    if (!sessionStorage.getItem('birthdaySiteAuthenticated')) {
        window.location.href = "auth/login.html";
    }
}

function logout() {
    sessionStorage.removeItem('birthdaySiteAuthenticated');
    window.location.href = "auth/login.html";
}