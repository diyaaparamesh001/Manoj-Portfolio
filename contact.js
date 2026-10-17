// The site has no server, so "Send message" opens the visitor's email app
// with the form filled in, addressed to Manoj.
const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = data.get("subject") || `Message from ${data.get("name")}`;
  const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
  window.location.href =
    "mailto:ashodiam@gmail.com" +
    `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent =
    "Your email app should open with the message ready to send. If it doesn't, write to ashodiam@gmail.com.";
});
