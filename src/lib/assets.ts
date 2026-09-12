export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const externalLinks = {
  driveThruCards: 'https://www.drivethrucards.com/en/product/555535/chemtoons',
  worksheets:
    'https://www.teacherspayteachers.com/Product/Cartoon-Periodic-Table-First-5-Elements-Cartoon-Character-Worksheets-H-to-B-3240664',
  teDua: 'https://www.teduaweddings.com',
  suzyLinkedIn: 'https://www.linkedin.com/in/suzy-lee/',
  barryLinkedIn: 'https://www.linkedin.com/in/barryam3/',
} as const
