import React, { ReactNode } from "react";

interface CharacterCardProps {
  name: string;
  uid: string;
  image: ReactNode;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, uid, image }) => {
  return (
    <div
      key={uid}
      className="bg-gray-800 text-secondary p-4 rounded-md shadow hover:shadow-lg transition-shadow w-full md:w-52 md:h-56"
    >
      <div className="relative w-full grow-0 h-32 mb-4">{image}</div>
      <h2 className="text-xl font-semibold text-center">{name}</h2>
    </div>
  );
};

export default CharacterCard;
