import { listFilms } from "@/services/films";
import React from "react";
import Image from "next/image";
import FilmCard from "@/components/FilmCard";

async function FilmsPage() {
  const response = await listFilms();
  const { result: films } = response;

  return (
    <div className="flex flex-col items-center justify-center text-primary py-10 px-6 w-full max-w-screen-xl space-y-12 md:space-y-6">
      <h1 className="text-4xl font-bold text-tertiary">Films</h1>
      {films.map(({ _id, properties }, index) => (
        <FilmCard
          key={_id}
          title={properties.title}
          image={
            <Image
              width={200}
              height={200}
              alt={properties.title}
              src={`/films/${properties.title}.jpg`}
            />
          }
          opening_crawl={properties.opening_crawl}
          director={properties.director}
          release_date={properties.release_date}
          revertImage={index % 2 === 0}
        />
      ))}
    </div>
  );
}

export default FilmsPage;
