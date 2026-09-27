// What the project changed — for the engineer using it, and for the business.
// The case study had no business impact section at all before this.

import type { ReactNode } from 'react';
import { A, AS, AB, INK, INK2, INK3, LINE } from './theme';

// One highlighted phrase per point: the claim itself, not the qualifier
// around it. Highlighting whole bullets would read as no highlighting at all.

const USER: ReactNode[] = [
  <><span className="hl">Fewer touchpoints</span> to get from &ldquo;I need this sensor&rdquo; to having the data.</>,
  <>A steep OPC UA learning curve flattened. <span className="hl">You no longer have to be an expert to start.</span></>,
  <><span className="hl">No more waiting on the one person</span> on the team who knows the protocol.</>,
  <>Attention back on <span className="hl">the actual job, the business logic,</span> instead of on OPC UA itself.</>,
];

const BUSINESS: ReactNode[] = [
  <>Customers <span className="hl">enter the MathWorks ecosystem early,</span> instead of starting in a third-party client and moving on to vendor-specific platforms or open-source alternatives.</>,
  // Absorbed the standalone "there is a quieter one too" paragraph that used
  // to sit below this box. It made the same point in different words: the
  // skip conversations happened before the code got written.
  <><span className="hl">The team stopped building the wrong thing.</span> Every &ldquo;what do we skip&rdquo; conversation happened before the code got written, so we avoided a round of rework we would otherwise have paid for. Harder to put a number on, and the part I would argue mattered most.</>,
];

export default function ImpactMetrics() {
  return (
    <div className="impact-wrap">
      <div className="impact-cols">
        <div className="impact-col" style={{ borderColor: LINE }}>
          <p className="impact-col-label" style={{ color: A }}>For the engineer</p>
          <ul className="impact-list">
            {USER.map((t, i) => (
              <li key={i} style={{ color: INK2 }}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="impact-col" style={{ borderColor: LINE }}>
          <p className="impact-col-label" style={{ color: A }}>For MathWorks</p>
          <ul className="impact-list">
            {BUSINESS.map((t, i) => (
              <li key={i} style={{ color: INK2 }}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="impact-measure" style={{ background: AB, borderColor: AS }}>
        <p className="impact-measure-label" style={{ color: A }}>How we know it is working</p>
        <p className="impact-measure-body" style={{ color: INK }}>
          We track the customer escalations that come in asking what code to write to connect to
          their hardware. <span className="hl">Since the app shipped, that number has come down.</span>
        </p>
        <p className="impact-measure-note" style={{ color: INK3 }}>
          {/* TODO(yt): drop the exact figures in here when you have them. */}
          Tracked from R2026a onward. Happy to talk through the actual numbers.
        </p>
      </div>
    </div>
  );
}
