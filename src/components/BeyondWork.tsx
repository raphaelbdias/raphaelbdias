interface Props { preview?: boolean; }

export default function BeyondWork({preview}:Props){
  const activities = [
    {
      name:"Chess",
      desc:"I enjoy the meditative balance between logic and creativity it demands."
    },
    {
      name:"Music",
      desc:"I compose and produce my own music — it's how I translate emotion into pattern."
    },
    {
      name:"Travel & Camping",
      desc:"Being outdoors keeps me grounded and reminds me of perspective."
    }
  ];

  return (
    <section className="container">
      <h2>Beyond Work</h2>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"1.5rem"
      }}>
        {activities.map((a,i)=>(
          <div key={i} className="card">
            <h3>{a.name}</h3>
            <p>{a.desc}</p>
          </div>
        ))}
      </div>
      {!preview && (
        <blockquote style={{
          marginTop:"2rem",
          fontStyle:"italic",
          borderLeft:"4px solid var(--accent)",
          paddingLeft:"1rem"
        }}>
          “I build like I play — strategically, patiently, with creativity.”
        </blockquote>
      )}
      {preview && <div style={{marginTop:"1rem"}}><a href="/beyond">See more →</a></div>}
    </section>
  );
}
