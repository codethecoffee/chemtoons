import { assetUrl, externalLinks } from "../lib/assets";
import styles from "./GameShowcase.module.scss";

const cards = [
  { file: "carbon.webp", name: "Carbon" },
  { file: "helium.webp", name: "Helium" },
  { file: "aluminum.webp", name: "Aluminum" },
  { file: "copper.webp", name: "Copper" },
];

const productPhotos = [
  { file: "box.webp", alt: "Chemtoons game box standing upright" },
  { file: "open-box.webp", alt: "Open Chemtoons box containing the full deck" },
  {
    file: "game-cards.webp",
    alt: "A colorful spread of Chemtoons element cards",
    wide: true,
  },
  // { file: 'deck.webp', alt: 'The stacked Chemtoons card deck' },
  // { file: 'rules.webp', alt: 'Chemtoons rules cards laid out together' },
];

export function GameShowcase() {
  return (
    <>
      <section className={styles.hero} id="game" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className="section-label">The Chemtoons card game</p>
          <h1 id="hero-title">A cartoon chemistry card game</h1>
          <p className={styles.lede}>
            Pick a card, pass the rest down, and try to score the most points!{" "}
            Each card depicts a unique <em>Chemtoon</em>, a cartoon character
            representing an element of the periodic table. How they look and
            score is based on science, but you don&apos;t need to have aced
            chemistry class to draft a winning set of 10!
          </p>
          <dl className={styles.stats} aria-label="Game details">
            <div>
              <dt>Players</dt>
              <dd>2–10</dd>
            </div>
            <div>
              <dt>Time</dt>
              <dd>10–20 min</dd>
            </div>
            <div>
              <dt>Ages</dt>
              <dd>10+</dd>
            </div>
          </dl>
          <div className={styles.actions} id="get-the-game">
            <a
              className="button button--dark"
              href={externalLinks.driveThruCards}
              target="_blank"
              rel="noreferrer"
            >
              Buy or download Chemtoons <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className={styles.atCost}>
            Printed deck sold at cost · Print &amp; play files free
          </p>
        </div>

        <div className={styles.heroArt} aria-label="Chemtoons game cover">
          <div className={styles.coverFrame}>
            <img
              src={assetUrl("site/product/chemtoons-cover.webp")}
              alt="Chemtoons card game cover"
            />
          </div>
        </div>
      </section>

      <section className={styles.howItWorks} aria-labelledby="how-title">
        <div className={styles.howHeading}>
          <p className="section-label">How it plays</p>
          <h2 id="how-title">Pick a card, then pass the rest down.</h2>
        </div>
        <ol className={styles.steps}>
          <li>
            <span>1</span>
            <div>
              <h3>Choose</h3>
              <p>Pick one card from your hand and place it face down.</p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h3>Reveal</h3>
              <p>Everyone turns over their choice at the same time.</p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h3>Pass</h3>
              <p>
                Pass the remaining cards left and keep drafting until you have
                ten.
              </p>
            </div>
          </li>
        </ol>
        <div
          className={styles.cardFan}
          aria-label="A sample of four Chemtoons cards"
        >
          {cards.map((card) => (
            <img
              key={card.file}
              src={assetUrl(`site/cards/${card.file}`)}
              alt={`${card.name} Chemtoons game card`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className={styles.productGallery} aria-labelledby="inside-title">
        <div className={styles.galleryIntro}>
          <p className="section-label">Inside the box</p>
          <h2 id="inside-title">
            The first 103 elements: Hydrogen to Lawrencium
          </h2>
          <p>
            Every character represents a real element. Their family, atomic
            number, weight, ions, and radioactivity all become ways to score.
          </p>
          <a href={assetUrl("downloads/chemtoons-scoresheets.pdf")} download>
            Download extra scoresheets <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className={styles.galleryGrid}>
          {productPhotos.map((photo) => (
            <figure
              key={photo.file}
              className={photo.wide ? styles.galleryWide : undefined}
            >
              <img
                src={assetUrl(`site/product/${photo.file}`)}
                alt={photo.alt}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
