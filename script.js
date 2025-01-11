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
  // チェックボックスとPassword欄の関連付け
const encryptionDisplayCheckbox = document.querySelector('#encryptionDisplayCheckbox');  // チェックボックス
const passwordField = document.querySelector('#password');  // パスワード入力欄

// チェックボックスの状態を監視
encryptionDisplayCheckbox.addEventListener('change', function() {
  if (encryptionDisplayCheckbox.checked) {
    // チェックボックスにチェックが入った場合、パスワードを表示
    passwordField.type = 'text';  // パスワードの内容を表示
  } else {
    // チェックが外れた場合、パスワードを隠す
    passwordField.type = 'password';  // パスワードを隠す
  }
});
});
