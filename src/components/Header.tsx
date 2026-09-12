import { assetUrl } from '../lib/assets'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="Chemtoons home">
        <img src={assetUrl('site/brand/chemtoons-logo.png')} alt="Chemtoons" />
      </a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a href="#game">The game</a>
        <a href="#characters">Characters</a>
        <a href="#story">Our story</a>
        <a href="#resources">Downloads</a>
      </nav>
      <a className={styles.cta} href="#get-the-game">Get the game</a>
    </header>
  )
}
