import { listCharacters } from "@/services/characters";
import React, { Suspense } from "react";

import Button from "@/components/Button";
import CharactersList from "./characters_list";
import Loading from "../loading";
import CharactersPagination from "./pagination";

interface PageProps {
  searchParams: Promise<{ page?: number; search?: string }>;
}

async function fetchCharacters(page?: number, search?: string) {
  const response = await listCharacters({ page });
  return response;
}

async function CharactersPage({ searchParams }: PageProps) {
  const { page = 1, search } = await searchParams;
  // const { total_pages: totalPages } = await listCharacters();

  return (
    <div className="flex flex-col items-center h-full text-primary py-10 px-6 w-full max-w-screen-xl space-y-6 ">
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
        <Suspense key={page} fallback={<Loading />}>
          <CharactersList page={page} charactersPromise={fetchCharacters} />
        </Suspense>
        {/* <CharactersPagination page={page} totalPages={totalPages} /> */}
      </div>
    </div>
  );
}

export default CharactersPage;
