document.getElementById('loginBtn').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var encryption = document.getElementById('encryption').checked;
  var reme = document.getElementById('reme').checked;
  
  var loginButton = document.getElementById('loginBtn');
  
  if (username === "Eito.K" && password === "eitokikuchi8E" && reme) {
    loginButton.classList.add('success');
    loginButton.classList.remove('failure');
    loginButton.textContent = "Success";
    setTimeout(function() {
      window.location.href = "https://www.google.com";
    }, 2000);
  } else {
    loginButton.classList.add('failure');
    loginButton.classList.remove('success');
    loginButton.textContent = "Failure";
    setTimeout(function() {
      loginButton.classList.add('done');
    }, 5000);
  }
});
