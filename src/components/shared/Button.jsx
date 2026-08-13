function Button({ children, variant = 'primary', size, as = 'button', href, ...rest }) {
  const className = ['btn', variant === 'secondary' ? 'btn--secondary' : '', size === 'small' ? 'btn--small' : '']
    .filter(Boolean)
    .join(' ')

  if (as === 'a') {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button
