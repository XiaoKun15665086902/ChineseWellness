import Link from 'next/link'

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <Link href="/" style={styles.logo}>
          ChineseWellness
        </Link>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>Home</Link>
          <Link href="/posts/goji-berry-superfood" style={styles.navLink}>Articles</Link>
          <Link href="/about" style={styles.navLink}>About</Link>
          <Link href="/contact" style={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    borderBottom: '1px solid #e5e5e5',
    background: '#fff',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  } as React.CSSProperties,
  inner: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0.9rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#1a1a1a',
    textDecoration: 'none',
    fontFamily: "'Playfair Display', Georgia, serif",
  },
  nav: {
    display: 'flex',
    gap: '1.4rem',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '0.88rem',
    fontWeight: 500,
    color: '#555',
    textDecoration: 'none',
    transition: 'color 0.15s',
  } as React.CSSProperties,
}
