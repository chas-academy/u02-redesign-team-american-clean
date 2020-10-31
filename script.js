window.addEventListener("scroll", (ev) => {
  if (ev.path[1].scrollY > 600) {
    document.querySelector("video").classList.add("hidden");
  }
});

window.addEventListener("scroll", (ev) => {
  if (ev.path[1].scrollY < 600) {
    document.querySelector("video").classList.remove("hidden");
  }
});
