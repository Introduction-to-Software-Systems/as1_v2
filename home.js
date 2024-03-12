document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle');
  const body = document.body;

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    toggle.classList.add('active'); 
  }

  toggle.addEventListener('click', function () {
    this.classList.toggle('active');
    body.classList.toggle('dark-theme');


    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });


  setActiveNavLink();


  if (document.querySelector(".auto-type")) {
    new Typed(".auto-type", {
      strings: ["Explore", "Innovate", "Create"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });
  }
});


function setActiveNavLink() {
  const navLinks = document.querySelectorAll('.nav_link');
  const currentUrl = window.location.href;

  navLinks.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}


function loadIonIcons() {
  const scriptModule = document.createElement('script');
  scriptModule.type = 'module';
  scriptModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
  document.head.appendChild(scriptModule);

  const scriptNoModule = document.createElement('script');
  scriptNoModule.noModule = true;
  scriptNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
  document.head.appendChild(scriptNoModule);
}

loadIonIcons();
