var plus = document.getElementById("sec-fourth-action");

plus.addEventListener("click", showTables);

function showTables() {
  if (plus.innerHTML === "+") {
    plus.innerHTML = "-";
    document.querySelector(".sec-fourth__tables").style.height = "max-content";
  } else {
    document.querySelector(".sec-fourth__tables").style.height = "0px";
    plus.innerHTML = "+";
  }
}
