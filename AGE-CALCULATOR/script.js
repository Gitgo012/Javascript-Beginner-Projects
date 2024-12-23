function getDate() {
  let date = document.querySelector(".date").value;
  const calculator = document.querySelector(".calculator");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const selectedDate = date.split("-");
  let selectedYear = selectedDate[0];
  let selectedMonth = selectedDate[1];
  let selectedDay = selectedDate[2];
  let ageYear = currentYear - selectedYear;
  let ageMonth = currentMonth - selectedMonth;
  let ageDate = currentDay - selectedDay;

  if (date === "") {
    const alertMessage = document.createElement("h5");
    alertMessage.innerHTML = "Please select a date to calculate age";
    alertMessage.classList.add("ageText");
    calculator.appendChild(alertMessage);
    const existingText = document.querySelector(".ageText");
    if (existingText) {
      calculator.removeChild(existingText);
    }
    calculator.appendChild(alertMessage);
  } else {
    if (ageDate < 0) {
      ageMonth--;
      ageDate += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }
    let selectedYear = parseInt(selectedDate[0], 10);
    let selectedMonth = parseInt(selectedDate[1], 10);
    let selectedDay = parseInt(selectedDate[2], 10);
    if (
      selectedYear > currentYear ||
      (selectedYear === currentYear && selectedMonth > currentMonth) ||
      (selectedYear === currentYear &&
        selectedMonth === currentMonth &&
        selectedDay > currentDay)
    ) {
      const alertMessage = document.createElement("h5");
      alertMessage.innerHTML = "Date selected is invalid";
      alertMessage.classList.add("ageText");
      calculator.appendChild(alertMessage);
      const alertText = document.querySelector(".ageText");
      if (alertText) {
        calculator.removeChild(alertText);
      }
      calculator.appendChild(alertMessage);
      return;
    }

    const text = document.createElement("h5");
    text.classList.add("ageText");

    const yearSpan = document.createElement("span");
    yearSpan.classList.add("age", "year");
    yearSpan.textContent = ageYear;

    const monthSpan = document.createElement("span");
    monthSpan.classList.add("age", "month");
    monthSpan.textContent = ageMonth;

    const daySpan = document.createElement("span");
    daySpan.classList.add("age", "day");
    daySpan.textContent = ageDate;

    text.innerHTML = "You are ";
    text.appendChild(yearSpan);
    text.innerHTML += " years, ";
    text.appendChild(monthSpan);
    text.innerHTML += " months and ";
    text.appendChild(daySpan);
    text.innerHTML += " days old";
    calculator.appendChild(text);
    const existingText = document.querySelector(".ageText");
    if (existingText) {
      calculator.removeChild(existingText);
    }
    calculator.appendChild(text);
  }
}
