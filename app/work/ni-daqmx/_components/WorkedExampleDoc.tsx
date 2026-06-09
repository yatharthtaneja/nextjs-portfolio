import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';

export default function WorkedExampleDoc() {
  return (
    <div className="we-wrap">
      <div className="we-grid">
        <div className="we-path we-path-day1">
          <div className="we-engineer">
            <div className="we-engineer-label">
              <span className="we-day">DAY 1</span>
              <span className="we-engineer-sub">first time using calldaqlib</span>
            </div>
          </div>
          <ArrowRight size={16} className="we-arrow-good" aria-hidden="true" />
          <DocPage variant="example" />
        </div>

        <div className="we-path we-path-dayn">
          <div className="we-engineer">
            <div className="we-engineer-label">
              <span className="we-day">DAY 30</span>
              <span className="we-engineer-sub">looking up one specific call</span>
            </div>
          </div>
          <ArrowRight size={16} className="we-arrow-faded" aria-hidden="true" />
          <DocPage variant="reference" />
        </div>
      </div>

      <p className="we-caption">
        The R2026a docs lead with the runnable workflow. Reference tables sit underneath — discoverable when needed, not the front door.
      </p>

      <style jsx global>{`
        :global(.we-arrow-good)  { color: #2151da; flex-shrink: 0; margin-top: 4px; }
        :global(.we-arrow-faded) { color: #94a3b8; flex-shrink: 0; margin-top: 4px; opacity: 0.6; }
      `}</style>
    </div>
  );
}

function DocPage({ variant }: { variant: 'example' | 'reference' }) {
  const isExample = variant === 'example';
  return (
    <figure className={`we-page ${isExample ? 'we-page-good' : 'we-page-faded'}`}>
      {isExample && (
        <span className="we-page-badge">
          <CheckCircle2 size={12} style={{ marginRight: 4 }} />front door
        </span>
      )}
      <div className="we-page-title">
        {isExample ? (
          'Worked example — calldaqlib'
        ) : (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <FileText size={13} style={{ color: '#94a3b8' }} />
            Reference · functions
          </span>
        )}
      </div>
      {isExample ? (
        <>
          <div className="we-block we-block-code">
            <span className="we-block-line we-block-line-c1" />
            <span className="we-block-line we-block-line-c2" />
            <span className="we-block-line we-block-line-c3" />
            <span className="we-block-line we-block-line-c4" />
            <span className="we-block-line we-block-line-c5" />
            <span className="we-block-line we-block-line-c6" />
          </div>
          <div className="we-block we-block-prose">
            <span className="we-prose-line" style={{ width: '94%' }} />
            <span className="we-prose-line" style={{ width: '88%' }} />
            <span className="we-prose-line" style={{ width: '72%' }} />
          </div>
        </>
      ) : (
        <>
          <div className="we-block we-block-prose">
            <span className="we-prose-line" style={{ width: '92%' }} />
            <span className="we-prose-line" style={{ width: '86%' }} />
            <span className="we-prose-line" style={{ width: '80%' }} />
            <span className="we-prose-line" style={{ width: '70%' }} />
          </div>
          <div className="we-block we-block-table">
            <span className="we-table-row" />
            <span className="we-table-row" />
            <span className="we-table-row" />
          </div>
        </>
      )}
    </figure>
  );
}
