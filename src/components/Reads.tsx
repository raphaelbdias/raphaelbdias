import data from "@/data/reads.json";

export default function Reads({limit}:{limit?:number}){
  const items = limit ? data.slice(0,limit) : data;
  return (
    <section className="container">
      <h2>Books & Articles I Recommend</h2>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
        gap:"1.5rem"
      }}>
        {items.map((b,i)=>(
          <div key={i} className="card">
            <img src={b.cover} alt={b.title} style={{
              width:"100%",height:"340px",objectFit:"cover",
              borderRadius:"6px"
            }}/>
            <h3 style={{marginTop:"1rem"}}>{b.title}</h3>
            <small>by {b.author}</small>
            <p style={{marginTop:"0.75rem"}}>{b.why}</p>
          </div>
        ))}
      </div>
      {limit && <div style={{marginTop:"1rem"}}><a href="/reads">See all recommendations →</a></div>}
    </section>
  );
}
