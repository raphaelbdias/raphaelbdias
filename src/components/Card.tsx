interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  link?: string;
}

export default function Card({ title, subtitle, description, image, link }: CardProps) {
  return (
    <a href={link || "#"} className="project-card">
      <div
        className="project-thumb"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "linear-gradient(135deg, #BADFCD, #F1EDEA)",
        }}
      />
      <div className="project-content">
        <span className="project-subtitle">{subtitle}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-cta">Explore →</div>
      </div>
    </a>
  );
}
