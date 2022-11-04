var usename = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.add('error');
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector('small');
  parent.classList.remove('error');
  small.innerText = '';
}
function checkEmptyError(listInput) {
  let isEmptyErr = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyErr = true;
      showError(input, 'Khong duoc de trong');
    } else {
      showSuccess(input);
    }
  });
  return isEmptyErr;
}
function checkEmailErr(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isEmailErr = (input.value = input.value.trim());
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Email Invalid');
  }
  return isEmailErr;
}
function checkLengthErr(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Phai co it nhat ${min} ky tu`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Khong duoc qua  ${max} ky tu`);
    return true;
  }
  showSuccess(input);
  return false;
}
function checkMatchPassword(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, 'Mat khau khong trung khop');
    return true;
  }
  return false;
}
form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isEmptyErr = checkEmptyError([usename, email, password, confirmPassword]);
  let isEmailErr = checkEmailErr(email);
  let lengthUsernameErr = checkLengthErr(usename, 6, 20);
  let lengthPasswordErr = checkLengthErr(password, 6, 20);
  let isMatchErr = checkMatchPassword(password, confirmPassword);
  if (
    isEmptyErr ||
    isEmailErr ||
    lengthUsernameErr ||
    isMatchErr ||
    lengthPasswordErr
  ) {
  } else {
  }
});
