let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};
// --------------
var answers = ["B", "C", "B"],
  tot = answers.length;
function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName);
  for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value;
}
function getScore() {
  var score = 0;
  for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1;
  return score;
}
function returnScore() {
  document.getElementById("myresults").innerHTML =
    "Your score is " + getScore() + "/" + tot;
  if (getScore() > 2) {
    console.log("Bravo");
  }
}