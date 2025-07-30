import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "HellaFocused - Todo App",
    slug: "hellafocused-todo-app",
    date: "June 2025",
    shortDescription: "Focus on one task at a time with infinite subtasks.",
    description: [
      "I built hellafocused to solve my own problem: I don't like to-do lists!",
      "Focus mode shows you one task at a time, which is much nicer to look at than a list. Infinite subtasks help you make tasks approachable, which helps to keep yourself organized and motivated while completing tasks.",
      "It's really fun to keep checking off tasks one by one - it feels like you're making a lot of progress.",
      "iOS/iPadOS/macOS coming soon. More motivational features also coming soon."
    ],
    coverImage: "/hellafocused1.png",
    gallery: [
      "/hellafocusedThumb.png",
      "/hellafocused1.png",
      "/hellafocused2.png",
      "/hellafocused3.png"
    ],
    techStack: ["React", "Next.js", "TypeScript", "Supabase", "Supabase Auth", "Resend"],
    features: [
      "Focus mode shows you one task at a time",
      "Infinite subtasks to make tasks tiny",
      "Access your tasks from any device with an account",
    ],
    githubUrl: "https://github.com/Tillerpiggo/hellafocused",
    liveUrl: "https://hellafocused.com",
    commits: 130,
    insertions: 27775,
    deletions: 8195,
  },
  {
    id: 4,
    title: "Cabin Visuals - 3D Animation Software",
    slug: "cabinvisuals-website",
    date: "April 2025",
    shortDescription: "A visual DAW for creating music-synced visuals with rhythmic and melodic programming.",
    description: [
      "CabinVisuals.com offers a unique approach to visual creation, functioning as a 'visual DAW' (Digital Audio Workstation). It empowers users to design and generate visuals by programming rhythms and melodies, similar to how music is produced.",
      "The platform is built with React, Zustand, React Three Fiber for 3D graphics, and utilizes IndexedDB for local persistence, with Supabase for backend services. Users can leverage pre-built visual instruments, import MIDI files, program their own MIDI sequences, and customize instruments and effects.",
      "A key feature is the ability to upload an audio file and easily create visuals perfectly synchronized to the music. The final output can be exported as an MP4 video. The software aims to make complex visual production intuitive and accessible."
    ],
    coverImage: "/cabinvisuals.png",
    gallery: [
      "/cabinvisuals.png",
      "/cabinvisualslandingpage.png",
      "/cabinvisualsexamplevisual1.png",
      "/cabinvisualsexamplevisual2.png"
    ],
    videoUrl: "https://www.youtube.com/embed/21oQR1AMxBQ",
    techStack: ["React", "Zustand", "IndexedDB", "Supabase", "React Three Fiber", "TypeScript"],
    features: [
      "Visual Digital Audio Workstation (DAW) concept",
      "Rhythmic and melodic programming of visuals",
      "Pre-built visual instruments",
      "MIDI import and programming capabilities",
      "Customizable instruments and effects",
      "Music synchronization for visuals",
      "MP4 video export",
      "User-friendly interface for complex visual production"
    ],
    githubUrl: "https://github.com/JulianMcOmie/CabinVisuals",
    liveUrl: "https://cabinvisuals.com/alpha",
    commits: 227,
    insertions: 43564,
    deletions: 16827,
  },
  {
    id: 3,
    title: "Cabin Audio - Fullstack Web App",
    slug: "cabinaudio-website",
    date: "March 2025",
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
    githubUrl: "https://github.com/JulianMcOmie/cabin-audio-webapp",
    liveUrl: "https://cabinaudio.com",
    commits: 250,
    insertions: 51375,
    deletions: 20530,
  },
  {
    id: 2,
    title: "CabinEQ - Audio Plugin",
    slug: "cabineq",
    date: "Nov 2024",
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
    liveUrl: null,
    commits: 1180,
    insertions: 206160,
    deletions: 97816,
  },
  {
    id: 5,
    title: "Birthday Reminder App",
    slug: "birthday-reminder-app",
    date: "2022",
    shortDescription: "Full-stack app for birthday reminders and gift recommendations.",
    description: [
      "This full-stack web application sends automated birthday reminder emails to users, leveraging the MailChimp API for email delivery.",
      "The frontend is built with React, providing a user-friendly interface. The backend uses Node.js and Express.js, with MongoDB serving as the database for storing user and birthday information.",
      "An administrative page, secured with Firebase authentication, allows for managing birthday gift recommendations, enhancing the personalized experience for users."
    ],
    coverImage: "/autobid1.png",
    gallery: [
      "/autobid1.png",
      "/autobid2.png",
      "/autobid3.png"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "MailChimp API", "Firebase Authentication"],
    features: [
      "Automated birthday reminder emails via MailChimp API",
      "React-based frontend",
      "Node.js/Express.js backend",
      "MongoDB database for user and birthday data",
      "Admin page with Firebase authentication",
      "Management of birthday gift recommendations"
    ],
    githubUrl: "https://github.com/Tillerpiggo/AutoBid",
    liveUrl: null,
    commits: 31,
    insertions: 5240,
    deletions: 2119,
  },
  {
    id: 7,
    title: "RacquetPass QR Generator",
    slug: "racquetpass-qr-generator",
    date: "2021",
    shortDescription: "Python/Django site for generating QR code stickers and CSVs for RacquetPass.",
    description: [
      "This project is a simple yet effective web application built with Python and Django to automate the generation of QR codes and associated CSV files. It was developed to address an immediate need at RacquetPass, a startup I was working with.",
      "The tool streamlined the process of creating and shipping physical QR code stickers to customers, serving as a crucial interim solution while a more permanent system was under development by an external firm. It significantly helped in maintaining operational flow and customer service during a critical phase."
    ],
    coverImage: "/racquetpassQR.png",
    gallery: ["/racquetpassQR.png"],
    techStack: ["Python", "Django", "HTML", "CSS", "CSV Generation"],
    features: [
      "Automated QR code generation",
      "CSV file export for sticker data",
      "Simple web interface for ease of use",
      "Provided a quick solution for a startup's operational need"
    ],
    githubUrl: "https://github.com/Tillerpiggo/generate-qrs",
    liveUrl: "http://Tillerpiggo.pythonanywhere.com",
    commits: 2,
    insertions: 560,
    deletions: 0,
  },
  {
    id: 6,
    title: "Bubble - iOS Todo App",
    slug: "bubble-ios-app",
    date: "2018",
    shortDescription: "iOS Cloud-Synced Todo App for collaborative homework tracking.",
    description: [
      "Bubble is an iOS application designed for students to collaboratively create and manage homework todos with others in the same classes.",
      "It leverages CloudKit for automatic data synchronization across multiple devices via iCloud, ensuring everyone stays up-to-date. Core Data is utilized for robust local persistence of todo items and class information."
    ],
    coverImage: "/todoapp0.png",
    gallery: [
      "/todoapp1.png",
      "/todoapp2.png",
      "/todoapp3.png"
    ],
    techStack: ["iOS", "Swift", "Xcode", "CloudKit", "Core Data"],
    features: [
      "Collaborative todo lists for classes",
      "Automatic iCloud syncing via CloudKit",
      "Local data persistence with Core Data",
      "Designed for students and homework management"
    ],
    githubUrl: "https://github.com/Tillerpiggo/Bubble",
    liveUrl: null,
    commits: 12,
    insertions: 3134,
    deletions: 626,
  }
]
