// Swap the photo beside the list to match the genre under the pointer.
// Genres without their own photo leave the typewriter showing.
const photos = document.querySelectorAll(".works-photo img");

function show(name) {
  photos.forEach((img) => {
    img.classList.toggle("is-active", img.dataset.photo === name);
  });
}

document.querySelectorAll(".genres li").forEach((row) => {
  row.addEventListener("mouseenter", () => show(row.dataset.photo || "default"));
  row.addEventListener("mouseleave", () => show("default"));
});
