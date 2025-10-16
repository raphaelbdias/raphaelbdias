import ThoughtCard from "./ThoughtCard";

export default function Thoughts({ limit }: { limit?: number }) {
  const thoughts = [
    {
      image: "/images/dataquality.jpg",
      quote:
        "Data quality isn’t clerical — it’s cultural. True leadership means creating systems where accuracy becomes instinct.",
      author: "Raphael B. Dias",
      source: "Personal Reflection, Oct 2025",
      link: "/thoughts/data-quality-leadership",
    },
    {
      image: "/images/innovation.jpg",
      quote:
        "Innovation doesn’t come from more tools — it comes from fewer constraints. Creativity thrives in well-designed limits.",
      author: "Raphael B. Dias",
      source: "Notebook Series, Sept 2025",
      link: "/thoughts/creative-constraints",
    },
  ];

  const items = limit ? thoughts.slice(0, limit) : thoughts;

  return (
    <section className="container" id="thoughts">
      <h2>Thoughts & Insights</h2>
      {items.map((t, i) => (
        <ThoughtCard key={i} {...t} />
      ))}
    </section>
  );
}

