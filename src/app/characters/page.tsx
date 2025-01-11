import React, { Suspense } from "react";
import { redirect } from "next/navigation";

import { listCharacters } from "@/services/characters";
import Button from "@/components/Button";

import CharactersList from "./characters_list";
import Loading from "../loading";

interface PageProps {
  searchParams: Promise<{ page?: number; name?: string }>;
}

async function fetchCharacters(page?: number, name?: string) {
  const response = await listCharacters({ page, name });
  return response;
}

async function CharactersPage({ searchParams }: PageProps) {
  const { page = 1, name } = await searchParams;

  return (
    <div className="flex flex-col items-center h-full text-primary py-10 px-6 w-full max-w-screen-xl space-y-4">
      <h1 className="text-4xl font-bold text-tertiary">Characters</h1>

      <form className="flex justify-center w-full">
        <div className="flex w-full md:max-w-md items-center ">
          <input
            name="name"
            type="text"
            placeholder="Search characters..."
            className="flex-grow px-4 py-2 w-full text-black border border-gray-500 rounded-l-md focus:ring-2 focus:ring-cyan-500  focus:outline-none"
          />
          <Button className="bg-cyan-600 text-primary px-4 py-2 rounded-none rounded-r-md hover:bg-cyan-700">
            Search
          </Button>
        </div>
      </form>

      {name && (
        <div className="w-full text-center p-2">
          <p className="text-gray-400 text-lg">
            Showing results for
            <span className="font-semibold">{` "${name}"`}</span>
          </p>
          <form action="">
            <input hidden name="page" defaultValue={1} />
            <button className="mt-2 px-4 py-2 bg-gray-700 text-secondary rounded-md hover:bg-gray-600 transition">
              Clear Search
            </button>
          </form>
        </div>
      )}

      <div className="flex flex-col justify-between gap-8 h-full w-full">
        <Suspense key={page} fallback={<Loading />}>
          <CharactersList
            page={page}
            search={name}
            charactersPromise={fetchCharacters}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default CharactersPage;
