import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! We will contact you soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div style={styles.page}>

      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.brand}>
          <img
            src="/logo.png"
            alt="Razors Logo"
            style={styles.logoImg}
          />
          <h2 style={styles.logoText}>Razors Web Studio</h2>
        </div>

        <div style={styles.links}>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#work" style={styles.link}>Portfolio</a>
          <a href="#pricing" style={styles.link}>Pricing</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>We Build Websites That Get Clients</h1>
        <p style={styles.subtitle}>
          Modern, fast, and professional websites for businesses.
        </p>
        <button style={styles.button}>Start Your Project</button>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2 style={styles.title2}>Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Web Development</div>
          <div style={styles.card}>Business Websites</div>
          <div style={styles.card}>UI/UX Design</div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" style={styles.sectionDark}>
        <h2 style={styles.title2}>Portfolio</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Business Website</div>
          <div style={styles.card}>E-Commerce Store</div>
          <div style={styles.card}>Portfolio Website</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <h2 style={styles.title2}>Pricing</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Starter - R999</div>
          <div style={styles.card}>Business - R2499</div>
          <div style={styles.card}>Premium - R4999</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.sectionDark}>
        <h2 style={styles.title2}>Contact Us</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
          />

          <button style={styles.button}>Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Razors Web Studio
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/0822027000"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp Us
      </a>

    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  page: {
    fontFamily: "Arial",
    background: "#0d0d0d",
    color: "white",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#111",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap"
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logoImg: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    objectFit: "cover"
  },

  logoText: {
    fontSize: "16px"
  },

  links: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap"
  },

  link: {
    color: "#ccc",
    textDecoration: "none"
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },

  title: {
    fontSize: "36px"
  },

  subtitle: {
    color: "#aaa",
    marginTop: "10px"
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#111"
  },

  sectionDark: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#0b0b0b"
  },

  title2: {
    fontSize: "24px",
    marginBottom: "20px"
  },

  grid: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap"
  },

  card: {
    background: "#1a1a1a",
    padding: "20px",
    borderRadius: "10px",
    width: "200px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none"
  },

  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    height: "100px"
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    color: "#777"
  },

  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    padding: "12px 16px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 9999
  }
};

export default App;