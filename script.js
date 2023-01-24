function validate() {
  var email = document.forms["form1"]["user_email"].value;
  var nama = document.forms["form1"]["user_name"].value;
  var password = document.forms["form1"]["user_password"].value;
  var password1 = document.forms["form1"]["user_password1"].value;
  var agree = document.forms["form1"]["check"].checked;
  if (email == "") {
    alert("Fill in your email");
    return false;
  } else if (!email.endsWith(".com")) {
    alert("Input valid email");
    return false;
  } else if (nama == "") {
    alert("Fill in your username");
    return false;
  } else if (nama.length < 10) {
    alert("Username must contain at least 10 characters");
    return false;
  } else if (password == "") {
    alert("Fill in your password");
    return false;
  } else if (password.length < 6) {
    alert("Password must contain at least 6 chacacters");
    return false;
  } else if (password1 == "") {
    alert("You must confirm your password");
    return false;
  } else if (password != password1) {
    alert("Please validate your password again");
    return false;
  } else if (agree == false) {
    alert("You must agree with the terms and conditions");
    return false;
  }
  alert(
    "Your registration is now complete. You will now be redirected to Home Page"
  );
  window.location.href = "index.html";
  return true;
}
