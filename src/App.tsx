import { Footer } from './components/Footer'
import { GameShowcase } from './components/GameShowcase'
import { Header } from './components/Header'
import { PeriodicExplorer } from './components/PeriodicExplorer'
import { Resources } from './components/Resources'
import { Story } from './components/Story'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.siteShell} id="top">
      <Header />
      <main>
        <GameShowcase />
        <PeriodicExplorer />
        <Story />
        <Resources />
      </main>
      <Footer />
    </div>
  )
}

export default App
