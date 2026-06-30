import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, Mail, ExternalLink, Menu, X, MapPin, Heart, Globe, FileText, Briefcase, GraduationCap, Users } from 'lucide-react'

const journalEntries = [
  {
    id: 1,
    title: "Making 700 Feel Like 7",
    date: "Human-Centered AI Enablement at Scale",
    excerpt: "What happens when you throw out the framework and build every live AI enablement session around the people in it.",
    subtitle: "What happens when you throw out the framework and build every live AI enablement session around the people in it: the presenters, the audience, and the moments that make a crew of 700 genuinely feel like 7.",
    body: `There is no fancy framework here. Just good old-fashioned "meet people where they are" – and honestly, that's the part most people skip.

Everyone wants to tell you there's a playbook for running live, large-scale corporate learning sessions. A clean, step-by-step process you can drop into any context and call it done. I spent time looking for it. It doesn't exist; well– at least not for the kind of sessions I want to run.

When I started leaning more seriously into the learning and development pillar of my Design Program Management role a couple of years ago, I tried building my own version of that framework. I was overseeing a series of learning sessions for a 500+ person Design org. I was responsible for strategizing topics, setting them up, and facilitating them end to end. The system handed to me looked something like: [Identify speaker] + [Meet once] + [Let them do their thing] + [Set up the calendar invite] + [Run the session]. Rinse and repeat.

But it never worked. Not really worked. I kept noticing that each person, each topic, was so different – and too often, things wouldn't go as planned. Presentations were decent, but not as engaging as they could be. That's when it clicked: the "low-touch program manager" was a myth I'd been sold, and I had the ability – and honestly, the responsibility – to use my role to make these sessions something both presenters and attendees walked away from feeling fully satisfied and genuinely impacted.

My process starts long before anyone sees a single slide. I work directly with each subject matter expert to co-create the content together, showing up as whatever they need me to be: deck polisher, sounding board, co-presenter, or just an extension of themselves. That means sitting with them, learning what they know, and helping translate genuinely complex, technical ideas into something a design and research-minded audience can absorb and walk away excited about.

I'm not just a "producer" who hands back a polished deck. I become a humble student of their expertise, so that when questions fly in during a live session, I can actually help answer them. That takes trust. And it takes time.

What that process looks like varies wildly from person to person. Some folks prefer working asynchronously, bouncing drafts back and forth. Others want multiple live review sessions where we talk through every slide together. I mold myself to how they work best, not the other way around. And while I'll absolutely jump in with a suggestion or redirect when something isn't landing, I'm equally committed to giving each speaker real creative freedom: their personality, their humor, their specific and sometimes wonderfully niche interests. Yes, that means GIFs. It means slides that look a little different from one another. With me in the back-end, the format stays polished, but it never stays stiff. No one shows up to a dry presentation and thinks, I'm so glad I gave up an hour for this.

Then there's the session itself. On the day of, I open by talking to the audience the way I'd talk to friends – because that's genuinely how I see them. No awkward silences as you enter the call and watch the clock tick away, waiting with empty blinks for the host to begin. With 100 to 200 people live at any given session, it would be easy to let the crowd become an abstraction. I refuse to let that happen. Chat is open, reactions are on, and I'm there to hear from people, not just talk at them. I want everyone to feel like they're in the room, not watching from a distance.

That combination of the high-touch co-creation, the trust I build with each presenter, the warmth I try to bring into every live room, is what makes this work feel meaningful. These aren't just training sessions. For a lot of people, it's one of the only moments in the busy work week where a community of (now) 700+ actually feels like a community. People have told me these sessions feel different. That they feel welcome. That they actually learned something and, somehow, also had a really good time doing it.

Our ratings as we've moved into more advanced AI content consistently average 4.5 out of 5 or higher. I think about that less as a metric and more as confirmation that the extra time: all the back-and-forth, all the customization, all the intentionality is worth it. Every single time.

There is no framework. There's just people, and the very human act of meeting them where they are — which, in this AI era, might be the most important thing we can hold onto.`,
    comingSoon: false
  },
  {
    id: 2,
    title: "Coming Soon",
    date: "",
    excerpt: "This thought provoke is currently being crafted. Check back soon for the full story.",
    comingSoon: true
  },
  {
    id: 3,
    title: "Coming Soon",
    date: "",
    excerpt: "This thought provoke is currently being crafted. Check back soon for the full story.",
    comingSoon: true
  }
]

const caseStudies = [
  {
    id: 1,
    title: "Experience AI Weeks",
    snippet: "From AI anxiety to the beginning of AI fluency: empowering a global creative org of 700+ professionals.",
    tags: ["AI Enablement", "Technical Upskilling", "Scale"],
    hasDetail: true
  },
  {
    id: 2,
    title: "New Hire Onboarding Redesign",
    snippet: "From fragmented starts to seamless integration: scaling structural belonging for a global creative org.",
    tags: ["Onboarding", "Systems Design", "Scale"],
    hasDetail: true,
    image: "./onboarding-hero.svg"
  },
  {
    id: 3,
    title: "Coming Soon",
    snippet: "This case study is currently being crafted. Check back soon for the full story.",
    tags: ["Coming Soon"],
    comingSoon: true
  }
]

function FadeIn({ children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}
      className={className}
    >
      {children}
    </div>
  )
}

function ContactArrow() {
  const [visible, setVisible] = useState(true)
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  if (!visible) return null

  return (
    <div ref={ref} className="flex flex-col items-center py-4 pointer-events-none" id="contact-arrow">
      <span className="text-sm font-medium text-[#7A3300] mb-1 animate-pulse" style={{ fontFamily: "'Inter', sans-serif" }}>
        Down here!
      </span>
      <svg width="32" height="48" viewBox="0 0 32 48" fill="none" className="animate-bounce">
        <path d="M16,4 C14,8 18,12 15,16 C12,20 19,24 16,28 C13,32 18,36 16,40" stroke="#7A3300" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M10,36 L16,46 L22,36" stroke="#7A3300" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  )
}

function Navbar({ onNavigate, currentView, onContactClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Programs' },
    { href: '#beyond', label: 'Beyond' },
    { href: '#thoughts', label: 'Thoughts' },
    { id: 'resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleClick = (e, link) => {
    if (link.id === 'resume') {
      e.preventDefault()
      onNavigate('resume')
    } else if (link.href === '#contact' && currentView === 'home') {
      onContactClick?.()
    } else if (currentView !== 'home') {
      e.preventDefault()
      onNavigate('home')
      setTimeout(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FBFBFA]/90 backdrop-blur-sm border-b border-[#1A1A1A]/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); onNavigate('home') }}
          className="font-serif text-lg text-[#1A1A1A] hover:text-[#7A3300] transition-colors cursor-pointer"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hayley Ng
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link.id || link.href}
              href={link.href || '#'}
              onClick={(e) => handleClick(e, link)}
              className="text-sm text-[#1A1A1A] hover:text-[#7A3300] transition-colors cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#1A1A1A]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#FBFBFA] border-b border-[#1A1A1A]/5 px-6 pb-4">
          {links.map(link => (
            <a
              key={link.id || link.href}
              href={link.href || '#'}
              onClick={(e) => { handleClick(e, link); setMobileOpen(false) }}
              className="block py-2 text-sm text-[#1A1A1A] hover:text-[#7A3300] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

function Greeting() {
  const hour = new Date().getHours()
  const timeOfDay = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'

  return (
    <p className="text-lg text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
      How's it going? Hope your {timeOfDay} is going well! Happy you're here!
    </p>
  )
}

function Hero({ onNavigate }) {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <Greeting />
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <FadeIn className="shrink-0 flex flex-col items-center">
          <img
            src="./profile.png"
            alt="Hayley Ng"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#7A3300]/10"
          />
          <button
            data-guide="resume-btn"
            onClick={() => onNavigate('resume')}
            className="mt-4 relative flex items-center gap-2 px-7 py-4 text-white text-sm cursor-pointer hover:scale-105 transition-transform"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none" fill="#1A1A1A">
              <path d="M25,5 C35,2 42,8 55,4 C68,0 78,7 95,3 C112,-1 125,6 140,4 C155,2 165,8 178,6 C191,4 198,14 196,22 C194,30 197,36 193,42 C189,48 180,52 168,54 C156,56 148,50 135,53 C122,56 112,58 98,55 C84,52 72,57 58,54 C44,51 32,55 22,50 C12,45 5,40 3,32 C1,24 4,18 7,12 C10,6 15,8 25,5 Z" />
            </svg>
            <span className="relative flex items-center gap-2">
              <FileText size={15} />
              View my resume
            </span>
          </button>
        </FadeIn>
        <div className="text-center md:text-left">
          <FadeIn>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hi, I'm Hayley Ng
            </h1>
            <p className="text-lg md:text-xl text-[#1A1A1A] italic mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pronounced: Hey-lee ing (as in excit<span className="font-bold">ing</span>)
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              {['Experience Program Management', 'Instructional Design & Execution', 'Design Ops', 'Making magic happen'].map(tag => (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1.5 rounded-full ${tag === 'Making magic happen' ? 'font-bold bg-[#7A3300] text-white border border-[#7A3300]' : 'bg-white border border-[#7A3300]/20 text-[#7A3300]'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tag === 'Making magic happen' ? `✨ ${tag}` : tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#555555]/70" style={{ fontFamily: "'Inter', sans-serif" }}>
              Current hyperfixation: How amazing Norway fans are at the World Cup ⚽ <a href="https://www.youtube.com/watch?v=ncu50EBP-6I" target="_blank" rel="noopener noreferrer" className="text-[#7A3300]/70 hover:text-[#7A3300] hover:underline">(check it out)</a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function JournalGallery({ onSelectEntry }) {
  return (
    <section id="thoughts" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Thought Provokes
          </h2>
          <p className="text-[#555555] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Essays on enablement, technology, and intentional change.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {journalEntries.map(entry => (
            <FadeIn key={entry.id}>
              {entry.comingSoon ? (
                <div className="text-left w-full p-6 border border-dashed border-[#1A1A1A]/15 rounded-lg opacity-60 bg-white flex flex-col h-full">
                  <div className="w-full h-24 rounded mb-4 flex items-center justify-center bg-[#1A1A1A]/3 border border-dashed border-[#1A1A1A]/10">
                    <span className="text-xs text-[#555555]/40" style={{ fontFamily: "'Inter', sans-serif" }}>🚧 Coming Soon</span>
                  </div>
                  <h3
                    className="text-lg text-[#1A1A1A] mb-3 leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {entry.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {entry.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#7A3300]/6 text-[#7A3300]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Coming Soon
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => onSelectEntry(entry)}
                  className="text-left w-full group border border-[#1A1A1A]/8 rounded-lg hover:border-[#7A3300]/30 hover:shadow-sm transition-all cursor-pointer bg-white overflow-hidden flex flex-col h-full"
                >
                  <div className="p-6 flex-1">
                    <span className="text-xs text-[#7A3300] mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {entry.date}
                    </span>
                    <h3
                      className="text-lg text-[#1A1A1A] mb-3 group-hover:text-[#7A3300] transition-colors leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {entry.title}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {entry.excerpt}
                    </p>
                  </div>
                  <div className="bg-[#7A3300] group-hover:bg-[#5C2600] transition-colors py-3 text-center">
                    <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Let's dive in!
                    </span>
                  </div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function JournalEntry({ entry, onBack }) {
  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Back to all entries
        </button>
        <span className="text-xs text-[#7A3300] mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>
          {entry.date}
        </span>
        <h1
          className="text-3xl md:text-4xl text-[#1A1A1A] mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {entry.title}
        </h1>
        {entry.subtitle && (
          <p className="text-lg text-[#555555] leading-relaxed mb-8 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
            {entry.subtitle}
          </p>
        )}
        <div className="space-y-5" style={{ fontFamily: "'Inter', sans-serif" }}>
          {entry.body.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-[#555555] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

function CaseStudies({ onSelectStudy }) {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Programs I've Built
          </h2>
          <p className="text-[#555555] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Selected work in enablement, operations, and organizational design.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map(study => (
            <FadeIn key={study.id}>
              <div
                onClick={() => study.hasDetail && onSelectStudy(study.id)}
                className={`border rounded-lg transition-all group overflow-hidden ${study.comingSoon ? 'border-dashed border-[#1A1A1A]/15 opacity-60' : 'border-[#1A1A1A]/8 hover:border-[#7A3300]/30 hover:shadow-sm'} ${study.hasDetail ? 'cursor-pointer' : ''}`}
              >
                <div className="p-6">
                  <div className={`w-full h-36 rounded mb-5 flex items-center justify-center overflow-hidden ${study.comingSoon ? 'bg-[#1A1A1A]/3 border border-dashed border-[#1A1A1A]/10' : 'bg-[#7A3300]/5'}`}>
                    {study.hasDetail ? (
                      <img src={study.image || "./case-study-hero.svg"} alt={study.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs text-[#555555]/40" style={{ fontFamily: "'Inter', sans-serif" }}>{study.comingSoon ? '🚧 Coming Soon' : 'Project Visual'}</span>
                    )}
                  </div>
                  <h3
                    className="text-lg text-[#1A1A1A] mb-3 group-hover:text-[#7A3300] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {study.snippet}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#7A3300]/6 text-[#7A3300]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {study.hasDetail && (
                  <div className="bg-[#7A3300] group-hover:bg-[#5C2600] transition-colors py-3 text-center">
                    <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Let's dive in!
                    </span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyDetail({ studyId, onBack }) {
  if (studyId === 2) {
    return (
      <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Back to home
          </button>

          <h1 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            New Hire Onboarding Program
          </h1>
          <p className="text-lg text-[#1A1A1A] italic mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            From fragmented starts to seamless integration: scaling structural belonging for a global creative org.
          </p>

          <div className="mb-10 p-6 border border-[#1A1A1A]/8 rounded-lg bg-white grid grid-cols-2 md:grid-cols-4 gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div>
              <span className="text-xs text-[#7A3300] block mb-1">Scope</span>
              <span className="text-sm text-[#1A1A1A] font-medium">New hires for a 700+ global design & research team</span>
            </div>
            <div>
              <span className="text-xs text-[#7A3300] block mb-1">Role</span>
              <span className="text-sm text-[#1A1A1A] font-medium">Program Owner & Onboarding Architect</span>
            </div>
            <div>
              <span className="text-xs text-[#7A3300] block mb-1">Timeline</span>
              <span className="text-sm text-[#1A1A1A] font-medium">Ongoing (FY26–FY27)</span>
            </div>
            <div>
              <span className="text-xs text-[#7A3300] block mb-1">Core Impact</span>
              <span className="text-sm text-[#1A1A1A] font-medium">Fully Hand-offable System</span>
            </div>
          </div>

          <div className="space-y-10" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div>
              <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Friction (The Challenge)
              </h2>
              <div className="space-y-4 text-[#555555] leading-relaxed text-sm">
                <p>When I inherited my org's New Hire Onboarding Program, it was thin, underdocumented, and inconsistently delivered (one by one, handwritten drip campaigns). New designers and researchers were routinely entering the org without a structured, welcoming baseline to guide them through their critical first 8 weeks.</p>
                <p>There was just one catch. Onboarding in a fast-moving creative environment isn't just about giving someone a laptop and a list of links ~ it requires high-touch engagement, function-specific technical setups, and immediate manager alignment.</p>
                <p>Without a central source of truth, hiring managers were recreating the wheel with every new hire, and fresh talent was left to navigate complex tool ecosystems entirely on their own. I needed to build a repeatable, highly scalable infrastructure from scratch, stabilize its execution, and elevate the standard of how we welcome our people.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Flow
              </h2>
              <div className="overflow-x-auto mb-10">
                <div className="flex items-center gap-0 min-w-[700px] py-4">
                  {[
                    { step: "Update Tracker", detail: "Weekly" },
                    { step: "Start Workflow", detail: "On new hire start date" },
                    { step: "Channel Access", detail: "Added to key Slack channels" },
                    { step: "Ops Informed", detail: "Action items sent" },
                    { step: "Week 1 Message", detail: "× 8 weeks" },
                    { step: "Feedback Survey", detail: "Sent at close" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="relative bg-[#7A3300] text-white rounded-lg px-4 py-5 text-center min-w-[110px] shadow-sm">
                        <span className="text-xs font-medium block leading-tight">{item.step}</span>
                        <span className="text-[10px] opacity-70 block mt-1">{item.detail}</span>
                      </div>
                      {i < 5 && (
                        <svg width="24" height="16" viewBox="0 0 24 16" className="shrink-0 text-[#7A3300]/40">
                          <path d="M0,8 L18,8 M14,3 L20,8 L14,13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Execution (What I Did)
              </h2>
              <div className="space-y-6">
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                  <h3 className="text-sm font-medium text-[#7A3300] mb-1">1. The 8-Week Structured Onboarding Flow</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">Architected and deployed a personal, weekly Slack check-in cadence for all incoming hires in my org. Instead of overwhelming them on Day 1, this system drips curated resources, weekly orientation themes, and critical tool access guidance dynamically over their first two months.</p>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                  <h3 className="text-sm font-medium text-[#7A3300] mb-1">2. Role-Specific New Hire Task Boards</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">Designed and shipped two reusable Slack List task board templates tailored specifically to our distinct disciplines: one optimized for Design-focused hires and one for Research-focused hires. Hiring managers can now instantly copy, personalize, and launch these tracks on Day 1.</p>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                  <h3 className="text-sm font-medium text-[#7A3300] mb-1">3. Hiring Manager Communication System</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">Built a proactive, automated DM workflow to brief hiring managers well in advance of a new team member's arrival. This eliminates manager friction by providing clear instructions on their role, instant access to the task board templates, and immediate onboarding resources.</p>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                  <h3 className="text-sm font-medium text-[#7A3300] mb-1">4. Critical Tool Access Coordination</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">Managed and spearheaded the tool access provisioning pipeline for all incoming new hires in my org, establishing a frictionless, repeatable process for ongoing technical access management.</p>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                  <h3 className="text-sm font-medium text-[#7A3300] mb-1">5. Institutionalizing the Program (The Hand-off)</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">Matured the program from an experimental initiative into a highly stable, self-sustaining system. Thoroughly documented every workflow and successfully transitioned program ownership to my teammate, proving the infrastructure could seamlessly outlive my direct day-to-day involvement.</p>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                  <h3 className="text-sm font-medium text-[#7A3300] mb-1">6. Keeping the Human at the Center</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">While I automated the structural messaging workflows, I intentionally preserved the high-touch human elements. Every new hire received a personal welcome ensuring a direct line of communication to me. By maintaining visibility and coordinating custom initiatives like the Experience New Hire Kit with external vendors, I ensured new talent felt genuinely welcomed and valued, and never treated as a machine-processed afterthought.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Proof (The Results)
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white text-center">
                  <span className="text-2xl font-bold text-[#7A3300] block">100%</span>
                  <span className="text-xs text-[#1A1A1A]">Day 1 Task Board Coverage</span>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white text-center">
                  <span className="text-2xl font-bold text-[#7A3300] block">8 Weeks</span>
                  <span className="text-xs text-[#1A1A1A]">Automated Resource Delivery</span>
                </div>
                <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white text-center">
                  <span className="text-2xl font-bold text-[#7A3300] block">1 System</span>
                  <span className="text-xs text-[#1A1A1A]">Fully Documented & Transitioned</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Recognition & The Bigger Story
              </h2>
              <div className="space-y-4 text-sm text-[#555555] leading-relaxed">
                <p><span className="font-medium text-[#1A1A1A]">Systems That Last:</span> A great onboarding program is invisible when it works: new hires feel welcomed, equipped, and deeply oriented without ever realizing the sheer volume of structural infrastructure making it possible.</p>
                <p><span className="font-medium text-[#1A1A1A]">The Philosophy:</span> The task boards, the manager workflows, the automated Slack cadences – these are systems designed to outlive my direct involvement and continuously deliver high-value organizational impact without requiring constant human attention. That is the standard I hold for everything I build.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1A1A1A]/8">
              <p className="text-sm text-[#1A1A1A] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Want to learn more? There's way more behind the scenes here. Shoot me a message -- let's chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <h1 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Experience AI Weeks (FY27)
        </h1>
        <p className="text-lg text-[#1A1A1A] italic mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          From AI anxiety to (the beginning of) AI fluency: empowering a global creative org.
        </p>

        <div className="mb-10 p-6 border border-[#1A1A1A]/8 rounded-lg bg-white grid grid-cols-2 md:grid-cols-4 gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div>
            <span className="text-xs text-[#7A3300] block mb-1">Scope</span>
            <span className="text-sm text-[#1A1A1A] font-medium">700+ Professionals</span>
          </div>
          <div>
            <span className="text-xs text-[#7A3300] block mb-1">Role</span>
            <span className="text-sm text-[#1A1A1A] font-medium">Lead PM & Instructional Designer</span>
          </div>
          <div>
            <span className="text-xs text-[#7A3300] block mb-1">Timeline</span>
            <span className="text-sm text-[#1A1A1A] font-medium">3 Weeks (May 2026)</span>
          </div>
          <div>
            <span className="text-xs text-[#7A3300] block mb-1">Core Impact</span>
            <span className="text-sm text-[#1A1A1A] font-medium">83% Adoption Rate</span>
          </div>
        </div>

        <div className="space-y-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div>
            <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Friction (The Challenge)
            </h2>
            <div className="space-y-4 text-[#555555] leading-relaxed text-sm">
              <p>May 2026 dropped a big ask on the Experience Org: get designers and researchers up and running on Claude Code, fast. Leaders wanted the design and research community vibe coding deliverables to match the velocity already building on the Eng and PM side ~ and they wanted it <em>now</em>.</p>
              <p>There was just one catch. This org is largely non-technical. Claude Code runs via CLI -- a command line interface ~ meaning it lives in a terminal. For most folks here, that's not a tool. That's a scary black box.</p>
              <p>I was given two weeks to build and deliver an AI learning experience for the entire Exp org, in coordination with cross-functional partners. After I picked my jaw up off the floor, I took a breath -- and got to work.</p>
              <p>The space was deeply ambiguous. Leaders didn't have a clear vision or answers. They were looking to my team to provide both.</p>
            </div>

            <div className="mt-6 p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
              <h3 className="text-sm font-medium text-[#1A1A1A] mb-3">What the data told us (Pulse Survey, Phase 1):</h3>
              <ul className="space-y-2 text-sm text-[#1A1A1A]">
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Average proficiency sat at "Awareness": just 2.6 out of 5</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">65% cited a complete lack of bandwidth/protected time to even think about learning something new</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">42% didn't know which tool was actually relevant to their day-to-day work</li>
              </ul>
            </div>

            <p className="mt-4 text-[#555555] leading-relaxed text-sm">
              I could've taken the easy path: teach the mechanics, check the box. But I saw a bigger opportunity ~ to start to change the way folks think and build real fluency. Not just <em>how</em> to use Claude Code, but <em>why</em> it works the way it does. The kind of understanding that makes someone stronger in engineering conversations and more resilient in a world where roles are increasingly fluid.
            </p>
            <p className="mt-4 text-[#555555] leading-relaxed text-sm">
              I thought back to my own coding classes in college. For any of this to stick long-term, we had to start at the beginning -- figuratively, with "Hello, World." That meant grounding people in terminal basics and the underlying logic before anything else.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Execution (What I Did)
            </h2>
            <div className="space-y-6">
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                <h3 className="text-sm font-medium text-[#7A3300] mb-1">Phase 1: Diagnostic Baseline</h3>
                <p className="text-sm text-[#555555] leading-relaxed">Designed and deployed the Pre-Program Pulse Survey to 183 employees. Worked with my partner to transform raw data into a live dashboard to align leadership on exact gaps.</p>
                <img src="./phase1.svg" alt="Abstract illustration of data visualization and survey diagnostics" className="w-full mt-4 rounded" />
              </div>
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                <h3 className="text-sm font-medium text-[#7A3300] mb-1">Phase 2: Learning Sessions</h3>
                <p className="text-sm text-[#555555] leading-relaxed">Across 2 weeks, with leadership buy-in, produced 8 live, design & research function-focused sessions, mapped out across a project creation narrative (from tool installation to hosting a prototype). Architected global watch parties and accessible livestreams to scale attendance.</p>
                <img src="./phase2.svg" alt="Abstract illustration of live learning sessions and streaming" className="w-full mt-4 rounded" />
              </div>
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                <h3 className="text-sm font-medium text-[#7A3300] mb-1">Phase 3: Build Week & Custom Gallery</h3>
                <p className="text-sm text-[#555555] leading-relaxed">Launched a follow-up "heads down guided build week" for folks to get time to build, with optional submission. Ended up with 76 unique AI projects submitted. Personally vibe-coded and maintained a custom GitHub Pages site to act as the living gallery for these experiments.</p>
                <img src="./phase3.svg" alt="Abstract illustration of code creation and project gallery" className="w-full mt-4 rounded" />
              </div>
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white">
                <h3 className="text-sm font-medium text-[#7A3300] mb-1">Phase 4: Incentivization & Packaging</h3>
                <p className="text-sm text-[#555555] leading-relaxed">Designed a structured raffle incentive to drive engagement. Packaged the entire curriculum into a self-paced course distributed to the broader Enterprise.</p>
                <img src="./phase4.svg" alt="Abstract illustration of packaging and distribution" className="w-full mt-4 rounded" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Proof (The Results)
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white text-center">
                <span className="text-2xl font-bold text-[#7A3300] block">83%</span>
                <span className="text-xs text-[#1A1A1A]">Claude Code Adoption</span>
              </div>
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white text-center">
                <span className="text-2xl font-bold text-[#7A3300] block">76</span>
                <span className="text-xs text-[#1A1A1A]">AI Prototypes Built</span>
              </div>
              <div className="p-5 border border-[#1A1A1A]/8 rounded-lg bg-white text-center">
                <span className="text-2xl font-bold text-[#7A3300] block">+220%</span>
                <span className="text-xs text-[#1A1A1A]">MoM AI Tool Utilization</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recognition & The Bigger Story
            </h2>
            <div className="space-y-4 text-sm text-[#555555] leading-relaxed">
              <p><span className="font-medium text-[#1A1A1A]">The Executive Nod:</span> Called out by the COO of UX and held up as an enterprise model for other organization rollouts.</p>
              <p><span className="font-medium text-[#1A1A1A]">The Human Impact:</span> <em>"I'll get a good sleep, as you all decreased my stress level :) Thanks Team..."</em> ~ Experience Attendee</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1A1A1A]/8">
            <p className="text-sm text-[#1A1A1A] italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Want to learn more? There's way more behind the scenes here. Shoot me a message -- let's chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Beyond({ onSelectTravel, onSelectVolunteer, onSelectHobbies }) {
  const items = [
    { icon: Globe, title: "Travel & Cultural Immersion", description: "Exploring how different cultures approach learning, craft, and community ~ and bringing those perspectives back to my work.", onClick: onSelectTravel },
    { icon: Heart, title: "Giving Back", description: "Giving back through animal rescue, youth education, economic empowerment, and community building.", onClick: onSelectVolunteer },
    { icon: MapPin, title: "Hobbies", description: "Running, intramural sports, cooking from scratch, and digital art.", onClick: onSelectHobbies },
  ]

  return (
    <section id="beyond" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Beyond the Day Job
          </h2>
          <p className="text-[#555555] mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            The work, travel, and roles that shape who I am outside the office.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeIn key={i}>
              <div
                onClick={() => item.onClick?.()}
                className={`border border-[#1A1A1A]/8 rounded-lg overflow-hidden flex flex-col h-full ${item.onClick ? 'cursor-pointer hover:border-[#7A3300]/30 hover:shadow-sm transition-all group' : ''}`}
              >
                <div className="p-6 flex-1">
                  <item.icon size={24} className={`mb-4 ${item.onClick ? 'text-[#7A3300] group-hover:text-[#7A3300]' : 'text-[#7A3300]'}`} />
                  <h3 className={`text-lg text-[#1A1A1A] mb-2 ${item.onClick ? 'group-hover:text-[#7A3300] transition-colors' : ''}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.description}
                  </p>
                </div>
                {item.onClick && (
                  <div className="bg-[#7A3300] group-hover:bg-[#5C2600] transition-colors py-3 text-center">
                    <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Let's dive in!
                    </span>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function VolunteerPage({ onBack }) {
  const volunteerRoles = [
    {
      title: "Asiapacforce",
      role: "Global Communications Chair",
      period: "2025 – Present",
      link: "https://www.salesforce.com/company/equality-groups/",
      image: null,
      description: "Nurturing and championing an inclusive global community of 5,800+ members, designing empathetic storytelling and cultural resource guides across 15+ international hubs.",
      tags: ["Community Leadership", "DEI", "Storytelling"],
    },
    {
      title: "Venture to Impact",
      role: "Volunteer Educator / Instructional Designer",
      period: "2025",
      link: "https://venture2impact.org/",
      image: null,
      description: "Designed and delivered an accessible business and digital literacy curriculum for 10+ Indigenous women entrepreneurs during an immersive, week-long economic empowerment trip in Panama.",
      tags: ["Economic Empowerment", "Instructional Design"],
    },
    {
      title: "Global Glimpse",
      role: "Student Volunteer",
      period: "2016",
      link: "https://www.globalglimpse.org/",
      image: null,
      description: "Fundraised for and participated in a two-week cultural immersion program. Partnered with local communities to teach English, lead school restoration projects, and engage deeply with Nicaraguan history and culture.",
      tags: ["Youth Education", "Cultural Immersion"],
    },
    {
      title: "ARF (Animal Rescue Foundation)",
      subtitle: "Now Joybound People & Pets",
      role: "Volunteer",
      period: "2014 – 2018",
      link: "https://joybound.org/",
      image: null,
      description: "Contributed biweekly to local animal shelter operations by facilitating community events, delivering daily animal care and exercise, and managing essential facility upkeep and sanitization.",
      tags: ["Animal Welfare", "Community"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <div className="mb-12">
          <Heart size={32} className="text-[#7A3300] mb-6" />
          <h1 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Giving Back
          </h1>
          <p className="text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>
            The roles, causes, and communities I give my time to outside of work.
          </p>
        </div>

        <div className="space-y-6">
          {volunteerRoles.map((item, i) => (
            <FadeIn key={i}>
              <div className="p-6 border border-[#1A1A1A]/8 rounded-lg bg-white flex flex-col sm:flex-row gap-5">
                <div className="flex-1 min-w-0">
                  {item.period && (
                    <span className="text-xs text-[#7A3300] block mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.period}
                    </span>
                  )}
                  <div className="mb-2">
                    <h3 className="text-lg text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span className="text-xs text-[#555555]/70" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[#1A1A1A] italic mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.role}
                  </p>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#7A3300]/6 text-[#7A3300]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#7A3300] hover:text-[#5C2600] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <ExternalLink size={12} />
                      Visit organization
                    </a>
                  )}
                </div>
                <div className="shrink-0">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-36 h-36 object-cover rounded-lg" />
                  ) : (
                    <div className="w-36 h-36 rounded-lg bg-[#1A1A1A]/3 border border-dashed border-[#1A1A1A]/10 flex items-center justify-center">
                      <span className="text-xs text-[#555555]/40 text-center px-2" style={{ fontFamily: "'Inter', sans-serif" }}>Photo coming soon</span>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

const travelDiaries = {
  Nicaragua: {
    year: "2016",
    title: "Nicaragua",
    subtitle: "Where it all began",
    photos: ["./nicaragua/IMG_2125.jpg"],
    content: [
      "As a travel-shy high schooler with IBS, going outside of the USA was wayyyy outside my comfort zone -- international travel just wasn't something I grew up doing. But I took the leap with Global Glimpse, a volunteer and cultural immersion program that was offered at my high school, and it changed everything. To be honest, I had originally just signed up because my friend recommended it to me.",
      "For two weeks, I was surrounded by a completely new-to-me group of students, all phones confiscated (intentionally!), and was fully present in a way I hadn't been before. I fell head over heels for the community, the culture, and honestly ~ the food. Plantains in every form (fried, sweet, salty, chips -- yes, all of them) and gallo pinto, their iconic beans and rice. My bubble had officially been burst and there was no going back.",
      "I fell in love with every broken sidewalk, neighborhood restaurant, even the mosquito-filled hostel we stayed at!",
      "One moment has stayed with me ever since. In one of the English classes I was teaching, there was a man who came in quietly every day -- not saying much, hard to read. I genuinely wasn't sure if anything was landing. On the last day, he walked up to me after class, thanked me, and handed me his mother's gallo pinto recipe -- written out in English, just for me. I was totally speechless.",
      "Up until that point, I think I moved through the world the way a lot of teenagers do -- as if it revolved around me. That moment cracked something open. It's where gratitude became one of my core values, where I started recognizing my privilege, and where I gave myself permission to take risks -- traveling despite the anxieties, the allergies (I am allergic to peanuts and fish), all of it.",
      "It's also where I discovered how much I love teaching and helping people grow -- something that's shaped my entire career path since.",
      "Central America will always have a piece of my heart."
    ]
  },
  Portugal: {
    year: "2022",
    title: "Portugal",
    subtitle: "Slow down, let it come to you",
    photos: ["./portugal/IMG_0309.jpeg"],
    content: [
      "After a long international travel hiatus (uni didn't leave much room for it), my parents asked what I wanted as a graduation gift. I had a tight-knit group of four friends who had been dying to do an international trip together, so we put our heads together -- weighing price, timing, weather, things to do -- and landed on Lisbon, Portugal.",
      "Eight days in Lisbon, one day in Madeira, and most of it spent wandering with no real agenda.",
      "And honestly? That was the whole lesson.",
      "Coming out of college, I had become quite the program manager of my own life -- every hour scheduled, every commitment stacked. I was days away from starting my first real job, and this was my last real exhale before the grind. (Spoiler: I haven't had a break like that since.)",
      "Lisbon is stunning -- layered streets, winding stone staircases that turned every day into a leg day (my quads have never looked better), castles tucked into mountains, lush greenery, zero grid logic to the city layout. The food tasted like it was just pulled from the earth, always paired with a crisp vinho verde. The architecture alone could've made it the trip of a lifetime.",
      "But again, like Nicaragua -- it was the people.",
      "Europe unlocked something. There was this energy of being more present, more connected, less phone-in-face and more just... IRL. The same sense of community and warmth and family-first values that moved me in Central America showed up again here, halfway across the world. People as a core value? Lisbon made the case loud and clear.",
      "And for someone who had been running on routine and structure, my favorite moments were every single unplanned one. Stumbling into a canned fish shop and somehow spending an hour talking with the person working there. Walking into a tiny bar and ending up in a three-hour conversation with an elderly couple sitting next to us. Finding some random alley -- Portugal has so many perfect little alleys -- just in time to catch the sunset through it.",
      "The city had endless things to do and explore. But the spontaneous moments were the ones that stuck.",
      "It was my first real reminder, one I've had to give myself many times since, that sometimes the most beautiful days are the ones where you had absolutely no idea what was coming next. There's true joy in that. And for a life that was about to get very structured very fast, Lisbon whispered: slow down, let it come to you."
    ]
  },
  Italy: {
    year: "2024",
    title: "Italy",
    subtitle: "Italia. Oh, Italia.",
    photos: ["./italy/IMG_0076.jpeg"],
    content: [
      "If I could go to one place every single year for the rest of my life, it would be Italy ~ no hesitation, no competition. I'm convinced I was Italian in a past life. At the time of this trip, Italian food had become some of my all-time favorite on earth, I was deep in my wine era (finally pairing things properly with meals like I thought I was supposed to), and I had been re-enchanted by art and the way certain films just paint Italy like nowhere else exists.",
      "I wanted to do it right. And for me, that started with the language.",
      "Months before the trip, I went full commitment mode: flashcards first, then YouTube videos, then podcasts. If I was commuting somewhere, I was listening to something in Italian. It was genuinely fun, and it taught me something I've carried ever since: the importance of starting from the foundations and giving yourself grace along the way. No shortcuts. Just showing up every day, a little more fluent than the day before. That lesson came back around years later when I started leading AI enablement for designers: same energy, different subject matter.",
      "Okay, back to Italy. Being able to actually speak Italian (very, very, very casually conversational, let's be clear) was a total game-changer. So many places didn't speak English, and just the act of trying opened doors. Nobody judged me for stumbling – if anything, it connected us. I ordered food, asked about pizza recipes, navigated where the bathroom was (IBS doesn't take vacations), talked through a specific dish, and had actual moments of real human exchange. It confirmed what I'd already started to believe: learning the language is the biggest unlock there is when you travel. I've made it a priority for every trip since.",
      "Then there was the Pantheon.",
      "Nothing could have prepared me for it. We were weaving through narrow cobblestone streets lined with vendors and markets and then suddenly, out of nowhere: there it was. A behemoth. Ancient, weathered, etched with centuries of story, just standing there completely unbothered by the fact that it was the most magnificent thing I'd ever seen in person. My jaw dropped and genuinely did not close until we left.",
      "That's kind of how all of Italy felt. The Colosseum, the hills of Lake Como (where I had the single best clam linguine of my entire life that I still think about regularly), the big, iconic landmarks – all of it was extraordinary. But honestly? It was the small streets and unassuming little pathways that would suddenly open up into a flood of art and beauty that kept me on the edge of wonder the whole time. I was a self-proclaimed history nerd in middle school, and being there made everything I learned back then come rushing back – SO vivid and alive in a way textbooks never could. That historical splendor ground me. They connect me to something longer and larger than whatever uncertainty I'm sitting with in my field right of work now.",
      "And the food. Oh, the food.",
      "I have never eaten that much on a trip and felt that good. No guilt, no stomach grief – the ingredients were just so pure and real that my body was simply happy. (Exception: the time I paired an Aperol spritz immediately followed by a gelato. That was entirely my fault and I accept full responsibility.)",
      "I could genuinely write an entire book about Italy. Trip after trip, place after place – nothing has ever made me feel more at home somewhere I technically grew up knowing nothing about. People there were present, connected to each other, and wonderfully unbothered by their phones.",
      "I must've been Italian in a past life. I'm almost sure of it!"
    ]
  },
  Denmark: {
    year: "2023",
    title: "Denmark",
    subtitle: "The quietest trips are the loudest lessons",
    photos: ["./denmark/IMG_5070.jpeg"],
    content: [
      "Denmark wasn't on my radar at all. But when my partner (we were long distance at the time) texted me that he randomly saw round-trip flights were under $500 and followed it with \"should we go?\" -- I said \"sure!\" without blinking. Tickets bought on the spot.",
      "And just like that, Copenhagen was next.",
      "Denmark was a different kind of trip than Portugal or Nicaragua. There was no clear culture shock, no sensory overload, no wandering into something wildly unexpected. The food honestly felt like a very elevated Southern California meal (Example: Smørrebrød felt like avocado toast on steroids). The city was calm. There were bridges, quiet neighborhoods, and bikes -- so many bikes. Everyone biked everywhere, all the time, like it was the most natural thing in the world.",
      "It wasn't thrilling. And I mean that in the best possible way.",
      "There was something almost understimulating about it, in a way that my brain desperately needed. At that point in my life, things were genuinely hectic back home. Still finding my footing in San Francisco with new people, new job, new environment, stress was quietly piling up. Denmark didn't dazzle me. It just... reset me.",
      "Hygge was written on everything: on shop windows, menus, everywhere. I looked it up and found it roughly translates to a feeling of coziness, comfort, and wellbeing. A whole cultural philosophy baked into a single word. And it made complete sense -- Denmark consistently ranks in the top 5 happiest countries in the world, and you can feel why when you're there. When a whole society collectively decides to prioritize ease and joy and being present, it shows.",
      "I think about the Danes whenever I start to slip -- whenever stress starts mounting and I'm neglecting the things that actually fill me up. They're a quiet little reminder that calm is a choice, and wellbeing isn't a luxury.",
      "Hygge is honestly the root of my motto today: enjoy life. And if you're not having fun (at least most of the time) what's the point? I carry that into how I take care of myself, how I show up in relationships, and especially into how I design my programs. Human-centered, joy-forward, and always leaving room for people to actually feel good in the spaces I create.",
      "Denmark gave me that. Sometimes the quietest trips are the loudest lessons."
    ]
  }
}

function HobbiesPage({ onBack }) {
  const hobbies = [
    {
      title: "Running",
      icon: "🏃‍♀️",
      description: "Coming soon.",
    },
    {
      title: "Intramural Sports",
      icon: "🏐",
      description: "Coming soon.",
    },
    {
      title: "Cooking from Scratch",
      icon: "🍳",
      description: "Coming soon.",
    },
    {
      title: "Digital Art",
      icon: "🎨",
      description: "Coming soon.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <div className="mb-12">
          <MapPin size={32} className="text-[#7A3300] mb-6" />
          <h1 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hobbies
          </h1>
          <p className="text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>
            What I do when I'm not working — the things that keep me grounded, moving, and creative.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {hobbies.map((hobby, i) => (
            <FadeIn key={i}>
              <div className="p-6 border border-dashed border-[#1A1A1A]/15 rounded-lg bg-white opacity-75">
                <span className="text-3xl mb-3 block">{hobby.icon}</span>
                <h3 className="text-lg text-[#1A1A1A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {hobby.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

function TravelModal({ trip, onClose }) {
  const [showGallery, setShowGallery] = useState(false)
  const hasPhotos = trip.photos && trip.photos.length > 0 && !trip.photos[0].includes('placeholder')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-[#FBFBFA] rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 transition-colors cursor-pointer z-10"
        >
          <X size={16} className="text-[#1A1A1A]" />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-6">
            <p className="text-sm text-[#7A3300] font-medium mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{trip.year}</p>
            <h2 className="text-2xl md:text-3xl text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>{trip.title}</h2>
            <p className="text-[#1A1A1A] italic mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{trip.subtitle}</p>
          </div>

          {hasPhotos && !showGallery && (
            <div className="mb-8 relative group">
              <img src={trip.photos[0]} alt={trip.title} className="w-full h-56 object-cover rounded-lg" />
              {trip.photos.length > 1 && (
                <button
                  onClick={() => setShowGallery(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-white transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} className="rotate-180 text-[#1A1A1A]" />
                </button>
              )}
              {trip.photos.length > 1 && (
                <span className="absolute bottom-3 right-3 text-xs bg-black/50 text-white px-2 py-1 rounded-full">
                  +{trip.photos.length - 1} more
                </span>
              )}
            </div>
          )}

          {hasPhotos && showGallery && (
            <div className="mb-8">
              <button
                onClick={() => setShowGallery(false)}
                className="flex items-center gap-1 text-sm text-[#1A1A1A] hover:text-[#7A3300] transition-colors mb-3 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <ArrowLeft size={14} />
                Back to story
              </button>
              <div className="grid grid-cols-2 gap-2">
                {trip.photos.map((photo, i) => (
                  <img key={i} src={photo} alt={`${trip.title} ${i + 1}`} className={`w-full object-cover rounded-lg ${i === 0 ? 'col-span-2 h-56' : 'h-40'}`} />
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4 text-[#555555] leading-relaxed text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {trip.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TravelPage({ onBack }) {
  const [selectedTrip, setSelectedTrip] = useState(null)

  const places = [
    { place: "Nicaragua", year: "2016", flag: "🇳🇮" },
    { place: "Portugal", year: "2022", flag: "🇵🇹" },
    { place: "Denmark", year: "2023", flag: "🇩🇰" },
    { place: "Italy", year: "2024", flag: "🇮🇹" },
    { place: "France", year: "2025", flag: "🇫🇷" },
    { place: "Panama", year: "2025", flag: "🇵🇦" },
    { place: "Thailand", year: "2026", flag: "🇹🇭" },
  ]

  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <div className="mb-12">
          <Globe size={32} className="text-[#7A3300] mb-6" />
          <h1 className="text-3xl md:text-4xl text-[#1A1A1A] mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Travel & Cultural Immersion
          </h1>
        </div>

        <blockquote className="border-l-4 border-[#7A3300]/30 pl-6 mb-6">
          <p className="text-lg md:text-xl text-[#555555] leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            "If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. The extent to which you can walk in someone else's shoes or at least eat their food, it's a plus for everybody. Open your mind, get up off the couch, move."
          </p>
        </blockquote>
        <p className="text-sm text-[#1A1A1A] mb-16" style={{ fontFamily: "'Inter', sans-serif" }}>
          -- Anthony Bourdain, my favorite traveller, eater, and storyteller.
        </p>

        <div className="mb-10">
          <p className="text-sm text-[#1A1A1A] italic mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Hover over the dots for details</p>
          <object data="./worldmap.svg" type="image/svg+xml" aria-label="World map showing places I've traveled" className="w-full rounded-lg border border-[#1A1A1A]/8" style={{ minHeight: '300px' }} />
        </div>

        <div className="mb-16">
          <h2 className="text-xl text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            How these places shaped my values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            {places.map((item, i) => {
              const hasDiary = travelDiaries[item.place]
              return (
                <div
                  key={item.place}
                  onClick={() => hasDiary && setSelectedTrip(travelDiaries[item.place])}
                  className={`relative rounded border transition-all ${hasDiary ? 'cursor-pointer group hover:shadow-lg hover:-translate-y-0.5' : ''}`}
                  style={{
                    background: hasDiary ? '#F0E6D3' : '#E8E4DF',
                    borderColor: hasDiary ? '#C4A882' : '#D0CCC7',
                    aspectRatio: '3 / 2',
                  }}
                >
                  {/* Stamp in top-right corner */}
                  <div
                    className={`absolute top-2.5 right-2.5 w-9 h-11 rounded-sm border-2 border-dashed flex items-center justify-center ${hasDiary ? 'border-[#7A3300]/30 group-hover:border-[#7A3300]/60' : 'border-[#1A1A1A]/20'}`}
                    style={{ background: hasDiary ? '#FDF8F0' : '#F5F3F0' }}
                  >
                    <Mail size={14} className={`${hasDiary ? 'text-[#7A3300]/50 group-hover:text-[#7A3300]' : 'text-[#1A1A1A]/30'} transition-colors`} />
                  </div>

                  {/* Address lines area */}
                  <div className="absolute bottom-4 left-5 right-16">
                    <span className={`text-base font-medium block mb-1.5 ${hasDiary ? 'text-[#1A1A1A] group-hover:text-[#7A3300] transition-colors' : 'text-[#1A1A1A]'}`}>
                      {item.place}
                    </span>
                    <span className={`text-xs block ${hasDiary ? 'text-[#7A3300]/70' : 'text-[#1A1A1A]/50'}`}>
                      {item.year}
                    </span>
                    <div className="mt-2 space-y-1.5">
                      <div className={`h-px w-full ${hasDiary ? 'bg-[#7A3300]/15' : 'bg-[#1A1A1A]/10'}`} />
                      <div className={`h-px w-3/4 ${hasDiary ? 'bg-[#7A3300]/15' : 'bg-[#1A1A1A]/10'}`} />
                    </div>
                  </div>

                  {/* Country flag */}
                  <span className="absolute top-2.5 left-3.5 text-2xl">{item.flag}</span>

                  {/* "Read me" on hover / "Coming soon" for non-diary */}
                  {hasDiary && (
                    <span className="absolute top-12 left-4 text-xs text-[#7A3300]/0 group-hover:text-[#7A3300] transition-all italic font-medium">
                      Read me →
                    </span>
                  )}
                  {!hasDiary && (
                    <span className="absolute top-12 left-4 text-xs text-[#555555]/40 italic">
                      Coming soon
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>More coming soon. This is where I'll share the places, people, and plates that have shaped how I see the world.</p>
        </div>
      </div>

      {selectedTrip && <TravelModal trip={selectedTrip} onClose={() => setSelectedTrip(null)} />}
    </div>
  )
}

function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-[#1A1A1A]/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Let's Connect
        </h2>
        <p className="text-[#1A1A1A] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          Open to conversations about enablement, design, and meaningful work.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:placeholder@email.com"
            className="flex items-center gap-2 text-sm text-[#1A1A1A] hover:text-[#7A3300] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#1A1A1A] hover:text-[#7A3300] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ExternalLink size={16} />
            LinkedIn
          </a>
        </div>
        <p className="mt-12 text-xs text-[#1A1A1A]/50" style={{ fontFamily: "'Inter', sans-serif" }}>
          Designed with care.
        </p>
      </div>
    </footer>
  )
}

function Resume({ onBack }) {
  return (
    <div className="min-h-screen bg-[#FBFBFA] pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#7A3300] transition-colors mb-12 cursor-pointer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-[#1A1A1A] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hayley Ng
          </h1>
          <p className="text-sm text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Seattle, WA | (925) 202-4012 |{' '}
            <a href="mailto:hayalex2016@gmail.com" className="text-[#7A3300] hover:underline">hayalex2016@gmail.com</a> |{' '}
            <a href="https://www.linkedin.com/in/hayley-ng" target="_blank" rel="noopener noreferrer" className="text-[#7A3300] hover:underline">LinkedIn</a>
          </p>
        </div>

        <div className="mb-10 p-6 border border-[#1A1A1A]/8 rounded-lg bg-white flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src="./profile.png"
            alt="Hayley Ng"
            className="w-24 h-24 rounded-full object-cover border-2 border-[#7A3300]/10 shrink-0"
          />
          <p className="text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Highly organized and high-impact Experience Program Manager specializing in AI transformation and org-wide upskilling. Proven track record of scaling operational infrastructure, driving technical tool adoption, and designing end-to-end enablement experiences for large (500+) design organizations. Recognized as a cross-functional force multiplier who bridges the gap between complex technical shifts, business priorities and product-centric fluency.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl text-[#1A1A1A] mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            <FileText size={18} className="text-[#7A3300]" />
            Competencies
          </h2>
          <div className="space-y-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div>
              <span className="text-sm font-medium text-[#1A1A1A]">Program & Business Operations:</span>
              <span className="text-sm text-[#1A1A1A]"> Strategic Change Management, Enablement Architecture, Cross-Functional Alignment, Platform Rollouts, Executive Stakeholder Management, Vendor Operations.</span>
            </div>
            <div>
              <span className="text-sm font-medium text-[#1A1A1A]">Learning & Enablement Design:</span>
              <span className="text-sm text-[#1A1A1A]"> Instructional Design (ADDIE, Kirkpatrick), Curriculum Architecture, Micro-learning, Blended Learning, Survey Strategy & Data Analytics, UserTesting.com, Outset.ai.</span>
            </div>
            <div>
              <span className="text-sm font-medium text-[#1A1A1A]">AI Transformation & Technical:</span>
              <span className="text-sm text-[#1A1A1A]"> Generative AI Tooling (Claude Code, Figma AI/Make, Cursor), Prompt Engineering, Governance, GitHub Pages, Python (Intermediate), HTML/CSS/JS (Foundational).</span>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl text-[#1A1A1A] mb-6 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            <Briefcase size={18} className="text-[#7A3300]" />
            Work Experience
          </h2>

          <div className="mb-8">
            <h3 className="text-lg text-[#1A1A1A] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Salesforce Inc.</h3>

            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>Senior Experience Program Manager, Experience Operations</span>
                <span className="text-xs text-[#7A3300]" style={{ fontFamily: "'Inter', sans-serif" }}>February 2026 – Present</span>
              </div>
              <ul className="space-y-2 text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Architected an org-wide foundational AI Transformation curriculum ("Experience AI Weeks") for 700+ professionals, delivering 8 live sessions across 3 weeks that achieved a 4.5/5 value score across 1,513+ attendees, an 83% Claude Code adoption rate, and a 220% MoM increase in AI tool utilization.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Orchestrated the global rollout of Figma Enterprise & AI enablement programming; co-authored Salesforce-specific design governance documentation and design systems compliance standards.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Built and deployed a self-paced "Designing with AI Foundational Starter Kit" successfully scaling structured AI learning pathways from the design org to the broader enterprise organization.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Authored and implemented org-wide standards for hosting vibe-coded prototypes, establishing the critical security and compliance frameworks that unblocked safe AI development both within the Experience Org and across cross-functional product teams.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>Design Program Manager, Design Operations</span>
                <span className="text-xs text-[#7A3300]" style={{ fontFamily: "'Inter', sans-serif" }}>July 2022 – February 2026</span>
              </div>
              <ul className="space-y-2 text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Organized the "AgentQuest" series, scaling foundational knowledge of agentic design processes via 5 async learning tracks and multi-disciplinary live events, earning a 4.5/5 CSAT score.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Architected the UX org's first ever Vibe coding Hack-a-thon to accelerate usage of AI tools, driving an 84% increase in team confidence with Cursor and 81% Cursor adoption rate; featuring 54 cross-functional project teams across 130 unique registrations.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Scaled the organizational adoption of UserTesting.com from 80 to 500+ users in 6 months; established a 14-person research ambassador network and aligned security, legal, and research operations teams for a compliant rollout.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <span className="text-sm font-medium text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>Associate Design Program Manager, Design Operations</span>
                <span className="text-xs text-[#7A3300]" style={{ fontFamily: "'Inter', sans-serif" }}>July 2022 – February 2024</span>
              </div>
              <ul className="space-y-2 text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Product managed the experience operations knowledge platform ("UXHub"); delivered a comprehensive site redesign and 11 self-serve resources that increased active site traffic 3x within 5 months.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Architected and executed the UX Mentorship Program across 4 cohorts (~100 participants per cohort), achieving a 4.9/5 satisfaction rating and a 46.5% programmatic return rate.</li>
                <li className="pl-4 border-l-2 border-[#7A3300]/20">Overhauled the Experience Org New Hire Onboarding Program, automating communication and scheduling workflows to reduce manual operational overhead by over 80%.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl text-[#1A1A1A] mb-6 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            <Users size={18} className="text-[#7A3300]" />
            Community Leadership & Impact
          </h2>

          <div className="mb-6">
            <h3 className="text-base font-medium text-[#1A1A1A] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Asiapacforce, Business Resource Group</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-sm italic text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>Global Communications Chair</span>
              <span className="text-xs text-[#7A3300]" style={{ fontFamily: "'Inter', sans-serif" }}>September 2025 – Present</span>
            </div>
            <ul className="space-y-2 text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li className="pl-4 border-l-2 border-[#7A3300]/20">Nurture and champion an inclusive global community of 5,800+ members, designing empathetic storytelling and cultural resource guides that ensure employees across 15+ international hubs feel celebrated and supported.</li>
              <li className="pl-4 border-l-2 border-[#7A3300]/20">Coordinated the intersectional "Making Waves Together" campaign, partnering with senior executives and 3 partner ERGs to organize global heritage month events, driving 1,000+ attendee activations.</li>
              <li className="pl-4 border-l-2 border-[#7A3300]/20">Orchestrated a global philanthropic initiative that engaged dozens of cross-functional volunteers to create 75+ handwritten appreciation packages for senior citizens and local youth non-profits.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-base font-medium text-[#1A1A1A] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Venture to Impact</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <span className="text-sm italic text-[#1A1A1A]" style={{ fontFamily: "'Inter', sans-serif" }}>Volunteer Educator / Instructional Designer</span>
              <span className="text-xs text-[#7A3300]" style={{ fontFamily: "'Inter', sans-serif" }}>March 2025</span>
            </div>
            <ul className="space-y-2 text-sm text-[#555555] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li className="pl-4 border-l-2 border-[#7A3300]/20">Designed and delivered an accessible business and digital literacy curriculum for 10+ Indigenous women entrepreneurs during an immersive, week-long economic empowerment trip.</li>
              <li className="pl-4 border-l-2 border-[#7A3300]/20">Practiced user-centric design by adapting complex professional frameworks into contextual, culturally grounded learning experiences that respected local business realities and immediate community needs.</li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl text-[#1A1A1A] mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            <GraduationCap size={18} className="text-[#7A3300]" />
            Education
          </h2>
          <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <h3 className="text-sm font-medium text-[#1A1A1A]">University of California, Irvine -- The Paul Merage School of Business</h3>
            <p className="text-sm text-[#1A1A1A] mt-1">B.A. Business Administration; Emphasis in Operations and Decisions Technologies. Minor in Informatics</p>
            <p className="text-xs text-[#7A3300] mt-1">March 2022 | GPA: 3.952 (Magna Cum Laude) | Dean's List: 11/11 Quarters</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavigationGuide({ onDismiss }) {
  const [step, setStep] = useState(0)

  const tips = [
    {
      text: "Use this menu to hop between sections!",
      target: 'nav',
      arrow: "up",
    },
    {
      text: "Tap this button to jump straight to my resume.",
      target: '[data-guide="resume-btn"]',
      arrow: "up",
    },
    {
      text: "Click any card with \"Let's dive in!\" to explore the full story.",
      target: '#work',
      arrow: "up",
    },
  ]

  const handleNext = () => {
    if (step < tips.length - 1) {
      const nextTarget = document.querySelector(tips[step + 1].target)
      if (nextTarget) nextTarget.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setStep(step + 1)
    } else {
      onDismiss()
    }
  }

  useEffect(() => {
    const target = document.querySelector(tips[step].target)
    if (target && step > 0) target.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [step])

  const [pos, setPos] = useState({ top: 0, left: 0 })

  useEffect(() => {
    const update = () => {
      const target = document.querySelector(tips[step].target)
      if (target) {
        const rect = target.getBoundingClientRect()
        setPos({
          top: rect.bottom + 12,
          left: rect.left + rect.width / 2,
        })
      }
    }
    update()
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [step])

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none">
      <div className="fixed inset-0 bg-black/10 pointer-events-auto" onClick={handleNext} />
      <div
        className="fixed pointer-events-auto flex flex-col items-center"
        style={{ top: `${pos.top}px`, left: `${pos.left}px`, transform: 'translateX(-50%)' }}
      >
        <svg width="24" height="20" viewBox="0 0 24 20" className="animate-bounce mb-1">
          <path d="M12,18 C13,14 11,10 12,6 C13,2 11,0 12,0" stroke="#7A3300" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M8,4 L12,0 L16,4" stroke="#7A3300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <div className="bg-white rounded-xl shadow-xl px-5 py-3 max-w-[260px] text-center border-2 border-[#7A3300]/20">
          <p className="text-sm text-[#555555] leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            {tips[step].text}
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => { e.stopPropagation(); onDismiss() }}
              className="text-xs text-[#555555] hover:text-[#1A1A1A] transition-colors cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Skip
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext() }}
              className="text-xs font-medium text-white bg-[#7A3300] px-3 py-1.5 rounded-full hover:bg-[#5C2600] transition-colors cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {step < tips.length - 1 ? 'Next' : 'Got it!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [selectedStudy, setSelectedStudy] = useState(null)
  const [showContactArrow, setShowContactArrow] = useState(false)
  const [showGuide, setShowGuide] = useState(true)

  const handleContactClick = () => {
    setShowContactArrow(true)
    setTimeout(() => setShowContactArrow(false), 5000)
  }

  const navigate = (view) => {
    setCurrentView(view)
    setSelectedEntry(null)
    setSelectedStudy(null)
    window.scrollTo(0, 0)
  }

  if (selectedEntry) {
    return (
      <div className="min-h-screen bg-[#FBFBFA]">
        <Navbar onNavigate={navigate} currentView="journal" />
        <JournalEntry entry={selectedEntry} onBack={() => setSelectedEntry(null)} />
      </div>
    )
  }

  if (selectedStudy) {
    return (
      <div className="min-h-screen bg-[#FBFBFA]">
        <Navbar onNavigate={navigate} currentView="casestudy" />
        <CaseStudyDetail studyId={selectedStudy} onBack={() => navigate('home')} />
      </div>
    )
  }

  if (currentView === 'resume') {
    return (
      <div className="min-h-screen bg-[#FBFBFA]">
        <Navbar onNavigate={navigate} currentView="resume" />
        <Resume onBack={() => navigate('home')} />
      </div>
    )
  }

  if (currentView === 'travel') {
    return (
      <div className="min-h-screen bg-[#FBFBFA]">
        <Navbar onNavigate={navigate} currentView="travel" />
        <TravelPage onBack={() => navigate('home')} />
      </div>
    )
  }

  if (currentView === 'volunteer') {
    return (
      <div className="min-h-screen bg-[#FBFBFA]">
        <Navbar onNavigate={navigate} currentView="volunteer" />
        <VolunteerPage onBack={() => navigate('home')} />
      </div>
    )
  }

  if (currentView === 'hobbies') {
    return (
      <div className="min-h-screen bg-[#FBFBFA]">
        <Navbar onNavigate={navigate} currentView="hobbies" />
        <HobbiesPage onBack={() => navigate('home')} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA]">
      {showGuide && <NavigationGuide onDismiss={() => setShowGuide(false)} />}
      <Navbar onNavigate={navigate} currentView="home" onContactClick={handleContactClick} />
      <Hero onNavigate={navigate} />
      <CaseStudies onSelectStudy={(id) => { setSelectedStudy(id); window.scrollTo(0, 0) }} />
      <Beyond onSelectTravel={() => navigate('travel')} onSelectVolunteer={() => navigate('volunteer')} onSelectHobbies={() => navigate('hobbies')} />
      <JournalGallery onSelectEntry={setSelectedEntry} />
      {showContactArrow && <ContactArrow />}
      <Footer />
    </div>
  )
}

export default App
