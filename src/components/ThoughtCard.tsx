interface ThoughtCardProps {
  image: string;
  quote: string;
  author: string;
  source: string;
  link?: string;
}

export default function ThoughtCard({ image, quote, author, source, link }: ThoughtCardProps) {
  return (
    <a href={link || "#"} className="thought-card">
      <div
        className="thought-card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="thought-card-content">
        <blockquote>{quote}</blockquote>
        <p className="meta">
          {author}, <span>{source}</span>
        </p>
        <div className="read-more">
          Read more <span className="arrow">→</span>
        </div>
      </div>
    </a>
  );
}

