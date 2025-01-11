import React from "react";
import Image from "next/image";

interface CharacterCardProps {
  name: string;
  uid: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, uid }) => {
  return (
    <div
      key={uid}
      className="bg-gray-800 text-secondary p-4 rounded-md shadow hover:shadow-lg transition-shadow w-full md:w-52 max-h-52"
    >
      <div className="relative w-full grow-0 h-32 mb-4">
        <Image
          src={`/characters/${name}.jpg`}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <h2 className="text-xl font-semibold text-center">{name}</h2>
    </div>
  );
};

export default CharacterCard;
