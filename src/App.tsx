import { useEffect, useState } from 'react'
import elementData from './data/elements.json'
import './App.css'

const assetPath = (fileName: string) =>
  `${import.meta.env.BASE_URL}characters/featured/${fileName}`

const productPath = (fileName: string) =>
  `${import.meta.env.BASE_URL}products/${fileName}`

const tableCharacterPath = (fileName: string) =>
  `${import.meta.env.BASE_URL}characters/table/${fileName}`

const familyClass = (family: string) => family.toLowerCase().replaceAll(' ', '-')

type ElementData = (typeof elementData)[number]

const elementByPosition = new Map(
  elementData.map((element) => [`${element.period}-${element.group}`, element]),
)

const periodicCells = Array.from({ length: 9 * 18 }, (_, index) => {
  const period = Math.floor(index / 18) + 1
  const group = (index % 18) + 1
  return { period, group, element: elementByPosition.get(`${period}-${group}`) }
})

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
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null)
  const [characterView, setCharacterView] = useState<'table' | 'list'>('table')

  useEffect(() => {
    if (!selectedElement) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedElement(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedElement])

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

        <section className="section section--products" id="products" aria-labelledby="products-heading">
          <div className="section-heading">
            <p className="eyebrow">Choose your adventure</p>
            <h2 id="products-heading">A little chemistry for every kind of learner.</h2>
          </div>
          <div className="product-showcase">
            <article className="product-feature product-feature--game">
              <div className="product-feature__visual product-feature__visual--game">
                <div className="game-card-art">
                  <img
                    src={productPath('card-overview.webp')}
                    alt="An annotated Chemtoons Radium game card"
                  />
                </div>
                <span className="visual-sticker visual-sticker--players">2–10 players</span>
                <span className="visual-sticker visual-sticker--ages">Ages 8+</span>
              </div>

              <div className="product-feature__content">
                <p className="product-feature__kicker"><span>01</span> For the game table</p>
                <h3>A card game where chemistry is the strategy.</h3>
                <p className="product-feature__lede">
                  Choose an element, reveal together, pass your hand, and build a
                  collection that scores through the surprising ways elements
                  relate to one another.
                </p>
                <ul className="feature-list">
                  <li><strong>Easy to enter</strong> Start with four simple ways to score.</li>
                  <li><strong>Room to grow</strong> Add advanced rules as your table gets curious.</li>
                  <li><strong>Learn by playing</strong> Every decision uses real element properties.</li>
                </ul>
                <span className="button button--product-muted" role="status">
                  Available to buy soon
                </span>
              </div>
            </article>

            <article className="product-feature product-feature--worksheets">
              <div className="product-feature__content">
                <p className="product-feature__kicker"><span>02</span> For the classroom</p>
                <h3>Research it. Draw it. Make an element your own.</h3>
                <p className="product-feature__lede">
                  Chemtoons worksheets pair scientific research with creative
                  character design, helping students make periodic-table facts
                  more personal—and more memorable.
                </p>
                <ul className="feature-list">
                  <li><strong>Science meets art</strong> Turn researched properties into visual ideas.</li>
                  <li><strong>Ready for class</strong> Start with activities for the first five elements.</li>
                  <li><strong>More on the way</strong> Free and paid classroom resources will keep growing.</li>
                </ul>
                <a
                  className="button button--product"
                  href="https://www.teacherspayteachers.com/Product/Cartoon-Periodic-Table-First-5-Elements-Cartoon-Character-Worksheets-H-to-B-3240664"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse the worksheets <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="product-feature__visual product-feature__visual--worksheets">
                <div className="worksheet-paper worksheet-paper--back" aria-hidden="true" />
                <div className="worksheet-paper worksheet-paper--front">
                  <span className="worksheet-paper__label">Classroom preview</span>
                  <img
                    src={productPath('worksheets-preview.jpg')}
                    alt="Preview of a Hydrogen Chemtoons classroom worksheet"
                  />
                  <div className="worksheet-paper__lines" aria-hidden="true">
                    <span /><span /><span />
                  </div>
                </div>
                <span className="visual-sticker visual-sticker--creative">Science + creativity</span>
              </div>
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
              Explore the Chemtoons periodic table. Select any character to open
              a closer look at their chemistry family, atomic mass, and card-game fact.
            </p>
          </div>

          <div className="periodic-explorer">
            <div className="character-browser-controls" role="tablist" aria-label="Character browser view">
              <button
                className={`character-browser-controls__button${characterView === 'table' ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={characterView === 'table'}
                onClick={() => setCharacterView('table')}
              >
                Periodic table
              </button>
              <button
                className={`character-browser-controls__button${characterView === 'list' ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={characterView === 'list'}
                onClick={() => setCharacterView('list')}
              >
                Browse all
              </button>
            </div>

            <div className={`periodic-table-panel${characterView === 'list' ? ' is-hidden' : ''}`}>
              <p className="periodic-table-hint"><span aria-hidden="true">↔</span> Swipe to explore the table</p>
              <div className="periodic-table-wrap" tabIndex={0} aria-label="Interactive periodic table">
                <div className="periodic-table" role="grid" aria-label="Chemtoons periodic table">
                  {periodicCells.map(({ period, group, element }) => (
                    <div
                      className={`periodic-cell${element ? '' : ' periodic-cell--empty'}`}
                      key={`${period}-${group}`}
                      style={{ gridColumn: group, gridRow: period }}
                      role="gridcell"
                    >
                      {element ? (
                        <button
                          className={`element-tile element-tile--${familyClass(element.family)}${selectedElement?.atomicNumber === element.atomicNumber ? ' is-selected' : ''}`}
                          type="button"
                          onClick={() => setSelectedElement(element)}
                          aria-label={`Explore ${element.name}, ${element.symbol}`}
                          aria-pressed={selectedElement?.atomicNumber === element.atomicNumber}
                        >
                          <span className="element-tile__number">{element.atomicNumber}</span>
                          <span className="element-tile__symbol">{element.symbol}</span>
                          <img src={tableCharacterPath(element.image)} alt="" loading="lazy" />
                          <span className="element-tile__name">{element.name}</span>
                        </button>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`mobile-element-list${characterView === 'list' ? ' is-visible' : ''}`} aria-label="Browse all Chemtoons elements">
              {elementData.map((element) => (
                <button
                  className={`mobile-element-list__item mobile-element-list__item--${familyClass(element.family)}`}
                  type="button"
                  key={element.atomicNumber}
                  onClick={() => setSelectedElement(element)}
                  aria-label={`Explore ${element.name}, ${element.symbol}`}
                >
                  <span className="mobile-element-list__number">{element.atomicNumber}</span>
                  <span className="mobile-element-list__symbol">{element.symbol}</span>
                  <span className="mobile-element-list__copy">
                    <strong>{element.name}</strong>
                    <small>{element.family}</small>
                  </span>
                  <img src={tableCharacterPath(element.image)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {selectedElement ? (
            <div
              className="element-modal"
              role="presentation"
              onClick={(event) => {
                if (event.target === event.currentTarget) setSelectedElement(null)
              }}
            >
              <aside
                className={`element-detail element-detail--${selectedElement.family.toLowerCase().replaceAll(' ', '-')}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="element-detail-title"
                aria-describedby="element-detail-fact"
              >
                <button
                  className="element-modal__close"
                  type="button"
                  onClick={() => setSelectedElement(null)}
                  aria-label="Close element details"
                  autoFocus
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="element-detail__art">
                  <img src={tableCharacterPath(selectedElement.image)} alt={`${selectedElement.name} Chemtoon character`} />
                  <span className="element-detail__badge">{selectedElement.symbol}</span>
                </div>
                <div className="element-detail__content">
                  <p className="element-detail__eyebrow">Element {selectedElement.atomicNumber}</p>
                  <h3 id="element-detail-title">{selectedElement.name}</h3>
                  <div className="element-detail__stats">
                    <span><small>Family</small><strong>{selectedElement.family}</strong></span>
                    <span><small>Atomic mass</small><strong>{selectedElement.atomicWeight}</strong></span>
                  </div>
                  <p className="element-detail__fact" id="element-detail-fact">“{selectedElement.speech}”</p>
                  {selectedElement.radioactive ? <span className="element-detail__note">Radioactive element</span> : null}
                </div>
              </aside>
            </div>
          ) : null}
        </section>

        <section className="story-section" id="story" aria-labelledby="story-heading">
          <div className="story-section__intro">
            <p className="eyebrow">The story behind the science</p>
            <h2 id="story-heading">A favorite subject became a cast of characters.</h2>
            <p>
              Chemtoons grew from a love of chemistry theory, illustration,
              playful learning—and one wonderfully coincidental project name.
            </p>
          </div>

          <div className="story-chapters">
            <article className="story-chapter">
              <span className="story-chapter__marker">01</span>
              <div>
                <h3>Drawn from curiosity</h3>
                <p>
                  Chemistry was Suzy Lee’s favorite subject in high school, so
                  she began illustrating the elements as people with distinct
                  personalities. At university, she realized she loved the
                  theory more than practical lab work and found her professional
                  home in computer science—but the characters stayed with her.
                </p>
              </div>
            </article>

            <article className="story-chapter">
              <span className="story-chapter__marker">02</span>
              <div>
                <h3>A project called “Elements”</h3>
                <p>
                  Suzy and Barry McNamara met while collaborating at Google on a
                  project that, entirely by coincidence, was called “Elements.”
                  It had nothing to do with chemistry, but Suzy’s team
                  introduction about her cartoon periodic table made a lasting
                  impression on Barry.
                </p>
              </div>
            </article>

            <article className="story-chapter">
              <span className="story-chapter__marker">03</span>
              <div>
                <h3>From wedding favor to game night</h3>
                <p>
                  Years later, while the two avid makers were brainstorming
                  wedding favors, Barry had an idea: turn the element characters
                  into a real card game. Together, Suzy and Barry designed a game
                  that makes genuine chemistry part of the fun.
                </p>
              </div>
            </article>
          </div>

          <div className="story-belief">
            <p className="story-belief__label">Why Chemtoons exists</p>
            <blockquote>
              “A friendlier way to meet the elements.”
            </blockquote>
            <div className="founder-links" aria-label="Chemtoons founders">
              <a href="https://www.linkedin.com/in/suzy-lee/" target="_blank" rel="noreferrer">
                <span className="founder-symbol founder-symbol--suzy">S</span>
                <span><strong>Suzy Lee</strong><small>Creator & illustrator · LinkedIn ↗</small></span>
              </a>
              <a href="https://www.linkedin.com/in/barryam3/" target="_blank" rel="noreferrer">
                <span className="founder-symbol founder-symbol--barry">B</span>
                <span><strong>Barry McNamara</strong><small>Game co-creator · LinkedIn ↗</small></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Wordmark />
        <p>Making science feel a little more human.</p>
        <div className="site-footer__end">
          <div className="site-footer__links">
            <a href="https://www.linkedin.com/in/suzy-lee/" target="_blank" rel="noreferrer">Suzy</a>
            <a href="https://www.linkedin.com/in/barryam3/" target="_blank" rel="noreferrer">Barry</a>
          </div>
          <p className="site-footer__legal">© 2026 Suzy Lee and Barry McNamara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
