export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur border-b border-white/5">
      <div className="container h-16 flex items-center justify-between">
        
        <span className="font-semibold text-lg text-primary">
          Gabriel Jorge
        </span>

        <nav className="hidden md:flex gap-8 text-sm text-muted">
          <a href="#home" className="hover:text-primary transition">Início</a>
          <a href="#projetos" className="hover:text-primary transition">Projetos</a>
          <a href="#sobre" className="hover:text-primary transition">Sobre</a>
          <a href="#contato" className="hover:text-primary transition">Contato</a>
        </nav>

      </div>
    </header>
  )
}