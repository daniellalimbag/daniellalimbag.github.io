import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_cdv2mj2';
const TEMPLATE_ID = 'template_mqy6lpo';
const PUBLIC_KEY = 'eXuIzVZfg7JkJxmxp';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields.');
      setLoading(false);
      return;
    }
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      PUBLIC_KEY
    ).then(
      (result) => {
        setStatus('Your message has been sent.');
        setForm({ name: '', email: '', message: '' });
        setLoading(false);
      },
      (error) => {
        setStatus('Something went wrong. Please try again.');
        setLoading(false);
      }
    );
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[color:var(--bg)] py-10 sm:py-8 px-2 sm:px-4 relative z-10 border-t border-t-[color:var(--text)] lg:gap-x-20"
      id="contact"
    >
      <div className="w-full lg:w-auto max-w-md flex flex-col justify-center items-center sm:items-center lg:items-start text-center sm:text-center lg:text-left text-[color:var(--text)] mb-8 lg:mb-0 relative z-10 px-0 min-h-[200px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[540px] gap-4 sm:gap-6 md:gap-8">
        <div className="mb-4 sm:mb-8 md:mb-10 w-full flex flex-col items-center sm:items-center lg:items-start text-center sm:text-center lg:text-left">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[color:var(--violet)] dark:text-[color:var(--green)] inline-block align-bottom w-full">Contact</h3>
          <span className="block text-2xl sm:text-3xl md:text-5xl font-bold leading-tight ml-0 mt-1 w-full">Want to chat?</span>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full mb-4 sm:mb-5 md:mb-6 items-center sm:items-center lg:items-start text-center sm:text-center lg:text-left">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 justify-center sm:justify-center lg:justify-start">
            <span className="text-lg sm:text-xl md:text-2xl text-[color:var(--violet)] dark:text-[color:var(--green)]"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M2 6.75C2 5.23122 3.23122 4 4.75 4H19.25C20.7688 4 22 5.23122 22 6.75V17.25C22 18.7688 20.7688 20 19.25 20H4.75C3.23122 20 2 18.7688 2 17.25V6.75Z" stroke="currentColor" strokeWidth="1.5"/><path d="M3.5 6.5L12 13.5L20.5 6.5" stroke="currentColor" strokeWidth="1.5"/></svg></span>
            <span className="text-sm sm:text-base md:text-lg text-[color:var(--text)] select-all">limbagdaniella@gmail.com</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 justify-center sm:justify-center lg:justify-start">
            <span className="text-lg sm:text-xl md:text-2xl text-[color:var(--violet)] dark:text-[color:var(--green)]"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M12 2C7.031 2 3 6.031 3 11C3 15.969 12 22 12 22C12 22 21 15.969 21 11C21 6.031 16.969 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/></svg></span>
            <span className="text-sm sm:text-base md:text-lg text-[color:var(--text)]">Manila, Philippines</span>
          </div>
        </div>
        <div className="flex gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-4 md:mt-8 justify-center sm:justify-center lg:justify-start w-full">
          <a href={"https://github.com/daniellalimbag"} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xl sm:text-2xl md:text-3xl text-[color:var(--text)] hover:text-[color:var(--violet)] dark:hover:text-[color:var(--green)] transition"><FaGithub /></a>
          <a href="#https://www.facebook.com/daniella.limbag.9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-xl sm:text-2xl md:text-3xl text-[color:var(--text)] hover:text-[color:var(--violet)] dark:hover:text-[color:var(--green)] transition"><FaFacebook /></a>
          {/*<a href="#" aria-label="LinkedIn" className="text-xl sm:text-2xl md:text-3xl text-[color:var(--text)] hover:text-[color:var(--violet)] dark:hover:text-[color:var(--green)] transition"><FaLinkedin /></a>*/}
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-col justify-center items-center relative z-10 px-3 sm:px-0 mt-2 sm:mt-4 md:mt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-[96vw] sm:w-[420px] md:w-[600px] bg-gradient-to-br from-[color:var(--violet)]/90 via-[color:var(--blue)]/80 to-[color:var(--green)]/70 dark:from-[color:var(--green)]/90 dark:via-[color:var(--blue)]/80 dark:to-[color:var(--green)]/70 border-2 border-[color:var(--violet)] dark:border-[color:var(--green)] shadow-2xl rounded-2xl px-4 sm:px-8 py-8 sm:py-12 flex flex-col gap-4 sm:gap-6 backdrop-blur-md">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-[color:var(--bg)] border border-[color:var(--violet)] dark:border-[color:var(--green)] text-sm text-[color:var(--text)] placeholder-[color:var(--violet)] dark:placeholder-[color:var(--green)] focus:outline-none focus:ring-2 focus:ring-[color:var(--violet)] dark:focus:ring-[color:var(--green)] transition"
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-[color:var(--bg)] border border-[color:var(--violet)] dark:border-[color:var(--green)] text-sm text-[color:var(--text)] placeholder-[color:var(--violet)] dark:placeholder-[color:var(--green)] focus:outline-none focus:ring-2 focus:ring-[color:var(--violet)] dark:focus:ring-[color:var(--green)] transition"
            disabled={loading}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-[color:var(--bg)] border border-[color:var(--violet)] dark:border-[color:var(--green)] text-sm text-[color:var(--text)] placeholder-[color:var(--violet)] dark:placeholder-[color:var(--green)] focus:outline-none focus:ring-2 focus:ring-[color:var(--violet)] dark:focus:ring-[color:var(--green)] resize-none transition"
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full py-2 sm:py-3 rounded-md bg-gradient-to-r from-[color:var(--violet)] dark:from-[color:var(--green)] to-[color:var(--blue)] dark:to-[color:var(--green)] text-white font-semibold text-sm shadow-lg transition
              hover:bg-gradient-to-r hover:from-[color:var(--violet)] hover:to-[color:var(--green)]
              dark:hover:bg-gradient-to-r dark:hover:from-[color:var(--green)] dark:hover:to-[color:var(--blue)]
            "
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <div className={`text-center text-xs sm:text-sm mt-2 ${status === 'Your message has been sent.' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;