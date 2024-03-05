


// Function to validate registration form
function validateRegistration() {
   
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    
    var errorMessageElement = document.getElementById('ErrorMessage');

    // Reseting error message
    errorMessageElement.style.display = 'none';
    errorMessageElement.textContent = '';

    // Validation of the fields
    if (firstName.length < 2 || lastName.length < 2) {
        errorMessageElement.textContent = 'First Name and Last Name must be at least 2 characters long.';
        errorMessageElement.style.display = 'block';
        return;
    }

    
    if (email.length < 8 || !email.includes('@')) {
        errorMessageElement.textContent = 'Invalid email address.';
        errorMessageElement.style.display = 'block';
        return;
    }

    
    if (password.length < 6 || password !== confirmPassword) {
        errorMessageElement.textContent = 'Password should be at least 6 characters long and match.';
        errorMessageElement.style.display = 'block';
        return;
    }

    
    var newUser = new User(firstName, lastName, email, password);

    
    console.log('New User Registered:', newUser);

    // Reseting the form
    document.getElementById('registerForm').reset();
}


