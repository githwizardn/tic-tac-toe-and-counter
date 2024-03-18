const boxes = document.querySelectorAll(".box");
let isXTurn = true;

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = isXTurn ? "X" : "O";
      isXTurn = !isXTurn;
    }
  });
});

/*
  დავალება
    HTML-ში მოთავსებულ counter სექციას, შემატეთ შემდგომი ფუნქციონალი:
    როცა დააწვება მომხარებელი + ღილაკს, რიცხვი გაიზარდოს 1-ით
    როცა დააწვება მომხარებელი - ღილაკს, რიცხვი შემცირდეს 1-ით
    მცირედი შეზღუდვები:
    რიცხვი არ უნდა გაცდეს 10-ს და არ ჩამოვიდეს 0-ზე ქვემოთ
*/

// Find the "+" and "-" buttons and the counter display
const plusButton = document.querySelector(".btn-success");
const minusButton = document.querySelector(".btn-warning");
const counterDisplay = document.querySelector(".badge");

// Initialize counter value
let counterValue = 0;

// Function to update the display
function updateDisplay() {
  counterDisplay.textContent = counterValue;
}

// Event listener for the "+" button
plusButton.addEventListener("click", function () {
  if (counterValue < 10) {
    // Check if counter is less than 10
    counterValue++; // Increment counter
    updateDisplay(); // Update display
  }
});

// Event listener for the "-" button
minusButton.addEventListener("click", function () {
  if (counterValue > 0) {
    // Check if counter is more than 0
    counterValue--; // Decrement counter
    updateDisplay(); // Update display
  }
});

// Initial display update
updateDisplay(); // To display the initial counter value on page load
