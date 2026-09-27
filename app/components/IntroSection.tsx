// Who-I-am, placed between the hero and the case studies so a reader has
// context on Yatharth before they meet the work. Carries the #about anchor
// (the /about route and the case-study menu both point at it); the contact
// half of the old About section stays at the foot of the page as #connect.

import Link from "next/link";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="relative w-full"
      style={{ background: "#ffffff" }}
    >
      {/* Divider off the hero — moved here from the top of #work */}
      <div style={{ height: 3, background: "#4030C3" }} />

      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-6 md:pb-8">
        <p style={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase" as const,
          color: "#AB4967",
          marginBottom: 20,
        }}>
          About Me
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16">
          <h2
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#27174E",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Hello.
          </h2>
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
              lineHeight: 1.5,
              color: "#171717",
              margin: 0,
              fontWeight: 500,
            }}
          >
            I&rsquo;m Yatharth, a CS engineer who became a UX researcher at{" "}
            <Link
              href="https://mathworks.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#493972",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              MathWorks
            </Link>. I work on the industrial toolboxes, the ones engineers use
            to pull data out of factories, submarines and amusement-park rides.
            The people I interview have usually been doing the job for
            twenty-five years, and some work in defence and can&rsquo;t tell me
            anything at all, so the work starts with earning the right to ask a
            second question.
          </p>
        </div>
      </div>

      {/* The hard numbers, fixed. They used to live only inside the 4.5s
          rotating tagline in the hero, where they scrolled away unread. */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16">
          <div aria-hidden="true" />
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            color: "#493972",
            margin: 0,
            lineHeight: 1.9,
          }}>
          {/* nowrap per fact so the line breaks between facts, never inside
              one ("MATLAB / R2026a"). */}
          <span style={{ whiteSpace: "nowrap" as const }}>4+ years of mixed-methods UX</span>
          <span style={{ opacity: 0.4, margin: "0 10px" }}>·</span>
          <span style={{ whiteSpace: "nowrap" as const }}>2 products shipped in MATLAB R2026a</span>
          <span style={{ opacity: 0.4, margin: "0 10px" }}>·</span>
          <span style={{ whiteSpace: "nowrap" as const }}>toolboxes generating $2M+ quarterly</span>
          </p>
        </div>
      </div>

      {/* Hairline before the work section */}
      <div className="max-w-5xl mx-auto" style={{ borderTop: "1px solid #D0CDE0" }} />
    </section>
  );
}
