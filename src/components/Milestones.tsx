export default function Milestones() {
  const milestones = [
    {
      year: "2021",
      title: "Research & Data Science",
      text: "Started applying NLP and analytics to real-world data at iDeas Unlimited & SixthFactor Consultancy in Dubai.",
    },
    {
      year: "2022",
      title: "Applied Data Science",
      text: "Worked on automation and integration projects in MedTech and mining sectors.",
    },
    {
      year: "2023",
      title: "Decision Support",
      text: "Joined Health Sciences North, building KPI systems and analytics pipelines.",
    },
    {
      year: "2024",
      title: "Strategic Analytics",
      text: "Evolved toward aligning analytics with business and financial planning goals.",
    },
  ];

  return (
    <section className="container" id="milestones">
      <h2>Career Milestones</h2>
      <div className="timeline">
        {milestones.map((m, i) => (
          <div key={i} className="milestone">
            <div className="year">{m.year}</div>
            <div className="card">
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
