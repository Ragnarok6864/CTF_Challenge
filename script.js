// Sample user credentials (for demo purposes)
const validUsername = "THISISYOU";
const validPassword = "ThisIsAPassword";

// Function to validate login
function validateLogin() {
    // Get the input values
    const username = document.getElementById("username").value;
    //const password = document.getElementById("password").value;
    
    // Check if the username and password are correct
    if (username === validUsername) {
        // You can redirect to another page or show content here
        document.getElementsByClassName("login-Container");
        window.location.href = "guarded.html"; // Example
        
    } else {
        // Show error message
        document.getElementById("error-message").style.display = "block";
    }
}
