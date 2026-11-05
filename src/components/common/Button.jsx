import { ArrowUpRight } from 'lucide-react'

function Button({ children, href, className = '', icon = true, ...props }) {
  return (
    <a className={`button ${className}`.trim()} href={href} {...props}>
      {children}
      {icon && <ArrowUpRight size={17} aria-hidden="true" />}
    </a>
  )
}

export default Button
