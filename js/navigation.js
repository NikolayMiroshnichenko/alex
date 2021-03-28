const refs = {
  openMenuBtn: document.querySelector(".js-open-menu"),
  menuWrapper: document.querySelector(".js-navigation-wrapper"),
};

refs.openMenuBtn.addEventListener("click", () => {
  refs.menuWrapper.classList.add("active");
});
refs.menuWrapper.addEventListener("click", (e) => {
  if (e.target.dataset.close !== "close") return;

  refs.menuWrapper.classList.remove("active");
});
