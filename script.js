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
updateProgress(8, 2);
updateProgress(8, 3);
updateProgress(6, 4);

