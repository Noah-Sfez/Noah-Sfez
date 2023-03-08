const cards = document.querySelectorAll(".card");
const progress = document.getElementById("progress");
const currentAmount = document.getElementById("current-amount");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeButton = document.querySelector(".close");
const donateButton = document.querySelector("#modal button[type='submit']");
const amountInput = document.getElementById("amount");

const goalAmount = 1000;
let currentTotal = 0;

cards.forEach((card) => {
  const button = card.querySelector(".btn");
  const amount = button.getAttribute("data-amount");

  button.addEventListener("click", () => {
    modal.style.display = "block";
    amountInput.value = amount;
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

donateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const donationAmount = parseInt(amountInput.value);
  currentTotal += donationAmount;

  if (currentTotal >= goalAmount) {
    currentTotal = goalAmount;
    cards.forEach((card) => {
      const button = card.querySelector(".btn");
      button.disabled = true;
    });
  }

  const percentage = (currentTotal / goalAmount) * 100;
  progress.style.width = `${percentage}%`;
  currentAmount.textContent = `$${currentTotal}`;

  modal.style.display = "none";
  amountInput.value = "";
});



const button = document.querySelector('.btn-don');
const aboutSection = document.querySelector('#pag-don');

button.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});



const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideWidth = 250;
let counter = 5;

function moveSlides() {
  slides.style.transform = `translateX(${-counter * slideWidth}px)`;
}

let slideInterval = setInterval(() => {
  counter++;
  if (counter === 11) {
    counter = 0;
  }
  moveSlides();
}, 3000);

prevBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  counter--;
  if (counter < 0) {
    counter = 10;
  }
  moveSlides();
  slideInterval = setInterval(() => {
    counter++;
    if (counter === 11) {
      counter = 0;
    }
    moveSlides();
  }, 3000);
});

nextBtn.addEventListener("click", () => {
  clearInterval(slideInterval);
  counter++;
  if (counter === 11) {
    counter = 0;
  }
  moveSlides();
  slideInterval = setInterval(() => {
    counter++;
    if (counter === 11) {
      counter = 0;
    }
    moveSlides();
  }, 3000);
});
