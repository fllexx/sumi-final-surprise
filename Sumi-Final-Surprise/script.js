const pages = [
  document.getElementById("awardPage"),
  document.getElementById("letterPage"),
  document.getElementById("memoriesPage")
];
const progress = [...document.querySelectorAll(".progress-step")];

function showPage(index) {
  pages.forEach((page, i) => page.classList.toggle("active", i === index));
  progress.forEach((step, i) => step.classList.toggle("active", i <= index));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (index === 1) popHeart();
}

function popHeart() {
  const heart = document.getElementById("toastHeart");
  heart.classList.remove("pop");
  void heart.offsetWidth;
  heart.classList.add("pop");
}

document.getElementById("claimAward").addEventListener("click", () => {
  popHeart();
  setTimeout(() => showPage(1), 350);
});
document.getElementById("toMemories").addEventListener("click", () => showPage(2));
document.getElementById("backToStart").addEventListener("click", () => showPage(0));
