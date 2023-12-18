let idregExp = /^[a-zA-Z]([0-9A-Za-z]{3,11})$/;
id.addEventListener("input", function () {
  if (idregExp.test(id.value)) {
    id1.innerHTML = "okay";
    id1.style.color = "green";
  } else {
    id1.style.color = "red";
    id1.innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});

let pwdregExp = /^\S{8,15}$/;
pwd.addEventListener("input", function () {
  if (pwdregExp.test(pwd.value)) {
    pwd1.innerHTML = "okay";
    pwd1.style.color = "green";
  } else {
    pwd1.style.color = "red";
    pwd1.innerHTML = "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오";
  }
});

pwdck.addEventListener("input", function () {
  if (pwd.value == pwdck.value) {
    pwdck1.innerHTML = "okay";
    pwdck1.style.color = "green";
  } else {
    pwdck1.style.color = "red";
    pwdck1.innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  }
});
let nameregExp = /^[가-힣]{2,}$/;
username.addEventListener("input", function () {
  if (nameregExp.test(username.value)) {
    username1.innerHTML = "okay";
    username1.style.color = "green";
  } else {
    username1.style.color = "red";
    username1.innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});
let emailregExp = /^\w{1,}@\w{1,}$/;
email.addEventListener("input", function () {
  if (emailregExp.test(email.value)) {
    email1.innerHTML = "okay";
    email1.style.color = "green";
  } else {
    email1.style.color = "red";
    email1.innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  }
});
