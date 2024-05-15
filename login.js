const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
      iconEye = document.getElementById(loginEye);
  
    iconEye.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
  
        iconEye.classList.add("ri-eye-line");
        iconEye.classList.remove("ri-eye-off-line");
      } else {
        input.type = "password";
  
        iconEye.classList.remove("ri-eye-line");
        iconEye.classList.add("ri-eye-off-line");
      }
      document.addEventListener("DOMContentLoaded", function () {
        const passwordInput = document.getElementById("login-pass");
        const errorMessage = document.getElementById("error-message");
      
        passwordInput.addEventListener("input", function () {
          const password = passwordInput.value;
          if (password.length < 8) {
            errorMessage.textContent = "Password must be at least 8 characters";
          } else {
            errorMessage.textContent = "";
          }
        });
      });
      
    });
    document.addEventListener("DOMContentLoaded", function () {
      const fileInput = document.getElementById("fileInput");
      const fileLabel = document.querySelector(".file-label");
    
      fileLabel.addEventListener("click", function () {
        fileInput.click();
      });
    
      fileInput.addEventListener("change", function () {
        const selectedFile = fileInput.files[0];
        console.log("Selected File:", selectedFile.name);
      });
    });
    
  };
  
  
  showHiddenPass("login-pass","login-eye");