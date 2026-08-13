import './App.css'

const assetPath = (fileName: string) =>
  `${import.meta.env.BASE_URL}characters/featured/${fileName}`

const featuredCharacters = [
  { name: 'Carbon', symbol: 'C', number: 6, file: 'carbon.webp' },
  { name: 'Helium', symbol: 'He', number: 2, file: 'helium.webp' },
  { name: 'Oxygen', symbol: 'O', number: 8, file: 'oxygen.webp' },
  { name: 'Nitrogen', symbol: 'N', number: 7, file: 'nitrogen.webp' },
  { name: 'Sulfur', symbol: 'S', number: 16, file: 'sulfur.webp' },
]

function Wordmark() {
  return (
    <span className="wordmark" aria-label="Chemtoons">
      <span className="wordmark__tile" aria-hidden="true">
        <span>6</span>
        <strong>C</strong>
      </span>
      <span className="wordmark__name" aria-hidden="true">
        hemtoons
      </span>
    </span>
  )
}

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand-link" href="#top">
          <Wordmark />
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#characters">Characters</a>
          <a href="#story">Our story</a>
        </nav>

        <a className="header-cta" href="#products">
          Explore
        </a>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true">✦</span> Chemistry, with character
            </p>
            <h1 id="hero-heading">
              Meet the elements.
              <span>Play with the possibilities.</span>
            </h1>
            <p className="hero-intro">
              Chemtoons transforms the periodic table into an unforgettable
              cast—made for curious kids, lively game nights, and classrooms
              where science feels welcoming.
            </p>
            <div className="hero-actions">
              <span className="button button--primary" role="status">
                Card game coming soon
              </span>
              <a className="button button--text" href="#characters">
                Meet the characters <span aria-hidden="true">↓</span>
              </a>
            </div>
            <ul className="hero-notes" aria-label="Chemtoons highlights">
              <li>2–10 players</li>
              <li>Ages 8+</li>
              <li>No chemistry degree required</li>
            </ul>
          </div>

          <div
            className="hero-world"
            role="img"
            aria-label="Carbon, Helium, Oxygen, Nitrogen, and Sulfur Chemtoons characters"
          >
            <div className="hero-world__grid" aria-hidden="true" />
            <div className="hero-world__orbit" aria-hidden="true" />

            <div className="character character--carbon">
              <img src={assetPath('carbon.webp')} alt="" />
              <span className="element-chip element-chip--carbon" aria-hidden="true">
                <small>6</small>
                <strong>C</strong>
              </span>
            </div>
            <div className="character character--helium">
              <img src={assetPath('helium.webp')} alt="" />
              <span className="element-chip element-chip--helium" aria-hidden="true">
                <small>2</small>
                <strong>He</strong>
              </span>
            </div>
            <div className="character character--oxygen">
              <img src={assetPath('oxygen.webp')} alt="" />
              <span className="element-chip element-chip--oxygen" aria-hidden="true">
                <small>8</small>
                <strong>O</strong>
              </span>
            </div>
            <div className="character character--nitrogen">
              <img src={assetPath('nitrogen.webp')} alt="" />
              <span className="element-chip element-chip--nitrogen" aria-hidden="true">
                <small>7</small>
                <strong>N</strong>
              </span>
            </div>
            <div className="character character--sulfur">
              <img src={assetPath('sulfur.webp')} alt="" />
              <span className="element-chip element-chip--sulfur" aria-hidden="true">
                <small>16</small>
                <strong>S</strong>
              </span>
            </div>

            <p className="hero-world__caption">
              <span>Original characters</span>
              illustrated by Suzy Lee
            </p>
          </div>
        </section>

        <section className="brand-promise" aria-label="What Chemtoons offers">
          <p>Science is serious. Learning it doesn’t have to feel that way.</p>
          <div className="promise-list">
            <span><strong>01</strong> Play together</span>
            <span><strong>02</strong> Discover naturally</span>
            <span><strong>03</strong> Stay curious</span>
          </div>
        </section>

        <section className="section section--products" id="products" aria-labelledby="products-heading">
          <div className="section-heading">
            <p className="eyebrow">Choose your adventure</p>
            <h2 id="products-heading">A little chemistry for every kind of learner.</h2>
          </div>
          <div className="product-preview-grid">
            <article className="product-preview product-preview--game">
              <p className="product-preview__number">01</p>
              <div>
                <p className="product-preview__type">For the game table</p>
                <h3>The Chemtoons card game</h3>
                <p>Collect a colorful cast and discover surprising connections between the elements.</p>
              </div>
              <span className="product-preview__status">Coming soon</span>
            </article>
            <article className="product-preview product-preview--worksheets">
              <p className="product-preview__number">02</p>
              <div>
                <p className="product-preview__type">For the classroom</p>
                <h3>Character-led worksheets</h3>
                <p>Give young scientists a friendly first introduction to the periodic table.</p>
              </div>
              <span className="product-preview__status">Available now</span>
            </article>
          </div>
        </section>

        <section className="section section--characters" id="characters" aria-labelledby="characters-heading">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Meet the cast</p>
              <h2 id="characters-heading">Every element has a story to tell.</h2>
            </div>
            <p>
              Explore a preview of the personalities that turn chemistry facts
              into characters worth remembering.
            </p>
          </div>

          <div className="character-preview-list">
            {featuredCharacters.map((character) => (
              <article className="character-preview" key={character.name}>
                <span className="character-preview__number">{character.number}</span>
                <img src={assetPath(character.file)} alt={`${character.name} Chemtoon character`} loading="lazy" />
                <div>
                  <strong>{character.symbol}</strong>
                  <span>{character.name}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="section-note">The interactive periodic table arrives in a dedicated milestone.</p>
        </section>

        <section className="story-preview" id="story" aria-labelledby="story-heading">
          <p className="eyebrow">The story behind the science</p>
          <blockquote id="story-heading">
            “What if someone’s first introduction to chemistry felt less scary—and a lot more fun?”
          </blockquote>
          <p>
            Chemtoons began with Suzy Lee’s love of chemistry and illustration,
            then grew into a game when Barry McNamara saw a whole new way for
            the characters to come to life.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>Making science feel a little more human.</p>
        <p className="site-footer__legal">© 2026 Suzy Lee and Barry McNamara. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
