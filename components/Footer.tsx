export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} ChineseWellness. All rights reserved.
        </p>
        <p style={styles.subtext}>
          Ancient wisdom for modern, balanced living.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid #e5e5e5',
    padding: '2rem 0',
    marginTop: '4rem',
    background: '#fafafa',
  },
  inner: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '0 1.5rem',
    textAlign: 'center' as const,
  },
  text: {
    fontSize: '0.85rem',
    color: '#999',
    margin: '0 0 0.25rem 0',
  },
  subtext: {
    fontSize: '0.8rem',
    color: '#bbb',
    margin: '0',
  },
}
