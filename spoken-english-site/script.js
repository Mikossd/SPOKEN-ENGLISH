const drills = {
  "small-talk": [
    {
      topic: "Small talk",
      situation: "You meet a classmate before a lesson.",
      target: "Hi, how are you doing today?",
      keywords: ["hi", "how", "today"],
      tip: "Keep your voice calm and finish with one question."
    },
    {
      topic: "Small talk",
      situation: "A friend asks about your weekend.",
      target: "It was good. I relaxed and met my friends.",
      keywords: ["good", "relaxed", "friends"],
      tip: "Use two short ideas: feeling plus activity."
    },
    {
      topic: "Small talk",
      situation: "You want to continue a short conversation.",
      target: "What about you?",
      keywords: ["what", "about", "you"],
      tip: "This small question keeps the conversation moving."
    }
  ],
  campus: [
    {
      topic: "At university",
      situation: "You need to ask when the lesson starts.",
      target: "What time does the class start?",
      keywords: ["time", "class", "start"],
      tip: "Start with What time and keep the rest simple."
    },
    {
      topic: "At university",
      situation: "You did not understand the homework.",
      target: "Could you explain the homework again?",
      keywords: ["explain", "homework", "again"],
      tip: "Could you makes the request sound polite."
    },
    {
      topic: "At university",
      situation: "You want to study with a classmate.",
      target: "Do you want to study together after class?",
      keywords: ["study", "together", "after"],
      tip: "Use Do you want to for friendly invitations."
    }
  ],
  requests: [
    {
      topic: "Asking for help",
      situation: "You need someone to repeat a sentence.",
      target: "Sorry, could you repeat that, please?",
      keywords: ["sorry", "repeat", "please"],
      tip: "Sorry at the start makes the request natural."
    },
    {
      topic: "Asking for help",
      situation: "You cannot find a room.",
      target: "Excuse me, where is room 204?",
      keywords: ["excuse", "where", "room"],
      tip: "Use Excuse me before asking a stranger."
    },
    {
      topic: "Asking for help",
      situation: "You need a slower explanation.",
      target: "Can you speak more slowly, please?",
      keywords: ["speak", "slowly", "please"],
      tip: "This is useful when you understand some words but not all."
    }
  ],
  plans: [
    {
      topic: "Plans",
      situation: "A friend asks what you will do tonight.",
      target: "I am going to finish my homework tonight.",
      keywords: ["going", "finish", "tonight"],
      tip: "I am going to is easy and natural for plans."
    },
    {
      topic: "Plans",
      situation: "You want to invite a classmate for coffee.",
      target: "Would you like to get coffee after class?",
      keywords: ["would", "coffee", "after"],
      tip: "Would you like to is polite and friendly."
    },
    {
      topic: "Plans",
      situation: "You are busy tomorrow.",
      target: "I can't tomorrow, but I am free on Friday.",
      keywords: ["can't", "tomorrow", "free"],
      tip: "Give a reason and a new time."
    }
  ]
};

const phrases = [
  ["Greeting", "Nice to meet you.", "Use it when you meet someone for the first time."],
  ["Greeting", "Long time no see.", "Use it with a person you have not seen for a while."],
  ["Feeling", "I'm a little tired, but I'm okay.", "A simple answer that sounds natural."],
  ["Clarifying", "What do you mean?", "Use it when the idea is not clear."],
  ["Clarifying", "Could you say that again?", "A polite way to ask for repetition."],
  ["Opinion", "I think it is a good idea.", "A basic opinion sentence."],
  ["Opinion", "I'm not sure about that.", "A soft way to disagree."],
  ["Request", "Can I ask you a question?", "Good before asking for help."],
  ["Request", "Could you help me with this?", "Useful in class or study groups."],
  ["Plans", "I'm going to study tonight.", "Simple future plan."],
  ["Plans", "Maybe we can meet after class.", "A casual suggestion."],
  ["Ending", "It was nice talking to you.", "A friendly way to end a conversation."]
];

const roleplays = {
  cafe: {
    coach: "Use I would like or Can I have.",
    lines: [
      ["partner", "Hi. What would you like?"],
      ["user", "I would like a coffee, please."],
      ["partner", "Small or large?"],
      ["user", "A small one, please."],
      ["partner", "Anything else?"],
      ["user", "No, thank you. That's all."]
    ]
  },
  classmate: {
    coach: "Ask one question back after you answer.",
    lines: [
      ["partner", "Hi, are you new in this class?"],
      ["user", "Yes, this is my first week here."],
      ["partner", "Do you like the course?"],
      ["user", "Yes, I like it. What about you?"],
      ["partner", "I like it too. Do you want to study together?"],
      ["user", "Sure, that sounds good."]
    ]
  },
  teacher: {
    coach: "Begin politely and name the problem.",
    lines: [
      ["partner", "Hello. How can I help you?"],
      ["user", "Excuse me, I have a question about the homework."],
      ["partner", "Sure. What is the question?"],
      ["user", "I don't understand exercise three."],
      ["partner", "Okay, let's look at it together."],
      ["user", "Thank you, that helps a lot."]
    ]
  }
};

const routine = [
  ["Mon", "Small talk", "3 greetings and 2 follow-up questions"],
  ["Tue", "Campus help", "repeat, explain, ask for homework"],
  ["Wed", "Cafe dialogue", "order, size, price, thanks"],
  ["Thu", "Opinions", "agree, disagree, give a reason"],
  ["Fri", "Plans", "invite, accept, refuse politely"],
  ["Sat", "Review", "repeat the hardest 10 phrases"],
  ["Sun", "Free talk", "record one 60-second answer"]
];

const state = {
  topic: "small-talk",
  drillIndex: 0,
  level: "easy",
  roleplay: "cafe",
  roleplayIndex: 0,
  stats: loadStats()
};

const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll("[data-view-panel]");
const lessonCards = document.querySelectorAll(".lesson-card");
const answerInput = document.querySelector("#answer-input");
const feedbackBox = document.querySelector("#feedback-box");

function loadStats() {
  const fallback = { drills: 0, phrases: 0, minutes: 0, clarity: 0, completedDays: [] };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem("speaklab-stats")) };
  } catch {
    return fallback;
  }
}

function saveStats() {
  localStorage.setItem("speaklab-stats", JSON.stringify(state.stats));
  renderStats();
  renderRoutine();
}

function currentDrill() {
  return drills[state.topic][state.drillIndex % drills[state.topic].length];
}

function renderDrill() {
  const drill = currentDrill();
  document.querySelector("#drill-topic").textContent = drill.topic;
  document.querySelector("#drill-situation").textContent = drill.situation;
  document.querySelector("#target-line").textContent = drill.target;
  answerInput.value = "";
  feedbackBox.innerHTML = `<strong>Ready when you are.</strong><p>${drill.tip}</p>`;
}

function renderStats() {
  const goal = Math.min(state.stats.drills, 5);
  const clarity = state.stats.clarity || 0;
  document.querySelector("#goal-count").textContent = goal;
  document.querySelector("#goal-bar").style.width = `${goal * 20}%`;
  document.querySelector("#streak-copy").textContent = goal >= 5 ? "Daily goal complete." : `${5 - goal} short answers left.`;
  document.querySelector("#today-minutes").textContent = state.stats.minutes;
  document.querySelector("#today-phrases").textContent = state.stats.phrases;
  document.querySelector("#today-score").textContent = clarity;
  document.querySelector("#metric-drills").textContent = state.stats.drills;
  document.querySelector("#metric-phrases").textContent = state.stats.phrases;
  document.querySelector("#metric-minutes").textContent = state.stats.minutes;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = state.level === "fast" ? 1.05 : state.level === "normal" ? 0.92 : 0.78;
  window.speechSynthesis.speak(utterance);
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z'\s]/g, " ").split(/\s+/).filter(Boolean);
}

function checkAnswer() {
  const drill = currentDrill();
  const words = normalize(answerInput.value);
  const matched = drill.keywords.filter((keyword) => words.includes(keyword));
  const score = Math.round((matched.length / drill.keywords.length) * 100);
  const message = score >= 67
    ? "Good. Your answer has the main idea."
    : "Try again with the key words from the target phrase.";
  const hint = matched.length ? `Matched: ${matched.join(", ")}.` : `Useful words: ${drill.keywords.join(", ")}.`;
  feedbackBox.innerHTML = `<strong>${message}</strong><p>${hint}</p>`;
  state.stats.clarity = Math.round(((state.stats.clarity || 0) + score) / 2);
  saveStats();
}

function completeDrill() {
  state.stats.drills += 1;
  state.stats.phrases += 1;
  state.stats.minutes += state.level === "fast" ? 1 : 2;
  const dayIndex = Math.min(6, Math.floor(state.stats.drills / 3));
  if (!state.stats.completedDays.includes(dayIndex)) {
    state.stats.completedDays.push(dayIndex);
  }
  saveStats();
  nextDrill();
}

function nextDrill() {
  state.drillIndex = (state.drillIndex + 1) % drills[state.topic].length;
  renderDrill();
}

function renderPhrases(filter = "") {
  const grid = document.querySelector("#phrase-grid");
  const query = filter.trim().toLowerCase();
  const visible = phrases
    .map((phrase, index) => ({ phrase, index }))
    .filter(({ phrase }) => phrase.join(" ").toLowerCase().includes(query));
  grid.innerHTML = visible.map(({ phrase, index }) => {
    const [topic, text, note] = phrase;
    return `
    <article class="phrase-card">
      <span class="topic-chip">${topic}</span>
      <h3>${text}</h3>
      <p>${note}</p>
      <button class="listen-button" type="button" data-phrase="${index}">
        <span aria-hidden="true">▷</span>
        Listen
      </button>
    </article>
  `;
  }).join("");
}

function renderRoleplay() {
  const data = roleplays[state.roleplay];
  const panel = document.querySelector("#dialogue-panel");
  const lines = data.lines.slice(0, state.roleplayIndex + 1);
  panel.innerHTML = lines.map(([role, text]) => `<div class="bubble ${role}">${text}</div>`).join("");
  document.querySelector("#coach-note").textContent = data.coach;
}

function nextRoleplayLine() {
  const data = roleplays[state.roleplay];
  const line = data.lines[state.roleplayIndex];
  if (line) speak(line[1]);
  state.roleplayIndex = (state.roleplayIndex + 1) % data.lines.length;
  renderRoleplay();
}

function renderRoutine() {
  const list = document.querySelector("#routine-list");
  list.innerHTML = routine.map(([day, title, task], index) => {
    const done = state.stats.completedDays.includes(index);
    return `
      <div class="routine-item">
        <span class="routine-day">${day}</span>
        <span>
          <strong>${title}</strong>
          <small>${task}</small>
        </span>
        <span class="status-dot ${done ? "done" : ""}" aria-label="${done ? "Done" : "Open"}"></span>
      </div>
    `;
  }).join("");
}

function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    feedbackBox.innerHTML = "<strong>Speech input is not available here.</strong><p>You can type your answer and say it aloud.</p>";
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    feedbackBox.innerHTML = "<strong>Listening...</strong><p>Speak one short sentence.</p>";
  };
  recognition.onresult = (event) => {
    answerInput.value = event.results[0][0].transcript;
    checkAnswer();
  };
  recognition.onerror = () => {
    feedbackBox.innerHTML = "<strong>I could not hear that clearly.</strong><p>Try one sentence again, a little slower.</p>";
  };
  recognition.start();
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const view = item.dataset.view;
    navItems.forEach((button) => {
      button.classList.toggle("is-active", button === item);
      button.setAttribute("aria-pressed", String(button === item));
    });
    panels.forEach((panel) => panel.classList.toggle("is-visible", panel.dataset.viewPanel === view));
    document.querySelector(`#${view}`)?.scrollIntoView({ block: "start" });
  });
});

lessonCards.forEach((card) => {
  card.addEventListener("click", () => {
    state.topic = card.dataset.topic;
    state.drillIndex = 0;
    lessonCards.forEach((item) => item.classList.toggle("is-active", item === card));
    renderDrill();
  });
});

document.querySelectorAll("[data-level]").forEach((button) => {
  button.addEventListener("click", () => {
    state.level = button.dataset.level;
    document.querySelectorAll("[data-level]").forEach((item) => item.classList.toggle("is-selected", item === button));
  });
});

document.querySelector("#shuffle-drill").addEventListener("click", nextDrill);
document.querySelector("#listen-target").addEventListener("click", () => speak(currentDrill().target));
document.querySelector("#check-answer").addEventListener("click", checkAnswer);
document.querySelector("#complete-drill").addEventListener("click", completeDrill);
document.querySelector("#record-answer").addEventListener("click", startSpeechRecognition);
document.querySelector("#quick-start").addEventListener("click", () => {
  document.querySelector('[data-view="practice"]').click();
  speak(currentDrill().target);
});

document.querySelector("#phrase-search").addEventListener("input", (event) => renderPhrases(event.target.value));
document.querySelector("#phrase-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-phrase]");
  if (!button) return;
  const [, text] = phrases[Number(button.dataset.phrase)];
  state.stats.phrases += 1;
  saveStats();
  speak(text);
});

document.querySelector("#roleplay-select").addEventListener("change", (event) => {
  state.roleplay = event.target.value;
  state.roleplayIndex = 0;
  renderRoleplay();
});

document.querySelector("#next-line").addEventListener("click", nextRoleplayLine);
document.querySelector("#reset-progress").addEventListener("click", () => {
  state.stats = { drills: 0, phrases: 0, minutes: 0, clarity: 0, completedDays: [] };
  saveStats();
  renderRoutine();
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

renderDrill();
renderPhrases();
renderRoleplay();
renderRoutine();
renderStats();
