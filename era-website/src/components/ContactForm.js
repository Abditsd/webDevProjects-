import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { enquiryTypes } from '../data/company.js';
import { Arrow } from './Icons.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initial = { name: '', email: '', company: '', interest: '', message: '' };
const interestFromParam = { invest: enquiryTypes[0], explore: enquiryTypes[1], oil: enquiryTypes[2], general: enquiryTypes[3] };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.interest) e.interest = 'Please choose an area.';
  if (!v.message.trim()) e.message = 'Please add a short message.';
  return e;
}

export default function ContactForm() {
  const [params] = useSearchParams();
  const [values, setValues] = useState(() => ({ ...initial, interest: interestFromParam[params.get('interest')] || '' }));
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const thanksRef = useRef(null);
  const paramInterest = interestFromParam[params.get('interest')];
  useEffect(() => {
    if (paramInterest) setValues((v) => ({ ...v, interest: paramInterest }));
  }, [paramInterest]);
  const formRef = useRef(null);

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
  };
  const onBlur = (e) => {
    if (!e.target.value) return;
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, interest: true, message: true });
    const firstBad = Object.keys(initial).find((k) => errs[k]);
    if (firstBad) {
      formRef.current?.elements[firstBad]?.focus();
      return;
    }
    setStatus('sending');
    // Front-end only: simulate a request. Replace with a real endpoint.
    setTimeout(() => {
      setStatus('sent');
      requestAnimationFrame(() => thanksRef.current?.focus());
    }, 700);
  };

  const field = (name, label, required, control) => {
    const bad = touched[name] && errors[name];
    return (
      <div className={`field${bad ? ' invalid' : ''}${name === 'message' ? ' field--full' : ''}`}>
        <label htmlFor={`f-${name}`}>
          {label} {required && <i>*</i>}
        </label>
        {control({
          id: `f-${name}`,
          name,
          value: values[name],
          onChange,
          onBlur,
          required,
          'aria-invalid': bad ? 'true' : undefined,
          'aria-describedby': bad ? `f-${name}-err` : undefined,
        })}
        {bad && (
          <span className="err" id={`f-${name}-err`}>
            {errors[name]}
          </span>
        )}
      </div>
    );
  };

  const firstName = values.name.trim().split(' ')[0];

  return (
    <div className="rv" data-d="2">
    <div className={`form-card${status === 'sent' ? ' sent' : ''}`}>
      {status !== 'sent' ? (
        <form ref={formRef} onSubmit={onSubmit} noValidate>
          <h2 className="form-card__title">Send an enquiry</h2>
          <p className="sub">All enquiries are treated as confidential.</p>
          <div className="fields">
            {field('name', 'Full name', true, (p) => <input type="text" autoComplete="name" {...p} />)}
            {field('email', 'Email', true, (p) => <input type="email" autoComplete="email" {...p} />)}
            {field('company', 'Company / organisation', false, (p) => <input type="text" autoComplete="organization" {...p} />)}
            {field('interest', 'Area of interest', true, (p) => (
              <select {...p}>
                <option value="">Select one</option>
                {enquiryTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            ))}
            {field('message', 'Message', true, (p) => (
              <textarea placeholder="Commodity or block, stage, budget and what you need from us" {...p} />
            ))}
          </div>
          <div className="form-foot">
            <small>By submitting you agree to be contacted about your enquiry.</small>
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send enquiry'} <Arrow />
            </button>
          </div>
        </form>
      ) : (
        <div className="thanks" role="status" tabIndex={-1} ref={thanksRef}>
          <svg viewBox="0 0 54 54" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M27 3l24 24-24 24L3 27z" />
            <path d="M18 27l6 6 12-12" />
          </svg>
          <h2 className="form-card__title">Thank you{firstName ? `, ${firstName}` : ''}.</h2>
          <p>Your enquiry has been received. Our team will be in touch within two business days.</p>
          <button
            type="button"
            className="link-arrow link-arrow--light"
            onClick={() => {
              setValues(initial);
              setTouched({});
              setErrors({});
              setStatus('idle');
            }}
          >
            Send another enquiry
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
