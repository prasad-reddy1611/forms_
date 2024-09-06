const Username=document.getElementById("username") 
Username.addEventListener("input", function () {
  const usernameError = document.getElementById("usernameError");
  if (this.value.length < 3 || this.value.length > 25) {
    usernameError.textContent = "username must be between 3 and 25 characters";
  } else {
    usernameError.textContent = "";
  }
});
