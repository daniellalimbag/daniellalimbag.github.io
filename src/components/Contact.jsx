import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => (
  <section
    className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-[color:var(--bg)] py-16 relative z-10 border-t border-t-[color:var(--text)] md:gap-x-20"
    id="contact"
  >
    <div className="w-auto max-w-md flex flex-col justify-center items-start text-left text-[color:var(--text)] mb-12 md:mb-0 relative z-10 px-0 min-h-[480px] md:min-h-[540px] lg:min-h-[600px] gap-8">
      <div className="mb-10">
        <h3 className="text-lg font-bold text-[color:var(--violet)] inline-block align-bottom">Contact</h3>
        <span className="block text-4xl md:text-5xl font-bold leading-tight ml-0 mt-1">Want to chat?</span>
      </div>
      <div className="flex flex-col gap-6 w-full mb-10">
        <div className="flex items-center gap-3">
          <span className="text-xl text-[color:var(--violet)]"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M2 6.75C2 5.23122 3.23122 4 4.75 4H19.25C20.7688 4 22 5.23122 22 6.75V17.25C22 18.7688 20.7688 20 19.25 20H4.75C3.23122 20 2 18.7688 2 17.25V6.75Z" stroke="currentColor" strokeWidth="1.5"/><path d="M3.5 6.5L12 13.5L20.5 6.5" stroke="currentColor" strokeWidth="1.5"/></svg></span>
          <span className="text-base text-[color:var(--text)] select-all text-sm">limbagdaniella@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xl text-[color:var(--violet)]"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M12 2C7.031 2 3 6.031 3 11C3 15.969 12 22 12 22C12 22 21 15.969 21 11C21 6.031 16.969 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/></svg></span>
          <span className="text-base text-[color:var(--text)] text-sm">Manila, Philippines</span>
        </div>
      </div>
      <div className="flex gap-6 mt-8">
        <a href="#" aria-label="GitHub" className="text-2xl text-[color:var(--text)] hover:text-[color:var(--violet)] transition"><FaGithub /></a>
        <a href="#" aria-label="Facebook" className="text-2xl text-[color:var(--text)] hover:text-[color:var(--violet)] transition"><FaFacebook /></a>
        <a href="#" aria-label="LinkedIn" className="text-2xl text-[color:var(--text)] hover:text-[color:var(--violet)] transition"><FaLinkedin /></a>
      </div>
    </div>
    <div className="w-auto flex flex-col justify-center items-center relative z-10 px-0">
      <form className="w-[600px] bg-gradient-to-br from-[color:var(--violet)]/90 via-[color:var(--blue)]/80 to-[color:var(--green)]/70 border-2 border-[color:var(--violet)] shadow-2xl rounded-2xl px-8 py-12 flex flex-col gap-6 backdrop-blur-md">
        <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-[color:var(--bg)] border border-[color:var(--violet)] text-sm text-[color:var(--text)] placeholder-[color:var(--violet)] focus:outline-none focus:ring-2 focus:ring-[color:var(--violet)] transition" />
        <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md bg-[color:var(--bg)] border border-[color:var(--violet)] text-sm text-[color:var(--text)] placeholder-[color:var(--violet)] focus:outline-none focus:ring-2 focus:ring-[color:var(--violet)] transition" />
        <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 rounded-md bg-[color:var(--bg)] border border-[color:var(--violet)] text-sm text-[color:var(--text)] placeholder-[color:var(--violet)] focus:outline-none focus:ring-2 focus:ring-[color:var(--violet)] resize-none transition" />
        <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-[color:var(--violet)] to-[color:var(--blue)] text-white font-semibold text-sm hover:from-[color:var(--violet)] hover:to-[color:var(--green)] shadow-lg transition">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;