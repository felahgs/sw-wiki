import React from "react";
import CharactersPagination from "./pagination";
import { CharactersResponse } from "@/services/characters";

interface CharactersListProps {
  charactersPromise: (
    totalPages?: number,
    search?: string,
  ) => Promise<CharactersResponse>;
  page?: number;
}

async function CharactersList({
  charactersPromise,
  page = 1,
}: CharactersListProps) {
  const { results: characters, total_pages: totalPages } =
    await charactersPromise(page);

  return (
    <>
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
      <CharactersPagination page={page} totalPages={totalPages} />
    </>
  );
}

export default CharactersList;
