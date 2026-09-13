import { assetUrl, externalLinks } from '../lib/assets'
import styles from './Story.module.scss'

export function Story() {
  return (
    <section className={styles.story} id="story" aria-labelledby="story-title">
      <div className={styles.heading}>
        <p className="section-label">How Chemtoons happened</p>
        <h2 id="story-title">It started in chemistry class. It became our wedding favor.</h2>
      </div>

      <div className={styles.chapters}>
        <article className={styles.chapter}>
          <div className={styles.chapterCopy}>
            <span>01</span>
            <h3>First came the characters</h3>
            <p>
              Suzy began drawing the elements as people for her high-school
              chemistry classroom. Their properties became their personalities:
              Carbon wears diamonds; Helium floats; Oxygen is always making bonds.
            </p>
          </div>
          <img className={styles.characterArt} src={assetUrl('site/characters/hydrogen.webp')} alt="Hydrogen Chemtoon character" loading="lazy" />
        </article>

        <article className={`${styles.chapter} ${styles.chapterReverse}`}>
          <figure className={styles.photoFrame}>
            <img src={assetUrl('site/photos/elements-team.webp')} alt="Suzy Lee and Barry McNamara together on the team whose project was called Elements" loading="lazy" />
            <figcaption>Together on the team whose project was called “Elements”</figcaption>
          </figure>
          <div className={styles.chapterCopy}>
            <span>02</span>
            <h3>Then, a funny coincidence</h3>
            <p>
              We later met while working on a project that happened to be called
              “Elements.” Years after that introduction, Barry wondered whether
              Suzy’s characters could become a real card game.
            </p>
          </div>
        </article>

        <article className={styles.weddingChapter}>
          <div className={styles.weddingCopy}>
            <span>03</span>
            <h3>Made for our wedding</h3>
            <p>
              The prototype became the first complete deck we gave guests at our
              wedding in San Francisco. They opened it and started playing at the
              tables.
            </p>
          </div>
          <div className={styles.weddingPhotos}>
            <figure>
              <img src={assetUrl('site/photos/prototype.webp')} alt="An early handmade Chemtoons prototype with cards and a purple box" loading="lazy" />
              <figcaption>The handmade prototype</figcaption>
            </figure>
            <figure>
              <img src={assetUrl('site/photos/creators-at-wedding.webp')} alt="Suzy Lee and Barry McNamara holding Chemtoons cards at their wedding" loading="lazy" />
              <figcaption>
                The creators with their wedding-favor cards.
                <sup><a href="#photo-credit-1" id="photo-credit-ref-1a" aria-label="Photo credit footnote 1">1</a></sup>.
              </figcaption>
            </figure>
            <figure>
              <img src={assetUrl('site/photos/game-at-wedding.webp')} alt="Wedding guests playing Chemtoons around a decorated dinner table" loading="lazy" />
              <figcaption>
                Chemtoons being played at the wedding.
                <sup><a href="#photo-credit-1" id="photo-credit-ref-1b" aria-label="Photo credit footnote 1">1</a></sup>.
              </figcaption>
            </figure>
            <figure>
              <img src={assetUrl('site/photos/game-at-wedding-rachel.webp')} alt="Wedding guests holding Chemtoons cards while playing the game" loading="lazy" />
              <figcaption>
                Guests drafting their cards.
                <sup><a href="#photo-credit-2" id="photo-credit-ref-2" aria-label="Photo credit footnote 2">2</a></sup>.
              </figcaption>
            </figure>
          </div>
          <ol className={styles.photoCredits} aria-label="Photo credits">
            <li id="photo-credit-1">
              <a href={externalLinks.teDua} target="_blank" rel="noreferrer">Te Dua</a>.{' '}
              <a href="#photo-credit-ref-1a" aria-label="Back to photo credit reference 1">↩</a>{' '}
              <a href="#photo-credit-ref-1b" aria-label="Back to photo credit reference 1">↩</a>
            </li>
            <li id="photo-credit-2">
              Rachel Cipkins.{' '}
              <a href="#photo-credit-ref-2" aria-label="Back to photo credit reference 2">↩</a>
            </li>
          </ol>
        </article>
      </div>
    </section>
  )
}
