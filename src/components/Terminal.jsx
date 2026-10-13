import { useState } from 'react'

// Rename the file in /public to match this path.
const LINKS = {
  github: 'https://github.com/snehaun',
  linkedin: 'https://www.linkedin.com/in/sneha-nagargoje/',
  resume: '/sneha-resume.pdf',
  email:
    'https://mail.google.com/mail/?view=cm&fs=1&to=sneha.nagargoje10@gmail.com',
}

const LINK_LABELS = {
  github: 'Visit GitHub',
  linkedin: 'Visit LinkedIn',
  resume: 'View Resume',
  email: 'Compose Email',
}

const COMMANDS = {
  help: `AVAILABLE COMMANDS

help             Show all commands
about            About Sneha
projects         View projects
experience       Experience
contact          Contact information
whoami           Identify developer
github           GitHub profile
linkedin         LinkedIn profile
resume           View resume
email            Compose an email
clear            Clear terminal

You can also type:
open github
open linkedin
open resume
send an email
view projects
show skills`,

  about: `SNEHA NAGARGOJE

AI & Software Developer

Interested in:
- Artificial Intelligence
- Java
- Full Stack Development
- Data Science`,

  skills: `TECHNICAL SKILLS

Programming: Java, Python, JavaScript
Frontend: HTML, CSS, React, Bootstrap
Backend: java
Database: MySQL
AI/ML: PyTorch, Transformers
Tools: Git, GitHub, VS Code`,

  projects: `MY PROJECTS

01. AI Image Caption Recommendation System
02. Simple Banking System
03. E-Commerce Website
04. Spotify Clone

Explore the Projects section on this portfolio
for more details.`,

  experience: `MY JOURNEY

- Web Development Internship
- Product Development and Training
- AI / Data Science Projects
- Software Development`,

  contact: `CONTACT SNEHA

Email: Type "email"
GitHub: Type "github"
LinkedIn: Type "linkedin"
Resume: Type "resume"`,

  whoami: `SNEHA NAGARGOJE

AI & Software Developer
Java | React | Python | AI/ML`,
}

const ALIASES = {
  'open github': 'github',
  'show github': 'github',
  'open linkedin': 'linkedin',
  'show linkedin': 'linkedin',
  'open resume': 'resume',
  'view resume': 'resume',
  'download resume': 'resume',
  'send an email': 'email',
  'send email': 'email',
  'compose email': 'email',
  'view projects': 'projects',
  'show projects': 'projects',
  'view skills': 'skills',
  'show skills': 'skills',
  'about sneha': 'about',
  'show about': 'about',
  'view about': 'about',
  'show experience': 'experience',
  'view experience': 'experience',
  'show contact': 'contact',
  'view contact': 'contact',
  'clear terminal': 'clear',
  'clear screen': 'clear',
  cls: 'clear',
}

// Own-property check so inputs like "constructor" or "__proto__"
// don't resolve to inherited Object.prototype members.
const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key)

function Terminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to SNEHA.EXE' },
    { type: 'system', text: 'Type "help" to see available commands.' },
  ])

  const handleCommand = (event) => {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) return

    const rawCommand = input.trim().toLowerCase()
    if (!rawCommand) return

    const command = has(ALIASES, rawCommand) ? ALIASES[rawCommand] : rawCommand

    if (command === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const entries = [{ type: 'user', text: `$ ${rawCommand}` }]

    if (has(LINKS, command)) {
      entries.push({
        type: 'system',
        text: `Open ${command} using the link below.`,
        link: LINKS[command],
        label: LINK_LABELS[command],
      })
    } else if (has(COMMANDS, command)) {
      entries.push({ type: 'system', text: COMMANDS[command] })
    } else {
      entries.push({
        type: 'error',
        text: `Command not found: "${rawCommand}"\nType "help" to see available commands.`,
      })
    }

    setHistory((prev) => [...prev, ...entries])
    setInput('')
  }

  return (
    <section className="terminal-section" id="terminal">
      <div className="terminal-header">
        <p className="section-label">INTERACTIVE SYSTEM</p>

        <h2>
          TALK TO
          <span> MY PORTFOLIO.</span>
        </h2>

        <p>Explore my work using simple terminal commands.</p>
      </div>

      <div className="terminal-window">
        <div className="terminal-top">
          <div className="terminal-dots">
            <span />
            <span />
            <span />
          </div>

          <p>sneha@portfolio:~</p>
        </div>

        <div className="terminal-body">
          <div className="terminal-history">
            {history.map((item, index) => (
              <div key={index} className="terminal-entry">
                <pre className={item.type}>{item.text}</pre>

                {item.link && (
                  <a
                    className="terminal-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label} ↗
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="terminal-input">
            <span>$</span>

            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleCommand}
              placeholder='Type "help"...'
              aria-label="Enter terminal command"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terminal