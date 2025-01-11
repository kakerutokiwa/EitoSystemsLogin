// 変数定義
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const encryptionDisplayCheckbox = document.querySelector('#encryptionDisplayCheckbox');
const remeCheckbox = document.querySelector('#remeCheckbox');
const loginButton = document.querySelector('#loginButton');
const messageBox = document.querySelector('#messageBox');

// ユーザー名とパスワードの検証
const correctUsername = 'Eito.K';
const correctPassword = 'eitokikuchi8E';

// チェックボックスの状態を監視
encryptionDisplayCheckbox.addEventListener('change', function() {
  if (encryptionDisplayCheckbox.checked) {
    passwordField.type = 'text';  // パスワードを表示
  } else {
    passwordField.type = 'password';  // パスワードを隠す
  }
});

// ログインボタンのクリックイベント
loginButton.addEventListener('click', function() {
  const username = usernameField.value;
  const password = passwordField.value;
  const isReMeChecked = remeCheckbox.checked;

  // ユーザー名とパスワードが正しく、ReMeチェックボックスがチェックされているかを確認
  if (username === correctUsername && password === correctPassword && isReMeChecked) {
    // 成功
    loginButton.textContent = 'Success';
    loginButton.classList.add('success');
    setTimeout(() => {
      window.location.href = 'https://www.example.com'; // 新しいサイトに遷移
    }, 2000);
  } else {
    // 失敗
    loginButton.textContent = 'Failure';
    loginButton.classList.add('failure');
    messageBox.textContent = 'Login Failed! Please check your credentials or try again.';
    messageBox.classList.add('show'); // メッセージを表示
    setTimeout(() => {
      loginButton.textContent = 'Login';
      loginButton.classList.remove('failure');
      messageBox.classList.remove('show'); // メッセージを非表示
    }, 5000);
  }
});
