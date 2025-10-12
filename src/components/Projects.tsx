import Card from "./Card";

export default function Projects() {
  const projects = [
    {
      title: "CôtéGold Blast Metrics",
      subtitle: "Hackathon · 3rd place",
      description: "Near real-time blast insights for IAMGOLD using OpenCV + analytics pipelines.",
      image: "https://picsum.photos/200/300",
      link: "/projects/cotegold",
    },
    {
      title: "Facility Risk & FCI App",
      subtitle: "Data App",
      description: "Operational risk visualization and asset planning for complex facilities.",
      image: "https://picsum.photos/200/300",
      link: "/projects/fci",
    },
    {
      title: "IAMGOLD Insights Dashboard",
      subtitle: "Mining Analytics",
      description: "Interactive Power BI visualizations for open-pit blast quality and efficiency.",
      image: "https://picsum.photos/200/300",
      link: "/projects/iamgold",
    },
  ];

  return (
    <section className="container" id="projects">
      <h2>Highlighted Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>
      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <a href="/projects" className="btn-link">View all →</a>
      </div>
    </section>
  );
}
