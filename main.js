var typed = new Typed(".text", {
  strings: ["Frontend Developer", "YouTuber", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// Animation de la barre de progression
let lastScrollTop = 0;
const header = document.getElementById("monHeader");
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // vers le bas : cacher le header
    header.style.top = "-100px"; // on le fait remonter hors de l'écran
  } else {
    // vers le haut : afficher le header
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
const elements = document.querySelectorAll(".reveal");
elements.forEach((el) => observer.observe(el));

// Animation de la section "About"
const images = document.querySelectorAll(".about-img img");
const container = document.querySelector(".about-img");
let index = 0;

const shadowClasses = [
  "shadow-violet",
  "shadow-yellow",
  "shadow-orange",
  "shadow-violet",
]; // 1 classe par image

function showSlide(i) {
  images.forEach((img, idx) => {
    img.classList.remove("active");
    if (idx === i) img.classList.add("active");
  });

  // Mettre à jour l'ombre
  container.classList.remove("shadow-violet", "shadow-yellow", "shadow-orange");
  container.classList.add(shadowClasses[i]);
}

function nextSlide() {
  index = (index + 1) % images.length;
  showSlide(index);
}

// Initialisation
showSlide(index);
setInterval(nextSlide, 3000);


