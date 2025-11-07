const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const addCustomBtn = document.getElementById("addCustom");
const customInput = document.getElementById("customInput");
const saveBtn = document.getElementById("saveCount");
const deleteBtn = document.getElementById("deleteSaved");
const toggleThemeBtn = document.getElementById("toggleTheme");


let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;
let theme = localStorage.getItem("theme") || "light";

if (theme === "dark") {
  document.body.classList.add("dark");
  toggleThemeBtn.textContent = "☀️ Light Mode";
}

countDisplay.textContent = count;

function updateDisplay() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});


decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});


resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

addCustomBtn.addEventListener("click", () => {
  const value = parseInt(customInput.value);
  if (!isNaN(value)) {
    count += value;
    updateDisplay();
    customInput.value = "";
  }
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("count", count);
  alert("✅ Count saved!");
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("count");
  count = 0;
  updateDisplay();
  alert("🗑️ Saved count deleted!");
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  toggleThemeBtn.textContent =
    theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});
