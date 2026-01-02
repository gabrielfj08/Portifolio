export default function Contato() {
  return (
    <section id="contato" className="py-32 bg-zinc-900">
      <div className="container grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <h2 className="mb-6">Vamos conversar</h2>

          <p className="mb-8 text-zinc-400 max-w-md leading-relaxed">
            Estou aberto a oportunidades, projetos e boas conversas sobre
            desenvolvimento. Se fizer sentido, é só entrar em contato.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:gabriel.jorgef08@gmail.com"
              className="
                text-zinc-300
                border-b border-transparent
                hover:border-sky-400
                hover:text-sky-400
                transition
              "
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-jorge08"
              target="_blank"
              rel="noreferrer"
              className="
                text-zinc-300
                border-b border-transparent
                hover:border-sky-400
                hover:text-sky-400
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/gabrielfj08"
              target="_blank"
              rel="noreferrer"
              className="
                text-zinc-300
                border-b border-transparent
                hover:border-sky-400
                hover:text-sky-400
                transition
              "
            >
              GitHub
            </a>
          </div>

          <p className="pt-12 text-zinc-500 max-w-md text-sm">
            Aprender, construir e evoluir. Um projeto de cada vez.
          </p>
        </div>

        {/* Área visual / respiro */}
        <div className="hidden md:flex justify-center">
          <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 text-sm">
            Disponível para conversar
          </div>
        </div>

      </div>
    </section>
  )
}
