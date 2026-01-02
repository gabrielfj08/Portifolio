export default function Sobre() {
  return (
    <section id="sobre" className="py-32 bg-zinc-900/40">
      <div className="container grid md:grid-cols-2 gap-16 items-start">
        
        {/* Texto principal */}
        <div>
          <h2 className="mb-6">Sobre</h2>

          <p className="mb-4 text-zinc-400 leading-relaxed">
            Sou desenvolvedor frontend em formação, com foco em React e TypeScript,
            e estudante de Análise e Desenvolvimento de Sistemas pela Uninter.
            Trabalho transformando requisitos em interfaces claras, responsivas
            e fáceis de manter.
          </p>

          <p className="mb-4 text-zinc-400 leading-relaxed">
            Atuo no desenvolvimento de projetos pessoais e reais, incluindo sites
            institucionais completos, sempre priorizando usabilidade,
            organização do código e clareza da informação.
          </p>

          <p className="mb-4 text-zinc-400 leading-relaxed">
            Também possuo base em análise de dados com Python e Power BI, o que amplia
            minha visão sobre como aplicações geram valor a partir da informação,
            e não apenas da interface.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Busco minha primeira oportunidade como estagiário ou desenvolvedor júnior,
            em ambientes que valorizem aprendizado contínuo, colaboração
            e boas práticas de desenvolvimento.
          </p>
        </div>

        {/* Cards laterais */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-sky-500/10 transition">
            <h3 className="mb-2 text-sky-400">Como eu penso</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Interface boa é aquela que resolve o problema com clareza,
              sem competir com o conteúdo ou confundir o usuário.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-sky-500/10 transition">
            <h3 className="mb-2 text-sky-400">Foco atual</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              React, TypeScript, componentização, organização de código
              e construção de experiências consistentes.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-sky-500/10 transition">
            <h3 className="mb-2 text-sky-400">Diferencial</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Visão além do layout: ambiente de desenvolvimento,
              manutenção do código, consistência visual
              e experiência do desenvolvedor.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
