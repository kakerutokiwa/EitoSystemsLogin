document.getElementById("loginBtn").addEventListener("click", function() {
  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remeChecked = document.getElementById("reme").checked;
  const encryptionToggle = document.getElementById('encryptionToggle');

  // Toggle Password Visibility
encryptionToggle.addEventListener('change', () => {
  if (encryptionToggle.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

  // Correct credentials
  const correctUsername = "Eito.K";
  const correctPassword = "eitokikuchi8E";

  const loginBtn = document.getElementById("loginBtn");

  // Check if credentials are correct and ReMe checkbox is checked
  if (username === correctUsername && password === correctPassword && remeChecked) {
    // Change button to 'Success'
    loginBtn.classList.remove("failure");
    loginBtn.classList.add("success");
    loginBtn.textContent = "Success";

    // Redirect after 2 seconds
    setTimeout(function() {
      window.location.href = "https://www.google.com";
    }, 2000);
  } else {
    // Change button to 'Failure' and start flashing animation
    loginBtn.classList.remove("success");
    loginBtn.classList.add("failure");
    loginBtn.textContent = "Failure";

    let count = 0;
    const flashInterval = setInterval(function() {
      loginBtn.classList.toggle("failure");
      count++;

      if (count >= 5) {
        clearInterval(flashInterval);
        loginBtn.classList.remove("failure");
        // Reset to original state
        loginBtn.style.backgroundColor = "none";
        loginBtn.style.color = "#00ffff";
      }
    }, 1000);
  }
});
