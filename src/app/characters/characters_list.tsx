import React from "react";
import CharactersPagination from "./pagination";
import CharacterCard from "@/components/CharacterCard";
import { CharactersResponse } from "@/services/characters";
import Link from "next/link";
import Image from "next/image";

interface CharactersListProps {
  charactersPromise: (
    totalPages?: number,
    search?: string,
  ) => Promise<CharactersResponse>;
  page?: number;
  search?: string;
}

async function CharactersList({
  charactersPromise,
  page = 1,
  search,
}: CharactersListProps) {
  const { results: characters, total_pages: totalPages } =
    await charactersPromise(page, search);

  return (
    <div className="flex flex-col justify-between h-full w-full">
      {characters && characters.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center gap-6 h-full w-full">
          {characters.map((character) => (
            <Link
              key={character.uid}
              aria-label={`${character.name} details page`}
              href={`/characters/${character.uid}`}
              className="flex-shrink-0 grow-0 w-full md:w-auto"
              passHref
            >
              <CharacterCard
                name={character.name}
                uid={character.uid}
                image={
                  <Image
                    src={`/characters/${character.name}.jpg`}
                    alt={character.name}
                    fill
                    sizes="100%"
                    priority
                    className="rounded-t-md object-cover"
                  />
                }
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10 h-full">
          <h2 className="text-2xl font-semibold text-gray-400">
            No characters found
          </h2>
          <p className="text-gray-500">Try adjusting your search criteria.</p>
        </div>
      )}

      <CharactersPagination page={page} totalPages={totalPages} />
    </div>
  );
}

export default CharactersList;
