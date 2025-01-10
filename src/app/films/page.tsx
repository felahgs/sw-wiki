import { listFilms } from "@/services/films";
import React from "react";

async function FilmsPage() {
  const response = await listFilms();
  const { result: films } = response;

  return (
    <div className="flex flex-col items-center justify-center  text-primary py-10 px-6 w-full max-w-screen-xl space-y-6">
      <h1 className="text-4xl font-bold text-tertiary">Films</h1>
      {films.map((film) => (
        <div key={film.properties.url}>
          <h2 className="text-2xl font-bold text-secondary">
            {film.properties.title}
          </h2>
          <p className="text-primary">{film.properties.opening_crawl}</p>
        </div>
      ))}
    </div>
  );
}

export default FilmsPage;
