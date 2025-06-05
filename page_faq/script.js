const container = document.getElementsByClassName("content-container");

for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("click", function () {
    const question = container[i].querySelector(".question");
    question.classList.toggle("active");

    const answer = container[i].querySelector("p.answer");
    if (answer.style.height === "50px") {
      answer.style.height = "0px";
    } else {
      answer.style.height = "50px";
    }
  });
}
