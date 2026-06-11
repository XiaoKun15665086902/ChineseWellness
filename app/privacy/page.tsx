import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ChineseWellness. Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.lastUpdated}>Last updated: June 11, 2026</p>

      <section style={styles.section}>
        <h2 style={styles.heading}>1. Introduction</h2>
        <p style={styles.text}>
          Welcome to ChineseWellness (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate the website
          at <a href="https://www.xiaokun888.com" style={styles.link}>https://www.xiaokun888.com</a>
          (the &quot;Site&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our Site. Please read this policy carefully.
        </p>
        <p style={styles.text}>
          By using the Site, you consent to the practices described in this Privacy Policy. If you do not agree,
          please do not use our Site.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>2. Information We Collect</h2>

        <h3 style={styles.subheading}>2.1 Information You Provide</h3>
        <p style={styles.text}>
          When you contact us through our contact form, we may collect:
        </p>
        <ul style={styles.list}>
          <li>Name or nickname</li>
          <li>Email address</li>
          <li>Any message content you choose to send</li>
        </ul>

        <h3 style={styles.subheading}>2.2 Information Collected Automatically</h3>
        <p style={styles.text}>When you browse our Site, we automatically collect certain information, including:</p>
        <ul style={styles.list}>
          <li><strong>IP address</strong> — used to estimate your general geographic region for analytics purposes</li>
          <li><strong>Browser type and version</strong> — helps us optimize how our Site displays on different devices</li>
          <li><strong>Operating system</strong> — helps us improve compatibility</li>
          <li><strong>Pages visited, time spent, and click patterns</strong> — helps us understand which articles readers find most valuable</li>
          <li><strong>Referring website</strong> — shows us how visitors find our Site</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>3. Cookies and Tracking Technologies</h2>
        <p style={styles.text}>
          We use cookies and similar tracking technologies to enhance your browsing experience. A cookie is a small
          data file stored on your device. You can instruct your browser to refuse all cookies or to indicate when
          a cookie is being sent. However, some parts of the Site may not function properly if you do so.
        </p>

        <h3 style={styles.subheading}>Types of Cookies We Use:</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Cookie Type</th>
              <th style={styles.th}>Purpose</th>
              <th style={styles.th}>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><strong>Essential Cookies</strong></td>
              <td style={styles.td}>Required for basic site functionality</td>
              <td style={styles.td}>Session / 1 year</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Analytics Cookies</strong></td>
              <td style={styles.td}>Help us understand visitor behavior (via Vercel Analytics)</td>
              <td style={styles.td}>Up to 1 month</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Advertising Cookies</strong></td>
              <td style={styles.td}>Used by Google AdSense to serve relevant ads (see Section 4 below)</td>
              <td style={styles.td}>Varies by Google</td>
            </tr>
            <tr>
              <td style={styles.td}><strong>Preference Cookies</strong></td>
              <td style={styles.td}>Remember your settings and preferences</td>
              <td style={styles.td}>1 year</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>4. Google AdSense &amp; Third-Party Advertising</h2>
        <p style={styles.text}>
          We use <strong>Google AdSense</strong> to display advertisements on our Site. Google AdSense uses cookies
          and web beacons to serve ads based on your prior visits to this Site or other websites.
        </p>
        <p style={styles.text}>
          Google&#39;s use of advertising cookies enables it and its partners to serve ads based on your visit to
          our Site and/or other sites on the Internet. You may opt out of personalized advertising by visiting
         {' '}
          <a href="https://adssettings.google.com" style={styles.link} rel="noopener noreferrer" target="_blank">
            Ads Settings
          </a>.
        </p>
        <p style={styles.text}>
          For more information about how Google collects and uses data, please visit{' '}
          <a href="https://policies.google.com/privacy" style={styles.link} rel="noopener noreferrer" target="_blank">
            Google&rsquo;s Privacy Policy
          </a>.
        </p>
        <p style={styles.text}>
          You can also download Google&#39;s Browser Extension to opt out of Google Analytics tracking:{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" style={styles.link} rel="noopener noreferrer" target="_blank">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>
        <div style={styles.noticeBox}>
          <strong style={{ color: '#c43302' }}>Important:</strong> Third-party advertisers (including Google)
          may use cookies, web beacons, and similar technologies to collect or receive information from our Site
          and elsewhere on the Internet in order to provide targeted advertising. This practice is governed by
          each third party&rsquo;s own privacy policy, not this one.
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>5. How We Use Your Information</h2>
        <p style={styles.text}>We use the information we collect to:</p>
        <ul style={styles.list}>
          <li>Operate, maintain, and improve our Site</li>
          <li>Analyze site traffic and reader engagement trends</li>
          <li>Respond to comments, questions, and inquiries submitted via our contact form</li>
          <li>Detect, prevent, and address technical issues or abuse</li>
          <li>Display relevant advertisements through Google AdSense</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>6. Data Sharing and Disclosure</h2>
        <p style={styles.text}>
          We do <strong>not sell, trade, or rent</strong> your personal identification information to third parties.
          We may share non-personally identifiable aggregated demographic information with our partners and advertisers
          for the purposes outlined above.
        </p>
        <p style={styles.text}>We may share your information with third parties in the following situations:</p>
        <ul style={styles.list}>
          <li><strong>Service Providers:</strong> We employ third-party companies (such as Vercel for hosting,
            Google for analytics and advertising) to facilitate our Site, and these companies may access your
            information only to perform tasks on our behalf.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order,
            or governmental authority.</li>
          <li><strong>Safety:</strong> We may release account information when we believe release is appropriate to
            comply with the law, enforce our policies, or protect ours or others&apos; rights, property, or safety.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>7. Third-Party Links</h2>
        <p style={styles.text}>
          Our Site may contain links to third-party websites that are not operated by us. If you click on a
          third-party link, you will be directed to that third party&rsquo;s site. We strongly advise you to review
          the privacy policy of every site you visit. We have no control over and assume no responsibility for the
          content, privacy policies, or practices of any third-party sites or services.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>8. Data Security</h2>
        <p style={styles.text}>
          We implement appropriate technical and organizational security measures to protect your information against
          unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
          Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>9. Children&rsquo;s Privacy</h2>
        <p style={styles.text}>
          Our Site does not address anyone under the age of 13. We do not knowingly collect personal information
          from children under 13. If we discover that a child under 13 has provided us with personal information,
          we will delete such information immediately. If you are a parent or guardian and believe your child has
          provided us with personal information, please contact us.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>10. Your Rights (GDPR &amp; CCPA)</h2>
        <h3 style={styles.subheading}>If You Are in the European Economic Area (EEA):</h3>
        <p style={styles.text}>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
        <ul style={styles.list}>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h3 style={styles.subheading}>If You Are a California Resident:</h3>
        <p style={styles.text}>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
        <ul style={styles.list}>
          <li>Know what personal information is collected about you</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of your personal information</li>
          <li>Non-discrimination for exercising your rights</li>
        </ul>
        <p style={styles.text}>
          To exercise any of these rights, please contact us using the details provided below.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>11. Changes to This Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
          updated revision date. We encourage you to review this page periodically for the latest information
          on our privacy practices. Continued use of the Site after changes constitutes acceptance of those changes.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>12. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions or concerns about this Privacy Policy, please contact us:
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
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '1rem 0',
    fontSize: '0.9rem',
  },
  th: {
    background: '#2d8a4e',
    color: '#fff',
    padding: '0.65rem 0.75rem',
    textAlign: 'left',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
  td: {
    padding: '0.6rem 0.75rem',
    borderBottom: '1px solid #e5e5e5',
    lineHeight: 1.6,
  },
  noticeBox: {
    background: '#fef8f0',
    borderLeft: '4px solid #f59e0b',
    padding: '1rem 1.25rem',
    margin: '1rem 0',
    borderRadius: '0 6px 6px 0',
    fontSize: '0.9rem',
    lineHeight: 1.7,
    color: '#555',
  },
  link: {
    color: '#2d8a4e',
    textDecoration: 'underline',
  },
}
