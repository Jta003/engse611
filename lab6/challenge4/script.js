const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 
      alert(this.textContent); 
    });
  });