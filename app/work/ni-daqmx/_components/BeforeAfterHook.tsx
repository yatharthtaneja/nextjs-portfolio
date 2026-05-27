import { A, INK, INK3 } from './theme';
import { Check, Cross } from '@/app/components/icons';

// Side-by-side comparison hook: 50-line C → 3-line MATLAB.
// Class names below (.ba-stack, .ba-row, .ba-block, etc.) are defined in
// NiDaqmxStyles.
export default function BeforeAfterHook() {
  const kw = A;
  const id = INK;
  const str = '#b91c1c';
  const num = '#15803d';
  const punct = INK3;

  return (
    <div
      role="img"
      aria-label="A side-by-side comparison: a long block of dense C code on the left, three crisp MATLAB lines on the right, with naming alternatives shown below."
    >
      <div className="ba-stack">
        <div className="ba-row">
          {/* BEFORE — C */}
          <div className="ba-block ba-before">
            <div className="ba-label">Before · C · ~50 lines</div>
            <code>{`#include "NIDAQmx.h"
TaskHandle taskHandle = 0;
char errBuff[2048] = {'\\0'};
int32 read = 0;
float64 data[1000];
DAQmxErrChk(DAQmxCreateTask("", &taskHandle));
DAQmxErrChk(DAQmxCreateAIVoltageChan(
  taskHandle, "Dev1/ai0", "",
  DAQmx_Val_Cfg_Default, -10.0, 10.0,
  DAQmx_Val_Volts, NULL));
DAQmxErrChk(DAQmxCfgSampClkTiming(
  taskHandle, "", 1000.0,
  DAQmx_Val_Rising, DAQmx_Val_FiniteSamps, 1000));
DAQmxErrChk(DAQmxStartTask(taskHandle));
DAQmxErrChk(DAQmxReadAnalogF64(
  taskHandle, 1000, 10.0, ...`}</code>
          </div>

          {/* Arrow */}
          <div className="ba-arrow" aria-hidden="true">
            <span className="arr">→</span>
            <span>became</span>
          </div>

          {/* AFTER — MATLAB */}
          <div className="ba-block ba-after">
            <div className="ba-label">After · MATLAB · 3 lines</div>
            <code>
              <span style={{ color: id }}>task</span>
              <span style={{ color: punct }}> = </span>
              <span style={{ color: kw, fontWeight: 600 }}>calldaqlib</span>
              <span style={{ color: punct }}>(</span>
              <span style={{ color: str }}>&#39;DAQmxCreateTask&#39;</span>
              <span style={{ color: punct }}>, </span>
              <span style={{ color: str }}>&#39;myTask&#39;</span>
              <span style={{ color: punct }}>);</span>{'\n'}
              <span style={{ color: kw, fontWeight: 600 }}>calldaqlib</span>
              <span style={{ color: punct }}>(</span>
              <span style={{ color: str }}>&#39;DAQmxCreateAIVoltageChan&#39;</span>
              <span style={{ color: punct }}>, </span>
              <span style={{ color: id }}>task</span>
              <span style={{ color: punct }}>, </span>
              <span style={{ color: str }}>&#39;Dev1/ai0&#39;</span>
              <span style={{ color: punct }}>, ...);</span>{'\n'}
              <span style={{ color: id }}>data</span>
              <span style={{ color: punct }}> = </span>
              <span style={{ color: kw, fontWeight: 600 }}>calldaqlib</span>
              <span style={{ color: punct }}>(</span>
              <span style={{ color: str }}>&#39;DAQmxReadAnalogF64&#39;</span>
              <span style={{ color: punct }}>, </span>
              <span style={{ color: id }}>task</span>
              <span style={{ color: punct }}>, </span>
              <span style={{ color: num }}>1000</span>
              <span style={{ color: punct }}>, </span>
              <span style={{ color: num }}>10.0</span>
              <span style={{ color: punct }}>);</span>
            </code>
          </div>
        </div>

        <p className="naming-caption" style={{ margin: '2px 2px 0' }}>
          Illustrative — actual C workflows varied by hardware and team.
        </p>

        {/* Naming alternatives inset */}
        <div className="naming-card">
          <p
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: INK3,
              margin: '0 0 8px',
            }}
          >
            Considered for the read function
          </p>
          <div className="naming-row rej"><span className="ic"><Cross /></span>daqRead()</div>
          <div className="naming-row rej"><span className="ic"><Cross /></span>acquireData()</div>
          <div className="naming-row chosen"><span className="ic"><Check /></span>DAQmxReadAnalogF64()</div>
          <p className="naming-caption">
            Tested with 11 engineers across 5 industries. The chosen name was the closest match to the C library they already knew.
          </p>
        </div>
      </div>
    </div>
  );
}
