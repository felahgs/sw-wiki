import React from "react";
import Image from "next/image";

import { listFilms } from "@/services/films";
import FilmCard from "@/components/FilmCard";
import Link from "next/link";

async function FilmsPage() {
  const response = await listFilms();
  const { result: films } = response;

  if (films.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-primary py-10 px-6 w-full max-w-screen-xl space-y-12 md:space-y-10">
        <h1
          id="page_title"
          className="text-center text-4xl font-bold text-tertiary scroll-mt-20"
        >
          Films
        </h1>

        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10 h-full">
          <h2 className="text-2xl font-semibold text-gray-400">
            No Films found
          </h2>
          <a href="/films" className="text-secondary">
            reload page
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col relative items-center justify-center text-primary py-10 px-6 w-full max-w-screen-xl space-y-12 md:space-y-10">
      <div>
        <h1
          id="page_title"
          className="text-center text-4xl font-bold text-tertiary scroll-mt-20"
        >
          Films
        </h1>

        <ul className="grid grid-cols-2 md:flex flex-wrap gap-2 text-secondary">
          {films.map((film) => (
            <li key={film.uid}>
              <Link href={`#${film.properties.title.replaceAll(" ", "_")}`}>
                {film.properties.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {films.map(({ _id, properties }, index) => (
        <FilmCard
          id={properties.title.replaceAll(" ", "_")}
          className="shrink-0 scroll-mt-20 z-10"
          key={_id}
          title={properties.title}
          image={
            <Image
              width="150"
              height="0"
              priority
              className="w-full h-auto max-w-[200]"
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
      <div>
        <div className="flex flex-col items-center select-none justify-end pb-2 absolute left-0 w-full bottom-0  h-[calc(100%-100vh)]">
          <Link
            id="back_to_top"
            className="text-secondary h-[fit-content] bg-background  p-1 rounded-lg sticky bottom-1 z-10"
            href="#page_title"
          >
            Back to top
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilmsPage;
