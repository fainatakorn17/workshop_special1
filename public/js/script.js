function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Application-Key' : 'TU8707e41c55cefd2a00b7d120ca912edb9952810872f990a5bd0ceac7480aab6c83b532d66c546bb3e86c3c0bd7187f1e',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "UserName":username,"PassWord" : password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}