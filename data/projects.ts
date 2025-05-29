import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "CabinEQ",
    slug: "cabineq",
    shortDescription: "A JUCE plugin for real-time DSP (EQ) with an infinite band EQ and custom hearing calibration.",
    description: [
      "CabinEQ is a powerful audio plugin built with the JUCE framework, offering real-time digital signal processing capabilities, specifically focused on equalization.",
      "It features an innovative infinite band EQ, allowing for extremely precise sound shaping. Users can create and save an unlimited number of EQ profiles and even calibrate the EQ to their own hearing.",
      "A standout feature is its ability to route system audio through the plugin, enabling users to apply EQ to any sound output from their computer. The plugin boasts a user-friendly interface for an intuitive experience.",
    ],
    coverImage: "/cabinEQ.png",
    gallery: [
      "/cabinEQ.png"
    ],
    techStack: ["JUCE", "C++"],
    features: [
      "Real-time DSP for equalization",
      "Infinite band EQ",
      "User-friendly interface",
      "Unlimited EQ profiles",
      "Custom hearing calibration",
      "System audio routing",
    ],
    githubUrl: "https://github.com/Tillerpiggo/CabinEQ",
    liveUrl: undefined,
  },
  {
    id: 2,
    title: "Cabin Audio Website",
    slug: "cabinaudio-website",
    shortDescription: "Web application for infinite band EQ, custom hearing calibration, and in-browser audio playback.",
    description: [
      "CabinAudio.com is a web-based audio equalization tool that brings the power of infinite band EQ and personalized hearing calibration to your browser.",
      "Built with React, Zustand for state management, and the Web Audio API, it allows users to upload and play their songs directly in the browser, applying EQ adjustments in real-time. All user profiles and calibration settings are persisted locally using IndexedDB.",
      "The core innovation lies in its sophisticated calibration tool, designed to tailor the audio experience to individual hearing characteristics, complemented by a clean and intuitive user interface."
    ],
    coverImage: "/cabinaudio.png",
    gallery: [
      "/cabinaudio.png",
      "/cabinaudio2.png"
    ],
    techStack: ["React", "Zustand", "Web Audio API", "IndexedDB", "TypeScript"],
    features: [
      "Infinite band EQ",
      "Custom hearing calibration tool",
      "In-browser song upload and playback",
      "Multiple user profiles",
      "Settings persistence with IndexedDB",
      "Intuitive User Interface"
    ],
    githubUrl: "https://github.com/Tillerpiggo/CabinAudio",
    liveUrl: "https://cabinaudio.com",
  },
  {
    id: 3,
    title: "Mobile Companion",
    slug: "mobile-companion",
    shortDescription: "Cross-platform mobile app built with React Native",
    description: [
      "Mobile Companion is a versatile lifestyle app designed to help users track their daily activities, set goals, and maintain healthy habits. Available on both iOS and Android platforms, it provides a seamless experience across devices.",
      "The app features a clean, intuitive interface with customizable widgets and dashboards. Users can track various metrics including steps, water intake, sleep patterns, and more. The app also provides personalized insights based on user data.",
      "Built with React Native and TypeScript, the codebase is maintainable and scalable. The app uses Redux for state management and Firebase for backend services including authentication, database, and analytics.",
    ],
    coverImage: "/mobile-app-interface.png",
    gallery: [
      "/mobile-companion/home-screen.png",
      "/mobile-companion/tracking.png",
      "/mobile-companion/insights.png",
      "/mobile-companion/settings.png",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    techStack: ["React Native", "TypeScript", "Redux", "Firebase", "Expo", "Jest"],
    features: [
      "Cross-platform compatibility (iOS and Android)",
      "Offline functionality with data sync",
      "Push notifications for reminders",
      "Social sharing capabilities",
      "Integration with health apps",
      "Customizable themes and layouts",
    ],
    githubUrl: "https://github.com/yourusername/mobile-companion",
    liveUrl: "https://mobile-companion.vercel.app",
  },
  {
    id: 4,
    title: "AI Assistant",
    slug: "ai-assistant",
    shortDescription: "Natural language processing tool powered by machine learning",
    description: [
      "AI Assistant is an advanced natural language processing tool that helps users automate tasks, answer questions, and generate content. It leverages state-of-the-art machine learning models to understand and respond to user queries in natural language.",
      "The application features a conversational interface where users can type or speak their requests. The AI processes these requests and provides relevant responses, whether it's answering a question, drafting an email, or summarizing a document.",
      "Built with Python and TensorFlow on the backend, the application uses a fine-tuned transformer model for natural language understanding. The frontend is developed with React and communicates with the backend via a RESTful API.",
    ],
    coverImage: "/ai-assistant-interface.png",
    gallery: [
      "/ai-assistant/chat-interface.png",
      "/ai-assistant/content-generation.png",
      "/ai-assistant/voice-input.png",
      "/ai-assistant/settings.png",
    ],
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "Docker", "AWS"],
    features: [
      "Natural language understanding and generation",
      "Voice input and output capabilities",
      "Multi-language support",
      "Context-aware conversations",
      "Document summarization and analysis",
      "Integration with productivity tools",
    ],
    githubUrl: "https://github.com/yourusername/ai-assistant",
    liveUrl: "https://ai-assistant.vercel.app",
  },
]
