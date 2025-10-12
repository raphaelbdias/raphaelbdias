export default function Contact(){
  return (
    <section className="container" style={{textAlign:"center"}}>
      <h2>Let’s Build Something Insightful</h2>
      <p style={{maxWidth:"600px",margin:"0.5rem auto 1.5rem"}}>
        I’m always open to meaningful collaborations and data-driven challenges.
      </p>
      <div style={{display:"flex",justifyContent:"center",gap:"1.5rem"}}>
        <a href="mailto:hello@raphaelbdias.com" className="btn">Email Me</a>
        <a href="https://www.linkedin.com/in/raphaelbdias" target="_blank" rel="noopener" className="btn-outline">LinkedIn</a>
        <a href="https://github.com/raphaelbdias" target="_blank" rel="noopener" className="btn-outline">GitHub</a>
      </div>
    </section>
  );
}
