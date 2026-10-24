import mark from '../assets/images/logo-mark.png'
import markLight from '../assets/images/logo-mark-light.png'

// Horizontal brand lockup: heart mark + live-text wordmark.
// variant="light" is for dark backgrounds (footer).
function Logo({ variant = 'dark', tagline = true }) {
  return (
    <span className={`logo logo-${variant}`}>
      <img src={variant === 'light' ? markLight : mark} alt="" className="logo-mark" />
      <span className="logo-text">
        <span className="logo-name">Diido<span>Care</span></span>
        {tagline && <span className="logo-tagline">Care &amp; Support Services</span>}
      </span>
    </span>
  )
}

export default Logo
