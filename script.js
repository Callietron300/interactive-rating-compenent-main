let rating = 0;
let selected = false;

const resultCard = document.getElementById("result-card");
const openingCard = document.getElementById("opening-card");

//inset
resultCard.classList.add("hidden");
resultCard.classList.remove("result");

//Select the number & log it
for (let i = 1; i < 6; i++) {
  const selRating = document.getElementById(`rating--${i}`);

  selRating.addEventListener("click", function () {
    if (!selected) {
      rating = i;
      selRating.classList.add("active-btn");
      selected = true;
    }
  });
}

document.getElementsByClassName("result-text").textContent = "you chose this";

//show submit
document.getElementById("submit").addEventListener("click", function () {
  openingCard.classList.add("hidden");
  openingCard.classList.remove("opening");
  resultCard.classList.remove("hidden");
  resultCard.classList.add("result");

  document.querySelector(
    ".result-text"
  ).textContent = `You selected ${rating} out of 5`;
});
