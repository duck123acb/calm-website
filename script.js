let pythonBtn = document.querySelector("#python");
let proposalBtn = document.querySelector("#proposal");
let calmBtn = document.querySelector("#calm");

function openLink(url) {
  window.open(url, "_blank").focus();
}

pythonBtn.addEventListener("click", () => {
  openLink("python.html")
});
proposalBtn.addEventListener("click", () => {
  openLink("proposal.html")
});
calmBtn.addEventListener("click", () => {
  openLink("calm.html")
});