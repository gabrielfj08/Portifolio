import { useState } from "react"

type Projeto = {
    title: string
    description: string
    problem: string
    solution: string
    stack: string[]
    link:string
}

const projetos: Projeto[] = [
    {
    title: 'Website Institucional – MFD Santos',
    description: 'Site institucional desenvolvido para empresa do setor de exportação de commodities agrícolas, com foco em clareza da informação, responsividade e presença digital profissional.',
    problem: 'A empresa não possuía um site claro e organizado que apresentasse seus serviços, produtos e iniciativas de forma acessível e profissional.',
    solution: 'Desenvolvimento de um site responsivo com estrutura bem definida, destacando produtos, projetos de sustentabilidade e identidade institucional, garantindo fácil navegação em diferentes dispositivos.',
    stack: ['HTML', 'CSS', 'UOL Host'],
    link: 'https://mfdsantos.com.br'
    },
    {
    title: 'FocusTrack',
    description: 'Aplicação web para organização de metas e rotinas, inspirada em metodologias Kanban, desenvolvida como projeto autoral para prática e portfólio.',
    problem: 'Necessidade de organizar metas e tarefas de forma visual e simples, ao mesmo tempo em que praticava lógica, estruturação e manipulação do DOM.',
    solution: 'Criação de uma aplicação funcional com quadros personalizados, metas com subtarefas, modais interativos e layout responsivo, focando em usabilidade e organização do código.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    link: 'https://gabrielfj08.github.io/focustrack/'
    },
    {
    title: 'Website Corporativo – Adsumtec',
    description: 'Participação no frontend desenvolvido em ambiente profissional com Docker e WSL, focado em padronização de ambiente, facilidade de desenvolvimento e manutenção.',
    problem: 'A necessidade de um ambiente de desenvolvimento consistente, leve e replicável para o site institucional, evitando conflitos de dependências e problemas entre sistemas.',
    solution: 'Configuração de ambiente isolado utilizando Docker e docker-compose integrado ao WSL, garantindo consistência entre ambientes, controle de portas e facilidade de execução do projeto.',
    stack: ['React', 'TypeScript', 'JavaScript', 'Docker', 'Docker Compose', 'WSL'],
    link: 'https://www.adsumtec.com.br/'
    }

]

export default function Projetos() {
    const [ativo, setAtivo] = useState<Projeto | null>(null)

    return (
        <section id="projetos" className="py-36 bg-zinc-800/60 backdrop-blur">
            <div className="container">
                <h2 className="mb-12">Projetos</h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {projetos.map((projeto) => (
                    <button
                    key={projeto.title}
                    onClick={() => setAtivo(projeto)}
                    className="group text-left p-6 rounded-xl bg-zinc-900 border border-white/10 shadow-lg shadow-black/30 hover:border-sky-500/40 hover:-translate-y-1 hover:shadow-sky-500/10 transition">
                    <h3 className="mb-2 group-hover:text-sky-400 transition">
                        {projeto.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {projeto.description}
                    </p>

                    <span className="inline-block mt-4 text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition">
                        Ver detalhes →
                    </span>
                    </button>
                    ))}
                </div>

                {ativo && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50 px-4">
                        <div className="bg-zinc-900 max-w-xl w-full p-8 rounded-xl relative border border-white/10">

                            <button
                            onClick={() => setAtivo(null)}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
                            >
                                ✕
                            </button>

                            <h3 className="mb-2 text-xl font-semibold">{ativo.title}</h3>
                            <p className="mb-6 text-zinc-400">{ativo.description}</p>

                            <div className="space-y-4 text-sm">
                                <p>
                                    <span className="text-sky-400 font-medium">Problema</span><br />
                                    {ativo.problem}
                                </p>

                                <p>
                                    <span className="text-sky-400 font-medium">Solução</span><br />
                                    {ativo.solution}
                                </p>

                                <p>
                                    <span className="text-sky-400 font-medium">Stack</span><br />
                                    {ativo.stack.join(", ")}
                                </p>
                            </div>


                            {ativo.link && (
                                <a
                                    href={ativo.link}
                                    target="_blank"
                                    className="
                                        inline-block mt-6
                                        text-sky-400 font-medium
                                        hover:underline
                                    "
                                    >
                                    Acessar projeto →
                                </a>
                            )}
                        </div>
                        
                    </div>
                )}
            </div>
        </section>
    )
}

// Ao todo posso incluir 3 projetos. FocuTrack(projeto Kanban), MFD-santos(site institucional), Adsumtec(participação no desenvolvimento site)