let infoBtn = document.getElementById("infoBtn");
let infoMes = document.getElementById("infoMes");
let CloseInfo = document.getElementById("infoMesClose");

infoBtn.addEventListener("click", () => {
  infoMes.style.position = "fixed";
  infoMes.style.display = "flex";
  document.body.style.overflow = `hidden`;
  infoMes.style.opacity = "1";
});
CloseInfo.addEventListener("click", () => {
  infoMes.style.position = "relative";
  infoMes.style.display = "none";

  document.body.style.overflow = `scroll`;
  infoMes.style.opacity = "0";
});
