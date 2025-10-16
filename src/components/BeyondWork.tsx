interface Props {
  preview?: boolean;
}

export default function BeyondWork({ preview }: Props) {
  const hobbies = [
    { title: "Chess", desc: "I enjoy the meditative balance between logic and creativity it demands." },
    { title: "Music", desc: "I compose and produce my own music — it’s how I translate emotion into pattern." },
    { title: "Travel & Camping", desc: "Being outdoors keeps me grounded and reminds me of perspective." },
  ];

  const items = preview ? hobbies.slice(0, 3) : hobbies;

  return (
    <section id="beyondwork">
      <div className="container">
        <h2>Beyond Work</h2>
        <div className="beyond-grid">
          {items.map((hobby, i) => (
            <div key={i} className="beyond-item">
              <h3>{hobby.title}</h3>
              <p>{hobby.desc}</p>
            </div>
          ))}
        </div>
        <a href="#" className="read-more" style={{ marginTop: "3rem" }}>
          See more →
        </a>
      </div>
    </section>
  );
}
