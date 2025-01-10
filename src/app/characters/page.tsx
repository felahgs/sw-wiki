import { listCharacters } from "@/services/characters";
import React, { Suspense } from "react";
import CharactersPagination from "./pagination";
import Button from "@/components/Button";

interface PageProps {
  searchParams: Promise<{ page?: string; search?: string }>;
}

async function CharactersPage({ searchParams }: PageProps) {
  const { page = 1, search } = await searchParams;

  const response = await listCharacters({ page });
  const { results: characters, total_pages: totalPages } = response;

  return (
    <div className="flex flex-col items-center h-full text-primary py-10 px-6 w-full max-w-screen-xl space-y-6">
      <h1 className="text-4xl font-bold text-tertiary">Characters</h1>

      <div className="flex w-full max-w-md items-center ">
        <input
          type="text"
          placeholder="Search characters..."
          className="flex-grow px-4 py-2 text-black border border-gray-500 rounded-l-md focus:ring-2 focus:ring-cyan-500  focus:outline-none"
        />
        <Button className="bg-cyan-600 text-primary px-4 py-2 rounded-none rounded-r-md hover:bg-cyan-700">
          Search
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-8 h-full w-full">
        <Suspense fallback="Loading">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {characters.map((character) => (
              <div
                key={character.uid}
                className="bg-gray-800 text-secondary p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold">{character.name}</h2>
              </div>
            ))}
          </div>
        </Suspense>

        <CharactersPagination page={+page} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default CharactersPage;
