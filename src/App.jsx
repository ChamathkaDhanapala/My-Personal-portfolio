import { useEffect, useState } from 'react'
import './App.css'
import rideLankaImage from './assets/RideLanka.png'
import zyraImage from './assets/Zyra.png'
import fitoraImage from './assets/Fitora.png'

const ROLES = ['Frontend Developer', 'UI/UX Designer']

const PROJECTS = [
  {
    id: 1,
    title: 'SyncSphere',
    description: 'A responsive real-time chat web application with secure authentication and seamless UI-backend communication',
    category: 'Frontend',
    tags: [' React.js', ' Node.js','Express.js','MongoDB','Socket.io'],
    image: '',
    link: 'https://github.com/ChamathkaDhanapala/SyncSphere---Realtime-chat-app-with-the-MERN-stack.git'
  },
  {
    id: 2,
    title: ' MedCare',
    description: ' A healthcare management web app with patient and appointment systems.',
    category: 'Academic & Group Projects',
    tags: ['React.js', 'React Native','Redux','Java','Spring Boot','MySQL','REST APIs'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/ChamathkaDhanapala/MedCare_App.git'
  },
  {
    id: 3,
    title: 'RideLanka',
    description: ' a vehicle rental mobile app enabling users to browse vehicles and manage bookings. Created an intuitive user interface with consistent design and smooth navigation across all screens.',
    category: ['UI/UX', 'Frontend'],
    tags: ['React Native + Expo', 'Figma'],
    image: rideLankaImage,
    link: 'https://github.com/ChamathkaDhanapala/RideLanka-Vehicle-Renting-Mobile-App.git'
  },
  {
    id: 4,
    title: 'Zyra',
    description: ' a fashion e-commerce website with clean, stylish interface. Focused on creating an elegant, conversion-optimized shopping experience across all key pages.',
    category: 'UI/UX',
    tags: ['Figma'],
    image: zyraImage ,
    link: 'https://www.figma.com/design/42KqBeWVUOZAK87u6hmsv3/Zyra?node-id=5-90&t=XxQnx6svUuq3Fgds-1'
  },
  {
    id: 5,
    title: 'Fitora',
    description: 'a modern fitness app with workout tracking and progress monitoring. Focused on clean, energetic layouts with intuitive navigation and structured workout screens.',
    category: 'UI/UX',
    tags: ['Figma'],
    image: fitoraImage,
    link: 'https://www.figma.com/design/tCeJafBxpsE4pinA2Je7nV/Fitora?node-id=0-1&t=XxQnx6svUuq3Fgds-1'
  },
]

const FILTERS = ['All', 'Frontend', 'UI/UX', 'Academic & Group Projects']

const SKILLS = {
  'Frontend Development': [
    { name: 'HTML', icon: 'HTML' },
    { name: 'CSS3', icon: 'CSS' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'React.js', icon: 'React' },
    { name: 'Tailwind CSS', icon: 'Tailwind' }
  ],
  'UI / UX Design': [
    { name: 'Figma', icon: 'Figma' },
    { name: 'Wireframing', icon: 'Wireframe' },
    { name: 'Prototyping', icon: 'Prototype' },
    { name: 'UI Design', icon: 'UI' },
    { name: 'UX Design', icon: 'UX' },
  ],
  'Tools': [
    { name: 'Git & GitHub', icon: 'Git' },
    { name: 'VS Code', icon: 'VSCode' },
    { name: 'Canva', icon: 'Canva' },
    { name: 'Photoshop', icon: 'PS' }
  ]
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    if (isPaused) {
      const pause = setTimeout(() => setIsPaused(false), 900)
      return () => clearTimeout(pause)
    }

    const current = ROLES[roleIndex]
    const isFinishedTyping = !isDeleting && displayText === current
    const isFinishedDeleting = isDeleting && displayText === ''

    const delay = isDeleting ? 60 : 110

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === current) {
          setIsPaused(true)
          setIsDeleting(true)
        }
      } else {
        const next = current.slice(0, Math.max(0, displayText.length - 1))
        setDisplayText(next)
        if (next === '') {
          setIsPaused(true)
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, isFinishedTyping || isFinishedDeleting ? 0 : delay)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, isPaused, roleIndex])

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-brand">
          <span className="brand-mark">&lt;/&gt;</span>
          <span className="brand-text">Chamathka Dhanapala</span>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="hero-content">
            <p className="hero-label">CHAMATHKA DHANAPALA</p>
            <h1 className="hero-title">
              <span className="hero-hi">Hi I&apos;m Chamathka</span>
            </h1>
            <p className="hero-typed">
              I&apos;m a <span className="hero-role">{displayText}</span>
              <span className="hero-cursor">|</span>
            </p>
            <p className="hero-subtitle">
              I&apos;m a frontend developer and UI/UX designer focused on
              crafting clean, modern interfaces and smooth user experiences for
              the web.
            </p>
            <div className="hero-social">
              <a
                href="mailto:chamathkasdhanapala@gmail.com"
                className="social-icon-circle"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25zm2.75-.25a.75.75 0 0 0-.75.75v.36l7 4.19 7-4.19V7.25a.75.75 0 0 0-.75-.75zM19 9.64l-6.43 3.85a1 1 0 0 1-1.14 0L5 9.64v7.61c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/ChamathkaDhanapala"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.12-1.5-1.12-1.5-.92-.63.07-.62.07-.62 1.02.07 1.55 1.06 1.55 1.06.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.8c.85.01 1.71.12 2.51.35 1.9-1.3 2.74-1.03 2.74-1.03.55 1.39.2 2.42.1 2.67.64.7 1.02 1.6 1.02 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.57.69.47A10 10 0 0 0 12 2Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/chamathkadhanapala/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.94 8.88v10.2H4.15V8.88zm.19-3.24a1.6 1.6 0 0 1-1.6 1.6 1.58 1.58 0 0 1-1.6-1.6 1.59 1.59 0 0 1 1.6-1.6c.88 0 1.6.72 1.6 1.6ZM19.84 14.3v4.78h-2.8v-4.45c0-1.12-.4-1.9-1.42-1.9-.78 0-1.25.52-1.46 1.03-.08.2-.1.48-.1.76v4.56h-2.8s.04-7.39 0-8.15h2.8v1.15c.37-.58 1.03-1.4 2.5-1.4 1.82 0 3.18 1.19 3.18 3.75Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.behance.net/ChamathkaDhanapala"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle"
                aria-label="Behance"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M9.47 11.9c.66-.26 1.11-.86 1.11-1.9 0-2.01-1.64-2.48-3.36-2.48H2v8.97h5.37c1.9 0 3.62-.94 3.62-2.94 0-1.35-.63-1.51-1.52-1.65ZM4.64 9.03h2.14c.67 0 1.18.29 1.18 1.05 0 .74-.44 1.14-1.16 1.14H4.64Zm2.26 6H4.64v-2.46h2.38c.82 0 1.45.34 1.45 1.23 0 .93-.65 1.23-1.57 1.23Zm10.43-4.97c-2.52 0-4.31 1.58-4.31 4.19 0 2.45 1.6 4.17 4.4 4.17 2 0 3.26-.82 3.9-2.57l-1.95-.36c-.32.82-.92 1.15-1.9 1.15-1.13 0-1.72-.53-1.86-1.67h5.9c.07-.27.1-.58.1-.93 0-2.46-1.43-3.98-4.28-3.98Zm-1.72 3.48c.12-.95.86-1.53 1.72-1.53.99 0 1.58.51 1.7 1.53Z"
                  />
                </svg>
              </a>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                View projects
              </a>
              <a href="#contact" className="btn ghost">
                Contact me
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle">
              <div className="hero-photo">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80"
                  alt="Chamathka Dhanapala portrait"
                />
              </div>
            </div>
            <div className="hero-tag">
              <span className="tag-dot" />
              Available for opportunities
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>About me</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <p>
              I’m a motivated Frontend Developer and UI/UX Designer currently pursuing a BSc in Information Technology at the University of Jaffna. I enjoy designing clean, user-friendly interfaces and turning them into responsive web applications using modern frontend technologies like React, JavaScript, HTML, and CSS. I also work with tools such as Figma to create intuitive UI/UX designs that focus on usability and visual clarity.
              </p>
            </article>
            <article className="card">
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-header">
            <h2 className="skills-title">My Skills</h2>
          </div>
          <div className="skills-container">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-box">
                      <div className="skill-icon">
                        {skill.icon === 'HTML' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M4.136 3.012h15.728l-1.431 16.1-6.433 1.79-6.433-1.79L4.136 3.012Z"
                              fill="#E34F26"
                            />
                            <path
                              d="M12 4.5v16.4l5.432-1.51 1.223-13.72H12Z"
                              fill="#EF652A"
                            />
                            <path
                              d="M7.5 8.5h8.1l-.1 1.1H7.6l.3 3.2h7.3l-.2 2.1-2.2.6-2.2-.6-.1-1.1H7.3l.4 4.3 4.3 1.2 4.3-1.2.3-3.3h-2.1l.1 1.1-2.2.6v.1l-2.2-.6-.1-1.1H7.3Z"
                              fill="#fff"
                            />
                          </svg>
                        )}
                        {skill.icon === 'CSS' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M4.192 3.143h15.616l-1.42 15.908-6.404 1.78-6.409-1.78L4.192 3.143Z"
                              fill="#1572B6"
                            />
                            <path
                              d="M12 5.07v16.78l5.194-1.443.96-10.754H12Z"
                              fill="#33A9DC"
                            />
                            <path
                              d="M8.46 8.305h7.08l-.36 4.04h-3.36v3.24l-2.16-.6-.24-2.64h-2.04l.36 4.08 3.96 1.1 3.96-1.1.48-5.4H8.46Z"
                              fill="#fff"
                            />
                          </svg>
                        )}
                        {skill.icon === 'JS' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
                            <path
                              d="M16.5 15.5c-.3.7-.7 1.3-1.5 1.8-.6.4-1.4.7-2.3.7-1.2 0-2-.5-2.5-1.2-.5-.7-.7-1.6-.7-2.8h3.5c0 .8.1 1.4.4 1.8.3.4.8.6 1.4.6.6 0 1.1-.2 1.4-.6.3-.4.4-1 .4-1.7 0-.7-.1-1.2-.4-1.6-.3-.4-.8-.6-1.4-.6h-.7l-.7-1.2h2.1c.8 0 1.4-.1 1.9-.4.5-.3.8-.8.8-1.4 0-.5-.2-.9-.5-1.2-.3-.3-.8-.5-1.4-.5-.6 0-1.1.2-1.4.5-.3.3-.5.7-.5 1.2H7.5c0-1.1.3-2 1-2.6.7-.6 1.6-1 2.8-1 1.2 0 2.1.3 2.8 1 .7.6 1 1.5 1 2.6 0 1-.3 1.8-.8 2.4z"
                              fill="#000"
                            />
                          </svg>
                        )}
                        {skill.icon === 'TS' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" rx="4" fill="#3178C6" />
                            <path
                              d="M13.5 15.5h-2.5v-7h2.5v7zm2.5-7v7h2.5v-1.5h-1.5v-1h1.5V9.5h-2.5zm-9 0v1.5h1.5v5.5h2.5v-7H7z"
                              fill="#fff"
                            />
                          </svg>
                        )}
                        {skill.icon === 'React' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                            <ellipse
                              cx="12"
                              cy="12"
                              rx="11"
                              ry="4.2"
                              fill="none"
                              stroke="#61DAFB"
                              strokeWidth="1"
                            />
                            <ellipse
                              cx="12"
                              cy="12"
                              rx="11"
                              ry="4.2"
                              fill="none"
                              stroke="#61DAFB"
                              strokeWidth="1"
                              transform="rotate(60 12 12)"
                            />
                            <ellipse
                              cx="12"
                              cy="12"
                              rx="11"
                              ry="4.2"
                              fill="none"
                              stroke="#61DAFB"
                              strokeWidth="1"
                              transform="rotate(-60 12 12)"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Tailwind' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.39 10.78 14.23 11.5 16 11.5c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.22 14.77 6.5 13 6.5H12zm-5 6.5c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C5.39 17.28 6.23 18 8 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C8.61 13.78 7.77 13 6 13H7z"
                              fill="#06B6D4"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Figma' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M8 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"
                              fill="#F24E1E"
                            />
                            <path
                              d="M8 12a4 4 0 0 1 4 4v4a4 4 0 1 1-8 0v-4a4 4 0 0 1 4-4z"
                              fill="#A259FF"
                            />
                            <path
                              d="M16 12a4 4 0 0 1 4 4v4a4 4 0 1 1-8 0v-4a4 4 0 0 1 4-4z"
                              fill="#0ACF83"
                            />
                            <path
                              d="M12 8a4 4 0 0 1-4-4H4a4 4 0 0 1 8 0h-4z"
                              fill="#FF7262"
                            />
                            <path
                              d="M12 8a4 4 0 0 1 4-4h4a4 4 0 0 1-8 0h4z"
                              fill="#1ABCFE"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Wireframe' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                            <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="1.5" />
                            <rect x="11" y="11" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                          </svg>
                        )}
                        {skill.icon === 'Prototype' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                            <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                            <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                            <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="6" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        )}
                        {skill.icon === 'UI' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                            <rect x="6" y="7" width="12" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="11" width="8" height="2" rx="1" fill="currentColor" />
                            <rect x="6" y="15" width="10" height="2" rx="1" fill="currentColor" />
                          </svg>
                        )}
                        {skill.icon === 'UX' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Color' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path
                              d="M12 4a8 8 0 0 1 0 16M12 4c-2 0-4 2-4 4s2 4 4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="none"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Type' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M4 4h16M4 8h16M6 4v16M18 4v16"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Git' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M21.62 11.11L12.89 2.38a2.68 2.68 0 0 0-3.78 0L2.38 9.11a2.68 2.68 0 0 0 0 3.78l8.73 8.73a2.68 2.68 0 0 0 3.78 0l6.73-6.73a2.68 2.68 0 0 0 0-3.78z"
                              fill="#F05032"
                            />
                            <path
                              d="M12 2.5v6M12 15.5v6M5.5 12h6M15.5 12h6"
                              stroke="#fff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {skill.icon === 'VSCode' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <path
                              d="M17 22.5L7.5 18 2 20.5V3.5L7.5 6 17 1.5L22 3v18l-5 1.5z"
                              fill="#007ACC"
                            />
                            <path
                              d="M7.5 18v-12M17 1.5v21"
                              stroke="#fff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {skill.icon === 'Canva' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="2" fill="#00C4CC" />
                            <path
                              d="M8 8h8v8H8z"
                              fill="#fff"
                              opacity="0.3"
                            />
                            <circle cx="12" cy="12" r="3" fill="#fff" />
                          </svg>
                        )}
                        {skill.icon === 'PS' && (
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="3" width="18" height="18" rx="2" fill="#31A8FF" />
                            <path
                              d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"
                              fill="#fff"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="skill-name">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <h2>My Projects</h2>
          </div>
          <div className="project-filters">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {PROJECTS.filter((project) => {
              if (activeFilter === 'All') return true
              if (Array.isArray(project.category)) {
                return project.category.includes(activeFilter)
              }
              return project.category === activeFilter
            }).map((project) => (
              <article key={project.id} className="card project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-footer">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill small">
                        {tag}
                      </span>
                    ))}
                    <a
                      href={project.link}
                      className="text-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      View project →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <h2>Education</h2>
            <p>Summary of my journey so far.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>BSc in Information Technology</h3>
                <p className="timeline-meta">University of Jaffna, Sri Lanka ·  2022–2025</p>
                <p>
                Gained a strong foundation in software development, web technologies, and database systems, with hands-on experience in frontend development and UI/UX design through academic projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-header">
            <h2>Contact</h2>
            <p></p>
          </div>
          <div className="contact-grid">
            <div className="card">
              <h3>Say hello</h3>
              <ul className="contact-list">
                <li>
                  <span className="contact-label">Email</span>
                  <a href="mailto:chamathkasdhanapala@gmail.com">chamathkasdhanapala@gmail.com</a>
                </li>
                <li>
                  <span className="contact-label">GitHub</span>
                  <a href="https://github.com/ChamathkaDhanapala" target="_blank" rel="noreferrer">
                    @ChamathkaDhanapala
                  </a>
                </li>
                <li>
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/chamathkadhanapala/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chamathkahanapala
                  </a>
                </li>
                <li>
                  <span className="contact-label">Behance</span>
                  <a
                    href="https://www.behance.net/ChamathkaDhanapala"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chamathkahanapala
                  </a>
                </li>
              </ul>
            </div>
            <form
              className="card contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                const name = e.target.name.value
                const email = e.target.email.value
                const message = e.target.message.value
                
                const subject = encodeURIComponent('Portfolio Contact Form')
                const body = encodeURIComponent(
                  `Hello Chamathka,\n\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n\n` +
                  `Message:\n${message}`
                )
                
                window.location.href = `mailto:chamathkasdhanapala@gmail.com?subject=${subject}&body=${body}`
              }}
            >
              <h3>Quick message</h3>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="What would you like to talk about?"
                  required
                />
              </div>
              <button type="submit" className="btn primary full">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Chamathka Dhanapala.</span>
        <span className="footer-dot" />
        <span>Built with React &amp; Vite.</span>
      </footer>
    </div>
  )
}

export default App
