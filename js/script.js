document.getElementById("calcBtn").addEventListener("click", function () {
  let old = Number(document.getElementById("old").value);

  let n1 = Number(document.getElementById("nu1").value);

  let n2 = Number(document.getElementById("nu2").value);

  let n3 = Number(document.getElementById("nu3").value);

  let n4 = Number(document.getElementById("nu4").value);

  let result = old + n1 * 0.175 + n2 * 0.175 + n3 * 0.175 + n4 * 0.175;

  document.getElementById("oldResult").innerHTML = old;

  document.getElementById("r1").innerHTML = n1 + " × 17.5%";

  document.getElementById("r2").innerHTML = n2 + " × 17.5%";

  document.getElementById("r3").innerHTML = n3 + " × 17.5%";

  document.getElementById("r4").innerHTML = n4 + " × 17.5%";

  document.getElementById("finalResult").innerHTML = result.toFixed(2);

  document.getElementById("overlay").style.display = "block";

  document.getElementById("resultBox").style.display = "block";
});
document.getElementById("calcBtn1").addEventListener("click", function () {
  let old = Number(document.getElementById("old").value);

  let n11 = Number(document.getElementById("n11").value);

  let n12 = Number(document.getElementById("n12").value);

  let n13 = Number(document.getElementById("n13").value);

  let n14 = Number(document.getElementById("n14").value);
  let n21 = Number(document.getElementById("n21").value);

  let n22 = Number(document.getElementById("n22").value);

  let n23 = Number(document.getElementById("n23").value);

  let n24 = Number(document.getElementById("n24").value);

  let result =
    (n11 + n12 + n13 + n14) * 0.3 +
    (n21 * 0.175 + n22 * 0.175 + n23 * 0.175 + n24 * 0.175);

  document.getElementById("oldResult").innerHTML =
    (n11 + n12 + n13 + n14) * 0.3;

  document.getElementById("r1").innerHTML = n21 + " × 17.5%";

  document.getElementById("r2").innerHTML = n22 + " × 17.5%";

  document.getElementById("r3").innerHTML = n23 + " × 17.5%";

  document.getElementById("r4").innerHTML = n24 + " × 17.5%";

  document.getElementById("finalResult").innerHTML = result.toFixed(2);

  document.getElementById("overlay").style.display = "block";

  document.getElementById("resultBox").style.display = "block";
});
function closeResult() {
  document.getElementById("overlay").style.display = "none";

  document.getElementById("resultBox").style.display = "none";
}
document.getElementById("with_old").addEventListener("click", function () {
  document.getElementById("form-container").style.display = "flex";
  document.getElementById("form-with").style.display = "none";
  document.getElementById("calcBtn1").style.display = "none";
  document.getElementById("calcBtn").style.display = "block";
});
document.getElementById("without_old").addEventListener("click", function () {
  document.getElementById("form-container").style.display = "none";
  document.getElementById("form-with").style.display = "flex";
  document.getElementById("calcBtn").style.display = "none";
  document.getElementById("calcBtn1").style.display = "block";
});
