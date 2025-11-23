/* JS shared functions */
/* script.js */
function toggleMenu() {
  var m = document.getElementById("mobileMenu");
  if (m.classList.contains("hidden")) {
    m.classList.remove("hidden");
  } else {
    m.classList.add("hidden");
  }
}
document.getElementById("navToggler").onclick = toggleMenu;

function handleForm(e) {
  e.preventDefault();
  var name = e.target.name.value;
  alert("Thanks " + name + " — message received.");
  e.target.reset();
}

function updateYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}
updateYear();
/* End of script.js */
