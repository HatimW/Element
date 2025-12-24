const goals = [
  { id: "water", title: "Water Intake", unit: "oz", target: 100, current: 60 },
  { id: "pushups", title: "Pushups", unit: "reps", target: 100, current: 70 },
  { id: "run", title: "Run", unit: "mile", target: 1, current: 0.5 },
  { id: "mobility", title: "Mobility Flow", unit: "min", target: 20, current: 10 },
];

const meals = {
  smoothie: { calories: 420, protein: 43, carbs: 47, fat: 18 },
  chickenBowl: { calories: 520, protein: 46, carbs: 55, fat: 14 },
  milk: { calories: 140, protein: 10, carbs: 12, fat: 3 },
};

const macroTargets = {
  calories: 2400,
  protein: 180,
  carbs: 220,
  fat: 70,
};

const macroTotals = {
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
};

const tokenCount = document.getElementById("tokenCount");

const goalGrid = document.getElementById("goalGrid");

function renderGoals() {
  goalGrid.innerHTML = "";
  goals.forEach((goal) => {
    const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
    const card = document.createElement("div");
    card.className = "goal-card";
    card.innerHTML = `
      <div class="progress-ring" data-id="${goal.id}">
        <span>${goal.current} / ${goal.target} ${goal.unit}</span>
      </div>
      <div>
        <h4>${goal.title}</h4>
        <p class="muted">Token reward: ${Math.round(goal.target / 4)}</p>
      </div>
      <input type="number" min="0" step="0.1" value="${goal.current}" data-input="${goal.id}" />
    `;
    goalGrid.appendChild(card);
  });
  updateRings();
}

function updateRings() {
  document.querySelectorAll(".progress-ring").forEach((ring) => {
    const id = ring.dataset.id;
    const goal = goals.find((item) => item.id === id);
    const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
    ring.style.background = `conic-gradient(var(--accent) ${percent * 3.6}deg, #2a3437 0deg)`;
    ring.querySelector("span").textContent = `${goal.current} / ${goal.target} ${goal.unit}`;
  });
}

function updateMacros() {
  const caloriePercent = Math.min(140, (macroTotals.calories / macroTargets.calories) * 100);
  const proteinPercent = Math.min(140, (macroTotals.protein / macroTargets.protein) * 100);
  const carbPercent = Math.min(140, (macroTotals.carbs / macroTargets.carbs) * 100);
  const fatPercent = Math.min(140, (macroTotals.fat / macroTargets.fat) * 100);

  document.getElementById("calorieProgress").style.width = `${caloriePercent}%`;
  document.getElementById("proteinProgress").style.width = `${proteinPercent}%`;
  document.getElementById("carbProgress").style.width = `${carbPercent}%`;
  document.getElementById("fatProgress").style.width = `${fatPercent}%`;

  document.getElementById(
    "calorieLabel"
  ).textContent = `${macroTotals.calories} / ${macroTargets.calories} kcal`;
  document.getElementById("proteinLabel").textContent = `${macroTotals.protein} / ${macroTargets.protein}g`;
  document.getElementById("carbLabel").textContent = `${macroTotals.carbs} / ${macroTargets.carbs}g`;
  document.getElementById("fatLabel").textContent = `${macroTotals.fat} / ${macroTargets.fat}g`;
}

goalGrid.addEventListener("input", (event) => {
  const input = event.target;
  if (input.matches("[data-input]")) {
    const goal = goals.find((item) => item.id === input.dataset.input);
    goal.current = Number(input.value);
    updateRings();
  }
});

document.getElementById("feedButton").addEventListener("click", () => {
  const mealKey = document.getElementById("mealSelect").value;
  const meal = meals[mealKey];

  macroTotals.calories += meal.calories;
  macroTotals.protein += meal.protein;
  macroTotals.carbs += meal.carbs;
  macroTotals.fat += meal.fat;

  tokenCount.textContent = Number(tokenCount.textContent) + 5;

  updateMacros();
});

renderGoals();
updateMacros();
