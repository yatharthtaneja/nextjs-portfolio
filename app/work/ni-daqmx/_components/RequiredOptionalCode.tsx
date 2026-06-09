import { CircleHelp, CircleDot, Circle } from 'lucide-react';

export default function RequiredOptionalCode() {
  return (
    <div className="ro-stack">
      <figure className="ro-card ro-card-bad">
        <figcaption className="ro-chrome">
          <span className="ro-label">Class-based · all 4 look optional</span>
          <span className="ro-tag ro-tag-bad">syntax hides required-ness</span>
        </figcaption>
        <div className="ro-body">
          <div className="ro-line">
            <CircleHelp size={18} className="ro-glyph ro-glyph-q" />
            <span className="ro-code"><span className="ro-arg">RisingEdgeChan</span>=<span className="ro-str">&quot;Dev1/port0/line0:7&quot;</span>,</span>
            <span />
          </div>
          <div className="ro-line">
            <CircleHelp size={18} className="ro-glyph ro-glyph-q" />
            <span className="ro-code"><span className="ro-arg">FallingEdgeChan</span>=<span className="ro-str">&quot;Dev1/port0/line0:7&quot;</span>,</span>
            <span />
          </div>
          <div className="ro-line">
            <CircleHelp size={18} className="ro-glyph ro-glyph-q" />
            <span className="ro-code"><span className="ro-arg">SampleMode</span>=<span className="ro-enum">DAQmx_Val_ContSamps</span>,</span>
            <span />
          </div>
          <div className="ro-line">
            <CircleHelp size={18} className="ro-glyph ro-glyph-q" />
            <span className="ro-code"><span className="ro-arg">sampsPerChan</span>=<span className="ro-num">4</span></span>
            <span />
          </div>
        </div>
        <p className="ro-caption ro-caption-bad">
          Every argument is wrapped in <code className="ro-mono">Name=value</code>. The MATLAB syntax that signals
          “optional” is doing all of the talking — even for the three arguments that the C signature requires.
        </p>
      </figure>

      <div className="ro-divider" aria-hidden="true">
        <span className="ro-divider-text">function-based makes the gradient explicit ▾</span>
      </div>

      <figure className="ro-card ro-card-good">
        <figcaption className="ro-chrome">
          <span className="ro-label">Function-based · required vs optional, separated</span>
          <span className="ro-tag ro-tag-good">required first, optional after</span>
        </figcaption>
        <div className="ro-body">
          <div className="ro-line">
            <CircleDot size={18} className="ro-glyph ro-glyph-req" />
            <span className="ro-code"><span className="ro-str">&quot;Dev1/port0/line0:7&quot;</span>,</span>
            <span className="ro-pill ro-pill-req">required</span>
          </div>
          <div className="ro-line">
            <CircleDot size={18} className="ro-glyph ro-glyph-req" />
            <span className="ro-code"><span className="ro-str">&quot;Dev1/port0/line0:7&quot;</span>,</span>
            <span className="ro-pill ro-pill-req">required</span>
          </div>
          <div className="ro-line">
            <CircleDot size={18} className="ro-glyph ro-glyph-req" />
            <span className="ro-code"><span className="ro-enum">DAQmx_Val_ContSamps</span>,</span>
            <span className="ro-pill ro-pill-req">required</span>
          </div>
          <div className="ro-line">
            <Circle size={18} className="ro-glyph ro-glyph-opt" />
            <span className="ro-code"><span className="ro-arg">sampsPerChan</span>=<span className="ro-num">4</span></span>
            <span className="ro-pill ro-pill-opt">optional</span>
          </div>
        </div>
        <p className="ro-caption ro-caption-good">
          Required arguments stay positional. Optional arguments use <code className="ro-mono">Name=value</code>.
          The shape of the call signals which is which — without docs, without guessing.
        </p>
      </figure>

      <style jsx global>{`
        :global(.ro-glyph) { display: inline-block; }
        :global(.ro-glyph-q)   { color: #b91c1c; opacity: 0.55; }
        :global(.ro-glyph-req) { color: #2151da; }
        :global(.ro-glyph-opt) { color: #94a3b8; }
      `}</style>
    </div>
  );
}
