import data from "@/data/thoughts.json";

export default function Thoughts({limit}:{limit?:number}){
  const items = limit ? data.slice(0,limit) : data;
  return (
    <section className="container">
      <h2>Thoughts & Insights</h2>
      {items.map((t,i)=>(
        <div key={i} className="card">
          <h3>{t.title}</h3>
          <small>{t.date}</small>
          <p style={{marginTop:"0.5rem"}}>{t.summary}</p>
          { !limit && <p>{t.body}</p> }
        </div>
      ))}
      {limit && <a href="/thoughts">Read more reflections →</a>}
    </section>
  );
}
