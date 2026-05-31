import { useState, useEffect, useRef } from 'react'
import './index.css'
import myResume from './assets/Vamshi.pdf'
import heroImage from './assets/Vamshi_photo.png'
import logo from './assets/deer.png'
import mysql from './assets/mysql.svg'
/* ── data ── */
const SKILLS = [
  { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Three.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
  { name: 'MySQL',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Python',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Git',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Pandas',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-plain.svg' },
  { name: 'Numpy',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'JavaScript',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Scikit-Learn',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'Vite',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'Linux',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Vercel',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'OpenAI',       icon: 'https://assets.chanhdai.com/images/tech-stack-icons/chatgpt-light.svg' },
  { name: 'Claude',       icon: 'https://unpkg.com/simple-icons@v11/icons/anthropic.svg' },
]

const PROJECTS = [
  { cat:'ML ', title:'Heart Stroke Prediction', desc:'Built a machine learning system that predicts stroke risk from healthcare data, taking it from data preprocessing and feature engineering to a deployed Streamlit application for real-time predictions.', tags:['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'], href:'https://heartstrokeprediction-2222.streamlit.app/' },
  { cat:'Fintech', title:'Cryptocurrency Tracker', desc:'Built a real-time cryptocurrency tracking application using live REST APIs, handling data fetching, validation, and visualization while gaining hands-on experience with API-driven systems.', tags:['React.js', 'REST APIs', 'JavaScript'], href:'https://vamshicrypto.ccbp.tech/' },
  { cat:'Experimental', title:'Developer Portfolio Website ', desc:'Designed and deployed a personal portfolio with responsive layouts and automated CI/CD via GitHub and Vercel.', tags:['HTML5', 'CSS3', 'Bootstrap', 'GitHub', 'Vercel'], href:'https://portfolio-chi-silk-flyfdpxdpd.vercel.app' },
  { cat:'Open Source', title:'AI projects — in progress', desc:'Working through a structured AI engineering path: LLMs, RAG pipelines, LangChain, and agents. Real projects from this will land here as they get built.', tags:['Python','RAG','LangChain', 'LLMs'], href:'#' },
]

const EXPERIENCE = [
  { years:'2026 — Now', role:'Software Developer', company:'Reskom Technologies', desc:'Working with Boomi to build and understand enterprise integration workflows, connecting applications through APIs and automated data exchange while gaining hands-on experience with cloud-based integration solutions.' }]



/* ── SVG Logo ── */
function LogoMark() {
  return (
    <img src={logo} className='logo_svg'/>
  )
}

/* ── Navbar ── */
function Navbar() {
  const [shrink, setShrink] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const fn = () => setShrink(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="nav-wrap">
      <nav className={shrink ? 'shrink' : ''}>
        <a href="#top" className="logo">
          <LogoMark />
          <span>Vamshi Krishna</span>
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#about"      onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work"       onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact"    onClick={() => setMenuOpen(false)} className="nav-cta">Let's talk</a>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </nav>
    </div>
  )
}

/* ── useReveal ── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 60)
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ── Hero ── */
function Hero() {
  return (
    <header className="hero flex items-center justify-between gap-10" id="top">
      <div className="hero-content max-w-[650px]">
        <div className="hero-tag reveal">
          <span className="dot" /> Available for new opportunities
        </div>

        <h1 className="reveal">
          Building useful<br />
          <span className="grad">things with code</span>
        </h1>

        <p className="reveal">
          I work with integrations, automation, and backend development. Recently, I've been focused on Python,
          RAG pipelines, and AI-powered applications — learning by building, breaking things, and improving them along the way.
        </p>

        <div className="hero-actions reveal">
          <a href="#work" className="btn btn-primary">View my work →</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
      </div>
    </header>
  );
}

/* ── About ── */
function About() {
  return (
    <section className="block" id="about">
      <div className="section-head reveal">
        <span className="section-num">01</span>
        <h2>About</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="reveal">
          <p>I'm <strong>Vamshi</strong>, a Software Developer with experience in Boomi iPaaS, backend systems, and full-stack development.</p>
          <p>Lately, I've been focused on AI engineering — building with Python, RAG, LangChain, and LangGraph while learning how intelligent systems work behind the scenes.</p>
          <p>I enjoy solving real problems, connecting systems, and learning by building. Most of my growth has come from experimenting, breaking things, and figuring out better ways to put them back together.</p>
          <br /><br />
          <p><i>"Outside of coding, you'll usually find me exploring new AI tools, reading about emerging technologies, or working on side projects that started as random ideas."</i></p>
        </div>
        <div className="flex-2 justify-end items-center">
          <img
            src={heroImage}
            alt="Vamshi Krishna"
            className="w-full max-w-[420px] h-auto object-contain rounded-full"
          />
        </div>
        
      </div>
    </section>
  )
}

/* ── Work ── */
function ProjectCard({ project }) {
  const ref = useRef(null)
  const handleMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', (e.clientX - r.left) + 'px')
    ref.current.style.setProperty('--my', (e.clientY - r.top) + 'px')
  }
  return (
    <article className="project reveal" ref={ref} onMouseMove={handleMouseMove}>
      <span className="arrow-icon"><a href={project.href}>View ↗</a></span>
      <span className="pcat">{project.cat}</span>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="ptags">
        {project.tags.map(t => <span key={t} className="ptag">{t}</span>)}
      </div>
    </article>
  )
}

function Work() {
  return (
    <section className="block" id="work">
      <div className="section-head reveal">
        <span className="section-num">02</span>
        <h2>Projects</h2>
        <div className="section-line" />
      </div>
      <div className="projects">
        {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}

/* ── Experience ── */
function Experience() {
  return (
    <section className="block" id="experience">
      <div className="section-head reveal">
        <span className="section-num">03</span>
        <h2>Experience</h2>
        <div className="section-line" />
      </div>
      <div className="timeline">
        {EXPERIENCE.map(e => (
          <div key={e.company} className="tl-item reveal">
            <div className="tl-year">{e.years}</div>
            <div>
              <div className="tl-role">{e.role}</div>
              <div className="tl-company">{e.company}</div>
              <div className="tl-desc">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Skills Strip ── */
function SkillsStrip() {
  const trackRef = useRef(null)
  const paused = useRef(false)
  const pos = useRef(0)
 
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf
    const tick = () => {
      if (!paused.current) {
        pos.current -= 0.55
        const half = track.scrollWidth / 2
        if (Math.abs(pos.current) >= half) pos.current = 0
        track.style.transform = `translateX(${pos.current}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
 
  const doubled = [...SKILLS, ...SKILLS]
 
  return (
    <section className="block skills-section" id="skills">
      <div className="section-head reveal">
        <span className="section-num">04</span>
        <h2>Stack</h2>
        <div className="section-line" />
      </div>
      <div className="skills-viewport">
        <div className="skills-clip">
          <div className="skills-track" ref={trackRef}>
            {doubled.map((s, i) => (
              <div key={i} className="skill-icon-card"
                onMouseEnter={() => { paused.current = true }}
                onMouseLeave={() => { paused.current = false }}
              >
                <img src={s.icon} alt={s.name} loading="lazy" />
                <span className="skill-tooltip">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-fade-left" />
        <div className="skills-fade-right" />
      </div>
    </section>
  )
}
 

/* ── Contact ── */
function Contact() {
  return (
    <section className="contact-block reveal" id="contact">
      <h2>Thanks for stopping by.</h2>
      <p>If you have an opportunity, a project, or simply want to talk about software, AI, or integrations, I'd be happy to connect.</p>
      <a href="mailto:vamshikrishnareddyaluka@gmail.com" className="btn btn-primary">vamshikrishnareddyaluka@gmail.com</a>
      <div className="socials">
        <a href="https://github.com/vamshikrishnareddy12">GitHub</a>
        <a href="https://www.linkedin.com/in/aluka-vamshi-krishna-reddy-743175229/">LinkedIn</a>
        <a href="https://x.com/VamshiAluka">Twitter / X</a>
        <a href={myResume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return <footer>© 2026 Vamshi Krishna.</footer>
}

/* ── App ── */
export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsStrip />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}