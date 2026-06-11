import Link from 'next/link'

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <Link href="/" style={styles.backLink}>← Back to articles</Link>

      <h1 style={styles.title}>About ChineseWellness</h1>

      <div style={styles.content}>
        <p>
          Welcome to <strong>ChineseWellness</strong> — a space dedicated to sharing
          the timeless wisdom of Traditional Chinese Medicine (TCM) and wellness
          practices with the modern world.
        </p>

        <h2>Our Mission</h2>
        <p>
          For over 5,000 years, Chinese wellness traditions have helped milions
          of people live healthier, more balanced lives. Our mission is to make
          this ancient knowledge accessible, practical, and relevant for today's
          lifestyle.
        </p>

        <h2>What You'll Find Here</h2>
        <ul>
          <li>
            <strong>TCM Basics</strong> — Understand the foundational principles
            of Traditional Chinese Medicine
          </li>
          <li>
            <strong>Acupressure & Qi Gong</strong> — Practical, do-it-yourself
            techniques you can use every day
          </li>
          <li>
            <strong>Herbal Remedies</strong> — Learn about healing herbs and how
            to incorporate them into your daily routine
          </li>
          <li>
            <strong>Seasonal Wellness</strong> — Eat and live in harmony with
            nature's cycles
          </li>
          <li>
            <strong>Sleep & Stress</strong> — Time-tested methods for modern
            challenges
          </li>
        </ul>

        <h2>A Note on Practice</h2>
        <p>
          The information on this site is for educational purposes only. It is not
          intended to replace professional medical advice, diagnosis, or treatment.
          Always consult with a qualified healthcare provider before making changes
          to your health routine.
        </p>

        <p style={styles.closing}>
          Thank you for visiting. May these ancient wisdoms bring you health,
          balance, and vitality.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '2rem',
    fontSize: '0.9rem',
    color: '#2d8a4e',
    textDecoration: 'none',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1a1a1a',
    lineHeight: 1.3,
    fontFamily: "'Playfair Display', Georgia, serif",
    marginBottom: '1.5rem',
  },
  content: {
    lineHeight: 1.85,
    fontSize: '1.05rem',
    color: '#1a1a1a',
  },
  closing: {
    marginTop: '2rem',
    fontStyle: 'italic',
    color: '#555',
  },
}
