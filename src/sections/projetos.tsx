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
    title: 'Website Corporativo – MFD Santos',
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
    title: 'Website Institucional – Adsumtec',
    description: 'Participação no frontend institucional desenvolvido em ambiente profissional com Docker e WSL, focado em padronização de ambiente, facilidade de desenvolvimento e manutenção.',
    problem: 'A necessidade de um ambiente de desenvolvimento consistente, leve e replicável para o site institucional, evitando conflitos de dependências e problemas entre sistemas.',
    solution: 'Configuração de ambiente isolado utilizando Docker e docker-compose integrado ao WSL, garantindo consistência entre ambientes, controle de portas e facilidade de execução do projeto.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Docker', 'Docker Compose', 'WSL'],
    link: 'https://www.adsumtec.com.br/'
    }

]

export default function Projetos() {
    const [ativo, setAtivo] = useState<Projeto | null>(null)

    return (
        <section id="projetos">
            <h2>Projetos</h2>

            <div>
                {projects.map((project) => (
                <article key={project.title}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <p>{project.problem}</p>
                    <p>{project.solution}</p>
                    <p>{project.stack}</p>

                    <a href={project.link} target="_blank" rel="noreferrer">
                    Ver projeto
                    </a>
                </article>
                ))}
            </div>
        </section>
    )
}

// Ao todo posso incluir 3 projetos. FocuTrack(projeto Kanban), MFD-santos(site institucional), Adsumtec(participação no desenvolvimento site)