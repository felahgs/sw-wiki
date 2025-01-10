export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-primary py-20 px-6">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-extrabold tracking-wide">
          Welcome to the Galaxy Wiki
        </h1>
        <p className="text-lg max-w-prose mx-auto text-gray-300">
          Dive into a galaxy far, far away and discover about your favorite
          films and characters.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-primary py-2 px-4 rounded-md text-lg font-semibold hover:bg-blue-600">
            Explore Films
          </button>
          <button className="bg-green-500 text-primary py-2 px-4 rounded-md text-lg font-semibold hover:bg-green-600">
            View Characters
          </button>
        </div>
      </div>
    </div>
  );
}
