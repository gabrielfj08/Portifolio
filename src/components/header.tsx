import { useEffect, useState } from "react"

const sections = ["home", "projetos", "sobre", "contato"]

export default function Header() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur border-b border-white/5">
      <div className="container h-16 flex items-center justify-between">

        {/* Nome / Logo */}
        <span className="font-semibold text-lg text-primary">
          Gabriel Jorge
        </span>

        {/* Navegação */}
        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`
                relative transition-colors
                ${active === section ? "text-sky-400" : "hover:text-sky-400"}
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {active === section && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-400 rounded-full" />
              )}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}
