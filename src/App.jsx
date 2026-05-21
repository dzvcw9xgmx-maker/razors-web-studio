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
        <h2 style={styles.logo}>Razors Web Studio</h2>

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
          Modern, fast, and professional websites for businesses and brands.
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
          <div style={styles.projectCard}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              style={styles.image}
              alt=""
            />
            <h3>Business Website</h3>
          </div>

          <div style={styles.projectCard}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              style={styles.image}
              alt=""
            />
            <h3>E-Commerce Store</h3>
          </div>

          <div style={styles.projectCard}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              style={styles.image}
              alt=""
            />
            <h3>Portfolio Website</h3>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={styles.section}>
        <h2 style={styles.title2}>Pricing</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Starter</h3>
            <p>R999</p>
          </div>

          <div style={styles.card}>
            <h3>Business</h3>
            <p>R2499</p>
          </div>

          <div style={styles.card}>
            <h3>Premium</h3>
            <p>R4999</p>
          </div>
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
    background: "radial-gradient(circle at top, #1b1b2f, #0d0d0d)",
    color: "white",
    minHeight: "100vh"
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    position: "sticky",
    top: 0,
    background: "#0d0d0d",
    flexWrap: "wrap"
  },

  logo: { fontSize: "16px" },

  links: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "14px"
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px"
  },

  title: {
    fontSize: "34px",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#aaa",
    maxWidth: "600px",
    margin: "0 auto 20px"
  },

  button: {
    padding: "10px 20px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  section: {
    padding: "70px 20px",
    textAlign: "center"
  },

  sectionDark: {
    padding: "70px 20px",
    textAlign: "center",
    background: "#0b0b0f"
  },

  title2: {
    fontSize: "26px",
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
    padding: "15px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px"
  },

  projectCard: {
    width: "220px",
    padding: "15px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px"
  },

  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px"
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
    color: "#777",
    borderTop: "1px solid rgba(255,255,255,0.1)"
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
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }
};

export default App;