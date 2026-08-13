function Badge({ children, variant = 'solid' }) {
  return <span className={`badge ${variant === 'outline' ? 'badge--outline' : ''}`}>{children}</span>
}

export default Badge
