
import { useEffect, useState } from 'react'
import './App.css'

import ProjectCard from './components/ProjectCard'
import Terminal from './components/Terminal'
import Reveal from './components/Reveal'
import projects from './data/projects'

function App() {
  const [loading, setLoading] = useState(true)

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false)
  }, 1800)

  return () => clearTimeout(timer)

}, [])

  const [cursor, setCursor] = useState({
  x: 0,
  y: 0
})
const [cursorActive, setCursorActive] = useState(false)

useEffect(() => {

  const moveCursor = (event) => {

    setCursor({
      x: event.clientX,
      y: event.clientY
    })

  }

  window.addEventListener('mousemove', moveCursor)

  return () => {
    window.removeEventListener('mousemove', moveCursor)
  }

}, [])

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const handleMouseMove = (event) => {

    const x = event.clientX
    const y = event.clientY

    setMousePosition({
      x: x,
      y: y
    })
  }

  return (
    <main
      className="portfolio"
      onMouseMove={handleMouseMove}
    >

      {/* CURSOR GLOW */}
      

      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>
      {/* CUSTOM CURSOR */}

<div
  className={`custom-cursor ${
    cursorActive ? 'cursor-active' : ''
  }`}
  style={{
    left: cursor.x,
    top: cursor.y
  }}
></div>


      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          SN.
        </div>

        <div className="nav-links">

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>

          <a href="#contact">Contact</a>

        </div>

        <button className="resume-btn">
         <a
  href="/(resume)sneha.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="nav-resume"
>
  RESUME ↗
</a>
        </button>

      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <p className="eyebrow">
            AI & SOFTWARE DEVELOPER
          </p>

          <h1>
            I BUILD
            <span>DIGITAL</span>
            EXPERIENCES.
          </h1>

          <p className="hero-description">
            I'm Sneha Nagargoje, a developer interested in
            artificial intelligence, software development and
            creating meaningful digital products.
          </p>


          <div className="hero-buttons">

            <button className="primary-btn">
              Explore My Work ↓
            </button>

            <button className="secondary-btn">
              Let's Connect ↗
            </button>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-right">

          <div
            className="orb"
            style={{
              transform: `
                translate(
                  ${mousePosition.x * 0.01}px,
                  ${mousePosition.y * 0.01}px
                )
              `
            }}
          >

            <div className="orb-inner"></div>

          </div>


          <div className="floating-card card-one">
            JAVA
          </div>

          <div className="floating-card card-two">
            AI / ML
          </div>

          <div className="floating-card card-three">
            REACT
          </div>

        </div>

      </section>


      <div className="scroll-indicator">

        <span></span>
      
        SCROLL TO EXPLORE

      </div>
      {/* ABOUT SECTION */}

<Reveal>
<section className="about-section" id="about">

  <div className="section-number">
    01
  </div>

  <div className="about-content">

    <div className="about-heading">

      <p className="section-label">
        GET TO KNOW ME
      </p>

      <h2>
        I DON'T JUST
        <span>WRITE CODE.</span>
        I BUILD THINGS.
      </h2>

    </div>


    <div className="about-grid">

      <div className="about-text">

        <p>
          I'm Sneha Nagargoje, an AI & Data Science developer
          who enjoys turning ideas into useful digital products.
        </p>

        <p>
          My interests sit at the intersection of software
          development, artificial intelligence and modern web
          experiences.
        </p>

        <p>
          From building AI-powered applications to developing
          full-stack systems, I'm constantly learning, experimenting
          and improving.
        </p>

      </div>


      <div className="stats">

        <div className="stat">
          <span>01</span>
          <h3>AI</h3>
          <p>Artificial Intelligence</p>
        </div>

        <div className="stat">
          <span>02</span>
          <h3>WEB</h3>
          <p>Full Stack Development</p>
        </div>

        <div className="stat">
          <span>03</span>
          <h3>JAVA</h3>
          <p>Backend Development</p>
        </div>

      </div>

    </div>

  </div>

</section>
</Reveal>
{/* PROJECT LAB */}
<Reveal>
<section className="projects-section" id="projects">

  <div className="projects-header">

    <div>
      <p className="section-label">
        SELECTED WORK
      </p>

      <h2>
        PROJECT
        <span>LAB.</span>
      </h2>
    </div>

    <p className="projects-intro">
      A collection of things I've built while exploring
      software development, artificial intelligence and
      modern web technologies.
    </p>

  </div>


  <div className="projects-list">
     {projects.map((project, index) => (
  <Reveal
    key={project.number}
    delay={index * 0.15}
  >
    <ProjectCard project={project} />
  </Reveal>
))}

  </div>

</section>
</Reveal>
{/* SKILLS SECTION */}

<Reveal>

<section className="skills-section" id="skills">

  <div className="skills-header">

    <p className="section-label">
      TECHNOLOGY UNIVERSE
    </p>

    <h2>
      TOOLS I
      <span>BUILD WITH.</span>
    </h2>

  </div>


  <div className="skills-universe">

    {/* CENTER */}

    <div className="skills-center">

      <div className="center-ring">

        <div className="center-content">

          <span>SN</span>

          <small>
            DEVELOPER
          </small>

        </div>

      </div>

    </div>


    {/* JAVA */}

    <Reveal delay={0.1}>
  <div className="skill-node node-java">

    <div className="node-icon">
      ☕
    </div>

    <h3>JAVA</h3>

    <p>
      OOP · Collections · DSA
    </p>

  </div>
</Reveal>


    {/* REACT */}

    <Reveal delay={0.2}>
  <div className="skill-node node-react">

      <div className="node-icon">
        ⚛
      </div>

      <h3>REACT</h3>

      <p>
        Components · UI · Vite
      </p>

    </div>
    </Reveal>


    {/* AI */}

    <Reveal delay={0.3}>
  <div className="skill-node node-ai">

      <div className="node-icon">
        ◈
      </div>

      <h3>AI / ML</h3>

      <p>
        BLIP · PyTorch · Python
      </p>

    </div>
    </Reveal>


    {/* DATABASE */}

    <Reveal delay={0.4}>
  <div className="skill-node node-db">

      <div className="node-icon">
        ◉
      </div>

      <h3>DATABASE</h3>

      <p>
        MySQL · SQL · MongoDB
      </p>

    </div>
    </Reveal>


    {/* WEB */}

   <Reveal delay={0.5}>
  <div className="skill-node node-web">

      <div className="node-icon">
        ◇
      </div>

      <h3>WEB</h3>

      <p>
        HTML · CSS · JavaScript
      </p>

    </div>
    </Reveal>


    {/* TOOLS */}

    <Reveal delay={0.6}>
  <div className="skill-node node-tools">
      <div className="node-icon">
        ⚙
      </div>

      <h3>TOOLS</h3>

      <p>
        Git · GitHub · VS Code
      </p>

    </div>
    </Reveal>

  </div>

</section>
</Reveal>
{/* JOURNEY SECTION */}
<Reveal>
<section className="journey-section" id="experience">

  <div className="journey-header">

    <p className="section-label">
      MY JOURNEY
    </p>

    <h2>
      FROM
      <span>LEARNING</span>
      TO BUILDING.
    </h2>

  </div>


  <div className="timeline">


    {/* 01 */}

    <div className="timeline-item">

      <div className="timeline-year">
        2021
      </div>

      <div className="timeline-line">
        <span></span>
      </div>

      <div className="timeline-content">

        <p className="timeline-type">
          EDUCATION
        </p>

        <h3>
          High School
          <span>Science Stream</span>
        </h3>

        <p>
  Completed higher secondary education in the Science stream,
  building a strong foundation in mathematics, physics,
  chemistry and analytical thinking.
</p>

      </div>

    </div>


    {/* 02 */}

    <Reveal delay={0.1}>
  <div className="timeline-item">

      <div className="timeline-year">
        2024
      </div>

      <div className="timeline-line">
        <span></span>
      </div>
      

      <div className="timeline-content">

        <p className="timeline-type">
          EDUCATION
        </p>

        <h3>
          Bachelor of
          <span>Engineering</span>
        </h3>

        <p>
          Continued into engineering with a focus on
          artificial intelligence, data science and
          software development.
        </p>

      </div>

    </div>
    </Reveal>


    {/* 03 */}

    <Reveal delay={0.2}>
  <div className="timeline-item">

      <div className="timeline-year">
        2025
      </div>

      <div className="timeline-line">
        <span></span>
      </div>

      <div className="timeline-content">

        <p className="timeline-type">
          EXPERIENCE
        </p>

        <h3>
          Web Development
          <span>Internship</span>
        </h3>

        <p>
          Worked on responsive web interfaces and gained
          practical experience building real-world
          web applications.
        </p>

      </div>

    </div>
    </Reveal>


    {/* 04 */}

    <Reveal delay={0.3}>
  <div className="timeline-item">

      <div className="timeline-year">
        NOW
      </div>

      <div className="timeline-line">
        <span></span>
      </div>

      <div className="timeline-content">

        <p className="timeline-type">
          CURRENTLY
        </p>

        <h3>
          Building
          <span>Intelligent Systems</span>
        </h3>

        <p>
          Exploring Java, full-stack development,
          artificial intelligence and building products
          that combine technology with useful experiences.
        </p>

      </div>

    </div>
    </Reveal>
    


  </div>
  

</section>
</Reveal>
<Reveal>
  <Terminal />
</Reveal>
<Reveal>
  <section className="contact-section" id="contact">

  <div className="contact-header">

    <p className="section-label">
      06 / CONTACT
    </p>

    <h2>
      LET'S BUILD
      <span>SOMETHING.</span>
    </h2>

    <p className="contact-description">
      Have an idea, project, or opportunity?
      Let's turn it into something real.
    </p>

  </div>

  <div className="contact-content">

    <div className="contact-info">

      <p>GET IN TOUCH</p>

      <a href="mailto:sneha.nagargoje10@gmail.com">
        sneha.nagargoje10@gmail.com
      </a>

      <div className="contact-links">

        <a href="https://github.com/snehaun" target="_blank">
          GITHUB ↗
        </a>

        <a href="https://www.linkedin.com/in/sneha-nagargoje/" target="_blank">
          LINKEDIN ↗
        </a>

      </div>

    </div>

    <div className="contact-visual">

      <div className="contact-circle">
        <span>SN</span>
      </div>

    </div>

  </div>

</section>
</Reveal>

<footer className="footer">

  <div>
    SNEHA<span>.EXE</span>
  </div>

  <p>
    © 2026 Sneha Nagargoje
  </p>

  <p>
    BUILT WITH REACT
  </p>

</footer>



    </main>
  )
}

export default App