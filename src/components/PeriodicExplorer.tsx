import { useEffect, useMemo, useRef, useState } from 'react'
import elementData from '../data/elements.json'
import { assetUrl } from '../lib/assets'
import styles from './PeriodicExplorer.module.scss'

type ElementData = (typeof elementData)[number]

const familyClass = (family: string) =>
  family.toLowerCase().replaceAll(' ', '-')

export function PeriodicExplorer() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null)
  const [view, setView] = useState<'table' | 'list'>(() => (
    typeof window !== 'undefined' &&
    window.matchMedia('(orientation: landscape)').matches &&
    window.innerWidth < 760
      ? 'list'
      : 'table'
  ))
  const choseView = useRef(false)
  const dialogRef = useRef<HTMLElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  const periodicCells = useMemo(() => {
    const elementByPosition = new Map(
      elementData.map((element) => [`${element.period}-${element.group}`, element]),
    )

    return Array.from({ length: 9 * 18 }, (_, index) => {
      const period = Math.floor(index / 18) + 1
      const group = (index % 18) + 1
      return { period, group, element: elementByPosition.get(`${period}-${group}`) }
    })
  }, [])

  const openElement = (element: ElementData) => {
    previousFocus.current = document.activeElement as HTMLElement
    setSelectedElement(element)
  }

  const closeElement = () => setSelectedElement(null)

  useEffect(() => {
    const landscapeQuery = window.matchMedia('(orientation: landscape)')
    const updateViewForOrientation = () => {
      if (choseView.current) return
      setView(landscapeQuery.matches && window.innerWidth < 760 ? 'list' : 'table')
    }

    landscapeQuery.addEventListener('change', updateViewForOrientation)
    window.addEventListener('resize', updateViewForOrientation)
    return () => {
      landscapeQuery.removeEventListener('change', updateViewForOrientation)
      window.removeEventListener('resize', updateViewForOrientation)
    }
  }, [])

  useEffect(() => {
    if (!selectedElement) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const dialog = dialogRef.current
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    focusable?.[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeElement()
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus.current?.focus()
    }
  }, [selectedElement])

  return (
    <section className={styles.section} id="characters" aria-labelledby="characters-title">
      <div className={styles.heading}>
        <div>
          <p className="section-label">The whole cast</p>
          <h2 id="characters-title">The periodic table, with personality.</h2>
        </div>
        <p>
          Select a character to see the fact behind the drawing and the science
          printed on their card.
        </p>
      </div>

      <div className={styles.explorer}>
        <div className={styles.controls} role="tablist" aria-label="Character browser view">
          <button type="button" role="tab" aria-selected={view === 'table'} className={view === 'table' ? styles.active : undefined} onClick={() => { choseView.current = true; setView('table') }}>
            Periodic table
          </button>
          <button type="button" role="tab" aria-selected={view === 'list'} className={view === 'list' ? styles.active : undefined} onClick={() => { choseView.current = true; setView('list') }}>
            A–Z list
          </button>
        </div>

        {view === 'table' ? (
          <div className={styles.tablePanel} role="tabpanel">
            <p className={styles.swipeHint}>Swipe sideways to explore the full table <span aria-hidden="true">↔</span></p>
            <div className={styles.tableWrap} tabIndex={0} aria-label="Scrollable Chemtoons periodic table">
              <div className={styles.table} role="grid" aria-label="Chemtoons periodic table">
                {periodicCells.map(({ period, group, element }) => (
                  <div className={element ? styles.cell : styles.emptyCell} key={`${period}-${group}`} style={{ gridColumn: group, gridRow: period }} role="gridcell">
                    {element ? (
                      <button className={`${styles.tile} ${styles[familyClass(element.family)]}`} type="button" onClick={() => openElement(element)} aria-label={`Open ${element.name}, ${element.symbol}`}>
                        <span className={styles.number}>{element.atomicNumber}</span>
                        <span className={styles.symbol}>{element.symbol}</span>
                        <img src={assetUrl(`characters/table/${element.image}`)} alt="" loading="lazy" />
                        <span className={styles.name}>{element.name}</span>
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.list} role="tabpanel" aria-label="Alphabetical list of Chemtoons elements">
            {[...elementData].sort((a, b) => a.name.localeCompare(b.name)).map((element) => (
              <button className={`${styles.listItem} ${styles[familyClass(element.family)]}`} type="button" key={element.atomicNumber} onClick={() => openElement(element)}>
                <span className={styles.listSymbol}>{element.symbol}</span>
                <span><strong>{element.name}</strong><small>{element.family}</small></span>
                <img src={assetUrl(`characters/table/${element.image}`)} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedElement ? (
        <div className={styles.backdrop} role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeElement()
        }}>
          <aside ref={dialogRef} className={`${styles.dialog} ${styles[familyClass(selectedElement.family)]}`} role="dialog" aria-modal="true" aria-labelledby="element-title" aria-describedby="element-fact">
            <button className={styles.close} type="button" onClick={closeElement} aria-label="Close element details">×</button>
            <div className={styles.dialogArt}>
              <img src={assetUrl(`characters/table/${selectedElement.image}`)} alt={`${selectedElement.name} Chemtoon character`} />
              <span>{selectedElement.symbol}</span>
            </div>
            <div className={styles.dialogCopy}>
              <p>Element {selectedElement.atomicNumber}</p>
              <h3 id="element-title">{selectedElement.name}</h3>
              <dl>
                <div><dt>Family</dt><dd>{selectedElement.family}</dd></div>
                <div><dt>Atomic mass</dt><dd>{selectedElement.atomicWeight}</dd></div>
              </dl>
              <blockquote id="element-fact">“{selectedElement.speech}”</blockquote>
              {selectedElement.radioactive ? <span className={styles.radioactive}>Radioactive element</span> : null}
            </div>
          </aside>
        </div>
      ) : null}
    </section>
  )
}
