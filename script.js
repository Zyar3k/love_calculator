function calculateLoveScore() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names");
  } else {
    const lovePoints = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");

    result.innerHTML = `${name1} and ${name2}'s Love Score: ${lovePoints}`;

    if (lovePoints < 30) {
      result.innerHTML += "<br /> Not a Great Match. Keep looking";
    } else if (lovePoints >= 30 && lovePoints < 70) {
      result.innerHTML += "<br /> There is a potential. Give it a try";
    } else {
      result.innerHTML += "<br /> Great Match! Love is in the Air";
    }
  }
}
