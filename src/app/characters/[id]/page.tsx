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

  const profileData = [
    { label: "Height", value: `${height} cm` },
    { label: "Mass", value: `${mass} kg` },
    { label: "Hair Color", value: hair_color },
    { label: "Skin Color", value: skin_color },
    { label: "Eye Color", value: eye_color },
    { label: "Birth Year", value: birth_year },
    { label: "Gender", value: gender },
    { label: "Homeworld", value: planetName },
  ];

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
          <div className="md:shrink-0 relative w-48 h-48 md:w-64 md:h-64 rounded-md overflow-hidden">
            <Image
              src={`/characters/${name}.jpg`}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-secondary w-full">
            {profileData.map(({ label, value }, index) => (
              <p key={index} className="flex items-center">
                <span className="font-semibold text-gray-400 pr-1">{`${label}:`}</span>
                {value}
              </p>
            ))}
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
