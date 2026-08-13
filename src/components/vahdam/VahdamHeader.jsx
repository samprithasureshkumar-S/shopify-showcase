import { vahdamNav } from '../../data/vahdamData.js'

function VahdamHeader() {
  return (
    <header
      className="site-header"
      style={{ borderColor: 'var(--vahdam-border)', background: 'var(--vahdam-surface)' }}
    >
      <div className="site-header__bar">
        <span className="site-header__logo">VAHDAM</span>
        <nav className="site-header__nav" aria-label="Vahdam primary navigation">
          {vahdamNav.map((item) => (
            <a key={item} href="#vahdam" onClick={(event) => event.preventDefault()}>
              {item}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <span>Search</span>
          <span>Account</span>
          <span>Cart (0)</span>
        </div>
      </div>
    </header>
  )
}

export default VahdamHeader
