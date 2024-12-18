function validateForm() {
    const firstName = sanitizeInput(document.getElementById("firstName").value);
    const lastName = sanitizeInput(document.getElementById("lastName").value);
    const email = sanitizeInput(document.getElementById("email").value);
    const password = sanitizeInput(document.getElementById("password").value);
    const confirmPassword = sanitizeInput(document.getElementById("confirmPassword").value);
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("All fields must be filled out.");
        return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    document.getElementById("formContainer").innerHTML = `
        <div style="text-align: center; padding: 20px; background-color: #4CAF50; color: white; border-radius: 10px;">
            <h2>Form Submitted Successfully!</h2>
            <p>Thank you for registering, ${firstName}!</p>
        </div>
    `;
    return false; 
}
function sanitizeInput(input) {
    const tempDiv = document.createElement("div");
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
}
