export default function Home(){
    return(
        <section id="home" className="min-h-screen flex items-center bg-zinc-900">
            <div className="container grid md:grid-cols-2 gap-16">
            
                {/*Texto Principal*/}
                <div className="flex flex-col justify-center gap-6">
                    <h1>Gabriel Ferreira Jorge</h1>
                    <span className="text-primary text-xl font-medium">Desenvolvedor Web Júnior</span>

                    <p className="max-w-xl">
                    Construo interfaces claras, performáticas e fáceis de manter.
                    Valorizo código simples, decisões consistentes e boa experiência do usuário.
                    </p>

                    {/*Tecnologias*/}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {['JavaScript','React','TypeScript','TailWind CSS','Docker'].map(tech => (
                            <span
                            key={tech}
                            className="px-4 py-2 text-sm rounded-full bg-surface border/50">
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    {/*CTAs*/}
                    <div className="flex gap-4 mt-8">
                        <a href="#projetos" className="px-6 py-3 rounded-md bg-surface font-medium hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 transition">
                            Ver Projetos
                        </a>
                        <a href="#contato" className="px-6 py-3 rounded-md border border-white/20 hover:-translate-y-0.5 hover:border-primary active:translate-y-0 transition">
                            Entrar em contato
                        </a>
                    </div>

                    <div className="hidden md:flex items-center justify-center text-muted text-sm">
                        <div className="
                        absolute inset-y-0 right-0 w-1/2
                        bg-gradient-to-l
                        from-sky-500/10
                        via-sky-500/5
                        to-transparent
                        pointer-events-none
                        " />
                    </div>
                </div>
            </div>
        </section>
    )
}
