export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        marginTop: "4rem",
        padding: "3rem 1rem",
        background: "var(--color-surface)",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <span
          style={{
            fontFamily: "Rod",
            fontSize: "1.2rem",
            color: "var(--color-text)",
          }}
        >
          Raphael B. Dias
        </span>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <a
          href="mailto:hello@raphaelbdias.com"
          style={{
            color: "var(--color-text)",
            margin: "0 0.75rem",
            opacity: 0.8,
          }}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/raphaelbdias"
          target="_blank"
          rel="noopener"
          style={{
            color: "var(--color-text)",
            margin: "0 0.75rem",
            opacity: 0.8,
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/raphaelbdias"
          target="_blank"
          rel="noopener"
          style={{
            color: "var(--color-text)",
            margin: "0 0.75rem",
            opacity: 0.8,
          }}
        >
          GitHub
        </a>
      </div>

      <div style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>
        © {new Date().getFullYear()} Raphael B. Dias — All Rights Reserved.
      </div>
    </footer>
  );
}
