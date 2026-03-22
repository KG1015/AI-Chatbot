// const fallbackResponses = {
//   resume: "Great question about resume writing! Here are my top recommendations:\n\n1. Keep it to 1 page (2 if you have extensive experience)\n2. Use strong action verbs like 'Built', 'Developed', 'Implemented', 'Optimized'\n3. Quantify achievements: 'Improved performance by 40%', 'Reduced load time from 5s to 2s'\n4. Tailor your resume to each job posting\n5. Include relevant projects with GitHub links\n6. List technologies and tech stack for each role\n7. Focus on impact, not just responsibilities\n\nWould you like specific feedback on any section?",

//   interview: "Interview preparation is crucial! Here's a structured approach:\n\n1. Practice coding on a whiteboard or collaborative document, not just your IDE\n2. Master key data structures: arrays, hash maps, linked lists, trees, graphs\n3. Learn common algorithms: sorting, searching, dynamic programming\n4. Study design patterns: two pointers, sliding window, DFS/BFS\n5. Use LeetCode, HackerRank, or Pramp for practice\n6. Do mock interviews with friends or peers\n7. Always communicate your thought process aloud\n8. Practice explaining your solution clearly\n\nWhich topic would you like to focus on?",

//   roadmap: "Here's a proven DSA learning roadmap for you:\n\nFoundation Phase (Weeks 1-4):\n- Arrays and strings\n- Hash tables and hashmaps\n- Linked lists\n- Stacks and queues\n\nIntermediate Phase (Weeks 5-8):\n- Trees (binary trees, BST, traversals)\n- Graphs (DFS, BFS, shortest path)\n- Heaps and priority queues\n\nAdvanced Phase (Weeks 9-12):\n- Dynamic programming\n- Greedy algorithms\n- System design fundamentals\n\nTip: Solve 2-3 problems daily, start with easy problems, build consistency over time.\n\nNeed resources for any specific topic?",

//   internship: "Landing an internship requires strategy and preparation! Here's my guide:\n\n1. Start applying early - many companies recruit in fall for summer roles\n2. Build 2-3 solid projects to demonstrate your skills\n3. Network on LinkedIn - connect with recruiters and engineers at target companies\n4. Practice coding interviews - internships focus on fundamentals\n5. Customize your resume and cover letter for each application\n6. Apply broadly - big tech, startups, and local companies all hire interns\n7. Prepare behavioral stories using the STAR method\n8. Research companies and show genuine interest in the role\n\nWhat year are you? I can give more specific advice!",

//   default: "That's a great question! I specialize in career coaching for software engineers. I can help you with:\n\n- Resume optimization and writing\n- Technical and behavioral interview preparation\n- Learning roadmaps and skill development\n- Project ideas and portfolio building\n- Career growth and salary negotiation\n- Internship and job search strategies\n\nFeel free to ask me anything about your career journey!"
// };

// export const getBotResponse = async (userMessage) => {
//   try {
//     // Call backend API route instead of OpenAI directly
//     const response = await fetch('/api/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         message: userMessage
//       })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('API error:', errorData);
//       return getFallbackResponse(userMessage);
//     }

//     const data = await response.json();

//     if (data.message) {
//       return data.message;
//     }

//     return getFallbackResponse(userMessage);
//   } catch (error) {
//     console.error('Chatbot error:', error);
//     return getFallbackResponse(userMessage);
//   }
// };

// const getFallbackResponse = (userMessage) => {
//   const message = userMessage.toLowerCase();

//   if (message.includes('resume')) return fallbackResponses.resume;
//   if (message.includes('interview')) return fallbackResponses.interview;
//   if (message.includes('roadmap') || message.includes('dsa') || message.includes('data structures')) {
//     return fallbackResponses.roadmap;
//   }
//   if (message.includes('internship')) return fallbackResponses.internship;

//   return fallbackResponses.default;
// };

// export const getSuggestionCards = () => [
//   {
//     id: 1,
//     text: "Improve my resume",
//     icon: null
//   },
//   {
//     id: 2,
//     text: "Give me interview tips",
//     icon: null
//   },
//   {
//     id: 3,
//     text: "Create a DSA roadmap",
//     icon: null
//   },
//   {
//     id: 4,
//     text: "How do I prepare for internships?",
//     icon: null
//   }
// ];

// export const getSidebarTopics = () => [
//   { id: 'resume', label: 'Resume Tips', icon: null },
//   { id: 'interview', label: 'Interview Prep', icon: null },
//   { id: 'roadmap', label: 'Learning Roadmap', icon: null },
//   { id: 'projects', label: 'Project Ideas', icon: null },
//   { id: 'internship', label: 'Internships', icon: null },
//   { id: 'salary', label: 'Compensation', icon: null }
// ];

const fallbackResponses = {
  resume:
    "Great question about resume writing! Here are my top recommendations:\n\n1. Keep it to 1 page (2 if you have extensive experience)\n2. Use strong action verbs like 'Built', 'Developed', 'Implemented', 'Optimized'\n3. Quantify achievements: 'Improved performance by 40%', 'Reduced load time from 5s to 2s'\n4. Tailor your resume to each job posting\n5. Include relevant projects with GitHub links\n6. List technologies and tech stack for each role\n7. Focus on impact, not just responsibilities\n\nWould you like specific feedback on any section?",

  interview:
    "Interview preparation is crucial! Here's a structured approach:\n\n1. Practice coding on a whiteboard or collaborative document, not just your IDE\n2. Master key data structures: arrays, hash maps, linked lists, trees, graphs\n3. Learn common algorithms: sorting, searching, dynamic programming\n4. Study design patterns: two pointers, sliding window, DFS/BFS\n5. Use LeetCode, HackerRank, or Pramp for practice\n6. Do mock interviews with friends or peers\n7. Always communicate your thought process aloud\n8. Practice explaining your solution clearly\n\nWhich topic would you like to focus on?",

  roadmap:
    "Here's a proven DSA learning roadmap for you:\n\nFoundation Phase (Weeks 1-4):\n- Arrays and strings\n- Hash tables and hashmaps\n- Linked lists\n- Stacks and queues\n\nIntermediate Phase (Weeks 5-8):\n- Trees (binary trees, BST, traversals)\n- Graphs (DFS, BFS, shortest path)\n- Heaps and priority queues\n\nAdvanced Phase (Weeks 9-12):\n- Dynamic programming\n- Greedy algorithms\n- System design fundamentals\n\nTip: Solve 2-3 problems daily, start with easy problems, build consistency over time.\n\nNeed resources for any specific topic?",

  internship:
    "Landing an internship requires strategy and preparation! Here's my guide:\n\n1. Start applying early - many companies recruit in fall for summer roles\n2. Build 2-3 solid projects to demonstrate your skills\n3. Network on LinkedIn - connect with recruiters and engineers at target companies\n4. Practice coding interviews - internships focus on fundamentals\n5. Customize your resume and cover letter for each application\n6. Apply broadly - big tech, startups, and local companies all hire interns\n7. Prepare behavioral stories using the STAR method\n8. Research companies and show genuine interest in the role\n\nWhat year are you? I can give more specific advice!",

  default:
    "AI service is unavailable right now, so I’m using backup responses.",
};

export const getBotResponse = async (userMessage) => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    });

    const data = await response.json();
    console.log("Frontend /api/chat response:", data);

    if (!response.ok) {
      return `AI Error: ${data.details || data.error || "Unknown error"}`;
    }

    if (data.message) {
      return data.message;
    }

    return "AI returned no response.";
  } catch (error) {
    console.error("Chatbot error:", error);
    return `AI failed: ${error.message}`;
  }
};

const getFallbackResponse = (userMessage) => {
  const message = userMessage.toLowerCase();

  if (message.includes("resume")) return fallbackResponses.resume;
  if (message.includes("interview")) return fallbackResponses.interview;
  if (
    message.includes("roadmap") ||
    message.includes("dsa") ||
    message.includes("data structures")
  ) {
    return fallbackResponses.roadmap;
  }
  if (message.includes("internship")) return fallbackResponses.internship;

  return fallbackResponses.default;
};

export const getSuggestionCards = () => [
  {
    id: 1,
    text: "Improve my resume",
    icon: null,
  },
  {
    id: 2,
    text: "Give me interview tips",
    icon: null,
  },
  {
    id: 3,
    text: "Create a DSA roadmap",
    icon: null,
  },
  {
    id: 4,
    text: "How do I prepare for internships?",
    icon: null,
  },
];

export const getSidebarTopics = () => [
  { id: "resume", label: "Resume Tips", icon: null },
  { id: "interview", label: "Interview Prep", icon: null },
  { id: "roadmap", label: "Learning Roadmap", icon: null },
  { id: "projects", label: "Project Ideas", icon: null },
  { id: "internship", label: "Internships", icon: null },
  { id: "salary", label: "Compensation", icon: null },
];