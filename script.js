const goals = [
  { id: "water", title: "Water Intake", unit: "oz", target: 100, current: 60 },
  { id: "pushups", title: "Pushups", unit: "reps", target: 100, current: 70 },
  { id: "run", title: "Run", unit: "mile", target: 1, current: 0.5 },
  { id: "mobility", title: "Mobility Flow", unit: "min", target: 20, current: 10 },
];

let tokens = 120;

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

const exercises = [
  { id: "bench", name: "Bench Press", focus: "Chest", sets: 4, reps: "8", tokens: 8 },
  { id: "incline", name: "Incline Dumbbell Press", focus: "Chest", sets: 3, reps: "10", tokens: 6 },
  { id: "dips", name: "Tricep Dips", focus: "Triceps", sets: 3, reps: "12", tokens: 5 },
  { id: "plank", name: "Plank Hold", focus: "Core", sets: 3, reps: "45s", tokens: 4 },
];

const activeWorkout = {
  items: [
    { id: "bench", name: "Bench Press", sets: 4, reps: "8" },
    { id: "incline", name: "Incline Dumbbell Press", sets: 3, reps: "10" },
    { id: "plank", name: "Plank Hold", sets: 3, reps: "45s" },
  ],
};

const workouts = [
  {
    id: "push-day",
    name: "Push Day 1",
    day: "Mon",
    week: "Week 1",
    tokens: 30,
    items: [...activeWorkout.items],
  },
];

const schedule = [
  { id: "mon", day: "Mon", label: "Push Day 1", week: "Week 1", status: "active" },
  { id: "tue", day: "Tue", label: "Chest Iso", week: "Week 1", status: "planned" },
  { id: "wed", day: "Wed", label: "Rest + Mobility", week: "Week 1", status: "" },
  { id: "thu", day: "Thu", label: "Pull Day", week: "Week 1", status: "planned" },
  { id: "fri", day: "Fri", label: "Legs", week: "Week 1", status: "" },
  { id: "sat", day: "Sat", label: "Conditioning", week: "Week 1", status: "planned" },
  { id: "sun", day: "Sun", label: "Recovery", week: "Week 1", status: "" },
];

const foods = [
  {
    id: "milk",
    name: "Milk",
    serving: "8oz",
    calories: 140,
    protein: 10,
    carbs: 12,
    fat: 3,
  },
  {
    id: "banana",
    name: "Banana",
    serving: "1 medium",
    calories: 110,
    protein: 1,
    carbs: 27,
    fat: 0,
  },
  {
    id: "protein",
    name: "Protein Powder",
    serving: "1 scoop",
    calories: 120,
    protein: 25,
    carbs: 2,
    fat: 1,
  },
  {
    id: "peanut",
    name: "Peanut Butter",
    serving: "2 tbsp",
    calories: 190,
    protein: 7,
    carbs: 6,
    fat: 14,
  },
];

const recipes = [
  {
    id: "smoothie",
    name: "Protein Smoothie",
    items: [
      { foodId: "milk", qty: 1 },
      { foodId: "banana", qty: 1 },
      { foodId: "protein", qty: 1 },
      { foodId: "peanut", qty: 1 },
    ],
  },
  {
    id: "chickenBowl",
    name: "Chicken Rice Bowl",
    items: [
      { foodId: "protein", qty: 1 },
      { foodId: "banana", qty: 1 },
    ],
  },
];

const activeRecipe = {
  items: [],
};

const skillTrees = [
  {
    id: "air",
    name: "Air",
    skills: [
      { id: "air-1", name: "Air Blast I", cost: 4 },
      { id: "air-2", name: "Air Blast II", cost: 6 },
      { id: "air-3", name: "Air Blast III", cost: 8 },
      { id: "air-4", name: "Whirling Step", cost: 7 },
      { id: "air-5", name: "Gust Shield", cost: 9 },
      { id: "air-6", name: "Tornado Surge", cost: 10 },
      { id: "air-7", name: "Air Scooter", cost: 12 },
      { id: "air-8", name: "Vacuum Grip", cost: 14 },
      { id: "air-9", name: "Cyclone Field", cost: 16 },
      { id: "air-10", name: "Windwalk", cost: 18 },
      { id: "air-11", name: "Sky Slice", cost: 20 },
      { id: "air-12", name: "Evasion Mastery", cost: 22 },
      { id: "air-13", name: "Cloud Drift", cost: 24 },
      { id: "air-14", name: "Typhoon Pulse", cost: 26 },
      { id: "air-15", name: "Spiral Rush", cost: 28 },
      { id: "air-16", name: "Breathlock", cost: 30 },
      { id: "air-17", name: "Tempest Command", cost: 32 },
      { id: "air-18", name: "Wind Resonance", cost: 34 },
      { id: "air-19", name: "Skyborn Flight", cost: 36 },
      { id: "air-20", name: "Avatar State: Air", cost: 40 },
    ],
  },
  {
    id: "water",
    name: "Water",
    skills: [
      { id: "water-1", name: "Water Lash I", cost: 4 },
      { id: "water-2", name: "Water Lash II", cost: 6 },
      { id: "water-3", name: "Water Lash III", cost: 8 },
      { id: "water-4", name: "Ice Shards", cost: 9 },
      { id: "water-5", name: "Flowing Guard", cost: 10 },
      { id: "water-6", name: "Wave Crash", cost: 12 },
      { id: "water-7", name: "Mist Veil", cost: 14 },
      { id: "water-8", name: "Glacier Bind", cost: 16 },
      { id: "water-9", name: "Tidal Grip", cost: 18 },
      { id: "water-10", name: "Frost Armor", cost: 20 },
      { id: "water-11", name: "Current Surge", cost: 22 },
      { id: "water-12", name: "Ice Rampart", cost: 24 },
      { id: "water-13", name: "Seafoam Dash", cost: 26 },
      { id: "water-14", name: "Whirlpool", cost: 28 },
      { id: "water-15", name: "Moonlit Focus", cost: 30 },
      { id: "water-16", name: "Tidebreaker", cost: 32 },
      { id: "water-17", name: "Glacial Spine", cost: 34 },
      { id: "water-18", name: "Frostbite", cost: 36 },
      { id: "water-19", name: "Healing Tide", cost: 38 },
      { id: "water-20", name: "Avatar State: Water", cost: 40 },
    ],
  },
  {
    id: "earth",
    name: "Earth",
    skills: [
      { id: "earth-1", name: "Stone Shot I", cost: 4 },
      { id: "earth-2", name: "Stone Shot II", cost: 6 },
      { id: "earth-3", name: "Stone Shot III", cost: 8 },
      { id: "earth-4", name: "Quake Pulse", cost: 9 },
      { id: "earth-5", name: "Granite Skin", cost: 10 },
      { id: "earth-6", name: "Seismic Sense", cost: 12 },
      { id: "earth-7", name: "Ridge Wall", cost: 14 },
      { id: "earth-8", name: "Boulder Rush", cost: 16 },
      { id: "earth-9", name: "Shard Spray", cost: 18 },
      { id: "earth-10", name: "Stone Guard", cost: 20 },
      { id: "earth-11", name: "Earthwave", cost: 22 },
      { id: "earth-12", name: "Crag Smash", cost: 24 },
      { id: "earth-13", name: "Plate Shift", cost: 26 },
      { id: "earth-14", name: "Fault Line", cost: 28 },
      { id: "earth-15", name: "Mud Trap", cost: 30 },
      { id: "earth-16", name: "Obsidian Edge", cost: 32 },
      { id: "earth-17", name: "Stoneheart", cost: 34 },
      { id: "earth-18", name: "Metal Sense", cost: 36 },
      { id: "earth-19", name: "Metal Armor", cost: 38 },
      { id: "earth-20", name: "Avatar State: Earth", cost: 40 },
    ],
  },
  {
    id: "fire",
    name: "Fire",
    skills: [
      { id: "fire-1", name: "Fire Flick I", cost: 4 },
      { id: "fire-2", name: "Fire Flick II", cost: 6 },
      { id: "fire-3", name: "Fire Flick III", cost: 8 },
      { id: "fire-4", name: "Heat Spiral", cost: 9 },
      { id: "fire-5", name: "Combust Dash", cost: 10 },
      { id: "fire-6", name: "Flame Jet", cost: 12 },
      { id: "fire-7", name: "Inferno Guard", cost: 14 },
      { id: "fire-8", name: "Blazing Arc", cost: 16 },
      { id: "fire-9", name: "Ember Rush", cost: 18 },
      { id: "fire-10", name: "Ash Veil", cost: 20 },
      { id: "fire-11", name: "Searing Burst", cost: 22 },
      { id: "fire-12", name: "Phoenix Sweep", cost: 24 },
      { id: "fire-13", name: "Scorching Step", cost: 26 },
      { id: "fire-14", name: "Blast Chain", cost: 28 },
      { id: "fire-15", name: "Crimson Guard", cost: 30 },
      { id: "fire-16", name: "Solar Focus", cost: 32 },
      { id: "fire-17", name: "Flare Storm", cost: 34 },
      { id: "fire-18", name: "Combustion", cost: 36 },
      { id: "fire-19", name: "Lightning Bolts", cost: 38 },
      { id: "fire-20", name: "Avatar State: Fire", cost: 40 },
    ],
  },
  {
    id: "balance",
    name: "Balance",
    skills: [
      { id: "balance-1", name: "Stamina +10", cost: 5 },
      { id: "balance-2", name: "Health +15", cost: 7 },
      { id: "balance-3", name: "Token Gain +5%", cost: 9 },
      { id: "balance-4", name: "Cooldown -5%", cost: 11 },
      { id: "balance-5", name: "Focus Surge", cost: 13 },
      { id: "balance-6", name: "Endurance Loop", cost: 15 },
      { id: "balance-7", name: "Resolve", cost: 17 },
      { id: "balance-8", name: "Agility Boost", cost: 19 },
      { id: "balance-9", name: "Critical Wave", cost: 21 },
      { id: "balance-10", name: "Spirit Shield", cost: 23 },
      { id: "balance-11", name: "Mana Flow", cost: 25 },
      { id: "balance-12", name: "Harmony", cost: 27 },
      { id: "balance-13", name: "Vital Surge", cost: 29 },
      { id: "balance-14", name: "Calm Mind", cost: 31 },
      { id: "balance-15", name: "Pressure Point", cost: 33 },
      { id: "balance-16", name: "Spirit Bond", cost: 35 },
      { id: "balance-17", name: "Inner Light", cost: 37 },
      { id: "balance-18", name: "Avatar Alignment", cost: 39 },
      { id: "balance-19", name: "Aura Burst", cost: 41 },
      { id: "balance-20", name: "Avatar State", cost: 45 },
    ],
  },
];

const unlockedSkills = new Set(["air-1", "air-2", "water-1", "fire-1", "earth-1"]);

const tokenCount = document.getElementById("tokenCount");

const gameState = {
  level: 7,
  wave: 3,
  health: 120,
  stamina: 80,
  damage: 34,
};

const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");

function switchTab(tabId) {
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === tabId));
  tabPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tabId));
}

function updateTokenCount() {
  tokenCount.textContent = tokens;
}

function renderGoals() {
  document.querySelectorAll("[data-goal-grid]").forEach((grid) => {
    grid.innerHTML = "";
    goals.forEach((goal) => {
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
        <input type="number" min="0" step="0.1" value="${goal.current}" data-goal-input="${goal.id}" />
      `;
      grid.appendChild(card);
    });
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
  Object.entries(macroTargets).forEach(([key, target]) => {
    const total = macroTotals[key];
    const percent = Math.min(140, (total / target) * 100);
    document.querySelectorAll(`[data-macro="${key}"]`).forEach((card) => {
      card.querySelector(".macro-progress").style.width = `${percent}%`;
      card.querySelector(".macro-label").textContent = `${total} / ${target}${key === "calories" ? " kcal" : "g"}`;
    });
  });
}

function computeFoodTotals(food, qty = 1) {
  return {
    calories: food.calories * qty,
    protein: food.protein * qty,
    carbs: food.carbs * qty,
    fat: food.fat * qty,
  };
}

function computeRecipeTotals(recipe) {
  return recipe.items.reduce(
    (totals, item) => {
      const food = foods.find((entry) => entry.id === item.foodId);
      if (!food) {
        return totals;
      }
      const scaled = computeFoodTotals(food, item.qty);
      return {
        calories: totals.calories + scaled.calories,
        protein: totals.protein + scaled.protein,
        carbs: totals.carbs + scaled.carbs,
        fat: totals.fat + scaled.fat,
      };
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function renderMealSelects() {
  const mealOptions = [
    ...foods.map((food) => ({
      id: `food:${food.id}`,
      name: `${food.name} (${food.serving})`,
    })),
    ...recipes.map((recipe) => ({
      id: `recipe:${recipe.id}`,
      name: recipe.name,
    })),
  ];

  document.querySelectorAll("[data-meal-select]").forEach((select) => {
    select.innerHTML = "";
    mealOptions.forEach((option) => {
      const element = document.createElement("option");
      element.value = option.id;
      element.textContent = option.name;
      select.appendChild(element);
    });
  });
}

function logMeal(selection) {
  if (!selection) {
    return;
  }
  const [type, id] = selection.split(":");
  let totals = null;

  if (type === "food") {
    const food = foods.find((item) => item.id === id);
    totals = food ? computeFoodTotals(food) : null;
  } else if (type === "recipe") {
    const recipe = recipes.find((item) => item.id === id);
    totals = recipe ? computeRecipeTotals(recipe) : null;
  }

  if (!totals) {
    return;
  }

  Object.keys(macroTotals).forEach((key) => {
    macroTotals[key] += totals[key];
  });

  tokens += 5;
  updateTokenCount();
  updateMacros();
}

function renderExerciseList() {
  const list = document.querySelector("[data-exercise-list]");
  const preview = document.querySelector("[data-exercise-preview]");
  if (list) {
    list.innerHTML = "";
    exercises.forEach((exercise) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <div>
          <strong>${exercise.name}</strong>
          <p class="muted">${exercise.focus} • ${exercise.sets} sets × ${exercise.reps}</p>
        </div>
        <button data-add-exercise="${exercise.id}">Add</button>
      `;
      list.appendChild(item);
    });
  }

  if (preview) {
    preview.innerHTML = "";
    exercises.slice(0, 4).forEach((exercise) => {
      const item = document.createElement("li");
      item.textContent = exercise.name;
      preview.appendChild(item);
    });
  }
}

function renderActiveWorkout() {
  const list = document.querySelector("[data-active-workout]");
  const preview = document.querySelector("[data-workout-preview]");
  if (list) {
    list.innerHTML = "";
    activeWorkout.items.forEach((item, index) => {
      const entry = document.createElement("li");
      entry.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <p class="muted">${item.sets} sets × ${item.reps}</p>
        </div>
        <div>
          <input type="number" min="1" value="${item.sets}" data-workout-sets="${index}" />
          <input type="text" value="${item.reps}" data-workout-reps="${index}" />
          <button data-remove-exercise="${index}">Remove</button>
        </div>
      `;
      list.appendChild(entry);
    });
  }

  if (preview) {
    preview.innerHTML = "";
    activeWorkout.items.slice(0, 4).forEach((item) => {
      const entry = document.createElement("li");
      entry.textContent = `${item.name} • ${item.sets} × ${item.reps}`;
      preview.appendChild(entry);
    });
  }
}

function renderWorkouts() {
  const list = document.querySelector("[data-workout-list]");
  if (!list) {
    return;
  }
  list.innerHTML = "";
  workouts.forEach((workout) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <div>
        <strong>${workout.name}</strong>
        <p class="muted">${workout.day} • ${workout.week} • ${workout.items.length} exercises</p>
      </div>
      <span>${workout.tokens} tokens</span>
    `;
    list.appendChild(item);
  });
}

function renderWorkoutCards() {
  const currentWorkout = workouts[0];
  document.querySelectorAll("[data-workout-card]").forEach((card) => {
    const meta = card.querySelector("[data-workout-meta]");
    const list = card.querySelector("[data-workout-list]");
    if (!currentWorkout) {
      return;
    }
    meta.innerHTML = `
      <p>${currentWorkout.name} • ${currentWorkout.day}</p>
      <span>Earn ${currentWorkout.tokens} Tokens</span>
    `;
    list.innerHTML = "";
    currentWorkout.items.forEach((item) => {
      const entry = document.createElement("li");
      entry.innerHTML = `
        <span>${item.name}</span>
        <small>${item.sets} sets × ${item.reps}</small>
        <input type="checkbox" />
      `;
      list.appendChild(entry);
    });
  });
}

function renderCalendar() {
  document.querySelectorAll("[data-calendar-grid]").forEach((grid) => {
    grid.innerHTML = "";
    schedule.forEach((entry) => {
      const day = document.createElement("div");
      day.className = "calendar-day";
      if (entry.status === "active") {
        day.classList.add("active");
      }
      if (entry.status === "planned") {
        day.classList.add("planned");
      }
      if (entry.status === "done") {
        day.classList.add("done");
      }
      day.dataset.scheduleId = entry.id;
      day.innerHTML = `
        <span>${entry.day}</span>
        <strong>${entry.label}</strong>
        <small>${entry.week}</small>
      `;
      grid.appendChild(day);
    });
  });
}

function renderFoods() {
  const list = document.querySelector("[data-food-list]");
  const preview = document.querySelector("[data-food-preview]");
  if (list) {
    list.innerHTML = "";
    foods.forEach((food) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <div>
          <strong>${food.name}</strong>
          <p class="muted">${food.serving} • ${food.carbs}C / ${food.protein}P / ${food.fat}F</p>
        </div>
        <button data-quick-log="${food.id}">Log</button>
      `;
      list.appendChild(item);
    });
  }

  if (preview) {
    preview.innerHTML = "";
    foods.slice(0, 4).forEach((food) => {
      const item = document.createElement("li");
      item.textContent = `${food.name} (${food.serving}) • ${food.carbs}C / ${food.protein}P / ${food.fat}F`;
      preview.appendChild(item);
    });
  }
}

function renderRecipeBuilder() {
  const ingredientList = document.querySelector("[data-recipe-ingredients]");
  const totalLabel = document.querySelector("[data-recipe-total]");
  const previewList = document.querySelector("[data-recipe-preview]");
  const previewTotal = document.querySelector("[data-recipe-preview-total]");

  if (ingredientList) {
    ingredientList.innerHTML = "";
    activeRecipe.items.forEach((item) => {
      const food = foods.find((entry) => entry.id === item.foodId);
      const element = document.createElement("li");
      element.innerHTML = `
        <div>
          <strong>${food ? food.name : "Unknown"}</strong>
          <p class="muted">${item.qty} × ${food ? food.serving : ""}</p>
        </div>
        <button data-remove-ingredient="${item.foodId}">Remove</button>
      `;
      ingredientList.appendChild(element);
    });
    const totals = computeRecipeTotals({ items: activeRecipe.items });
    totalLabel.textContent = `Total: ${totals.carbs}C / ${totals.protein}P / ${totals.fat}F (${totals.calories} kcal)`;
  }

  if (previewList) {
    const sample = recipes[0];
    previewList.innerHTML = "";
    if (sample) {
      sample.items.forEach((item) => {
        const food = foods.find((entry) => entry.id === item.foodId);
        const line = document.createElement("li");
        line.textContent = `${food ? food.name : "Unknown"}`;
        previewList.appendChild(line);
      });
      const totals = computeRecipeTotals(sample);
      previewTotal.textContent = `Total: ${totals.carbs}C / ${totals.protein}P / ${totals.fat}F`;
    }
  }
}

function renderRecipeSelect() {
  const select = document.querySelector("[data-recipe-food-select]");
  if (!select) {
    return;
  }
  select.innerHTML = "";
  foods.forEach((food) => {
    const option = document.createElement("option");
    option.value = food.id;
    option.textContent = `${food.name} (${food.serving})`;
    select.appendChild(option);
  });
}

function renderSkillPreview() {
  const container = document.querySelector("[data-skill-preview]");
  if (!container) {
    return;
  }
  container.innerHTML = "";
  skillTrees.forEach((tree) => {
    const card = document.createElement("div");
    card.className = "skill-tree";
    const previewSkills = tree.skills.slice(0, 5).map((skill) => `<li>${skill.name}</li>`).join("");
    card.innerHTML = `
      <h3>${tree.name}</h3>
      <ul>${previewSkills}</ul>
    `;
    container.appendChild(card);
  });
}

function renderSkillTrees() {
  const grid = document.querySelector("[data-skill-tree-grid]");
  if (!grid) {
    return;
  }
  grid.innerHTML = "";
  skillTrees.forEach((tree) => {
    const card = document.createElement("div");
    card.className = "skill-tree";
    const list = tree.skills
      .map((skill) => {
        const unlocked = unlockedSkills.has(skill.id);
        return `
          <li>
            <span>${skill.name}</span>
            <button data-unlock-skill="${skill.id}" data-cost="${skill.cost}" ${unlocked ? "disabled" : ""}>
              ${unlocked ? "Unlocked" : `${skill.cost} tokens`}
            </button>
          </li>
        `;
      })
      .join("");
    card.innerHTML = `
      <h3>${tree.name}</h3>
      <ul class="skill-list">${list}</ul>
    `;
    grid.appendChild(card);
  });
}

function renderGameStats() {
  const container = document.querySelector("[data-game-stats]");
  if (!container) {
    return;
  }
  container.innerHTML = "";
  const stats = [
    { label: "Level", value: gameState.level },
    { label: "Wave", value: gameState.wave },
    { label: "Health", value: gameState.health },
    { label: "Stamina", value: gameState.stamina },
    { label: "Damage", value: gameState.damage },
  ];
  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<span>${stat.label}</span><strong>${stat.value}</strong>`;
    container.appendChild(card);
  });
}

function renderWaveLog() {
  const log = document.querySelector("[data-wave-log]");
  if (!log) {
    return;
  }
  log.innerHTML = "";
  for (let i = 0; i < 4; i += 1) {
    const difficulty = Math.round((gameState.wave + i) * 1.3);
    const entry = document.createElement("li");
    entry.textContent = `Wave ${gameState.wave + i}: Spirit strength ${difficulty} • Rewards ${10 + difficulty} tokens`;
    log.appendChild(entry);
  }
}

function completeWorkout() {
  const currentWorkout = workouts[0];
  if (!currentWorkout) {
    return;
  }
  tokens += currentWorkout.tokens;
  updateTokenCount();
  schedule.forEach((entry) => {
    if (entry.label === currentWorkout.name) {
      entry.status = "done";
    }
  });
  renderCalendar();
}

function createId(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

document.addEventListener("click", (event) => {
  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    switchTab(tabButton.dataset.tab);
  }

  const feedButton = event.target.closest("[data-feed-button]");
  if (feedButton) {
    const container = feedButton.closest(".feed-actions");
    const select = container ? container.querySelector("[data-meal-select]") : null;
    logMeal(select ? select.value : null);
  }

  if (event.target.matches("[data-add-exercise]")) {
    const exercise = exercises.find((item) => item.id === event.target.dataset.addExercise);
    if (exercise) {
      activeWorkout.items.push({
        id: exercise.id,
        name: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
      });
      renderActiveWorkout();
    }
  }

  if (event.target.matches("[data-remove-exercise]")) {
    const index = Number(event.target.dataset.removeExercise);
    activeWorkout.items.splice(index, 1);
    renderActiveWorkout();
  }

  if (event.target.matches("[data-clear-workout]")) {
    activeWorkout.items = [];
    renderActiveWorkout();
  }

  if (event.target.matches("[data-add-ingredient]")) {
    const select = document.querySelector("[data-recipe-food-select]");
    const qtyInput = document.querySelector('[data-recipe-form] input[name="qty"]');
    if (select && qtyInput) {
      activeRecipe.items.push({ foodId: select.value, qty: Number(qtyInput.value) || 1 });
      renderRecipeBuilder();
    }
  }

  if (event.target.matches("[data-remove-ingredient]")) {
    const id = event.target.dataset.removeIngredient;
    activeRecipe.items = activeRecipe.items.filter((item) => item.foodId !== id);
    renderRecipeBuilder();
  }

  if (event.target.matches("[data-quick-log]")) {
    logMeal(`food:${event.target.dataset.quickLog}`);
  }

  if (event.target.matches("[data-unlock-skill]")) {
    const cost = Number(event.target.dataset.cost);
    const skillId = event.target.dataset.unlockSkill;
    if (!unlockedSkills.has(skillId) && tokens >= cost) {
      tokens -= cost;
      unlockedSkills.add(skillId);
      updateTokenCount();
      renderSkillTrees();
    }
  }

  if (event.target.matches("[data-start-wave]")) {
    gameState.wave += 1;
    gameState.level = Math.max(gameState.level, Math.floor(gameState.wave / 2) + 6);
    gameState.health = Math.max(40, gameState.health - 8);
    gameState.stamina = Math.max(30, gameState.stamina - 5);
    tokens += 8 + gameState.wave;
    updateTokenCount();
    renderGameStats();
    renderWaveLog();
  }

  if (event.target.matches("[data-special-move]")) {
    tokens += 15;
    gameState.stamina = Math.max(0, gameState.stamina - 10);
    updateTokenCount();
    renderGameStats();
  }

  if (event.target.matches("[data-complete-workout]")) {
    completeWorkout();
  }

  const calendarDay = event.target.closest("[data-schedule-id]");
  if (calendarDay) {
    const entry = schedule.find((item) => item.id === calendarDay.dataset.scheduleId);
    if (entry) {
      entry.status = entry.status === "done" ? "planned" : "done";
      renderCalendar();
    }
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-goal-input]")) {
    const goal = goals.find((item) => item.id === event.target.dataset.goalInput);
    goal.current = Number(event.target.value);
    updateRings();
  }

  if (event.target.matches("[data-workout-sets]")) {
    const index = Number(event.target.dataset.workoutSets);
    if (activeWorkout.items[index]) {
      activeWorkout.items[index].sets = Number(event.target.value);
      renderActiveWorkout();
    }
  }

  if (event.target.matches("[data-workout-reps]")) {
    const index = Number(event.target.dataset.workoutReps);
    if (activeWorkout.items[index]) {
      activeWorkout.items[index].reps = event.target.value;
      renderActiveWorkout();
    }
  }
});

document.querySelectorAll("[data-exercise-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const focus = formData.get("focus");
    const sets = Number(formData.get("sets"));
    const reps = formData.get("reps");
    const tokensValue = Number(formData.get("tokens")) || 0;

    exercises.push({
      id: createId(name),
      name,
      focus,
      sets,
      reps,
      tokens: tokensValue,
    });

    form.reset();
    renderExerciseList();
  });
});

document.querySelectorAll("[data-workout-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const day = formData.get("day");
    const week = formData.get("week");
    const workoutTokens = Number(formData.get("tokens")) || 0;

    workouts.unshift({
      id: createId(name),
      name,
      day,
      week,
      tokens: workoutTokens || 20,
      items: activeWorkout.items.map((item) => ({ ...item })),
    });

    const scheduleEntry = schedule.find((entry) => entry.day === day);
    if (scheduleEntry) {
      scheduleEntry.label = name;
      scheduleEntry.week = week;
      scheduleEntry.status = "planned";
    }

    form.reset();
    renderWorkouts();
    renderWorkoutCards();
    renderCalendar();
  });
});

document.querySelectorAll("[data-food-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const food = {
      id: createId(name),
      name,
      serving: formData.get("serving"),
      calories: Number(formData.get("calories")),
      protein: Number(formData.get("protein")),
      carbs: Number(formData.get("carbs")),
      fat: Number(formData.get("fat")),
    };
    foods.push(food);
    form.reset();
    renderFoods();
    renderMealSelects();
    renderRecipeSelect();
  });
});

document.querySelectorAll("[data-recipe-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    if (!activeRecipe.items.length) {
      return;
    }
    recipes.unshift({
      id: createId(name),
      name,
      items: activeRecipe.items.map((item) => ({ ...item })),
    });
    activeRecipe.items = [];
    form.reset();
    renderMealSelects();
    renderRecipeBuilder();
  });
});

renderGoals();
renderExerciseList();
renderActiveWorkout();
renderWorkouts();
renderWorkoutCards();
renderCalendar();
renderFoods();
renderMealSelects();
renderRecipeSelect();
renderRecipeBuilder();
renderSkillPreview();
renderSkillTrees();
renderGameStats();
renderWaveLog();
updateMacros();
updateTokenCount();
