function askAI() {
  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer");

  if (!question.trim()) {
    answer.innerText = "Don Allah rubuta tambaya.";
    return;
  }

  answer.innerText = "Ina tunani...";

  setTimeout(() => {
    answer.innerText =
      "Na karɓi tambayarka: " + question;
  }, 1000);
}
