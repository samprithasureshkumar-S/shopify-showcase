import { iliaNav } from '../../data/iliaData.js'

function IliaHeader() {
  return (
    <header
      className="site-header"
      style={{ borderColor: 'var(--ilia-border)', background: 'var(--ilia-surface)' }}
    >
      <div className="site-header__bar">
        <span className="site-header__logo">ILIA</span>
        <nav className="site-header__nav" aria-label="Ilia primary navigation">
          {iliaNav.map((item) => (
            <a key={item} href="#ilia" onClick={(event) => event.preventDefault()}>
              {item}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <span>Search</span>
          <span>Account</span>
          <span>Bag (0)</span>
        </div>
      </div>
    </header>
  )
}

export default IliaHeader
