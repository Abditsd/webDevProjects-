import { useEffect, useRef } from 'react';
import { processSteps } from '../data/process.js';
import drillCoreImg from '../assets/drill-core.jpg';

export default function ProcessLog() {
  const logRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const log = logRef.current;
    const fill = fillRef.current;
    if (!log || !fill) return undefined;
    const steps = log.querySelectorAll('.step');
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = log.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      fill.style.height = `${Math.max(0, Math.min(r.height - 16, mid - r.top))}px`;
      steps.forEach((s) => s.classList.toggle('on', s.getBoundingClientRect().top + 10 < mid));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="sec alt" id="process" aria-labelledby="process-title">
      <div className="wrap process__grid">
        <div>
          <p className="eyebrow rv">How we work</p>
          <h2 className="sec-title rv" data-d="1" id="process-title">
            From first enquiry to <em>boots on the ground</em>.
          </h2>
          <p className="process__intro rv" data-d="2">
            The same facilitation journey for investors and exploration companies: clear steps, one point of contact,
            and local support at every stage.
          </p>
          <div className="log-wrap" ref={logRef}>
            <span className="log__fill" ref={fillRef} aria-hidden="true" />
            <ol className="log">
              {processSteps.map((s, i) => (
                <li className="step rv" key={s.title}>
                  <span className="step__depth">{s.depth}</span>
                  <span className="step__dot" aria-hidden="true" />
                  <div>
                    <h3>
                      <small>Stage {String(i + 1).padStart(2, '0')}</small>
                      {s.title}
                    </h3>
                    <p>{s.text}</p>
                    <p className="step__out">
                      <b>Output</b>
                      {s.output}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <figure className="process__media rv" data-d="2">
          <div className="process__core">
            <img
              src={drillCoreImg}
              alt="Diamond drill core samples laid out in rows in a wooden core tray, with depth markers between runs."
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>Due diligence</span>
            <span>Core samples reviewed on site</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
