import { HTMLAttributes, ReactNode } from "react";

interface FilmCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  image: ReactNode;
  opening_crawl: string;
  director: string;
  release_date: string;
  revertImage: boolean;
}

function FilmCard({
  title,
  image,
  opening_crawl,
  director,
  release_date,
  revertImage,
  className,
}: FilmCardProps) {
  return (
    <div
      className={`flex flex-col items-center md:items-start ${
        revertImage ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5 ${className}`}
    >
      {image}
      <div>
        <h2 className="text-2xl font-bold text-secondary">{title}</h2>
        <p className="text-primary mb-2">{opening_crawl}</p>
        <p className="text-primary">
          <span className="font-bold">Director:</span> {director}
        </p>
        <p className="text-primary">
          <span className="font-bold">Release Date:</span> {release_date}
        </p>
      </div>
    </div>
  );
}

export default FilmCard;
