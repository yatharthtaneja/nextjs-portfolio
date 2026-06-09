'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal } from 'lucide-react';

export default function AutocompletePanel() {
  const fns = [
    'DAQmxCfgSampClkTiming',
    'DAQmxCfgChangeDetectionTiming',
    'DAQmxCfgInputBuffer',
    'DAQmxCfgImplicitTiming',
    'DAQmxCfgDigEdgeStartTrig',
    'DAQmxCfgAnlgEdgeStartTrig',
  ];

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} className="ac-grid">
      <figure className="ac-card">
        <figcaption className="ac-chrome">
          <span className="ac-dots">
            <span className="ac-dot" style={{ background: '#FF5F57' }} />
            <span className="ac-dot" style={{ background: '#FEBC2E' }} />
            <span className="ac-dot" style={{ background: '#28C840' }} />
          </span>
          <span className="ac-title">Function-based · MATLAB</span>
        </figcaption>
        <div className="ac-body">
          <div className="ac-line">
            <span className="ac-fn">daqeval</span>
            <span className="ac-punc">(</span>
            <span className="ac-var">dq</span>
            <span className="ac-punc">, </span>
            <span className="ac-str">&quot;DAQmxCfg</span>
            <span className="ac-caret" aria-hidden="true" />
          </div>
          <div className="ac-dropdown" role="listbox" aria-label="autocomplete suggestions">
            {fns.map((fn, i) => (
              <motion.div
                key={fn}
                initial={{ opacity: 0, x: -6 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`ac-item${i === 1 ? ' ac-item-active' : ''}`}
                role="option"
                aria-selected={i === 1}
              >
                <Terminal size={12} className="ac-item-glyph" aria-hidden="true" />
                <span className="ac-item-text">{fn}</span>
              </motion.div>
            ))}
            <div className="ac-item ac-item-more">
              <Terminal size={12} className="ac-item-glyph" aria-hidden="true" />
              <span className="ac-item-text">+ 38 more…</span>
            </div>
          </div>
          <p className="ac-note ac-note-good">Tab on the string literal surfaces the full C namespace.</p>
        </div>
      </figure>

      <figure className="ac-card">
        <figcaption className="ac-chrome">
          <span className="ac-dots">
            <span className="ac-dot" style={{ background: '#FF5F57' }} />
            <span className="ac-dot" style={{ background: '#FEBC2E' }} />
            <span className="ac-dot" style={{ background: '#28C840' }} />
          </span>
          <span className="ac-title">Class-based · MATLAB</span>
        </figcaption>
        <div className="ac-body">
          <div className="ac-line">
            <span className="ac-fn">setconfig</span>
            <span className="ac-punc">(</span>
            <span className="ac-var">dq</span>
            <span className="ac-punc">, </span>
            <span className="ac-caret" aria-hidden="true" />
          </div>
          <div className="ac-dropdown ac-dropdown-empty" role="listbox" aria-label="autocomplete suggestions">
            <div className="ac-empty-line">
              <span className="ac-empty-icon" aria-hidden="true">∅</span>
              <span className="ac-empty-text">no suggestions</span>
            </div>
            <div className="ac-empty-help">
              build the options object first:<br />
              <span className="ac-empty-code">configObj = niConfigOptions(&quot;…&quot;);</span>
            </div>
          </div>
          <p className="ac-note ac-note-bad">Verb is visible; its argument isn&rsquo;t. Several participants stalled here.</p>
        </div>
      </figure>

      <style jsx global>{`
        :global(.ac-item-glyph) { color: #DCDCAA; flex-shrink: 0; }
        :global(.ac-item-active .ac-item-glyph) { color: #ffffff; }
        :global(.ac-item-more .ac-item-glyph) { color: #6A9955; }
      `}</style>
    </div>
  );
}
