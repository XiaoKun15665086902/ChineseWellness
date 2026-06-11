export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <a href="/" style={styles.logo}>
          ChineseWellness
        </a>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/about" style={styles.link}>About</a>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    borderBottom: '1px solid #e5e5e5',
    padding: '1.25rem 0',
    background: '#fff',
  },
  inner: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a1a',
    textDecoration: 'none',
    fontFamily: "'Playfair Display', Georgia, serif",
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    fontSize: '0.95rem',
    color: '#555',
    textDecoration: 'none',
  },
}
