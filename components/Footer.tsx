import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        {/* Navigation Links */}
        <nav style={styles.nav}>
          <Link href="/" style={styles.link}>Home</Link>
          <span style={styles.separator}>·</span>
          <Link href="/about" style={styles.link}>About</Link>
          <span style={styles.separator}>·</span>
          <Link href="/contact" style={styles.link}>Contact</Link>
        </nav>

        {/* Legal Links */}
        <div style={styles.legal}>
          <Link href="/privacy" style={styles.link}>Privacy Policy</Link>
          <span style={styles.separator}>·</span>
          <Link href="/terms" style={styles.link}>Terms of Service</Link>
        </div>

        {/* Copyright */}
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} ChineseWellness. All rights reserved.
        </p>

        {/* Tagline + Disclaimer */}
        <p style={styles.subtext}>
          Ancient wisdom for modern, balanced living.
        </p>
        <p style={styles.disclaimer}>
          This site is for educational purposes only and is not a substitute for professional medical advice.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid #e5e5e5',
    padding: '2.5rem 0',
    marginTop: '4rem',
    background: '#fafafa',
  },
  inner: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem',
    textAlign: 'center' as const,
  },
  nav: {
    marginBottom: '0.75rem',
  },
  legal: {
    marginBottom: '1rem',
  },
  link: {
    fontSize: '0.82rem',
    color: '#777',
    textDecoration: 'none',
    transition: 'color 0.15s',
  } as React.CSSProperties,
  separator: {
    fontSize: '0.7rem',
    color: '#ccc',
    margin: '0 0.4rem',
  },
  text: {
    fontSize: '0.82rem',
    color: '#999',
    margin: '0 0 0.25rem 0',
  },
  subtext: {
    fontSize: '0.78rem',
    color: '#bbb',
    margin: '0 0 0.5rem 0',
  },
  disclaimer: {
    fontSize: '0.72rem',
    color: '#aaa',
    fontStyle: 'italic',
    margin: '0',
    lineHeight: 1.5,
  },
}
