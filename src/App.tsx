import Header from './components/header'
import Footer from './components/footer'

import Home from './sections/home'
import Projetos from './sections/projetos'
import Sobre from './sections/sobre'
import Contato from './sections/contato'

function App() {
  return (
    <>
      <Header />

      <main className="pt-5">
        <Home />
        <Projetos />
        <Sobre />
        <Contato />
      </main>

      <Footer />
    </>
  )
}

export default App
