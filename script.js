const progressBar1 = document.querySelectorAll('.progress')[0];
const percentageText1 = document.querySelectorAll('.percentage')[0];

const progressBar2 = document.querySelectorAll('.progress')[1];
const percentageText2 = document.querySelectorAll('.percentage')[1];

const progressBar3 = document.querySelectorAll('.progress')[2];
const percentageText3 = document.querySelectorAll('.percentage')[2];

const progressBar4 = document.querySelectorAll('.progress')[3];
const percentageText4 = document.querySelectorAll('.percentage')[3];

function updateProgress(percent, index) {
  switch (index) {
    case 1:
      progressBar1.style.width = `${percent}%`;
      percentageText1.textContent = `${percent}%`;
      break;
    case 2:
      progressBar2.style.width = `${percent}%`;
      percentageText2.textContent = `${percent}%`;
      break;
    case 3:
      progressBar3.style.width = `${percent}%`;
      percentageText3.textContent = `${percent}%`;
      break;
    case 4:
      progressBar4.style.width = `${percent}%`;
      percentageText4.textContent = `${percent}%`;
      break;
  }
}

updateProgress(100, 1);
updateProgress(15, 2);
updateProgress(8, 3);
updateProgress(6, 4);

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const nav = document.querySelectorAll('.slider-nav a');
let index = 0;
let waktu = 3000; // 3 detik
let direction = 1; // 1: kanan, -1: kiri

// Fungsi untuk menggeser slide
function geserSlide() {
  index += direction;
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  slider.scrollTo({
    left: index * slider.offsetWidth,
    behavior: 'smooth'
  });
  updateNav();
}

// Fungsi untuk memperbarui navigasi
function updateNav() {
  nav.forEach((item, i) => {
    item.classList.remove('active');
    if (i === index) {
      item.classList.add('active');
    }
  });
}

// Mengatur interval
setInterval(geserSlide, waktu);

// Mengatur navigasi manual
nav.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    direction = (i > index) ? 1 : -1;
    index = i;
    slider.scrollTo({
      left: index * slider.offsetWidth,
      behavior: 'smooth'
    });
    updateNav();
  });
});

// Mengatur arrow navigasi
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    direction = 1;
    geserSlide();
  } else if (e.key === 'ArrowLeft') {
    direction = -1;
    geserSlide();
  }
});

// Menambahkan tombol navigasi
const prev = document.createElement('button');
prev.textContent = '<';
prev.classList.add('prev');
const next = document.createElement('button');
next.textContent = '>';
next.classList.add('next');
slider.parentNode.appendChild(prev);
slider.parentNode.appendChild(next);

prev.addEventListener('click', () => {
  direction = -1;
  geserSlide();
});

next.addEventListener('click', () => {
  direction = 1;
  geserSlide();
});

slider.addEventListener('scroll', () => {
  const scrollPos = slider.scrollLeft;
  const slideWidth = slider.offsetWidth;
  index = Math.round(scrollPos / slideWidth);
  updateNav();
});


