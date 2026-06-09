import { AlertTriangle, Check } from 'lucide-react';

export default function ErrorTerminal() {
  return (
    <div className="err-stack">
      <figure className="err-card err-before">
        <figcaption className="err-chrome">
          <span className="err-dots">
            <span className="err-dot" style={{ background: '#FF5F57' }} />
            <span className="err-dot" style={{ background: '#FEBC2E' }} />
            <span className="err-dot" style={{ background: '#28C840' }} />
          </span>
          <span className="err-title">Console · before</span>
          <span className="err-badge err-badge-bad">
            <AlertTriangle size={11} style={{ marginRight: 4 }} />5+ min lookup
          </span>
        </figcaption>
        <pre className="err-body err-body-dark">
          <span className="err-prompt">&gt;&gt;</span>{' '}<span className="err-code">daqeval(dq, &quot;DAQmxCfgChangeDetectionTiming&quot;, ..., &quot;rising_edge&quot;);</span>
          {'\n\n'}
          <span className="err-red">Error using DAQmx</span>{'\n'}
          <span className="err-red">DAQmxError: -200077</span>{'\n'}
          <span className="err-red-soft">Requested value is not a supported value for this property.</span>{'\n'}
          <span className="err-red-soft">Property: DAQmx_ChangeDetect_DI_RisingEdgePhysicalChans</span>{'\n'}
          <span className="err-red-soft">Status Code: -200077</span>
        </pre>
      </figure>

      <div className="err-arrow" aria-hidden="true">
        <span className="err-arrow-label">wrapped ▾</span>
      </div>

      <figure className="err-card err-after">
        <figcaption className="err-chrome err-chrome-light">
          <span className="err-dots">
            <span className="err-dot" style={{ background: '#FF5F57' }} />
            <span className="err-dot" style={{ background: '#FEBC2E' }} />
            <span className="err-dot" style={{ background: '#28C840' }} />
          </span>
          <span className="err-title err-title-light">Console · R2026a</span>
          <span className="err-badge err-badge-good">
            <Check size={11} strokeWidth={3} style={{ marginRight: 4 }} />instant fix
          </span>
        </figcaption>
        <pre className="err-body err-body-light">
          <span className="err-prompt-light">&gt;&gt;</span>{' '}<span className="err-code-light">daqeval(dq, &quot;DAQmxCfgChangeDetectionTiming&quot;, ..., &quot;rising_edge&quot;);</span>
          {'\n\n'}
          <span className="err-err-label">Error</span> in <span className="err-fn">DAQmxCfgChangeDetectionTiming</span> ›{' '}<span className="err-arg">activeEdge</span>:{'\n'}
          {'  '}<span className="err-msg">&quot;rising_edge&quot;</span> is not a valid value.{'\n'}
          {'  '}<span className="err-hint-label">Valid values:</span> <span className="err-valid">&quot;Rising&quot;</span>, <span className="err-valid">&quot;Falling&quot;</span>.{'\n'}
          {'  '}<span className="err-hint-label">Did you mean</span> <span className="err-valid">&quot;Rising&quot;</span>?
        </pre>
      </figure>
    </div>
  );
}
