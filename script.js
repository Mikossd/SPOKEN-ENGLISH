const drills = {
  work: [
    {
      topic: "Work & interviews",
      question: "What skills are most important when people start their first job?",
      structure: "Opinion → reason → real example → short conclusion",
      ideas: "communication, reliability, problem-solving, learning quickly",
      followUp: "Would you prefer to work alone or in a team?",
      keywords: ["skills", "communication", "reliable", "team", "learn"],
      tip: "Give a clear opinion and support it with a realistic workplace example.",
      sample: "In my opinion, communication is the most important skill because new employees need to ask questions and understand expectations. For example, if someone is unsure about a task, it is better to clarify it early than to make a serious mistake."
    },
    {
      topic: "Work & interviews",
      question: "Tell me about a time when you had to solve a problem under pressure.",
      structure: "Situation → action → result → lesson learned",
      ideas: "deadline, group project, customer issue, unexpected change",
      followUp: "What would you do differently next time?",
      keywords: ["problem", "pressure", "solution", "result", "learned"],
      tip: "Use past tenses and explain the result, not only the problem.",
      sample: "During a group project, one teammate became unavailable before the deadline, so I divided the remaining tasks and suggested a short online meeting. As a result, we finished on time and I learned to make backup plans earlier."
    },
    {
      topic: "Work & interviews",
      question: "How should a person respond to negative feedback at work?",
      structure: "Balanced opinion → example → practical advice",
      ideas: "listen first, ask questions, improve, do not react emotionally",
      followUp: "Is all feedback useful?",
      keywords: ["feedback", "listen", "improve", "questions", "professional"],
      tip: "Sound mature: accept useful feedback, but mention that feedback should be specific.",
      sample: "I think a person should listen carefully before reacting because feedback can show problems they do not notice. If the feedback is specific, they can turn it into a plan for improvement."
    }
  ],
  services: [
    {
      topic: "Daily services",
      question: "How would you politely complain if a service you paid for was poor?",
      structure: "Problem → evidence → request → polite ending",
      ideas: "wrong order, late delivery, bank problem, phone support",
      followUp: "When is it better to call instead of sending a message?",
      keywords: ["complain", "service", "problem", "request", "refund"],
      tip: "Use polite but firm language: I expected..., Could you..., I would appreciate...",
      sample: "I would explain the problem calmly and give evidence, such as the order number or photos. Then I would ask for a refund or a replacement because being polite makes the person more likely to help."
    },
    {
      topic: "Daily services",
      question: "What information should you prepare before calling customer support?",
      structure: "List → explain why → example",
      ideas: "account number, date, screenshot, receipt, clear description",
      followUp: "What makes customer support conversations stressful?",
      keywords: ["account", "receipt", "problem", "details", "support"],
      tip: "Mention practical details and why they save time.",
      sample: "Before calling support, I would prepare my account details, the date of the problem, and a short description of what happened. This helps the agent understand the case quickly."
    },
    {
      topic: "Daily services",
      question: "Why do people sometimes avoid going to the doctor even when they need help?",
      structure: "Reason 1 → reason 2 → solution",
      ideas: "cost, time, fear, language barrier, embarrassment",
      followUp: "How can clinics make appointments easier?",
      keywords: ["doctor", "fear", "cost", "appointment", "health"],
      tip: "Use cautious language: Some people may..., It could be because...",
      sample: "Some people avoid going to the doctor because they are worried about the cost or they feel embarrassed about the problem. Clinics could make this easier by offering clear information and online booking."
    }
  ],
  travel: [
    {
      topic: "Travel problems",
      question: "What would you do if your flight or train was suddenly cancelled?",
      structure: "Immediate action → communication → backup plan",
      ideas: "check updates, ask staff, rebook, inform people, stay calm",
      followUp: "Do travel apps make people more independent?",
      keywords: ["cancelled", "staff", "rebook", "message", "plan"],
      tip: "Use conditionals: If this happened, I would...",
      sample: "If my train was cancelled, I would first check the official app and ask staff about alternatives. Then I would message anyone waiting for me and look for another route."
    },
    {
      topic: "Travel problems",
      question: "How can you stay safe when you arrive in a new city at night?",
      structure: "Advice → reason → example",
      ideas: "official taxi, maps, hotel address, avoid isolated places",
      followUp: "Is it better to travel alone or with friends?",
      keywords: ["safe", "taxi", "hotel", "map", "night"],
      tip: "Use modal verbs: should, need to, must not.",
      sample: "I think you should use official transport and keep your hotel address ready. For example, I would avoid walking through empty streets with luggage late at night."
    },
    {
      topic: "Travel problems",
      question: "What makes a hotel review trustworthy?",
      structure: "Criteria → example → warning",
      ideas: "specific details, recent date, balanced tone, photos",
      followUp: "Do you trust online reviews?",
      keywords: ["review", "specific", "recent", "photos", "trust"],
      tip: "Compare useful and suspicious reviews.",
      sample: "A trustworthy review usually includes specific details, recent dates, and a balanced tone. If a review only says everything was perfect or terrible without examples, I trust it less."
    }
  ],
  technology: [
    {
      topic: "Technology & AI",
      question: "How can students use AI tools responsibly without losing their own skills?",
      structure: "Position → benefit → risk → personal rule",
      ideas: "brainstorming, feedback, plagiarism, critical thinking",
      followUp: "Should universities allow AI in homework?",
      keywords: ["AI", "students", "responsibly", "skills", "feedback"],
      tip: "This is a current topic, so give a balanced answer with one personal rule.",
      sample: "Students can use AI responsibly if they treat it as a tutor rather than a shortcut. For instance, AI can explain mistakes, but the student should still write the final answer in their own words."
    },
    {
      topic: "Technology & AI",
      question: "What personal information should people avoid sharing online?",
      structure: "Examples → reason → prevention",
      ideas: "address, passwords, documents, location, bank details",
      followUp: "Are people careful enough with privacy?",
      keywords: ["privacy", "passwords", "address", "online", "protect"],
      tip: "Use should avoid + gerund: sharing, posting, sending.",
      sample: "People should avoid sharing their address, passwords, private documents, and live location online. This information can be used for scams or identity theft."
    },
    {
      topic: "Technology & AI",
      question: "Do you think remote work makes communication easier or harder?",
      structure: "Compare both sides → example → conclusion",
      ideas: "flexibility, messages, misunderstandings, video calls",
      followUp: "What kind of work should not be remote?",
      keywords: ["remote", "communication", "easier", "harder", "meetings"],
      tip: "Use contrast words: however, on the other hand, at the same time.",
      sample: "Remote work can make communication easier because people can send quick messages, but it can also create misunderstandings. In my view, regular short meetings help teams stay connected."
    }
  ],
  "study-life": [
    {
      topic: "Study & life",
      question: "How can students manage stress when they have many deadlines?",
      structure: "Problem → method → example → result",
      ideas: "priorities, schedule, breaks, sleep, asking for help",
      followUp: "Is stress always bad?",
      keywords: ["stress", "deadlines", "schedule", "breaks", "priorities"],
      tip: "Give practical advice and avoid only saying relax.",
      sample: "Students can manage stress by prioritising tasks and making a realistic schedule. For example, I would finish urgent tasks first and take short breaks so I do not lose focus."
    },
    {
      topic: "Study & life",
      question: "Should students work part-time while studying?",
      structure: "Balanced opinion → advantage → disadvantage → conclusion",
      ideas: "money, experience, time management, tiredness, grades",
      followUp: "What kind of part-time job is best for students?",
      keywords: ["part-time", "studying", "experience", "money", "time"],
      tip: "A B2 answer often shows both sides before giving a final opinion.",
      sample: "Part-time work can be useful because students gain experience and earn money. However, if the job takes too much time, it can affect their grades, so the number of hours should be reasonable."
    },
    {
      topic: "Study & life",
      question: "What habit has the biggest effect on long-term success?",
      structure: "Opinion → explanation → personal example",
      ideas: "consistency, reading, planning, exercise, reflection",
      followUp: "Can motivation be trained?",
      keywords: ["habit", "success", "consistent", "planning", "long-term"],
      tip: "Use abstract language plus a concrete example.",
      sample: "I believe consistency has the biggest effect on long-term success because small actions become powerful over time. For example, studying English for twenty minutes every day is better than studying for five hours once a month."
    }
  ]
};

const phrases = [
  ["Opening", "In my opinion, the main issue is...", "Start with a clear position."],
  ["Balancing", "On the one hand..., but on the other hand...", "Show both sides of a topic."],
  ["Reason", "The reason I say this is that...", "Connect your opinion to logic."],
  ["Example", "A good example of this would be...", "Add a concrete real-world example."],
  ["Clarifying", "What I mean is...", "Repair your answer if it becomes unclear."],
  ["Softening", "I would say it depends on the situation.", "Avoid sounding too absolute."],
  ["Agreement", "I see your point, but I would add that...", "Agree and extend the idea."],
  ["Disagreement", "I'm not completely convinced because...", "Disagree politely."],
  ["Complaint", "I understand mistakes happen, but I expected...", "Polite complaint language."],
  ["Request", "Would it be possible to...?", "Formal request for services or work."],
  ["Result", "As a result, I learned that...", "Finish a story with a lesson."],
  ["Conclusion", "Overall, I think the best approach is...", "Close a longer answer clearly."]
];

const roleplays = {
  interview: {
    coach: "Use STAR: situation, task, action, result. Avoid memorised one-line answers.",
    lines: [
      ["partner", "Can you tell me about a challenge you solved recently?"],
      ["user", "Yes. In a group project, we had a deadline problem, so I organised the tasks and helped the team finish on time."],
      ["partner", "What did you learn from that experience?"],
      ["user", "I learned that clear communication is important, especially when people are under pressure."],
      ["partner", "Why should we choose you for this role?"],
      ["user", "I am reliable, I learn quickly, and I try to solve problems instead of waiting for someone else."]
    ]
  },
  complaint: {
    coach: "Be polite, specific, and clear about the solution you want.",
    lines: [
      ["partner", "Hello, how can I help you today?"],
      ["user", "I ordered this product last week, but it arrived damaged."],
      ["partner", "I'm sorry to hear that. Do you have the order number?"],
      ["user", "Yes, I do. I can also send a photo of the damage if necessary."],
      ["partner", "Would you prefer a replacement or a refund?"],
      ["user", "A replacement would be fine, as long as it can be sent this week."]
    ]
  },
  healthcare: {
    coach: "Describe symptoms clearly: when they started, how strong they are, and what you have tried.",
    lines: [
      ["partner", "What seems to be the problem?"],
      ["user", "I've had a sore throat and a headache for three days."],
      ["partner", "Do you have a fever?"],
      ["user", "I had a mild fever yesterday, but it is lower today."],
      ["partner", "Have you taken any medicine?"],
      ["user", "Only painkillers, but they helped for a short time."]
    ]
  },
  groupwork: {
    coach: "Use collaborative language: suggest, compromise, clarify, and confirm.",
    lines: [
      ["partner", "We need to decide who will present the project."],
      ["user", "I can present the introduction if someone else explains the data."],
      ["partner", "I'm worried we do not have enough time."],
      ["user", "I understand. Maybe we should focus on the strongest points and keep the design simple."],
      ["partner", "Can you send your part tonight?"],
      ["user", "Yes, I can send a draft by eight, and you can give me feedback."]
    ]
  }
};

const routine = [
  ["Mon", "Opinion answers", "5 questions with reason + example"],
  ["Tue", "Service language", "complaints, requests, support calls"],
  ["Wed", "Problem stories", "situation, action, result, lesson"],
  ["Thu", "Current topics", "AI, privacy, remote work, online habits"],
  ["Fri", "Travel pressure", "delays, hotels, safety, directions"],
  ["Sat", "Roleplay day", "interview + complaint + clinic"],
  ["Sun", "B2 review", "record one 90-second answer and correct it"]
];

const issueRules = [
  {
    type: "Grammar",
    regex: /\bI am agree\b/gi,
    fix: "I agree",
    reason: "After I, use the verb agree directly. Do not add am."
  },
  {
    type: "Grammar",
    regex: /\bI am not agree\b/gi,
    fix: "I do not agree",
    reason: "Use do not agree for a negative opinion."
  },
  {
    type: "Preposition",
    regex: /\bdiscuss about\b/gi,
    fix: "discuss",
    reason: "Discuss already means talk about, so about is not needed."
  },
  {
    type: "Preposition",
    regex: /\bdepends of\b/gi,
    fix: "depends on",
    reason: "The correct collocation is depend on."
  },
  {
    type: "Comparison",
    regex: /\bmore better\b/gi,
    fix: "better",
    reason: "Better is already comparative."
  },
  {
    type: "Uncountable noun",
    regex: /\binformations\b/gi,
    fix: "information",
    reason: "Information is uncountable in English."
  },
  {
    type: "Uncountable noun",
    regex: /\badvices\b/gi,
    fix: "advice",
    reason: "Advice is uncountable. Use pieces of advice if you need a countable form."
  },
  {
    type: "Verb form",
    regex: /\bcan to\b/gi,
    fix: "can",
    reason: "After modal verbs, use the base verb without to."
  },
  {
    type: "Verb form",
    regex: /\bmust to\b/gi,
    fix: "must",
    reason: "After must, use the base verb without to."
  },
  {
    type: "Subject-verb agreement",
    regex: /\bpeople is\b/gi,
    fix: "people are",
    reason: "People is plural in standard English."
  },
  {
    type: "Subject-verb agreement",
    regex: /\b(he|she|it) don't\b/gi,
    fix: "$1 doesn't",
    reason: "Use doesn't with he, she, and it."
  },
  {
    type: "Word choice",
    regex: /\bmake a photo\b/gi,
    fix: "take a photo",
    reason: "The natural collocation is take a photo."
  },
  {
    type: "Word choice",
    regex: /\bget a decision\b/gi,
    fix: "make a decision",
    reason: "Use make a decision."
  }
];

const state = {
  topic: "work",
  drillIndex: 0,
  level: "guided",
  roleplay: "interview",
  roleplayIndex: 0,
  stats: loadStats()
};

const navItems = document.querySelectorAll(".nav-item");
const panels = document.querySelectorAll("[data-view-panel]");
const lessonCards = document.querySelectorAll(".lesson-card");
const answerInput = document.querySelector("#answer-input");
const feedbackBox = document.querySelector("#feedback-box");
const answerMarkup = document.querySelector("#answer-markup");
const issueList = document.querySelector("#issue-list");
const analysisScore = document.querySelector("#analysis-score");

function loadStats() {
  const fallback = { drills: 0, phrases: 0, minutes: 0, clarity: 0, completedDays: [] };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem("speaklab-b2-stats")) };
  } catch {
    return fallback;
  }
}

function saveStats() {
  localStorage.setItem("speaklab-b2-stats", JSON.stringify(state.stats));
  renderStats();
  renderRoutine();
}

function currentDrill() {
  return drills[state.topic][state.drillIndex % drills[state.topic].length];
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderDrill() {
  const drill = currentDrill();
  document.querySelector("#drill-topic").textContent = drill.topic;
  document.querySelector("#drill-situation").textContent = drill.question;
  document.querySelector("#target-line").textContent = drill.structure;
  document.querySelector("#idea-line").textContent = drill.ideas;
  document.querySelector("#follow-up-line").textContent = drill.followUp;
  answerInput.value = "";
  feedbackBox.innerHTML = `<strong>Ready for a B2 answer.</strong><p>${drill.tip}</p>`;
  answerMarkup.textContent = "Your checked answer will appear here.";
  issueList.innerHTML = "";
  analysisScore.textContent = "0%";
}

function renderStats() {
  const goal = Math.min(state.stats.drills, 5);
  const clarity = state.stats.clarity || 0;
  document.querySelector("#goal-count").textContent = goal;
  document.querySelector("#goal-bar").style.width = `${goal * 20}%`;
  document.querySelector("#streak-copy").textContent = goal >= 5 ? "Daily B2 goal complete." : `${5 - goal} checked answers left.`;
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
  utterance.rate = state.level === "natural" ? 1 : state.level === "exam" ? 0.92 : 0.82;
  window.speechSynthesis.speak(utterance);
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z'\s-]/g, " ").split(/\s+/).filter(Boolean);
}

function sentenceCount(text) {
  return text.split(/[.!?]+/).map((part) => part.trim()).filter(Boolean).length;
}

function findIssues(text) {
  const issues = [];

  issueRules.forEach((rule) => {
    const regex = new RegExp(rule.regex.source, rule.regex.flags.includes("g") ? rule.regex.flags : `${rule.regex.flags}g`);
    let match = regex.exec(text);
    while (match) {
      issues.push({
        start: match.index,
        end: match.index + match[0].length,
        original: match[0],
        fix: match[0].replace(rule.regex, rule.fix),
        type: rule.type,
        reason: rule.reason
      });
      match = regex.exec(text);
    }
  });

  const lower = text.toLowerCase();
  const iMatches = [...text.matchAll(/\bi\b/g)];
  iMatches.forEach((match) => {
    issues.push({
      start: match.index,
      end: match.index + 1,
      original: "i",
      fix: "I",
      type: "Capitalization",
      reason: "The pronoun I is always capitalised."
    });
  });

  if (sentenceCount(text) <= 1 && normalize(text).length > 35) {
    issues.push({
      start: 0,
      end: Math.min(text.length, 1),
      original: "long sentence",
      fix: "Split your answer into 2-4 sentences",
      type: "Fluency",
      reason: "A B2 answer is easier to follow when ideas are separated into clear sentences."
    });
  }

  if (!/\b(because|since|as|so|therefore|for example|for instance)\b/i.test(lower)) {
    issues.push({
      start: 0,
      end: Math.min(text.length, 1),
      original: "missing support",
      fix: "Add because or for example",
      type: "Content",
      reason: "B2 answers should usually include a reason or example, not only an opinion."
    });
  }

  return issues
    .sort((a, b) => a.start - b.start || b.end - a.end)
    .filter((issue, index, all) => index === 0 || issue.start >= all[index - 1].end);
}

function renderHighlightedAnswer(text, issues) {
  if (!text.trim()) {
    answerMarkup.textContent = "Write or speak an answer first.";
    return;
  }

  let html = "";
  let cursor = 0;
  issues.forEach((issue) => {
    html += escapeHtml(text.slice(cursor, issue.start));
    html += `<mark title="${escapeHtml(issue.reason)}">${escapeHtml(text.slice(issue.start, issue.end))}</mark>`;
    cursor = issue.end;
  });
  html += escapeHtml(text.slice(cursor));
  answerMarkup.innerHTML = html || escapeHtml(text);
}

function scoreAnswer(text, issues) {
  const drill = currentDrill();
  const words = normalize(text);
  const uniqueWords = new Set(words);
  const matchedKeywords = drill.keywords.filter((keyword) => words.includes(keyword.toLowerCase()));
  const connectors = ["because", "however", "although", "therefore", "actually", "personally", "overall", "example", "instance", "while", "whereas"];
  const connectorCount = connectors.filter((connector) => words.includes(connector)).length;
  const lengthScore = Math.min(100, Math.round((words.length / 70) * 100));
  const contentScore = Math.min(100, Math.round((matchedKeywords.length / Math.max(3, drill.keywords.length)) * 70 + (/\b(because|for example|for instance)\b/i.test(text) ? 30 : 0)));
  const rangeScore = Math.min(100, Math.round((uniqueWords.size / Math.max(words.length, 1)) * 55 + connectorCount * 15 + sentenceCount(text) * 5));
  const grammarScore = Math.max(20, 100 - issues.filter((issue) => issue.type !== "Content").length * 16);
  const fluencyScore = Math.min(100, Math.round(lengthScore * 0.55 + Math.min(sentenceCount(text), 4) * 12 + connectorCount * 6));
  const total = Math.round(contentScore * 0.3 + grammarScore * 0.3 + rangeScore * 0.2 + fluencyScore * 0.2);

  return {
    total,
    contentScore,
    grammarScore,
    rangeScore,
    fluencyScore,
    matchedKeywords
  };
}

function renderIssues(issues, scores) {
  const scoreRows = `
    <div class="score-grid">
      <span>Content <strong>${scores.contentScore}%</strong></span>
      <span>Grammar <strong>${scores.grammarScore}%</strong></span>
      <span>Range <strong>${scores.rangeScore}%</strong></span>
      <span>Fluency <strong>${scores.fluencyScore}%</strong></span>
    </div>
  `;

  if (!issues.length) {
    issueList.innerHTML = `${scoreRows}<div class="issue-card good"><strong>No obvious rule-based mistakes found.</strong><p>Now improve the answer by adding a more specific example or a stronger conclusion.</p></div>`;
    return;
  }

  issueList.innerHTML = scoreRows + issues.map((issue) => `
    <article class="issue-card">
      <span>${issue.type}</span>
      <strong>${escapeHtml(issue.original)} → ${escapeHtml(issue.fix)}</strong>
      <p>${escapeHtml(issue.reason)}</p>
    </article>
  `).join("");
}

function checkAnswer() {
  const text = answerInput.value.trim();
  if (!text) {
    feedbackBox.innerHTML = "<strong>No answer yet.</strong><p>Write your answer or use Speak, then press Check errors.</p>";
    answerMarkup.textContent = "Write or speak an answer first.";
    issueList.innerHTML = "";
    analysisScore.textContent = "0%";
    return;
  }

  const issues = findIssues(text);
  const scores = scoreAnswer(text, issues);
  const message = scores.total >= 75
    ? "Strong B2 direction."
    : scores.total >= 55
      ? "Good base, but it needs more accuracy or support."
      : "This needs a clearer B2 structure.";
  const nextStep = issues.length
    ? "Fix the highlighted parts first, then add one example."
    : "Add one more specific real-world detail to sound more natural.";

  renderHighlightedAnswer(text, issues);
  renderIssues(issues, scores);
  analysisScore.textContent = `${scores.total}%`;
  feedbackBox.innerHTML = `<strong>${message}</strong><p>${nextStep}</p>`;
  state.stats.clarity = Math.round(((state.stats.clarity || scores.total) + scores.total) / 2);
  saveStats();
}

function completeDrill() {
  state.stats.drills += 1;
  state.stats.phrases += 1;
  state.stats.minutes += state.level === "natural" ? 2 : 3;
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
  panel.innerHTML = lines.map(([role, text]) => `<div class="bubble ${role}">${escapeHtml(text)}</div>`).join("");
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
    feedbackBox.innerHTML = "<strong>Speech input is not available here.</strong><p>You can type your answer and say it aloud. The correction works for typed text too.</p>";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onstart = () => {
    feedbackBox.innerHTML = "<strong>Listening...</strong><p>Speak a 4-7 sentence B2 answer.</p>";
  };
  recognition.onresult = (event) => {
    answerInput.value = event.results[0][0].transcript;
    checkAnswer();
  };
  recognition.onerror = () => {
    feedbackBox.innerHTML = "<strong>I could not hear that clearly.</strong><p>Try again a little slower, or type the answer and check it.</p>";
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
document.querySelector("#listen-target").addEventListener("click", () => speak(`${currentDrill().question}. ${currentDrill().sample}`));
document.querySelector("#check-answer").addEventListener("click", checkAnswer);
document.querySelector("#complete-drill").addEventListener("click", completeDrill);
document.querySelector("#record-answer").addEventListener("click", startSpeechRecognition);
document.querySelector("#quick-start").addEventListener("click", () => {
  document.querySelector('[data-view="practice"]').click();
  speak(currentDrill().question);
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
