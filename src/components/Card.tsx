interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  link?: string;
}

export default function Card({ title, subtitle, description, image, link }: CardProps) {
  return (
    <a href={link || "#"} className="modern-card">
      <div
        className="card-bg"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "linear-gradient(135deg, #6366f1, #2563eb, #06b6d4)",
        }}
      />
      <div className="card-overlay">
        <div className="card-text">
          {subtitle && <span className="card-subtitle">{subtitle}</span>}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-hover">
          <p>Read more →</p>
        </div>
      </div>
    </a>
  );
}
