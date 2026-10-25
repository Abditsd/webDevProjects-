import { highlights } from '../data/company.js';

export default function Highlights() {
  return (
    <div className="highlights reveal-load d5">
      <div className="wrap">
        <ul>
          {highlights.map((h) => (
            <li key={h.label}>
              <span className="hl__value">{h.value}</span>
              <span className="hl__label">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
