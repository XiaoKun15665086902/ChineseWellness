import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ChineseWellness. By using our site, you agree to these terms.',
}

export default function TermsOfService() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms of Service</h1>
      <p style={styles.lastUpdated}>Last updated: June 11, 2026</p>

      <section style={styles.section}>
        <h2 style={styles.heading}>1. Agreement to Terms</h2>
        <p style={styles.text}>
          These Terms of Service (&quot;Terms&quot;) govern your use of the ChineseWellness website located
          at <a href="https://www.xiaokun888.com" style={styles.link}>https://www.xiaokun888.com</a>{' '}
          (the &quot;Site&quot;). By accessing or using this Site, you agree to be bound by these Terms.
          If you do not agree, please do not use the Site.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>2. Use of the Site</h2>

        <h3 style={styles.subheading}>You MAY:</h3>
        <ul style={styles.list}>
          <li>Read and share articles for personal, non-commercial use</li>
          <li>Quote short excerpts with proper attribution and a link back to our Site</li>
          <li>Contact us with questions, feedback, or suggestions</li>
        </ul>

        <h3 style={styles.subheading}>You May NOT:</h3>
        <ul style={styles.listBad}>
          <li>Reproduce, republish, or redistribute full articles without written permission</li>
          <li>Use content from this Site for commercial purposes without authorization</li>
          <li>Scrape, crawl, or use automated tools to extract data from the Site</li>
          <li>Attempt to interfere with the proper functioning of the Site</li>
          <li>Use the Site for any unlawful purpose</li>
          <li>Impersonate any person or entity, or misrepresent your affiliation</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>3. Intellectual Property</h2>
        <p style={styles.text}>
          All content on this Site — including text, graphics, logos, images, photographs, and their selection
          and arrangement — is the property of ChineseWellness or its content creators and is protected by
          international copyright laws.
        </p>
        <p style={styles.text}>
          Unauthorized use of this material may violate copyright, trademark, and/or other applicable laws.
          You may not modify, distribute, or create derivative works from any of our content without express
          written permission.
        </p>
        <p style={styles.text}>
          Stock images used in our articles are sourced from Unsplash under their free-use license.
          Attribution is provided where required by the license terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>4. Medical Disclaimer</h2>
        <div style={styles.disclaimerBox}>
          <strong style={{ color: '#c43302' }}>⚠️ Important Health Disclaimer</strong>
          <p style={{ ...styles.text, margin: '0.75rem 0 0' }}>
            The information provided on ChineseWellness is intended for <strong>educational and informational
            purposes only</strong>. It is not intended to be a substitute for professional medical advice,
            diagnosis, or treatment.
          </p>
          <p style={{ ...styles.text, margin: '0.5rem 0' }}>
            Always seek the advice of your physician, qualified healthcare provider, or licensed traditional
            Chinese medicine practitioner with any questions you may have regarding a medical condition or
            health objective. Never disregard professional medical advice or delay seeking it because of
            something you have read on this Site.
          </p>
          <p style={{ ...styles.text, margin: '0.5rem 0 0' }}>
            Individual results may vary. The case studies and examples shared on this Site represent specific
            individual experiences and are not guarantees that you will achieve similar results.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>5. Affiliate Disclosure</h2>
        <div style={styles.disclosureBox}>
          <p style={styles.text}>
            Some links on this Site may be affiliate links. This means if you click on a link and make a purchase,
            we may receive a small commission at no additional cost to you. We only recommend products and
            services we genuinely believe will benefit our readers.
          </p>
          <p style={styles.text}>
            Affiliate commissions help us keep this Site running and allow us to continue providing
            free wellness content. Our editorial integrity comes first — affiliate relationships never
            influence which topics we cover or how we cover them.
          </p>
          <p style={styles.text}>
            As an Amazon Associate, we earn from qualifying purchases.
            As a Google AdSense publisher, we display third-party advertisements on this Site.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>6. Third-Party Advertising (Google AdSense)</h2>
        <p style={styles.text}>
          This Site displays advertisements served through <strong>Google AdSense</strong>. These ads are provided
          by Google and its advertising partners. We do not control the specific ads displayed, though we can
          set general category restrictions.
        </p>
        <p style={styles.text}>
          Clicking on an ad will redirect you to the advertiser&rsquo;s website. We are not responsible for the
          content, privacy practices, or products/services offered by advertisers. Please review each
          advertiser&rsquo;s own policies before making a purchase or submitting information.
        </p>
        <p style={styles.text}>
          If you encounter an inappropriate ad, please let us know so we can report it to Google.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>7. User-Submitted Content</h2>
        <p style={styles.text}>
          If you contact us via our contact form or send us a message, you grant us a non-exclusive,
          royalty-free, worldwide license to use, reproduce, and respond to your submission for the
          purpose of responding to your communication.
        </p>
        <p style={styles.text}>
          You remain responsible for the content you submit. You agree not to submit:
        </p>
        <ul style={styles.listBad}>
          <li>Spam, promotional content, or unsolicited commercial messages</li>
          <li>Defamatory, obscene, offensive, or harmful material</li>
          <li>Content that infringes on others&apos; intellectual property rights</li>
          <li>Misleading or fraudulent information</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>8. Limitation of Liability</h2>
        <p style={styles.text}>
          ChineseWellness and its operators shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of your access to or use of (or inability to use)
          this Site. This includes damages for errors, omissions, interruptions, defects, delays, computer
          viruses, or loss of profits.
        </p>
        <p style={styles.text}>
          To the maximum extent permitted by law, our total liability to you for all claims arising out
          of the use of this Site shall not exceed the amount you paid us, if any, for accessing the Site
          (which is currently $0).
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>9. Indemnification</h2>
        <p style={styles.text}>
          You agree to indemnify and hold harmless ChineseWellness, its operators, and affiliates from any
          claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising
          from your use of the Site or your violation of these Terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>10. Links to External Websites</h2>
        <p style={styles.text}>
          Our Site may contain links to external websites that are not operated by us. We provide these
          links as a convenience and for informational purposes only. We do not endorse or assume responsibility
          for the content, accuracy, or practices of linked sites. We encourage you to review the privacy
          policies and terms of service of any external websites you visit.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>11. Changes to Terms</h2>
        <p style={styles.text}>
          We reserve the right to update or modify these Terms at any time without prior notice. When we
          make changes, we will revise the &quot;Last updated&quot; date at the top of this page.
          Your continued use of the Site after changes constitutes acceptance of the new Terms.
        </p>
        <p style={styles.text}>
          We encourage you to review these Terms periodically to stay informed of any updates.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>12. Governing Law</h2>
        <p style={styles.text}>
          These Terms shall be governed by and construed in accordance with applicable laws, without regard
          to conflict of law principles. Any disputes arising from these Terms or your use of the Site shall
          be resolved through good-faith negotiation first, followed by appropriate legal channels if necessary.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>13. Contact</h2>
        <p style={styles.text}>
          If you have questions about these Terms, please contact us:
        </p>
        <ul style={styles.list}>
          <li><strong>Email:</strong>{' '}
            <a href="mailto:xiaokun888@protonmail.com" style={styles.link}>xiaokun888@protonmail.com</a>
          </li>
          <li><strong>Contact Page:</strong>{' '}
            <a href="/contact" style={styles.link}>https://www.xiaokun888.com/contact</a>
          </li>
        </ul>
      </section>
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
  lastUpdated: {
    fontSize: '0.85rem',
    color: '#999',
    marginBottom: '2rem',
  },
  section: {
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginTop: '1.75rem',
    marginBottom: '0.75rem',
    paddingBottom: '0.35rem',
    borderBottom: '2px solid #2d8a4e',
  },
  subheading: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#333',
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.8,
    marginBottom: '0.75rem',
  },
  list: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.8,
    paddingLeft: '1.5rem',
    marginBottom: '0.75rem',
  },
  listBad: {
    fontSize: '0.95rem',
    color: '#444',
    lineHeight: 1.8,
    paddingLeft: '1.5rem',
    marginBottom: '0.75rem',
  },
  disclaimerBox: {
    background: '#fef2f2',
    borderLeft: '4px solid #dc2626',
    padding: '1.25rem 1.5rem',
    borderRadius: '0 8px 8px 0',
    marginTop: '0.75rem',
  },
  disclosureBox: {
    background: '#fefce8',
    borderLeft: '4px solid #eab308',
    padding: '1.25rem 1.5rem',
    borderRadius: '0 8px 8px 0',
    marginTop: '0.75rem',
  },
  link: {
    color: '#2d8a4e',
    textDecoration: 'underline',
  },
}
