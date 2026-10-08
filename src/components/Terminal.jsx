import { useState } from 'react'

function Terminal() {

  const [input, setInput] = useState('')

  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Welcome to SNEHA.EXE'
    },
    {
      type: 'system',
      text: 'Type "help" to see available commands.'
    }
  ])


  const commands = {

    help: `
Available commands:

about      → About Sneha
skills     → View technical skills
projects   → View projects
experience → View experience
contact    → Contact information
clear      → Clear terminal
`,

    about: `
SNEHA NAGARGOJE

AI & Software Developer

Interested in:
• Artificial Intelligence
• Java
• Full Stack Development
• Data Science
`,

    skills: `
TECHNICAL STACK

Java
Python
JavaScript
React
HTML / CSS
SQL
MySQL
Git / GitHub
AI / ML
`,

    projects: `
PROJECTS

01  AI Image Caption Engine
02  Simple Banking System
03  E-Commerce Platform
04  Spotify Clone
`,

    experience: `
EXPERIENCE

Web Development Internship
AI / Data Science Projects
Full Stack Development
`,

    contact: `
CONTACT

Email:
sneha@example.com

GitHub:
github.com

LinkedIn:
linkedin.com
`

  }


  const handleCommand = (event) => {

    if (event.key !== 'Enter') {
      return
    }


    const command = input
      .trim()
      .toLowerCase()


    if (!command) {
      return
    }


    if (command === 'clear') {

      setHistory([])

      setInput('')

      return
    }


    const response =
      commands[command] ||
      `Command not found: ${command}
Type "help" to see available commands.`


    setHistory([
      ...history,

      {
        type: 'user',
        text: `$ ${command}`
      },

      {
        type: 'system',
        text: response
      }

    ])


    setInput('')
  }


  return (

    <section className="terminal-section">

      <div className="terminal-header">

        <p className="section-label">
          INTERACTIVE SYSTEM
        </p>

        <h2>
          TALK TO
          <span>MY PORTFOLIO.</span>
        </h2>

      </div>


      <div className="terminal-window">

        <div className="terminal-top">

          <div className="terminal-dots">

            <span></span>
            <span></span>
            <span></span>

          </div>

          <p>
            sneha@portfolio:~
          </p>

        </div>


        <div className="terminal-body">

          {history.map((item, index) => (

            <pre
              key={index}
              className={item.type}
            >
              {item.text}
            </pre>

          ))}


          <div className="terminal-input">

            <span>
              $
            </span>

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleCommand}
              autoFocus
            />

          </div>

        </div>

      </div>

    </section>

  )
}

export default Terminal