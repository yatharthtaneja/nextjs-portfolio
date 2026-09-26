// What the project changed — for the engineer using it, and for the business.
// The case study had no business impact section at all before this.

import { A, AS, AB, INK, INK2, INK3, LINE } from './theme';

const USER = [
  'Fewer touchpoints to get from "I need this sensor" to having the data.',
  'A steep OPC UA learning curve flattened — you no longer have to be an expert to start.',
  'No more waiting on the one person on the team who knows the protocol.',
  'Attention back on the actual job — the business logic — instead of on OPC UA itself.',
];

const BUSINESS = [
  'Customers enter the MathWorks ecosystem early, instead of starting in a third-party client and moving on to vendor-specific platforms or open-source alternatives.',
  'The team stopped building the wrong thing. Every "what do we skip" conversation happened before the code, not after.',
];

export default function ImpactMetrics() {
  return (
    <div className="impact-wrap">
      <div className="impact-cols">
        <div className="impact-col" style={{ borderColor: LINE }}>
          <p className="impact-col-label" style={{ color: A }}>For the engineer</p>
          <ul className="impact-list">
            {USER.map((t) => (
              <li key={t} style={{ color: INK2 }}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="impact-col" style={{ borderColor: LINE }}>
          <p className="impact-col-label" style={{ color: A }}>For MathWorks</p>
          <ul className="impact-list">
            {BUSINESS.map((t) => (
              <li key={t} style={{ color: INK2 }}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="impact-measure" style={{ background: AB, borderColor: AS }}>
        <p className="impact-measure-label" style={{ color: A }}>How we know it is working</p>
        <p className="impact-measure-body" style={{ color: INK }}>
          We track the number of customer escalations that come in asking what code to write to
          connect to their hardware. That number coming down is the measure.
        </p>
        <p className="impact-measure-note" style={{ color: INK3 }}>
          {/* TODO(yt): baseline or current figure, if you can share one. */}
          Tracked from R2026a onward.
        </p>
      </div>
    </div>
  );
}
