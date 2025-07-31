const osQuizData = [
  {
    question: "Is it possible to have a computer without Operating System?",
    options: ["Yes", "No", "Only single task applications", "None"],
    answer: 2,
  },
  {
    question: "Which of the following is true about a computer without an OS?",
    options: [
      "Can run multiple applications",
      "Applications are hard-coded and know everything about hardware",
      "Applications are portable",
      "It supports virtual memory",
    ],
    answer: 1,
  },
  {
    question: "What does an operating system do?",
    options: [
      "Runs only one program at a time",
      "Creates a multi-programming environment and abstracts hardware knowledge from applications",
      "Replaces hardware components",
      "None of the above",
    ],
    answer: 1,
  },
  {
    question: "What is the role of the bootloader?",
    options: [
      "Runs after the OS has started",
      "Runs before the OS and prepares the system",
      "Shuts down the system",
      "Manages filesystems",
    ],
    answer: 1,
  },
  {
    question: "Which kernel architecture type is generally the fastest?",
    options: ["Monolithic kernel", "Microkernel", "Hybrid kernel", "None"],
    answer: 0,
  },
  {
    question: "Which kernel type is easier to debug and more secure but slower?",
    options: ["Monolithic kernel", "Microkernel", "Hybrid kernel", "None"],
    answer: 1,
  },
  {
    question: "What does the Process Control Block (PCB) contain?",
    options: [
      "User passwords",
      "Process ID, priority, memory pointers, program counter and resource info",
      "Only program code",
      "Kernel source code",
    ],
    answer: 1,
  },
  {
    question: "In which mode does a process execute user-level programs?",
    options: ["Kernel mode", "User mode", "Supervisor mode", "Hypervisor mode"],
    answer: 1,
  },
  {
    question: "What is the function of a process dispatcher?",
    options: [
      "Creates new processes",
      "Performs context switch and loads next process state",
      "Manages memory allocation",
      "Handles interrupts",
    ],
    answer: 1,
  },
  {
    question: "Which type of interrupt is caused by hardware devices?",
    options: ["Hardware interrupt", "Software interrupt", "User interrupt", "System interrupt"],
    answer: 0,
  },
  {
    question: "What is context switching?",
    options: [
      "Switching CPU from one process or thread to another",
      "Terminating a process",
      "Running a single process",
      "Saving files",
    ],
    answer: 0,
  },
  {
    question: "Which scheduling method runs processes until completion without interruption?",
    options: ["Pre-emptive scheduling", "Non-preemptive scheduling", "Round Robin", "Priority scheduling"],
    answer: 1,
  },
  {
    question: "What does round robin scheduling do?",
    options: [
      "Runs processes with the shortest time first",
      "Runs each process for a time quantum and cycles through them",
      "Runs highest priority process always",
      "Runs processes randomly",
    ],
    answer: 1,
  },
  {
    question: "What is virtual memory?",
    options: [
      "Physical RAM only",
      "Technique allowing process to use more memory than physically available",
      "Permanent storage",
      "Cache memory",
    ],
    answer: 1,
  },
  {
    question: "What is Inter Process Communication (IPC)?",
    options: [
      "Method for file storage",
      "Mechanism for processes to exchange data and coordinate",
      "Memory management technique",
      "Scheduling algorithm",
    ],
    answer: 1,
  },
  {
    question: "What is the main advantage of multi-threaded processes?",
    options: [
      "Uses more resources than multiple processes",
      "Simplifies sharing and communication between threads",
      "Increases disk space",
      "Prevents process crashes",
    ],
    answer: 1,
  },
  {
    question: "What can cause a thread to crash an entire process?",
    options: [
      "Threads do not share address space",
      "Illegal operation by one thread in shared address space",
      "Process priority",
      "Memory segmentation",
    ],
    answer: 1,
  },
  {
    question: "Which scheduling aims to minimize average waiting time by running shortest job first?",
    options: [
      "Round Robin",
      "First Come First Serve",
      "Shortest Job First (SJF)",
      "Priority Scheduling",
    ],
    answer: 2,
  },
  {
    question: "Which scheduling method involves processes being preempted to allow higher priority processes to run?",
    options: [
      "Non-preemptive scheduling",
      "Preemptive scheduling",
      "Round Robin",
      "First Come First Serve",
    ],
    answer: 1,
  },
  {
    question: "What is a process in OS?",
    options: [
      "Hardware device",
      "Basic unit of execution containing program code and data",
      "File storage system",
      "Kernel mode operation",
    ],
    answer: 1,
  },
  {
    question: "Which state is NOT a process state?",
    options: ["New", "Ready", "Idle", "Blocked"],
    answer: 2,
  },
  {
    question: "Which is NOT a function of an OS?",
    options: [
      "Creating multi-programming environment",
      "Abstracting hardware knowledge from applications",
      "Managing process scheduling",
      "Manufacturing hardware components",
    ],
    answer: 3,
  },
  {
    question: "What happens during computer initialization?",
    options: [
      "Runs tests and loads drivers",
      "Deletes all files",
      "Starts user applications immediately",
      "Connects to internet",
    ],
    answer: 0,
  },
  {
    question: "What does MMU stand for?",
    options: [
      "Main Memory Unit",
      "Memory Management Unit",
      "Multi-core Memory Unit",
      "Machine Monitoring Unit",
    ],
    answer: 1,
  },
  {
    question: "What does the OS use to organize information on physical drives?",
    options: ["Network protocols", "File system", "Bootloader", "Kernel"],
    answer: 1,
  },
  {
    question: "What is paging in memory management?",
    options: [
      "Loading entire process into RAM",
      "Dividing memory into fixed-size blocks for virtual memory",
      "Running multiple processes",
      "Interrupt handling",
    ],
    answer: 1,
  },
  {
    question: "What is thrashing?",
    options: [
      "Heavy paging activity that slows down system",
      "Efficient memory management",
      "Process completion",
      "CPU overheating",
    ],
    answer: 0,
  },
  {
    question: "What does the term 'multitasking' mean in OS?",
    options: [
      "Running multiple processes concurrently",
      "Running one program at a time",
      "Installing multiple OSs",
      "None of the above",
    ],
    answer: 0,
  },
  {
    question: "What is the kernel responsible for?",
    options: [
      "Managing system resources and hardware",
      "User interface design",
      "Storing user files",
      "Internet connectivity",
    ],
    answer: 0,
  },
  {
    question: "Which of the following is NOT an OS component?",
    options: [
      "File System",
      "Device Drivers",
      "Web Browser",
      "Process Management",
    ],
    answer: 2,
  },
];

const gatherQuizData = [
  {
    question: "What is a client in project requirements gathering?",
    options: [
      "A stakeholder who manages project funding",
      "A person or business needing a problem resolved",
      "An ICT professional working on the project",
      "A regulator overseeing the project",
    ],
    answer: 1,
  },
  {
    question: "What is a business domain?",
    options: [
      "The internet website of a business",
      "The type and overall nature of the business",
      "The IT infrastructure used by a company",
      "A legal contract for project delivery",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is part of analysing a business domain?",
    options: [
      "Products, services, strategic direction, and timeline",
      "Hardware, software, databases, and users",
      "Financial audits and contracts",
      "IT policies and procedures only",
    ],
    answer: 0,
  },
  {
    question: "What are business functions important for?",
    options: [
      "Determining project context and understanding requirements",
      "Allocating budget to IT hardware",
      "Designing office floor plans",
      "Ensuring internet connectivity",
    ],
    answer: 0,
  },
  {
    question: "Which question helps determine business functions?",
    options: [
      "Does the function impact the business’ image or market share?",
      "How many employees use the internet?",
      "Which software is cheapest?",
      "Is the office centrally located?",
    ],
    answer: 0,
  },
  {
    question: "What is the first step before identifying information sources?",
    options: [
      "Ask: What information do I need?",
      "Draft a project charter",
      "Install software tools",
      "Train the project team",
    ],
    answer: 0,
  },
  {
    question: "Why is good quality information important?",
    options: [
      "It ensures accurate decisions and project success",
      "It eliminates the need for IT staff",
      "It guarantees no mistakes",
      "It avoids spending on training",
    ],
    answer: 0,
  },
  {
    question: "What is quantitative data?",
    options: [
      "Data based on opinions and feelings",
      "Data that can be measured numerically",
      "Stories and interviews",
      "A collection of legal documents",
    ],
    answer: 1,
  },
  {
    question: "What is qualitative data?",
    options: [
      "Numerical data such as statistics",
      "Data from interviews and observations",
      "Budget spreadsheets",
      "Server performance logs",
    ],
    answer: 1,
  },
  {
    question: "What is the difference between data and information?",
    options: [
      "Data is raw facts; information adds context and significance",
      "They mean the same thing",
      "Information is always numbers",
      "Data cannot be used in projects",
    ],
    answer: 0,
  },
  {
    question: "Which document type communicates project details to stakeholders?",
    options: [
      "Project requirement documents",
      "Social media reports",
      "Employee contracts",
      "Email newsletters",
    ],
    answer: 0,
  },
  {
    question: "Which is NOT a type of project requirement document?",
    options: [
      "Market",
      "Software",
      "Technical",
      "Personal diary",
    ],
    answer: 3,
  },
  {
    question: "Which QA practice ensures project requirements are met?",
    options: [
      "Auditing and reporting quality against standards",
      "Hiring more staff",
      "Shortening deadlines",
      "Cutting costs on technology",
    ],
    answer: 0,
  },
  {
    question: "Quality assurance focuses on:",
    options: [
      "How processes are performed",
      "Correcting defects after testing",
      "Writing financial contracts",
      "Customer marketing campaigns",
    ],
    answer: 0,
  },
  {
    question: "Quality control focuses on:",
    options: [
      "Evaluation and correction of product quality",
      "Defining business strategy",
      "Staff recruitment",
      "Market research only",
    ],
    answer: 0,
  },
  {
    question: "Who should ideally form the QA team?",
    options: [
      "An independent team for impartial judgment",
      "The sales team",
      "External suppliers",
      "Customers only",
    ],
    answer: 0,
  },
  {
    question: "Which technology use can improve QA processes?",
    options: [
      "Automated analysis of customer interactions",
      "Manual paper-based filing",
      "Ignoring client feedback",
      "Reducing QA testing time",
    ],
    answer: 0,
  },
  {
    question: "What is quality management?",
    options: [
      "A planned approach to QA, including evaluation and improvement",
      "Hiring more managers",
      "Eliminating customer surveys",
      "Designing marketing posters",
    ],
    answer: 0,
  },
  {
    question: "Which is the first step in quality management?",
    options: [
      "Collect data for analysis",
      "Write a project proposal",
      "Hire senior management",
      "Create marketing strategies",
    ],
    answer: 0,
  },
  {
    question: "Which is an additional source of information?",
    options: [
      "Industry bodies and government organisations",
      "Personal social media posts",
      "Rumours from competitors",
      "Random internet blogs",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of developing critical questions?",
    options: [
      "To clarify the problem statement and gather more data",
      "To test software speed",
      "To reduce project cost",
      "To hire project staff",
    ],
    answer: 0,
  },
  {
    question: "What do open-ended questions provide?",
    options: [
      "Short yes/no answers",
      "Detailed insights, stories, and lists",
      "Strict numerical results",
      "Limited response options",
    ],
    answer: 1,
  },
  {
    question: "What do closed-ended questions provide?",
    options: [
      "Multiple-choice or yes/no answers",
      "Detailed feedback",
      "Open discussion",
      "Unrestricted responses",
    ],
    answer: 0,
  },
  {
    question: "Which stakeholder group is directly affected by project requirements?",
    options: [
      "Customers",
      "Weather reporters",
      "Project auditors",
      "Building inspectors",
    ],
    answer: 0,
  },
  {
    question: "Who in a business focuses on daily operations?",
    options: [
      "Staff and team leaders",
      "Government officials",
      "Customers only",
      "External auditors",
    ],
    answer: 0,
  },
  {
    question: "Which group forms the core management team?",
    options: [
      "Senior management",
      "External consultants",
      "Customers",
      "Project suppliers",
    ],
    answer: 0,
  },
  {
    question: "What role do suppliers play in business functions?",
    options: [
      "Their availability may influence business functions",
      "They design project documents",
      "They set the company’s vision",
      "They approve IT infrastructure",
    ],
    answer: 0,
  },
  {
    question: "What happens if low-quality data is used?",
    options: [
      "Poor decisions, higher costs, delays, and stress",
      "Faster project delivery",
      "Guaranteed project success",
      "Less involvement from stakeholders",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of a problem statement?",
    options: [
      "Define the issue the project aims to solve",
      "Set the company vision",
      "List all project tasks",
      "Approve the budget",
    ],
    answer: 0,
  },
  {
    question: "Who benefits from insights gained during QA?",
    options: [
      "The entire organisation, not just customer service",
      "Only IT staff",
      "Only the finance team",
      "Only external auditors",
    ],
    answer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let selectedQuizData = osQuizData;
let maxQuestions = 10;

const questionCard = document.getElementById("question-card");
const answersDiv = document.getElementById("answers");
const feedbackDiv = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const counterDiv = document.getElementById("counter");

const questionCountSelect = document.getElementById("question-count");
const quizTypeSelect = document.getElementById("quiz-type");

function loadQuestion() {
  answered = false;
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";

  const currentQ = selectedQuizData[currentQuestionIndex];

  questionCard.textContent = currentQ.question;
  answersDiv.innerHTML = "";

  currentQ.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuestion(index));
    answersDiv.appendChild(btn);
  });

  updateCounter();
}

function answerQuestion(selectedIndex) {
  if (answered) return;
  answered = true;

  const currentQ = selectedQuizData[currentQuestionIndex];
  const buttons = answersDiv.querySelectorAll("button");

  // Remove any old result icon
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.answer) btn.classList.add("correct");
    if (idx === selectedIndex && idx !== currentQ.answer) btn.classList.add("wrong");
  });

  // Create the result icon
  const img = document.createElement("img");
  img.id = "result-icon";
  img.src = selectedIndex === currentQ.answer ? "images/correct.png" : "images/wrong.png";
  img.alt = selectedIndex === currentQ.answer ? "Correct" : "Wrong";
  img.className = "result-icon";
  questionCard.appendChild(img);

  if (selectedIndex === currentQ.answer) {
    feedbackDiv.textContent = "Correct!";
    score++;
  } else {
    feedbackDiv.textContent = `Wrong! The correct answer is: ${currentQ.options[currentQ.answer]}`;
  }

  if (currentQuestionIndex < maxQuestions - 1) {
    nextBtn.style.display = "inline-block";
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  loadQuestion();
});

restartBtn.addEventListener("click", () => {
  restartQuiz();
});

questionCountSelect.addEventListener("change", () => {
  const value = questionCountSelect.value;
  maxQuestions = value === "all" 
    ? selectedQuizData.length 
    : Math.min(parseInt(value), selectedQuizData.length);
  restartQuiz();
});

quizTypeSelect.addEventListener("change", () => {
  if (quizTypeSelect.value === "gather") {
    selectedQuizData = gatherQuizData;
  } else {
    selectedQuizData = osQuizData;
  }
  const value = questionCountSelect.value;
  maxQuestions = value === "all" 
    ? selectedQuizData.length 
    : Math.min(parseInt(value), selectedQuizData.length);

  restartQuiz();
});

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffleArray(selectedQuizData);
  loadQuestion();
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";
}

function showScore() {
  questionCard.innerHTML = `
    <div>Your final score is:</div>
    <div style="font-size: 2em; margin-top: 10px; color: #1976d2;">
      ${score} / ${maxQuestions}
    </div>
  `;
  answersDiv.innerHTML = "";
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
  updateCounter(true);
}

function updateCounter(finished = false) {
  if (finished) {
    counterDiv.textContent = "";
  } else {
    counterDiv.textContent = `${currentQuestionIndex + 1} / ${maxQuestions}`;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(selectedQuizData);
loadQuestion();
