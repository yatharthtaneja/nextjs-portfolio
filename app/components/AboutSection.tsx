import Link from "next/link";

const contactLinks = [
  { label: "Email", href: "mailto:ytaneja2000@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yatharthtaneja" },
  { label: "Instagram", href: "https://instagram.com/yath_art_h" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full"
      style={{ background: "#F0EEF8" }}
    >
      {/* Top divider */}
      <div
        className="max-w-5xl mx-auto"
        style={{ borderTop: "1px solid #D0CDE0" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* ── Hello ──────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16">
          <h2
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",  /* ← adjust Hello size here */
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

        {/* ── How I Can Help ─────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16 mt-16 md:mt-24">
          <h2
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",  /* ← adjust "How I Can Help" size here */
              fontWeight: 800,
              color: "#171717",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            How I Can Help
          </h2>
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "clamp(0.85rem, 1.2vw, 1.2rem)",
              lineHeight: 1.75,
              color: "#171717",
              margin: 0,
              fontWeight: 100,
            }}
          >
            I act as a <strong>strategic product partner</strong>, helping
            teams identify market opportunities and prioritize features
            through a PM lens. By <strong>merging technical fluency</strong>{" "}
            with evidence-based narratives, I streamline the
            research-to-roadmap process to ensure we aren&rsquo;t just
            building things right, but{" "}
            <strong>building the right things</strong> for the business.
          </p>
        </div>

        {/* ── Let's Connect ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16 mt-16 md:mt-24">
          <h2
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",  /* ← adjust "Let's Connect" size here */
              fontWeight: 800,
              color: "#171717",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Let&rsquo;s Connect
          </h2>
          <div className="flex flex-col">
            {contactLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4"
                style={{
                  textDecoration: "none",
                  borderTop: i === 0 ? "1px solid #D0CDE0" : "none",
                  borderBottom: "1px solid #D0CDE0",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                    color: "#171717",
                    fontWeight: 400,
                  }}
                >
                  {link.label}
                </span>
                {/* Arrow icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path
                    d="M5 15L15 5M15 5H7M15 5V13"
                    stroke="#171717"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 pb-8">
        <p
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "0.8rem",
            color: "#171717",
            opacity: 0.4,
            textAlign: "center",
            margin: 0,
          }}
        >
          &copy; 2026 Yatharth Taneja. All rights reserved.
        </p>
      </div>
    </section>
  );
}
