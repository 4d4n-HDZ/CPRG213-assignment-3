/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

document.querySelectorAll(".day");
document.querySelector(".clear-button");
document.querySelector(".half");
document.querySelector(".full");

let dailyRate = 35;
let dayCounter = 0;
let totalCost = 0;
const daysOfWeek = document.querySelectorAll(".day");
const clearButton = document.querySelector(".clear-button");
const halfDayButton = document.querySelector(".half");
const fullDayButton = document.querySelector(".full");
const calculatedCost = document.querySelector(".calculated-cost");
const clickedClass = "clicked";
const dayCounterElement = document.querySelector(".day-counter");
const costElement = document.querySelector(".cost");
const dayCounterText = "Days selected: ";
const costText = "Total cost: $";
const clearText = "Clear all days";
const halfDayText = "Half day selected";
const fullDayText = "Full day selected";
const clearButtonText = "Clear all days";
const halfDayButtonText = "Half day selected";
const fullDayButtonText = "Full day selected";

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

daysOfWeek.forEach((day) => {
  day.addEventListener("click", () => {
    if (!day.classList.contains(clickedClass)) {
      day.classList.add(clickedClass);
      dayCounter++;
      totalCost += dailyRate;
      calculate();
    } else {
      day.classList.remove(clickedClass);
      dayCounter--;
      totalCost -= dailyRate;
      calculate();
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", () => {
  daysOfWeek.forEach((day) => {
    day.classList.remove(clickedClass);
  });
  dayCounter = 0;
  totalCost = 0;
  calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", () => {
  dailyRate = 20;
  halfDayButton.classList.add(clickedClass);
  fullDayButton.classList.remove(clickedClass);
  totalCost = dayCounter * dailyRate;
  calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", () => {
  dailyRate = 35;
  fullDayButton.classList.add(clickedClass);
  halfDayButton.classList.remove(clickedClass);
  totalCost = dayCounter * dailyRate;
  calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  dayCounterElement.innerHTML = dayCounterText + dayCounter;
  costElement.innerHTML = costText + totalCost;
  calculatedCost.innerHTML = costText + totalCost;
  clearButton.innerHTML = clearText;
  halfDayButton.innerHTML = halfDayButtonText;
  fullDayButton.innerHTML = fullDayButtonText;
}
