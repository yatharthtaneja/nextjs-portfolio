// Stage 2, the design workshop. The old version of this case study skipped
// straight from discovery to "six months later, the team had a working
// prototype" — this is what happened in that gap.

import { A, AS, INK, INK2, INK3 } from './theme';

const ROOM = [
  { count: 4, role: 'Developers' },
  { count: 1, role: 'Dev lead' },
  { count: 2, role: 'Designers' },
  { count: 1, role: 'Documentation' },
  { count: 1, role: 'Quality engineer' },
];

const STEPS = [
  {
    label: 'I put the workflow up',
    body: 'One consolidated user workflow, built from the requirements, so everyone sketched against the same steps.',
  },
  {
    label: 'Everyone sketched',
    body: 'For each step of that workflow, every person in the room drew their own version. Nine people, no hierarchy on the page.',
  },
  {
    label: 'Dot voting',
    body: 'We voted on the sketches, then I compiled the winners into a preferred design and an alternate to take to review.',
  },
];

export default function CrazyEights() {
  return (
    <div className="c8-wrap">
      <div className="c8-room">
        <p className="c8-room-label">In the room</p>
        <div className="c8-room-chips">
          {ROOM.map((r) => (
            <div className="c8-chip" key={r.role}>
              <span className="c8-chip-count" style={{ background: AS, color: A }}>{r.count}</span>
              <span className="c8-chip-role" style={{ color: INK2 }}>{r.role}</span>
            </div>
          ))}
        </div>
        <p className="c8-room-note" style={{ color: INK3 }}>
          Nine people. The designers and about half the developers had never worked in this domain.
        </p>
      </div>

      <ol className="c8-steps">
        {STEPS.map((s, i) => (
          <li className="c8-step" key={s.label}>
            <span className="c8-step-num" style={{ color: A, borderColor: AS }}>{i + 1}</span>
            <div>
              <h4 className="c8-step-label" style={{ color: INK }}>{s.label}</h4>
              <p className="c8-step-body" style={{ color: INK3 }}>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
