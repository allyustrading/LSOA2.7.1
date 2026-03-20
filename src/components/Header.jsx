const navItems = [
  ['Home', 'home'],
  ['About Us', 'about'],
  ['Pathways', 'pathways'],
  ['Research', 'research'],
  ['Community', 'community'],
  ['Support Us', 'support'],
]

export default function Header({ route }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#/home" className="brand">
          <div className="brand-title">Liuli</div>
          <div className="brand-subtitle">Society</div>
        </a>

        <nav className="nav">
          {navItems.map(([label, key]) => (
            <a key={key} href={`#/${key}`} className={route === key ? 'nav-link active' : 'nav-link'}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#/contact" className="button button-bronze">Contact</a>
      </div>
    </header>
  )
}
