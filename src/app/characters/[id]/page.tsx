import React from "react";
import Image from "next/image";
import Link from "next/link";

import { getCharacter } from "@/services/characters";
import axios from "axios";

interface PageProps {
  params: Promise<{ id: number | string }>;
}

async function CharactersPage({ params }: PageProps) {
  const { id } = await params;

  const { result: character } = await getCharacter(id);

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = character.properties;

  let planetName = "Unknown";
  try {
    const planetResponse = await axios.get(homeworld);
    planetName = planetResponse.data.result.properties.name;
  } catch (error) {
    console.error("Error fetching planet:", error);
  }

  return (
    <div className="flex flex-col items-center h-full text-primary py-10 px-6 w-full max-w-screen-xl space-y-8">
      <Link
        href="/characters"
        className="self-start bg-gray-700 text-secondary px-4 py-2 rounded-md shadow hover:bg-gray-600 transition-colors"
      >
        ← Go Back
      </Link>
      <div className="flex flex-col items-center h-full text-primary py-10 px-6 w-full max-w-screen-xl space-y-8">
        <h1 className="text-4xl font-bold text-tertiary">{name}</h1>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800 p-6 rounded-md shadow-lg w-full max-w-4xl">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-md overflow-hidden">
            <Image
              src={`/characters/${name}.jpg`}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex-1 space-y-4 text-secondary">
            <p>
              <span className="font-semibold text-gray-400">Height:</span>{" "}
              {height} cm
            </p>
            <p>
              <span className="font-semibold text-gray-400">Mass:</span> {mass}{" "}
              kg
            </p>
            <p>
              <span className="font-semibold text-gray-400">Hair Color:</span>{" "}
              {hair_color}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Skin Color:</span>{" "}
              {skin_color}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Eye Color:</span>{" "}
              {eye_color}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Birth Year:</span>{" "}
              {birth_year}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Gender:</span>{" "}
              {gender}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Homeworld:</span>{" "}
              {planetName}
            </p>
          </div>
        </div>

        {character.description && (
          <div className="text-secondary bg-gray-900 p-6 rounded-md shadow-lg max-w-4xl">
            <h2 className="text-2xl font-semibold text-tertiary mb-4">
              Description
            </h2>
            <p className="leading-7">{character.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharactersPage;
