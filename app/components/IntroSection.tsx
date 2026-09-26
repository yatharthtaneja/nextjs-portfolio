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

      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-10 md:pb-16">
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
            I&rsquo;m Yatharth. I&rsquo;m a CS-engineer-turned-UXR at{" "}
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
            </Link>{" "}
            who believes the most elegant code fails without a human story.
            With 4+ years of experience, I bridge technical complexity and
            user empathy to build products that actually resonate.
          </p>
        </div>
      </div>

      {/* Hairline before the work section */}
      <div className="max-w-5xl mx-auto" style={{ borderTop: "1px solid #D0CDE0" }} />
    </section>
  );
}
