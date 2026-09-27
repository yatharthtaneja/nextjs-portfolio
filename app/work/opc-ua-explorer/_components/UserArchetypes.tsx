// Who the toolbox is actually for. The case study used to name four interview
// participants by industry, which told you who I talked to but not who the
// product serves. These six are the jobs engineers bring to the toolbox.

import { A, INK2, INK3 } from './theme';

const ARCHETYPES = [
  {
    job: 'Predictive maintenance',
    body: 'Builds tools that let other engineers watch the health of factory equipment before it fails.',
  },
  {
    job: 'Machine learning',
    body: 'Trains algorithms that predict factory output so an operator can plan against it.',
  },
  {
    job: 'Factory automation',
    body: 'Automates the steps on the floor that people are still doing by hand.',
  },
  {
    job: 'Digital twins',
    body: 'Simulates the factory to test which components to buy and how they behave together, without risking the real hardware. Virtual commissioning.',
  },
  {
    job: 'HMI / SCADA',
    body: 'Builds the panels a factory operator uses to control one specific part of the plant.',
  },
  {
    job: 'Straight exploration',
    body: 'Just needs to talk to the factory and see what is in it, without writing code to get there.',
  },
];

export default function UserArchetypes() {
  return (
    <div className="archetype-grid">
      {ARCHETYPES.map((a, i) => (
        <div className="archetype-tile" key={a.job}>
          <span className="archetype-num" style={{ color: A }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <h4 className="archetype-job" style={{ color: INK2 }}>{a.job}</h4>
          <p className="archetype-body" style={{ color: INK3 }}>{a.body}</p>
        </div>
      ))}
    </div>
  );
}
