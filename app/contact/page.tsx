import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ChineseWellness. We would love to hear from you.',
}

export default function ContactPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>
        Have a question, suggestion, or feedback? We&rsquo;d love to hear from you.
        Fill out the form below or reach out directly via email.
      </p>

      <div style={styles.grid}>
        {/* Contact Form */}
        <div style={styles.formCard}>
          <h2 style={styles.cardTitle}>Send Us a Message</h2>
          <form action="mailto:xiaokun888@protonmail.com" method="POST" encType="text/plain">
            <div style={styles.fieldGroup}>
              <label htmlFor="name" style={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.fieldGroup}>
              <label htmlFor="subject" style={styles.label}>Subject</label>
              <select id="subject" name="subject" style={styles.select}>
                <option value="general">General Inquiry</option>
                <option value="feedback">Content Feedback</option>
                <option value="suggestion">Topic Suggestion</option>
                <option value="correction">Correction / Error Report</option>
                <option value="advertising">Advertising / Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={styles.fieldGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us what's on your mind..."
                required
                style={styles.textarea}
              />
            </div>

            <button type="submit" style={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

        {/* Sidebar Info */}
        <aside style={styles.sidebar}>
          {/* Email Card */}
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>✉️</div>
            <h3 style={styles.infoTitle}>Email Us</h3>
            <a href="mailto:xiaokun888@protonmail.com" style={styles.infoLink}>
              xiaokun888@protonmail.com
            </a>
            <p style={styles.infoText}>
              We typically respond within 24–48 hours.
            </p>
          </div>

          {/* Topics Card */}
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>What We Cover</h3>
            <ul style={styles.topicList}>
              <li>Traditional Chinese Medicine (TCM)</li>
              <li>Herbal Remedies &amp; Teas</li>
              <li>Acupressure &amp; Self-Care</li>
              <li>Qi Gong &amp; Movement Practices</li>
              <li>Dietary Wisdom &amp; Nutrition</li>
              <li>Daily Wellness Habits</li>
            </ul>
          </div>

          {/* Response Time Card */}
          <div style={styles.infoCardHighlight}>
            <p style={styles.highlightText}>
              💡 Have a specific wellness topic you&apos;d like us to write about?
              Let us know — your suggestion could become our next article!
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '2rem 1.5rem 4rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '0.5rem',
    fontFamily: "'Playfair Display', Georgia, serif",
  },
  subtitle: {
    fontSize: '1.05rem',
    color: '#555',
    lineHeight: 1.7,
    marginBottom: '2.5rem',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
  },
  formCard: {
    background: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: '10px',
    padding: '2rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '1.5rem',
  },
  fieldGroup: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#333',
    marginBottom: '0.4rem',
  },
  input: {
    width: '100%',
    padding: '0.7rem 0.9rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  select: {
    width: '100%',
    padding: '0.7rem 0.9rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '0.7rem 0.9rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    resize: 'vertical',
    lineHeight: 1.6,
  },
  submitBtn: {
    background: '#2d8a4e',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '0.5rem',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  infoCard: {
    background: '#f9fafb',
    border: '1px solid #e5e5e5',
    borderRadius: '10px',
    padding: '1.5rem',
  },
  infoIcon: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
  },
  infoTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '0.6rem',
  },
  infoLink: {
    color: '#2d8a4e',
    textDecoration: 'none',
    fontSize: '0.92rem',
    wordBreak: 'break-word',
  },
  infoText: {
    fontSize: '0.85rem',
    color: '#777',
    marginTop: '0.4rem',
  },
  topicList: {
    fontSize: '0.88rem',
    color: '#444',
    lineHeight: 1.9,
    paddingLeft: '1.2rem',
    margin: 0,
  },
  infoCardHighlight: {
    background: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '10px',
    padding: '1.5rem',
  },
  highlightText: {
    fontSize: '0.9rem',
    color: '#166534',
    lineHeight: 1.7,
    margin: 0,
  },
}
