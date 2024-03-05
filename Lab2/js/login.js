// Function to perform login
function performLogin() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validation of the field
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Inserting username to the nav bar
    insertUsernameInNavbar(username);

    
}

// Function to insert username in the navbar
function insertUsernameInNavbar(username) {
    
    var usernameListItem = document.createElement('li');
    usernameListItem.textContent = username;

    
    var navbarList = document.getElementById('navbarList');
    navbarList.insertBefore(usernameListItem, navbarList.children[2]); 

    
}

