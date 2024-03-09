//get values from user/frontend side
//Add functionality
//Add Logic

function getValues() {
  let btn = document.getElementById("btn");
  let initial = parseInt(document.getElementById("initial").value),
    final = parseInt(document.getElementById("final").value),
    score = parseInt(document.getElementById("score").value),
    res = "",
    resEl = document.getElementById("result");
  const need = final - initial;
  if (need <= 0) {
    res = "Hey! Check yours";
  } else {
    let i = 0;
    while (initial < final) {
      score += 1;
      initial += score;
      i += 1;
    }
    res =
      "You need " + need + "<br>That will be completed within " + i + " Days";
  }
  resEl.innerHTML = res;
}
