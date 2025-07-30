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
      "It's really fun to keep checking off tasks one by one - it makes you feel like you're making meaningful progress.",
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
      "The point of Cabin Visuals is to create 'Visual Music' - musically arranged visuals.",
      "The design is inspired from existing music software called DAWs (digital audio workstations). Using the same interface, you can program visuals instead of sounds. I was able to make a really cool music video with it (attached below).",
      "We haven't launched yet, but we're working on it!"
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
      "CabinAudio.com is a web app that lets people upload songs and apply personalized EQ to them.",
      "It contains multiple calibration tools based on enhancing the spatial characteristics of stereo. These help people create EQ settings calibrated to their own hearing and audio devices, sometimes leading to outstanding results.",
      "What I really like about it is how fast I'm able to try out crazy ideas when using React/Typescript for prototyping."
    ],
    coverImage: "/cabinaudio.png",
    gallery: [
      "/cabinaudio.png",
      "/cabinaudio2.png"
    ],
    techStack: ["React", "Zustand", "Web Audio API", "IndexedDB", "TypeScript"],
    features: [
      "Infinite band EQ",
      "Experimental calibration",
      "In-browser song upload and playback",
      "Settings persistence with IndexedDB"
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
      "CabinEQ is an infinite-band EQ audio plugin made with the JUCE framework.",
      "Why infinite band EQ? The idea is that with enough precise EQ changes, you can get ridiculous audio quality improvements. I use it to this day to improve my audio quality when I'm producing/mixing music.",
      "I had to learn C++, JUCE, and DSP to make this. It doesn't look the greatest, but I'm proud of how fast I was able to iterate through different feature ideas with such a low-level language.",
    ],
    coverImage: "/cabinEQ.png",
    gallery: [
      "/cabinEQ.png"
    ],
    techStack: ["JUCE", "C++"],
    features: [
      "Infinite band EQ",
      "Unlimited EQ profiles",
      "System audio routing (with the help of BlackHole)",
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
      "This was a full-stack web app that I built for Bryan Song, which ultimately was never launched.",
      "The idea was to create an automated gifting service for upper-middle class professionals to rekindle friendships.",
      "I think the UI is pretty clean."
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
      "This project is a simple Python/Django web app I spun up during my internship at RacquetPass. It generates QR codes in a format that we can print, load into our database, and send to customers (pro stores).",
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
