import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      e.target.reset();
    }, 1200);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="contact-info">
            <Reveal as="p" className="section-label">
              Contact Us
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.1}>
              More <em>Info ...</em>
            </Reveal>
            <Reveal as="p" className="price-note" delay={0.1}>
              Asking Price &nbsp;·&nbsp; Offered Exclusively
            </Reveal>
            <Reveal as="p" className="section-body" delay={0.22}>
              To schedule a private viewing or request a full property prospectus, please
              complete the form or contact the listing agent directly. All enquiries are
              handled with strict confidentiality.
            </Reveal>
            <Reveal className="agent-card" delay={0.38}>
              <div className="agent-avatar">
                <img
                  src="/images/soma_logo.png"
                  alt="SOMA Group"
                />
              </div>
              <div>
                <p className="agent-name">SOMA Office</p>
                <p className="agent-title">Listing Agent · SOMA Group</p>
                <p className="agent-phone">+52 (55) 5251 8104</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="section-label" style={{ marginBottom: 28 }}>
              Request a Viewing
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="Alexandra" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Worthington" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="a.worthington@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (310) 000 0000" />
              </div>
              <div className="form-group">
                <label htmlFor="interest">Enquiry Type</label>
                <select id="interest" name="interest" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="viewing">Private Viewing</option>
                  <option value="prospectus">Full Prospectus</option>
                  <option value="offer">Make an Offer</option>
                  <option value="info">General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please share any specific requirements or questions…"
                />
              </div>
              {!success && (
                <button type="submit" className="btn-submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Submit Enquiry'}
                </button>
              )}
              {success && (
                <div
                  style={{
                    fontSize: 13,
                    color: 'var(--gold)',
                    letterSpacing: '0.1em',
                    paddingTop: 4,
                  }}
                >
                  Thank you — we will be in touch shortly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
