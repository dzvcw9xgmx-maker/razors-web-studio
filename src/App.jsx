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
          <img src="/logo.png" alt="Logo" style={styles.logo} />
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
        <h1 style={styles.heroTitle}>We Build Websites That Convert Visitors Into Clients</h1>
        <p style={styles.heroText}>
          Modern, fast, and professional websites for growing businesses.
        </p>
        <button style={styles.button}>Start Your Project</button>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Web Development</div>
          <div style={styles.card}>Business Websites</div>
          <div style={styles.card}>UI/UX Design</div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Portfolio</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Corporate Website</div>
          <div style={styles.card}>E-Commerce Store</div>
          <div style={styles.card}>Portfolio Website</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <h2 style={styles.sectionTitle}>Pricing</h2>

        <div style={styles.grid}>
          <div style={styles.card}>Starter - R999</div>
          <div style={styles.card}>Business - R2499</div>
          <div style={styles.card}>Premium - R4999</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.sectionDark}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>

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
        href="https://wa.me/27YOURNUMBER"
        target="_blank"
        style={styles.whatsapp}
      >
        WhatsApp Us
      </a>

    </div>
  );
}

/* ===== MODERN COLOUR SYSTEM ===== */
const styles = {

  page: {
    fontFamily: "Arial",
    background: "#0b0f14",
    color: "#ffffff"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#0f1720",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #1f2a37"
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "8px",
    objectFit: "cover"
  },

  logoText: {
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: "bold"
  },

  links: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap"
  },

  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "14px"
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px"
  },

  heroTitle: {
    fontSize: "36px",
    color: "#ffffff"
  },

  heroText: {
    color: "#94a3b8",
    marginTop: "10px"
  },

  button: {
    marginTop: "20px",
    padding: "12px 22px",
    background: "#00d084",
    color: "#0b0f14",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },

  section: {
    padding: "70px 20px",
    textAlign: "center",
    background: "#0f1720"
  },

  sectionDark: {
    padding: "70px 20px",
    textAlign: "center",
    background: "#0b0f14"
  },

  sectionTitle: {
    fontSize: "26px",
    color: "#ffffff",
    marginBottom: "25px"
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  },

  card: {
    width: "220px",
    padding: "20px",
    background: "#111827",
    border: "1px solid #1f2a37",
    borderRadius: "12px",
    color: "#e5e7eb"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto"
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #1f2a37",
    background: "#111827",
    color: "#fff"
  },

  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #1f2a37",
    background: "#111827",
    color: "#fff",
    height: "100px"
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    color: "#64748b",
    borderTop: "1px solid #1f2a37"
  },

  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "#fff",
    padding: "14px 16px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    zIndex: 9999
  }
};

export default App;