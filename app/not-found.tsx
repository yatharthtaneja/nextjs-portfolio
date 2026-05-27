import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        background: '#27174E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      <div style={{ maxWidth: 520, width: '100%', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: "'Special Elite', system-ui, sans-serif",
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            color: '#AB4967',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            margin: '0 0 18px',
          }}
        >
          404 · misplaced page
        </p>

        <h1
          style={{
            fontFamily: "'Bowlby One SC', system-ui, sans-serif",
            fontSize: 'clamp(2.6rem, 7vw, 4.6rem)',
            color: '#F0EEF8',
            lineHeight: 1,
            letterSpacing: '-0.01em',
            margin: '0 0 28px',
            textWrap: 'balance',
          }}
        >
          This page didn&rsquo;t make the cut.
        </h1>

        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'rgba(240, 238, 248, 0.78)',
            margin: '0 0 36px',
            textWrap: 'pretty',
          }}
        >
          A case study, a stamp, a stray prototype — whatever lived here, it&rsquo;s not here now.
          The portfolio is one scroll away.
        </p>

        <Link
          href="/"
          style={{
            display: 'inline-block',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 600,
            color: '#F0EEF8',
            background: 'rgba(240, 238, 248, 0.08)',
            border: '1px solid rgba(240, 238, 248, 0.22)',
            borderRadius: 999,
            padding: '12px 22px',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'background 180ms ease-out, transform 140ms ease-out',
          }}
          className="not-found-cta"
        >
          ← Back to the portfolio
        </Link>

        <style>{`
          @media (hover: hover) and (pointer: fine) {
            .not-found-cta:hover {
              background: rgba(240, 238, 248, 0.16) !important;
            }
          }
          .not-found-cta:active {
            transform: scale(0.97);
          }
        `}</style>
      </div>
    </main>
  );
}
