// The disagreement at the end of Stage 2.
//
// Deliberately does NOT attribute a specific placement to a named forum — see
// TODO(yt) in page.tsx. What is stated here is what I can source: who sat in
// each forum, and that the three candidate placements were live and
// unreconciled when the design left review. Which forum the study went on to
// vindicate is stated in the callback at the end of Stage 3.

import { A, AS, AB, INK, INK2, INK3, LINE } from './theme';

const FORUMS = [
  {
    name: 'App Design Review',
    who: ['Senior UX VPs', 'Principal designers'],
    lens: 'Closest to the platform and its conventions.',
  },
  {
    name: 'Hardware Design Review',
    who: ['VP of MATLAB', 'Customer-facing engineers'],
    lens: 'Closest to what customers ask for out loud.',
  },
];

const PLACEMENTS = [
  { where: 'The toolstrip', note: 'Actions sit across the top, always visible.' },
  { where: 'The right panel', note: 'Actions sit beside the node you selected.' },
  { where: 'A pop-up', note: 'Some workflows open in their own dialog.' },
];

export default function ForumConflict() {
  return (
    <div className="fc-wrap">
      <div className="fc-forums">
        {FORUMS.map((f) => (
          <div className="fc-forum" key={f.name} style={{ borderColor: LINE }}>
            <h4 className="fc-forum-name" style={{ color: INK }}>{f.name}</h4>
            <ul className="fc-forum-who">
              {f.who.map((w) => (
                <li key={w} style={{ color: INK2 }}>{w}</li>
              ))}
            </ul>
            <p className="fc-forum-lens" style={{ color: INK3 }}>{f.lens}</p>
          </div>
        ))}
        <div className="fc-vs" style={{ background: A }} aria-hidden="true">vs</div>
      </div>

      <div className="fc-question" style={{ background: AB, borderColor: AS }}>
        <p className="fc-question-label" style={{ color: A }}>The question they split on</p>
        <p className="fc-question-body" style={{ color: INK }}>
          Where does an action live?
        </p>
        <div className="fc-placements">
          {PLACEMENTS.map((p) => (
            <div className="fc-placement" key={p.where}>
              <span className="fc-placement-where" style={{ color: INK2 }}>{p.where}</span>
              <span className="fc-placement-note" style={{ color: INK3 }}>{p.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fc-unresolved">
        <span className="fc-unresolved-dot" style={{ background: '#c2525a' }} aria-hidden="true" />
        <p style={{ color: INK2 }}>
          Eight-plus senior reviewers, two forums, no agreement — and every one of them had a
          defensible case. This is where Stage 2 ended.
        </p>
      </div>
    </div>
  );
}
