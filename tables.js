// // Hashed Password

const validUsername = "506c76766c76766c73736c5d68657564566c7d68";
const flag = "4c57463433347e34627a437177627733627343383862776b343862666f43383880";

// Function to validate login
function validateLogin() {
    // Get the input values
    const username = document.getElementById("username").value;
    // Check if the username and password are correct
    if (encrypt(username, 3) === validUsername) {
        window.alert(decrypt(flag));
    } else {
        // Show error message
        document.getElementById("error-message").style.display = "block";
    }
}
  function encrypt(text, shift = 3) {
    return Array.from(text).map(char => {
      const charCode = char.charCodeAt(0);        
      const shifted = charCode + shift;            
      const hex = shifted.toString(16).padStart(2, '0'); 
      return hex;
    }).join('');
  }

  
  function decrypt(hexStr, shift = 3) {
    const chars = [];
    for (let i = 0; i < hexStr.length; i += 2) {
      const hexChunk = hexStr.slice(i, i + 2);       
      const shifted = parseInt(hexChunk, 16) - shift; 
      chars.push(String.fromCharCode(shifted));      
    }
    return chars.join('');
  }
  