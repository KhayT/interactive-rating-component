const btnRate = document.querySelectorAll(".btn");
const btnSelected = document.querySelector(".btn--special");
const btnSubmit = document.querySelector(".btn-submit");
const cardThanks = document.querySelector(".thank--you_card");
const mainContent = document.querySelector(".main-content");
const scoreBoard = document.querySelector(".score--board");
const btnActive = document.querySelector(".active");

btnRate.forEach(function (el) {
  el.addEventListener("click", function () {
    scoreBoard.textContent = `You selected ${el.innerHTML} out of 5`;
  });
});

const openThanks = () => {
  mainContent.classList.add("hidden");
  cardThanks.classList.remove("hidden");
};

const closeThanks = () => {
  mainContent.classList.remove("hidden");
  cardThanks.classList.add("hidden");
};

const submit = (el) => {
  if (el.key === "Enter" && !mainContent.classList.contains("hidden")) {
    openThanks();
  }
};

const finish = (e) => {
  if (e.key === "Escape" && !cardThanks.classList.contains("hidden")) {
    closeThanks();
    document.location.reload();
  }
};

btnSubmit.addEventListener("click", openThanks);
document.addEventListener("keydown", submit);
document.addEventListener("keydown", finish);

import "core-js/stable";
