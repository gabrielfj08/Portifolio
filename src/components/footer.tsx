export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-zinc-950">
      <div className="container flex flex-col items-center gap-2 text-sm text-zinc-400">
        <p>
          © {new Date().getFullYear()} Gabriel Ferreira Jorge
        </p>

        <p className="text-xs text-zinc-500">
          Desenvolvedor Frontend · React & TypeScript
        </p>
      </div>
    </footer>
  )
}
