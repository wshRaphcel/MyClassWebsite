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
  {
    question: "What is the primary purpose of reviewing organisational documents?",
    options: [
      "To find errors in employee records",
      "To identify data required for the project",
      "To schedule meetings",
      "To create marketing materials",
    ],
    answer: 1,
  },
  {
    question: "Which document might help identify company structure and roles?",
    options: [
      "Organisational chart",
      "Meeting minutes",
      "Product brochures",
      "Website home page",
    ],
    answer: 0,
  },
  {
    question: "Why is document analysis an efficient data gathering technique?",
    options: [
      "It requires interviewing all staff",
      "It provides complete and mostly factual data",
      "It is the most expensive method",
      "It avoids any bias",
    ],
    answer: 1,
  },
  {
    question: "What type of documents include call logs and email records?",
    options: [
      "Historical documents",
      "Financial records",
      "Record-based data",
      "Policy documents",
    ],
    answer: 2,
  },
  {
    question: "What is a risk of relying solely on document analysis?",
    options: [
      "Data may be incomplete or outdated",
      "Too much data is collected",
      "It requires external consultants",
      "It is always biased",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of project records?",
    options: [
      "They track project progress and evaluations",
      "They are used for marketing",
      "They replace user manuals",
      "They list employee birthdays",
    ],
    answer: 0,
  },
  {
    question: "How do logs differ from diaries?",
    options: [
      "Logs are retrospective, diaries are real-time",
      "Logs record ongoing events, diaries are personal reflections",
      "Diaries are official, logs are personal",
      "There is no difference",
    ],
    answer: 1,
  },
  {
    question: "What are policies in an organisation?",
    options: [
      "Step-by-step instructions for tasks",
      "Guidelines outlining values and principles",
      "Employee contact lists",
      "Project budgets",
    ],
    answer: 1,
  },
  {
    question: "What do procedures provide that policies do not?",
    options: [
      "General business goals",
      "Specific instructions and steps for tasks",
      "Legal compliance",
      "Marketing strategies",
    ],
    answer: 1,
  },
  {
    question: "What is sampling in data gathering?",
    options: [
      "Collecting information from everyone",
      "Collecting data from a subset of people",
      "Ignoring data collection",
      "Using only online sources",
    ],
    answer: 1,
  },
  {
    question: "What does randomisation in sampling mean?",
    options: [
      "Selecting samples without any predetermined pattern",
      "Selecting the first available records",
      "Choosing only positive feedback",
      "Collecting data from management only",
    ],
    answer: 0,
  },
  {
    question: "How does systematic sampling reduce variance?",
    options: [
      "By selecting data spread evenly across the sample size",
      "By using only random numbers",
      "By ignoring outliers",
      "By focusing on only one department",
    ],
    answer: 0,
  },
  {
    question: "Why are questionnaires useful?",
    options: [
      "They collect feedback quickly from many respondents",
      "They require face-to-face interviews",
      "They avoid questions altogether",
      "They are used for financial data only",
    ],
    answer: 0,
  },
  {
    question: "What is an advantage of interviews over questionnaires?",
    options: [
      "Interviews are faster to conduct",
      "Interviews help validate gathered information",
      "Interviews require no preparation",
      "Interviews are anonymous",
    ],
    answer: 1,
  },
  {
    question: "What is the role of a focus group?",
    options: [
      "To provide user feedback on a product",
      "To conduct one-on-one interviews",
      "To analyse financial records",
      "To train employees",
    ],
    answer: 0,
  },
  {
    question: "What risk is associated with focus groups?",
    options: [
      "Dominance of popular opinions suppressing minority views",
      "They always produce biased results",
      "They cost too much",
      "They replace surveys",
    ],
    answer: 0,
  },
  {
    question: "What distinguishes passive observation?",
    options: [
      "No interaction with observed stakeholders",
      "Asking many questions during observation",
      "Taking notes after the event only",
      "Ignoring the observed process",
    ],
    answer: 0,
  },
  {
    question: "When is active observation preferable?",
    options: [
      "When wanting detailed process understanding with stakeholder input",
      "When you want to avoid disruptions",
      "When only automated data is used",
      "When no stakeholders are available",
    ],
    answer: 0,
  },
  {
    question: "What are internal sources of information in business?",
    options: [
      "Emails, customer data, internal reports",
      "Competitor websites",
      "Industry journals",
      "Social media posts",
    ],
    answer: 0,
  },
  {
    question: "What are external sources of business information?",
    options: [
      "Industry journals and competitor websites",
      "Employee attendance records",
      "Internal emails",
      "Project meeting minutes",
    ],
    answer: 0,
  },
  {
    question: "What are Critical Success Factors (CSFs)?",
    options: [
      "Key elements essential for business success",
      "Financial targets only",
      "Marketing slogans",
      "Staff training manuals",
    ],
    answer: 0,
  },
  {
    question: "Which dimension is NOT part of business critical factors?",
    options: [
      "Strategic",
      "Environmental",
      "Financial only",
      "Temporal",
    ],
    answer: 2,
  },
  {
    question: "Why is timely data analysis important?",
    options: [
      "It helps identify missing info and supports stakeholder decisions",
      "It delays project completion",
      "It increases costs unnecessarily",
      "It replaces project planning",
    ],
    answer: 0,
  },
  {
    question: "What should be done if discrepancies appear in gathered data?",
    options: [
      "Repeat data elicitation for unclear components",
      "Ignore discrepancies",
      "Cancel the project",
      "Remove all qualitative data",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of documenting data analysis?",
    options: [
      "To report findings clearly to stakeholders",
      "To create marketing content",
      "To store files for legal reasons",
      "To train new staff only",
    ],
    answer: 0,
  },
  {
    question: "What is a sign-off in stakeholder management?",
    options: [
      "Formal approval of requirements and analysis",
      "Email feedback only",
      "Project cancellation notice",
      "Budget approval",
    ],
    answer: 0,
  },
  {
    question: "Which tools can assist in complex data analysis?",
    options: [
      "Statistical software like Prism",
      "Simple calculators only",
      "Manual spreadsheets without formulas",
      "Email clients",
    ],
    answer: 0,
  },
  {
    question: "Why is transparency important in data processes?",
    options: [
      "Builds trust and reduces long-term business risks",
      "Increases data storage needs",
      "Makes projects slower",
      "Reduces quality",
    ],
    answer: 0,
  },
  {
    question: "What is the first step in preparing data for analysis?",
    options: [
      "Ensuring data is adequate, accurate, and relevant",
      "Writing the final report",
      "Hiring staff",
      "Purchasing software",
    ],
    answer: 0,
  },
  {
    question: "What is the value of analysing grouped stakeholder responses?",
    options: [
      "To identify common requirements and conflicts",
      "To reduce the number of stakeholders",
      "To avoid difficult decisions",
      "To delay project milestones",
    ],
    answer: 0,
  },
];
const clientEngagementQuizData = [
  {
    question: "What does a strategic plan primarily outline?",
    options: [
      "How system components meet IT and business goals",
      "Daily employee schedules",
      "Product marketing strategies",
      "Financial investment plans only",
    ],
    answer: 0,
  },
  {
    question: "What is strategic planning?",
    options: [
      "Defining goals and how they will be achieved and resourced",
      "Planning employee holidays",
      "Writing user manuals",
      "Setting product prices",
    ],
    answer: 0,
  },
  {
    question: "Which three angles does strategic planning consider?",
    options: [
      "Current state, desired state, path to desired state",
      "Budget, marketing, sales",
      "Legal issues, HR, accounting",
      "Competitors, products, customers",
    ],
    answer: 0,
  },
  {
    question: "What does a vision statement describe?",
    options: [
      "What an organisation hopes to achieve in the future",
      "Daily tasks of employees",
      "Company’s financial details",
      "How to implement strategies",
    ],
    answer: 0,
  },
  {
    question: "What is an example of a vision statement?",
    options: [
      "A personal computer in every home",
      "We sell computers worldwide",
      "Our budget is $5 million",
      "Monthly sales targets",
    ],
    answer: 0,
  },
  {
    question: "What does a mission statement describe?",
    options: [
      "The fundamental purpose and current activities of an organisation",
      "Future goals and aspirations",
      "Employee salaries",
      "Marketing campaigns",
    ],
    answer: 0,
  },
  {
    question: "How does a mission statement differ from a vision statement?",
    options: [
      "Mission describes current purpose; vision describes future hopes",
      "Mission is about finances; vision is about products",
      "Mission is only for HR; vision is for marketing",
      "They are the same",
    ],
    answer: 0,
  },
  {
    question: "What are organisational values?",
    options: [
      "Core beliefs and ethics guiding the organisation",
      "Marketing slogans",
      "Employee roles",
      "IT policies",
    ],
    answer: 0,
  },
  {
    question: "Why are values important for an organisation?",
    options: [
      "They influence long-term health and relationships",
      "They set product prices",
      "They define employee pay scales",
      "They schedule meetings",
    ],
    answer: 0,
  },
  {
    question: "What is the diagnosing step in strategic planning?",
    options: [
      "Analysing the current business situation",
      "Implementing new policies",
      "Hiring new staff",
      "Writing the vision statement",
    ],
    answer: 0,
  },
  {
    question: "Which analysis tool assesses strengths, weaknesses, opportunities, and threats?",
    options: [
      "SWOT analysis",
      "PEST analysis",
      "Financial audit",
      "Customer survey",
    ],
    answer: 0,
  },
  {
    question: "What is an example of an external factor in environmental analysis?",
    options: [
      "Competitor actions",
      "Employee skills",
      "Internal processes",
      "Company culture",
    ],
    answer: 0,
  },
  {
    question: "What is an example of an internal factor in environmental analysis?",
    options: [
      "Employee capabilities",
      "Market trends",
      "Regulations",
      "Competitor pricing",
    ],
    answer: 0,
  },
  {
    question: "What are tangible resources?",
    options: [
      "Assets that can be seen and quantified, like equipment",
      "Employee knowledge",
      "Company reputation",
      "Trust among staff",
    ],
    answer: 0,
  },
  {
    question: "What are intangible resources?",
    options: [
      "Assets like knowledge, trust, and reputation",
      "Physical buildings",
      "Manufacturing machines",
      "Financial reports",
    ],
    answer: 0,
  },
  {
    question: "What defines an organisation’s capabilities?",
    options: [
      "Knowledge and skills of employees",
      "Marketing budget",
      "IT infrastructure",
      "Product designs",
    ],
    answer: 0,
  },
  {
    question: "What is a core competency?",
    options: [
      "A valuable, rare, hard-to-imitate skill or capability",
      "A general business activity",
      "An entry-level task",
      "A financial asset",
    ],
    answer: 0,
  },
  {
    question: "What is competitive advantage?",
    options: [
      "Ability to outperform competitors in key areas",
      "Having more employees",
      "Owning more assets",
      "Spending more on marketing",
    ],
    answer: 0,
  },
  {
    question: "Why is SWOT analysis important?",
    options: [
      "It helps develop better organisational strategy",
      "It identifies employee salaries",
      "It schedules meetings",
      "It calculates profits",
    ],
    answer: 0,
  },
  {
    question: "What are business goals?",
    options: [
      "Expected accomplishments over a period",
      "Employee attendance records",
      "Monthly expenses",
      "Company logos",
    ],
    answer: 0,
  },
  {
    question: "How do objectives differ from goals?",
    options: [
      "Objectives are more specific and measurable",
      "Goals are more specific than objectives",
      "They are the same",
      "Objectives are unrelated to goals",
    ],
    answer: 0,
  },
  {
    question: "What does ‘SMART’ stand for in goal setting?",
    options: [
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "Simple, Manageable, Accurate, Realistic, Timely",
      "Strategic, Measurable, Accountable, Reliable, Tested",
      "Strong, Meaningful, Ambitious, Relevant, Tactical",
    ],
    answer: 0,
  },
  {
    question: "Which of these is NOT a SMART goal characteristic?",
    options: [
      "Ambiguous",
      "Specific",
      "Measurable",
      "Time-bound",
    ],
    answer: 0,
  },
  {
    question: "What is the last step in the four-step strategic planning process?",
    options: [
      "Realising: developing an action plan",
      "Diagnosing the situation",
      "Conceiving goals",
      "Vision statement creation",
    ],
    answer: 0,
  },
  {
    question: "What does action planning involve?",
    options: [
      "Specifying activities, responsibilities, timelines, and performance monitoring",
      "Hiring new staff",
      "Writing mission statements",
      "Conducting interviews",
    ],
    answer: 0,
  },
  {
    question: "Why is monitoring and evaluating goals important?",
    options: [
      "To track progress and measure success",
      "To hire more employees",
      "To create new marketing campaigns",
      "To write new policies",
    ],
    answer: 0,
  },
  {
    question: "Which ICT unit aligns with matching ICT needs to enterprise strategy?",
    options: [
      "ICTICT517",
      "BSBCRT512",
      "ICTSAS527",
      "BSBXTW401",
    ],
    answer: 0,
  },
  {
    question: "What is the purpose of strategic ICT planning?",
    options: [
      "To ensure ICT supports overall business strategy",
      "To manage daily IT tasks",
      "To schedule meetings",
      "To recruit staff",
    ],
    answer: 0,
  },
  {
    question: "Who should be involved in setting organisational vision and mission?",
    options: [
      "Senior management and key stakeholders",
      "Only HR staff",
      "Customers only",
      "IT technicians only",
    ],
    answer: 0,
  },
  {
    question: "What is a key benefit of having clear strategic goals?",
    options: [
      "Provides direction and focus for the organisation",
      "Increases marketing budget",
      "Improves employee salaries",
      "Reduces office space",
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
const controls = document.getElementById("controls");  // <-- added

const questionCountSelect = document.getElementById("question-count");
const quizTypeSelect = document.getElementById("quiz-type");

const quizMenu = document.getElementById("quiz-menu");
const quizContainer = document.getElementById("quiz-container");
const quizCards = document.querySelectorAll(".quiz-card");
const logoLink = document.getElementById("logo-link");
const inQuizItems = document.querySelectorAll(".in-quiz");

// === QUIZ FLOW ===
function loadQuestion() {
  answered = false;
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";

  // Remove old result icon if any
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

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

  // Remove old result icon if present
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQ.answer) btn.classList.add("correct");
    if (idx === selectedIndex && idx !== currentQ.answer) btn.classList.add("wrong");
  });

  // Add correct/wrong image near the Next button inside controls div
  const img = document.createElement("img");
  img.id = "result-icon";
  img.src = selectedIndex === currentQ.answer ? "images/correct.png" : "images/wrong.png";
  img.alt = selectedIndex === currentQ.answer ? "Correct" : "Wrong";
  img.className = "result-icon";
  controls.appendChild(img);  // <-- changed from questionCard.appendChild(img);

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

// === BUTTON HANDLERS ===
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  
  // Remove old result icon when moving to next question
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

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
  selectQuiz(quizTypeSelect.value);
});

// === MENU NAVIGATION ===
quizCards.forEach(card => {
  card.addEventListener("click", () => {
    const quizType = card.dataset.quiz;
    selectQuiz(quizType);
  });
});

logoLink.addEventListener("click", (e) => {
  e.preventDefault();
  showMenu();
});

// === QUIZ SELECTION ===
function selectQuiz(quizType) {
  if (quizType === "gather") {
    selectedQuizData = gatherQuizData;
  } else if (quizType === "client-engagement") {
    selectedQuizData = clientEngagementQuizData;
  } else {
    selectedQuizData = osQuizData;
  }

  quizTypeSelect.value = quizType; // sync dropdown
  const value = questionCountSelect.value;
  maxQuestions = value === "all"
    ? selectedQuizData.length
    : Math.min(parseInt(value), selectedQuizData.length);

  quizMenu.style.display = "none";
  quizContainer.style.display = "block";
  inQuizItems.forEach(item => item.style.display = "inline-block");

  restartQuiz();
}

function showMenu() {
  quizMenu.style.display = "grid";
  quizContainer.style.display = "none";
  inQuizItems.forEach(item => item.style.display = "none");
}

// === RESET QUIZ ===
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffleArray(selectedQuizData);
  loadQuestion();
  feedbackDiv.textContent = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "none";

  // Remove old result icon on restart
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();
}

// === SCORE DISPLAY ===
function showScore() {
  questionCard.innerHTML = `
    <div>Your final score is:</div>
    <div style="font-size: 2em; margin-top: 10px; color: #1976d2;">
      ${score} / ${maxQuestions}
    </div>
  `;
  answersDiv.innerHTML = "";
  feedbackDiv.textContent = "";

  // Remove icon on score display
  const oldIcon = document.getElementById("result-icon");
  if (oldIcon) oldIcon.remove();

  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
  updateCounter(true);
}

// === COUNTER ===
function updateCounter(finished = false) {
  if (finished) {
    counterDiv.textContent = "";
  } else {
    counterDiv.textContent = `${currentQuestionIndex + 1} / ${maxQuestions}`;
  }
}

// === SHUFFLE ===
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start with menu visible
showMenu();


