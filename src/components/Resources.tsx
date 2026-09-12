import { assetUrl, externalLinks } from '../lib/assets'
import styles from './Resources.module.scss'

export function Resources() {
  return (
    <section className={styles.resources} id="resources" aria-labelledby="resources-title">
      <div className={styles.heading}>
        <p className="section-label">Printables</p>
        <h2 id="resources-title">For game night and the classroom.</h2>
      </div>

      <div className={styles.cards}>
        <article className={styles.scoreCard}>
          <div className={styles.copy}>
            <p className={styles.kicker}>For players</p>
            <h3>Need more scoresheets?</h3>
            <p>Print a fresh page whenever you need one. Each page contains nine reusable game scoresheets.</p>
            <a className="button button--dark" href={assetUrl('downloads/chemtoons-scoresheets.pdf')} download>
              Download scoresheets <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.scorePreview}>
            <img src={assetUrl('site/product/scoresheet-card.webp')} alt="Rendered Chemtoons scoresheet card" loading="lazy" />
          </div>
        </article>

        <article className={styles.worksheetCard}>
          <div className={styles.worksheetPreview}>
            <img src={assetUrl('products/worksheets-preview.jpg')} alt="Preview of a Hydrogen Chemtoons classroom worksheet" loading="lazy" />
          </div>
          <div className={styles.copy}>
            <p className={styles.kicker}>For educators</p>
            <h3>Research an element. Then draw your own.</h3>
            <p>
              The free ten-page starter pack pairs information sheets and
              creative worksheets for Hydrogen, Helium, Lithium, Beryllium, and Boron.
            </p>
            <a className="button button--paper" href={externalLinks.worksheets} target="_blank" rel="noreferrer">
              Get the free worksheets <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
