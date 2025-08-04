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