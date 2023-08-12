//variables
  const subMenu = document.getElementById('subMenu');
  const resBtn = document.getElementById('resBtn');
  const menuToggle = document.getElementById('navLinks');
  
  
//drop down menu toggle
  function toggleMenu() {
    subMenu.classList.toggle('open-menu');
  }

//responsive navbar
  resBtn.addEventListener('click', function() {
    this.classList.toggle('fa-window-close');
    
    menuToggle.classList.toggle('open-btn');
    resBtn.style.transition = ".2s";
  });
  
  window.addEventListener('click', function(e) {
    if(e.target === subMenu) {
      subMenu.style.display = "none";
    }
  });
