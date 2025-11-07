
window.addEventListener("scroll", function () {
  const cabecalho = document.querySelector(".cabecalho");
  if (window.scrollY > 20) {
    cabecalho.style = "border-radius: 0px 0px 12px 12px";
    cabecalho.style.position = "fixed";
    cabecalho.style.top = "0";
  } else {
    cabecalho.style = "border-radius: 12px 12px 12px 12px";
    cabecalho.style.position = "absolute";
    cabecalho.style.top = "20px";
  }
});

const menuMobile = document.querySelector(".menu-mobille")
menuMobile.addEventListener("click", () => {
  const menuOpcoes = document.querySelector(".menu-mobille-opcoes")
  if (menuOpcoes.style.display == "none") {
    menuOpcoes.style.display = "flex"
  } else {
    menuOpcoes.style.display = "none";
  }
})

const whatsapp = document.querySelectorAll(".whatsapp")
whatsapp.forEach(botao => {
  botao.addEventListener("click", () => {
    window.open("https://wa.me/5511932671602?text=Olá!%0AGostaria%20de%20solicitar%20uma%20cotação", "_blank")

  })
})

const reveals = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top; // posição do elemento na tela
    const trigger = 150; // quando falta 150px para aparecer

    if (top < windowHeight - trigger) {
      el.classList.add('active'); // adiciona classe que faz aparecer
    } else {
      el.classList.remove('active'); // opcional: desaparece ao rolar pra cima
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // dispara quando a página carrega



