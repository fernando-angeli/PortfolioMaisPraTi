/* Scrolling Effect */
// Ouvir evento de rolagem à janela
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav"); // Selecionar o elemento "nav"

  if (window.scrollY > 0) {
    // Verificar se a posição de rolagem é maior que 0
    nav.classList.add("scrollNavbarOn"); // Adicionar a classe "scrollNavbarOn"
  } else {
    nav.classList.remove("scrollNavbarOn"); // Remover a classe "scrollNavbarOn"
  }
});

/* Code for changing active link on clicking */
var btns = $("#navigation .navbar-nav .nav-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    document.getElementsByClassName("navbar-toggler").className += " collapsed";
  });
}

/* Collapse menu apos click*/
// Selecionar todos os elementos com a classe "nav-link"
var navLinks = document.querySelectorAll(".nav-link");
// Ouvir evento de clique a cada elemento
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Selecionar o elemento com a classe "navbar-collapse" e aplicar o método "collapse"
    var navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show"); // Remover a classe "show" para esconder a barra de navegação
  });
});
