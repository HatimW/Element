const STORAGE_KEY = "elementState";

let goals = [
  { id: "water", title: "Water Intake", unit: "oz", target: 100, current: 60, tokenReward: 25, category: "Daily" },
  { id: "pushups", title: "Pushups", unit: "reps", target: 100, current: 70, tokenReward: 30, category: "Daily" },
  { id: "run", title: "Run", unit: "mile", target: 1, current: 0.5, tokenReward: 20, category: "Weekly" },
  { id: "mobility", title: "Mobility Flow", unit: "min", target: 20, current: 10, tokenReward: 15, category: "Daily" },
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
    { id: "bench", name: "Bench Press", sets: 4, reps: "8", completed: false },
    { id: "incline", name: "Incline Dumbbell Press", sets: 3, reps: "10", completed: false },
    { id: "plank", name: "Plank Hold", sets: 3, reps: "45s", completed: false },
  ],
};

let workouts = [
  {
    id: "push-day",
    name: "Push Day 1",
    day: "Mon",
    week: "Week 1",
    tokens: 30,
    items: [...activeWorkout.items],
  },
];

let schedule = [
  { id: "week1-mon", day: "Mon", weekIndex: 0, label: "Push Day 1", status: "active" },
  { id: "week1-tue", day: "Tue", weekIndex: 0, label: "Chest Iso", status: "planned" },
  { id: "week1-wed", day: "Wed", weekIndex: 0, label: "Rest + Mobility", status: "" },
  { id: "week1-thu", day: "Thu", weekIndex: 0, label: "Pull Day", status: "planned" },
  { id: "week1-fri", day: "Fri", weekIndex: 0, label: "Legs", status: "" },
  { id: "week1-sat", day: "Sat", weekIndex: 0, label: "Conditioning", status: "planned" },
  { id: "week1-sun", day: "Sun", weekIndex: 0, label: "Recovery", status: "" },
];

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const CALENDAR_WEEKS = 4;

let foods = [
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

let recipes = [
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

const SPECIAL_ABILITIES = [
  { id: "air-19", name: "Flight", key: "Q" },
  { id: "fire-19", name: "Lightning", key: "E" },
  { id: "earth-19", name: "Metal Armor", key: "R" },
  { id: "water-19", name: "Healing", key: "T" },
];

const STAT_LABELS = {
  health: "Health",
  stamina: "Stamina",
  damage: "Damage",
};

function createStatEffect(stat, amount) {
  const label = `${STAT_LABELS[stat]} ${amount >= 0 ? "+" : ""}${amount}`;
  return { type: "stat", stat, amount, label };
}

function buildSkillEffects(treeId, skill) {
  const effects = [];
  if (treeId === "balance") {
    if (skill.name.toLowerCase().includes("stamina +")) {
      effects.push(createStatEffect("stamina", Number(skill.name.match(/\+(\d+)/)?.[1]) || 0));
    } else if (skill.name.toLowerCase().includes("health +")) {
      effects.push(createStatEffect("health", Number(skill.name.match(/\+(\d+)/)?.[1]) || 0));
    } else {
      effects.push({ type: "perk", label: skill.name });
    }
  } else {
    const treeBonus = {
      air: createStatEffect("damage", 1),
      water: createStatEffect("health", 2),
      earth: createStatEffect("stamina", 2),
      fire: createStatEffect("damage", 1),
    }[treeId];
    if (treeBonus) {
      effects.push(treeBonus);
    }
  }

  const specialAbility = SPECIAL_ABILITIES.find((ability) => ability.id === skill.id);
  if (specialAbility) {
    effects.push({ type: "perk", label: `Unlocks ${specialAbility.name}` });
  }

  return effects;
}

const skillLookup = new Map();
skillTrees.forEach((tree) => {
  tree.skills = tree.skills.map((skill, index, skills) => {
    const entry = {
      ...skill,
      requires: index === 0 ? [] : [skills[index - 1].id],
      effects: buildSkillEffects(tree.id, skill),
    };
    skillLookup.set(entry.id, entry);
    return entry;
  });
});

const tokenCount = document.getElementById("tokenCount");
const goalModal = document.querySelector("[data-goal-modal]");
const goalForm = document.querySelector("[data-goal-form]");
const goalModalTitle = document.querySelector("[data-goal-modal-title]");

let editingGoalId = null;

const gameState = {
  level: 7,
  wave: 3,
  health: 120,
  stamina: 80,
  damage: 34,
};

const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");

function replaceArray(target, next) {
  target.length = 0;
  next.forEach((item) => target.push(item));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return null;
  }
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.warn("Unable to parse saved state", error);
    return null;
  }
}

function saveState() {
  const state = {
    goals,
    workouts,
    schedule,
    foods,
    recipes,
    macroTotals,
    tokens,
    unlockedSkills: Array.from(unlockedSkills),
    gameState,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyState(saved) {
  if (Array.isArray(saved.goals)) {
    replaceArray(goals, saved.goals);
  }
  if (Array.isArray(saved.workouts)) {
    replaceArray(workouts, saved.workouts);
  }
  if (Array.isArray(saved.schedule)) {
    replaceArray(schedule, saved.schedule);
  }
  if (Array.isArray(saved.foods)) {
    replaceArray(foods, saved.foods);
  }
  if (Array.isArray(saved.recipes)) {
    replaceArray(recipes, saved.recipes);
  }
  if (saved.macroTotals && typeof saved.macroTotals === "object") {
    Object.keys(macroTotals).forEach((key) => {
      if (typeof saved.macroTotals[key] === "number") {
        macroTotals[key] = saved.macroTotals[key];
      }
    });
  }
  if (typeof saved.tokens === "number") {
    tokens = saved.tokens;
  }
  if (Array.isArray(saved.unlockedSkills)) {
    unlockedSkills.clear();
    saved.unlockedSkills.forEach((skillId) => unlockedSkills.add(skillId));
  }
  if (saved.gameState && typeof saved.gameState === "object") {
    Object.assign(gameState, saved.gameState);
  }
}

function switchTab(tabId) {
  tabButtons.forEach((button) => button.classList.toggle("active", button.dataset.tab === tabId));
  tabPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === tabId));
}

function updateTokenCount() {
  tokenCount.textContent = tokens;
}

function normalizeGoals() {
  goals.forEach((goal) => {
    if (typeof goal.current !== "number") {
      goal.current = 0;
    }
    const rewardValue = Number(goal.tokenReward);
    goal.tokenReward = Number.isFinite(rewardValue) ? rewardValue : 0;
    if (typeof goal.category !== "string") {
      goal.category = "";
    }
    if (typeof goal.completed !== "boolean") {
      goal.completed = goal.target ? goal.current >= goal.target : false;
    }
  });
}

function normalizeWorkouts() {
  workouts.forEach((workout) => {
    const rewardValue = Number(workout.tokens);
    workout.tokens = Number.isFinite(rewardValue) ? rewardValue : 0;
    if (!Array.isArray(workout.items)) {
      workout.items = [];
    }
    workout.items.forEach((item) => {
      if (typeof item.completed !== "boolean") {
        item.completed = false;
      }
    });
  });
}

function normalizeFoods() {
  foods.forEach((food) => {
    const rewardValue = Number(food.tokens);
    food.tokens = Number.isFinite(rewardValue) ? rewardValue : 0;
  });
}

function getWorkoutCompletion(workout) {
  const items = Array.isArray(workout.items) ? workout.items : [];
  const total = items.length;
  const completed = items.filter((item) => item.completed).length;
  const ratio = total ? completed / total : 0;
  return {
    total,
    completed,
    ratio,
    allComplete: total > 0 && completed === total,
  };
}

function getWorkoutRewardTokens(workout) {
  const baseTokens = Number.isFinite(workout.tokens) ? workout.tokens : 0;
  const { ratio } = getWorkoutCompletion(workout);
  return Math.round(baseTokens * ratio);
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateKey(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function getStartOfWeek(date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  const dayIndex = (next.getDay() + 6) % 7;
  next.setDate(next.getDate() - dayIndex);
  return next;
}

function getDayLabel(date) {
  return DAY_LABELS[(date.getDay() + 6) % 7];
}

function getWeekIndexFromLabel(label) {
  if (typeof label !== "string") {
    return null;
  }
  const match = label.match(/Week\s*(\d+)/i);
  if (!match) {
    return null;
  }
  const value = Number(match[1]);
  return Number.isFinite(value) ? value - 1 : null;
}

function normalizeSchedule() {
  schedule.forEach((entry) => {
    if (!entry.date && typeof entry.weekIndex !== "number") {
      const parsed = getWeekIndexFromLabel(entry.week);
      entry.weekIndex = Number.isFinite(parsed) ? parsed : 0;
    }
    if (!entry.day && entry.date) {
      entry.day = getDayLabel(parseDateKey(entry.date));
    }
    if (!entry.status) {
      entry.status = "";
    }
    if (!entry.id) {
      entry.id = createId(`${entry.label || "schedule"}-${entry.day || entry.date || entry.weekIndex}`);
    }
  });
}

function initializeScheduleForms() {
  const start = getStartOfWeek(new Date());
  const end = addDays(start, CALENDAR_WEEKS * 7 - 1);
  const startValue = getDateKey(start);
  const endValue = getDateKey(end);
  document.querySelectorAll("[data-schedule-start]").forEach((input) => {
    if (!input.value) {
      input.value = startValue;
    }
  });
  document.querySelectorAll("[data-schedule-end]").forEach((input) => {
    if (!input.value) {
      input.value = endValue;
    }
  });
}

function getScheduleViewStart() {
  const startInput = document.querySelector("[data-schedule-start]");
  if (startInput && startInput.value) {
    return getStartOfWeek(parseDateKey(startInput.value));
  }
  return getStartOfWeek(new Date());
}

function getEntriesForDate(date, weekIndex) {
  const dateKey = getDateKey(date);
  const dayLabel = getDayLabel(date);
  return schedule.filter((entry) => {
    if (entry.date) {
      return entry.date === dateKey;
    }
    return entry.weekIndex === weekIndex && entry.day === dayLabel;
  });
}

function buildRecurringScheduleEntries({ label, day, recurrence, startDate, endDate }) {
  const dayIndex = DAY_LABELS.indexOf(day);
  if (dayIndex === -1) {
    return [];
  }
  const rangeStart = new Date(startDate);
  rangeStart.setHours(0, 0, 0, 0);
  const rangeEnd = new Date(endDate);
  rangeEnd.setHours(0, 0, 0, 0);
  const startDayIndex = (rangeStart.getDay() + 6) % 7;
  const offset = dayIndex - startDayIndex;
  let current = addDays(rangeStart, offset < 0 ? offset + 7 : offset);
  const intervalWeeks = recurrence === "biweekly" ? 2 : 1;
  const entries = [];

  while (current <= rangeEnd) {
    const dateKey = getDateKey(current);
    entries.push({
      id: createId(`${label}-${dateKey}`),
      label,
      status: "planned",
      date: dateKey,
    });
    current = addDays(current, intervalWeeks * 7);
  }

  return entries;
}

function updateGoalProgress(goal) {
  if (!goal || !goal.target) {
    return;
  }
  const isComplete = goal.current >= goal.target;
  if (isComplete && !goal.completed) {
    tokens += goal.tokenReward;
    goal.completed = true;
    updateTokenCount();
  } else if (!isComplete && goal.completed) {
    goal.completed = false;
  }
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
          <div class="goal-meta">
            <span class="goal-tag">Token reward: ${goal.tokenReward}</span>
            ${goal.category ? `<span class="goal-tag">${goal.category}</span>` : ""}
          </div>
        </div>
        <input type="number" min="0" step="0.1" value="${goal.current}" data-goal-input="${goal.id}" />
        <div class="goal-actions">
          <button class="ghost-button" type="button" data-edit-goal="${goal.id}">Edit</button>
          <button class="ghost-button" type="button" data-delete-goal="${goal.id}">Delete</button>
        </div>
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
    const percent = goal && goal.target ? Math.min(100, Math.round((goal.current / goal.target) * 100)) : 0;
    ring.style.background = `conic-gradient(var(--accent) ${percent * 3.6}deg, #2a3437 0deg)`;
    if (goal) {
      ring.querySelector("span").textContent = `${goal.current} / ${goal.target} ${goal.unit}`;
    }
  });
}

function updateMacros() {
  Object.entries(macroTargets).forEach(([key, target]) => {
    const total = macroTotals[key];
    const percent = (total / target) * 100;
    const clamped = Math.min(100, Math.max(0, percent));
    const overfill = Math.max(0, Math.min(100, percent - 100));
    document.querySelectorAll(`[data-macro="${key}"]`).forEach((card) => {
      card.querySelector(".macro-progress").style.width = `${clamped}%`;
      const overfillEl = card.querySelector(".macro-overfill");
      if (overfillEl) {
        overfillEl.style.width = `${overfill}%`;
      }
      card.querySelector(".macro-label").textContent = `${total} / ${target}${key === "calories" ? " kcal" : "g"}`;
    });
  });
}

function computeFoodTotals(food, qty = 1) {
  const tokenReward = Number.isFinite(food.tokens) ? food.tokens : 0;
  return {
    calories: food.calories * qty,
    protein: food.protein * qty,
    carbs: food.carbs * qty,
    fat: food.fat * qty,
    tokens: tokenReward * qty,
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
        tokens: totals.tokens + scaled.tokens,
      };
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0, tokens: 0 }
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

function logMeal(selection, tokenOverride = null, quantity = 1) {
  if (!selection) {
    return;
  }
  const [type, id] = selection.split(":");
  let totals = null;
  const normalizedQuantity = Number.isFinite(quantity) && quantity > 0 ? quantity : 1;

  if (type === "food") {
    const food = foods.find((item) => item.id === id);
    totals = food ? computeFoodTotals(food, normalizedQuantity) : null;
  } else if (type === "recipe") {
    const recipe = recipes.find((item) => item.id === id);
    totals = recipe ? computeRecipeTotals(recipe) : null;
    if (totals) {
      totals = {
        calories: totals.calories * normalizedQuantity,
        protein: totals.protein * normalizedQuantity,
        carbs: totals.carbs * normalizedQuantity,
        fat: totals.fat * normalizedQuantity,
        tokens: totals.tokens * normalizedQuantity,
      };
    }
  }

  if (!totals) {
    return;
  }

  Object.keys(macroTotals).forEach((key) => {
    macroTotals[key] += totals[key];
  });

  const rewardTokens = Number.isFinite(tokenOverride) ? tokenOverride : totals.tokens;
  tokens += rewardTokens;
  updateTokenCount();
  updateMacros();
  saveState();
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
    const completeButton = card.querySelector("[data-complete-workout]");
    if (!currentWorkout) {
      return;
    }
    const completion = getWorkoutCompletion(currentWorkout);
    const rewardTokens = getWorkoutRewardTokens(currentWorkout);
    meta.innerHTML = `
      <p>${currentWorkout.name} • ${currentWorkout.day}</p>
      <span>Earn ${rewardTokens} of ${currentWorkout.tokens} Tokens</span>
    `;
    list.innerHTML = "";
    currentWorkout.items.forEach((item, index) => {
      const entry = document.createElement("li");
      entry.innerHTML = `
        <span>${item.name}</span>
        <small>${item.sets} sets × ${item.reps}</small>
        <input type="checkbox" data-workout-item="${index}" ${item.completed ? "checked" : ""} />
      `;
      list.appendChild(entry);
    });
    if (completeButton) {
      completeButton.disabled = !completion.allComplete;
    }
  });
}

function renderCalendar() {
  document.querySelectorAll("[data-calendar-grid]").forEach((grid) => {
    grid.innerHTML = "";
    const viewStart = getScheduleViewStart();
    for (let weekIndex = 0; weekIndex < CALENDAR_WEEKS; weekIndex += 1) {
      for (let dayOffset = 0; dayOffset < 7; dayOffset += 1) {
        const date = addDays(viewStart, weekIndex * 7 + dayOffset);
        const entries = getEntriesForDate(date, weekIndex);
        const dayLabel = getDayLabel(date);
        const dayCard = document.createElement("div");
        dayCard.className = "calendar-day";
        if (entries.some((entry) => entry.status === "active")) {
          dayCard.classList.add("active");
        }
        if (entries.some((entry) => entry.status === "planned")) {
          dayCard.classList.add("planned");
        }
        if (entries.some((entry) => entry.status === "done")) {
          dayCard.classList.add("done");
        }

        dayCard.innerHTML = `
          <div class="calendar-day-header">
            <span>${dayLabel}</span>
            <span class="calendar-day-date">${date.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
            })}</span>
          </div>
          <small class="calendar-week-label">Week ${weekIndex + 1}</small>
          <ul class="schedule-list"></ul>
        `;

        const list = dayCard.querySelector(".schedule-list");
        if (entries.length) {
          entries.forEach((entry) => {
            const item = document.createElement("li");
            const button = document.createElement("button");
            button.type = "button";
            button.className = "schedule-entry";
            if (entry.status) {
              button.classList.add(entry.status);
            }
            button.dataset.scheduleId = entry.id;
            const meta = entry.date ? entry.date : `Week ${entry.weekIndex + 1}`;
            button.innerHTML = `
              <strong>${entry.label || "Open"}</strong>
              <small>${meta}</small>
            `;
            item.appendChild(button);
            list.appendChild(item);
          });
        } else {
          const emptyItem = document.createElement("li");
          emptyItem.innerHTML = `<span class="schedule-empty">Open</span>`;
          list.appendChild(emptyItem);
        }

        grid.appendChild(dayCard);
      }
    }
  });
}

function renderFoods() {
  const list = document.querySelector("[data-food-list]");
  const preview = document.querySelector("[data-food-preview]");
  if (list) {
    list.innerHTML = "";
    foods.forEach((food) => {
      const tokenLabel = food.tokens ? ` • ${food.tokens} tokens` : "";
      const item = document.createElement("li");
      item.innerHTML = `
        <div>
          <strong>${food.name}</strong>
          <p class="muted">${food.serving} • ${food.carbs}C / ${food.protein}P / ${food.fat}F${tokenLabel}</p>
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
      const tokenLabel = food.tokens ? ` • ${food.tokens} tokens` : "";
      item.textContent = `${food.name} (${food.serving}) • ${food.carbs}C / ${food.protein}P / ${food.fat}F${tokenLabel}`;
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
    totalLabel.textContent = `Total: ${totals.carbs}C / ${totals.protein}P / ${totals.fat}F (${totals.calories} kcal • ${totals.tokens} tokens)`;
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
      previewTotal.textContent = `Total: ${totals.carbs}C / ${totals.protein}P / ${totals.fat}F • ${totals.tokens} tokens`;
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

function getSkillById(skillId) {
  return skillLookup.get(skillId);
}

function getSkillName(skillId) {
  const skill = getSkillById(skillId);
  return skill ? skill.name : "Unknown skill";
}

function getUnlockedSkillEffects() {
  const effects = [];
  unlockedSkills.forEach((skillId) => {
    const skill = getSkillById(skillId);
    if (skill && Array.isArray(skill.effects)) {
      effects.push(...skill.effects);
    }
  });
  return effects;
}

function getActiveBonusesSummary() {
  const statBonuses = {
    health: 0,
    stamina: 0,
    damage: 0,
  };
  const perkBonuses = new Set();

  getUnlockedSkillEffects().forEach((effect) => {
    if (effect.type === "stat") {
      statBonuses[effect.stat] += effect.amount;
    } else if (effect.label) {
      perkBonuses.add(effect.label);
    }
  });

  return { statBonuses, perkBonuses: Array.from(perkBonuses) };
}

function getGameStateWithBonuses() {
  const derived = { ...gameState };
  const { statBonuses } = getActiveBonusesSummary();
  Object.entries(statBonuses).forEach(([stat, amount]) => {
    if (typeof derived[stat] === "number") {
      derived[stat] += amount;
    }
  });
  return derived;
}

function renderGameBonuses() {
  const list = document.querySelector("[data-game-bonuses]");
  if (!list) {
    return;
  }
  list.innerHTML = "";
  const { statBonuses, perkBonuses } = getActiveBonusesSummary();
  const entries = [];

  Object.entries(statBonuses).forEach(([stat, amount]) => {
    if (amount !== 0) {
      entries.push(`${STAT_LABELS[stat]} +${amount}`);
    }
  });

  perkBonuses.forEach((bonus) => entries.push(bonus));

  if (!entries.length) {
    const empty = document.createElement("li");
    empty.textContent = "No active bonuses yet.";
    list.appendChild(empty);
    return;
  }

  entries.forEach((bonus) => {
    const item = document.createElement("li");
    item.textContent = bonus;
    list.appendChild(item);
  });
}

function renderSpecialAbilities() {
  const list = document.querySelector("[data-special-abilities]");
  if (!list) {
    return;
  }
  list.innerHTML = "";
  SPECIAL_ABILITIES.forEach((ability) => {
    const unlocked = unlockedSkills.has(ability.id);
    const item = document.createElement("li");
    item.innerHTML = `
      <span>${ability.name} (${ability.key})</span>
      <strong>${unlocked ? "Unlocked" : "Locked"}</strong>
    `;
    list.appendChild(item);
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
        const requirementsMet = skill.requires.every((requirement) => unlockedSkills.has(requirement));
        const requirementLabel = requirementsMet
          ? ""
          : `Requires ${skill.requires.map((requirement) => getSkillName(requirement)).join(", ")}`;
        const disabled = unlocked || !requirementsMet || tokens < skill.cost;
        return `
          <li class="skill-entry">
            <div class="skill-details">
              <span class="skill-name">${skill.name}</span>
              ${requirementLabel ? `<span class="skill-requirement">${requirementLabel}</span>` : ""}
            </div>
            <button data-unlock-skill="${skill.id}" data-cost="${skill.cost}" ${disabled ? "disabled" : ""}>
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
  const displayState = getGameStateWithBonuses();
  const stats = [
    { label: "Level", value: displayState.level },
    { label: "Wave", value: displayState.wave },
    { label: "Health", value: displayState.health },
    { label: "Stamina", value: displayState.stamina },
    { label: "Damage", value: displayState.damage },
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
  const completion = getWorkoutCompletion(currentWorkout);
  const rewardTokens = getWorkoutRewardTokens(currentWorkout);
  tokens += rewardTokens;
  updateTokenCount();
  schedule.forEach((entry) => {
    if (entry.label === currentWorkout.name) {
      entry.status = completion.allComplete ? "done" : "active";
    }
  });
  renderCalendar();
  saveState();
}

function createId(value) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

function createUniqueGoalId(title) {
  const base = createId(title);
  let id = base;
  let index = 1;
  while (goals.some((goal) => goal.id === id)) {
    id = `${base}-${index}`;
    index += 1;
  }
  return id;
}

function openGoalModal(goal = null) {
  if (!goalForm || !goalModal) {
    return;
  }
  editingGoalId = goal ? goal.id : null;
  goalModalTitle.textContent = goal ? "Edit Goal" : "Add Goal";
  goalForm.reset();
  if (goal) {
    goalForm.elements.title.value = goal.title;
    goalForm.elements.unit.value = goal.unit;
    goalForm.elements.target.value = goal.target;
    goalForm.elements.reward.value = goal.tokenReward;
    goalForm.elements.category.value = goal.category || "";
  }
  goalModal.classList.add("show");
  goalModal.setAttribute("aria-hidden", "false");
}

function closeGoalModal() {
  if (!goalModal) {
    return;
  }
  goalModal.classList.remove("show");
  goalModal.setAttribute("aria-hidden", "true");
  editingGoalId = null;
  if (goalForm) {
    goalForm.reset();
  }
}

document.addEventListener("click", (event) => {
  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    switchTab(tabButton.dataset.tab);
  }

  const addGoalButton = event.target.closest("[data-add-goal]");
  if (addGoalButton) {
    openGoalModal();
  }

  if (event.target.matches("[data-close-goal-modal]")) {
    closeGoalModal();
  }

  if (event.target.matches("[data-clear-goal-form]")) {
    if (goalForm) {
      goalForm.reset();
    }
  }

  if (event.target.matches("[data-edit-goal]")) {
    const goal = goals.find((item) => item.id === event.target.dataset.editGoal);
    if (goal) {
      openGoalModal(goal);
    }
  }

  if (event.target.matches("[data-delete-goal]")) {
    const id = event.target.dataset.deleteGoal;
    const goalIndex = goals.findIndex((item) => item.id === id);
    if (goalIndex !== -1 && window.confirm("Delete this goal?")) {
      goals.splice(goalIndex, 1);
      renderGoals();
      saveState();
    }
  }

  if (event.target === goalModal) {
    closeGoalModal();
  }

  const feedButton = event.target.closest("[data-feed-button]");
  if (feedButton) {
    const container = feedButton.closest(".feed-actions");
    const select = container ? container.querySelector("[data-meal-select]") : null;
    const tokenInput = container ? container.querySelector("[data-meal-token]") : null;
    const qtyInput = container ? container.querySelector("[data-meal-qty]") : null;
    const overrideValue = tokenInput && tokenInput.value !== "" ? Number(tokenInput.value) : null;
    const quantityValue = qtyInput ? Number(qtyInput.value) : 1;
    logMeal(select ? select.value : null, overrideValue, quantityValue);
    if (tokenInput) {
      tokenInput.value = "";
    }
  }

  if (event.target.matches("[data-add-exercise]")) {
    const exercise = exercises.find((item) => item.id === event.target.dataset.addExercise);
    if (exercise) {
      activeWorkout.items.push({
        id: exercise.id,
        name: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        completed: false,
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
    logMeal(`food:${event.target.dataset.quickLog}`, null, 1);
  }

  if (event.target.matches("[data-unlock-skill]")) {
    const cost = Number(event.target.dataset.cost);
    const skillId = event.target.dataset.unlockSkill;
    const skill = getSkillById(skillId);
    const requirementsMet = skill ? skill.requires.every((requirement) => unlockedSkills.has(requirement)) : false;
    if (skill && !unlockedSkills.has(skillId) && requirementsMet && tokens >= cost) {
      tokens -= cost;
      unlockedSkills.add(skillId);
      updateTokenCount();
      renderSkillTrees();
      renderGameStats();
      renderGameBonuses();
      renderSpecialAbilities();
      saveState();
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
    saveState();
  }

  if (event.target.matches("[data-special-move]")) {
    tokens += 15;
    gameState.stamina = Math.max(0, gameState.stamina - 10);
    updateTokenCount();
    renderGameStats();
    saveState();
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
      saveState();
    }
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-workout-item]")) {
    const index = Number(event.target.dataset.workoutItem);
    const currentWorkout = workouts[0];
    if (currentWorkout && currentWorkout.items[index]) {
      currentWorkout.items[index].completed = event.target.checked;
      renderWorkoutCards();
      saveState();
    }
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-goal-input]")) {
    const goal = goals.find((item) => item.id === event.target.dataset.goalInput);
    if (goal) {
      goal.current = Number(event.target.value);
      updateGoalProgress(goal);
    }
    updateRings();
    saveState();
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

  if (event.target.matches("[data-schedule-start], [data-schedule-end]")) {
    const selector = event.target.matches("[data-schedule-start]")
      ? "[data-schedule-start]"
      : "[data-schedule-end]";
    document.querySelectorAll(selector).forEach((input) => {
      if (input !== event.target) {
        input.value = event.target.value;
      }
    });
    renderCalendar();
  }
});

if (goalForm) {
  goalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(goalForm);
    const title = formData.get("title");
    const unit = formData.get("unit");
    const target = Number(formData.get("target"));
    const tokenRewardValue = Number(formData.get("reward"));
    const tokenReward = Number.isFinite(tokenRewardValue) ? tokenRewardValue : 0;
    const category = formData.get("category") || "";

    if (!title || !unit || !target) {
      return;
    }

    if (editingGoalId) {
      const goal = goals.find((item) => item.id === editingGoalId);
      if (goal) {
        goal.title = title;
        goal.unit = unit;
        goal.target = target;
        goal.tokenReward = tokenReward;
        goal.category = category;
        goal.completed = goal.target ? goal.current >= goal.target : false;
      }
    } else {
      goals.unshift({
        id: createUniqueGoalId(title),
        title,
        unit,
        target,
        current: 0,
        tokenReward,
        category,
        completed: false,
      });
    }

    normalizeGoals();
    renderGoals();
    saveState();
    closeGoalModal();
  });
}

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
    const workoutTokensValue = Number(formData.get("tokens"));
    const workoutTokens = Number.isFinite(workoutTokensValue) ? workoutTokensValue : 0;

    workouts.unshift({
      id: createId(name),
      name,
      day,
      week,
      tokens: workoutTokens,
      items: activeWorkout.items.map((item) => ({
        ...item,
        completed: false,
      })),
    });

    const weekIndex = getWeekIndexFromLabel(week) ?? 0;
    const scheduleEntry = schedule.find(
      (entry) => !entry.date && entry.day === day && entry.weekIndex === weekIndex,
    );
    if (scheduleEntry) {
      scheduleEntry.label = name;
      scheduleEntry.status = "planned";
    } else {
      schedule.push({
        id: createId(`${name}-${day}-week-${weekIndex + 1}`),
        day,
        weekIndex,
        label: name,
        status: "planned",
      });
    }

    form.reset();
    renderWorkouts();
    renderWorkoutCards();
    renderCalendar();
    saveState();
  });
});

document.querySelectorAll("[data-schedule-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const label = formData.get("label");
    const day = formData.get("day");
    const recurrence = formData.get("recurrence");
    const startValue = formData.get("start");
    const endValue = formData.get("end");

    if (!label || !day || !startValue || !endValue) {
      return;
    }

    const startDate = parseDateKey(startValue);
    const endDate = parseDateKey(endValue);
    if (startDate > endDate) {
      return;
    }

    const entries = buildRecurringScheduleEntries({
      label,
      day,
      recurrence,
      startDate,
      endDate,
    });
    const entryDates = new Set(entries.map((entry) => entry.date));
    const filteredSchedule = schedule.filter(
      (entry) => !(entry.label === label && entry.date && entryDates.has(entry.date)),
    );
    replaceArray(schedule, filteredSchedule);
    entries.forEach((entry) => schedule.push(entry));

    form.querySelectorAll('input[name="label"]').forEach((input) => {
      input.value = "";
    });
    renderCalendar();
    saveState();
  });
});

document.querySelectorAll("[data-food-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const tokenValue = Number(formData.get("tokens"));
    const tokenReward = Number.isFinite(tokenValue) ? tokenValue : 0;
    const food = {
      id: createId(name),
      name,
      serving: formData.get("serving"),
      calories: Number(formData.get("calories")),
      protein: Number(formData.get("protein")),
      carbs: Number(formData.get("carbs")),
      fat: Number(formData.get("fat")),
      tokens: tokenReward,
    };
    foods.push(food);
    form.reset();
    renderFoods();
    renderMealSelects();
    renderRecipeSelect();
    saveState();
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
    saveState();
  });
});

const savedState = loadState();
if (savedState) {
  applyState(savedState);
}

normalizeGoals();
normalizeWorkouts();
normalizeFoods();
normalizeSchedule();
initializeScheduleForms();
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
renderGameBonuses();
renderSpecialAbilities();
renderWaveLog();
updateMacros();
updateTokenCount();
