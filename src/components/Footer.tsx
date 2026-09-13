import { assetUrl, externalLinks } from '../lib/assets'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <a href="#top" aria-label="Back to top">
          <img src={assetUrl('site/brand/chemtoons-logo.png')} alt="Chemtoons" />
        </a>
        <p>A card game by Barry McNamara and Suzy Lee.</p>
      </div>
      <div className={styles.contact}>
        <p>Questions, classrooms, or game nights:</p>
        <a href="mailto:chemtoonsofficial@gmail.com">chemtoonsofficial@gmail.com</a>
        <div>
          <a href={externalLinks.suzyLinkedIn} target="_blank" rel="noreferrer">Suzy on LinkedIn ↗</a>
          <a href={externalLinks.barryLinkedIn} target="_blank" rel="noreferrer">Barry on LinkedIn ↗</a>
        </div>
      </div>
      <div className={styles.legal}>
        <p>© 2026 Suzy Lee and Barry McNamara. All rights reserved.</p>
      </div>
    </footer>
  )
}
