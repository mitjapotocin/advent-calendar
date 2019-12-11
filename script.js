const dates = document.getElementsByClassName("date");

for (let i = 0; i < dates.length; i++) {
  dates[i].addEventListener("click", () => {
    if (
      Date.now() > Date.parse(`December ${dates[i].innerHTML}, 2019`) &&
      dates[i].innerHTML != "wait"
    ) {
      dates[i].classList.add("date-open");
    } else {
      dates[i].innerHTML = `wait`;
    }
  });
}
