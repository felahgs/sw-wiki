import Link from "next/link";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center w-full justify-center text-primary py-20 px-6">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Welcome to the Galaxy Wiki
        </h1>
        <p className="text-lg max-w-prose mx-auto text-gray-300">
          Dive into a galaxy far, far away and discover about your favorite
          films and characters.
        </p>
        <div className="space-x-4">
          <Link
            href={"/films"}
            className="py-2 px-4 rounded-md text-lg font-semibold text-secondary"
          >
            Explore Films
          </Link>
          <Link
            href={"/characters"}
            className="py-2 px-4 rounded-md text-lg font-semibold text-secondary"
          >
            View Characters
          </Link>
        </div>
      </div>
    </div>
  );
}
