import Card from "./Card";

export default function Projects({ limit }: { limit?: number }) {
  const projects = [
    {
      title: "CôtéGold Blast Metrics",
      subtitle: "Hackathon — 3rd Place",
      description:
        "Built a Python/OpenCV system to analyze blast video data for real-time insights in mining operations.",
      image: "/images/blast.jpg",
      link: "/projects/cotegold",
    },
    {
      title: "Facility Risk & FCI App",
      subtitle: "Data App",
      description:
        "Developed an interactive dashboard for facility risk visualization and asset maintenance planning.",
      image: "/images/fci.jpg",
      link: "/projects/fci",
    },
    {
      title: "IAMGOLD Insights Dashboard",
      subtitle: "Mining Analytics",
      description:
        "Power BI and SQL-driven reporting suite to optimize open-pit blast quality monitoring.",
      image: "/images/dashboard.jpg",
      link: "/projects/iamgold",
    },
  ];

  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="container" id="projects">
      <h2>Highlighted Projects</h2>
      <div className="project-grid">
        {items.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
