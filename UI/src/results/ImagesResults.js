const ImagesResults = ({ results }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-6 mx-3 w-[890px]">
      {results.map((result, index) => (
        <div key={index} className="flex flex-col items-center">
          <a
            href={result.contentUrl}
            rel="noopener noreferrer"
            className="block w-64 h-36 overflow-hidden rounded-lg bg-gray-100"
          >
            <img
              src={result.thumbnailUrl}
              alt={result.name}
              className="w-full h-full object-cover"
            />
          </a>
          <div className="text-base text-gray-600 font-semibold">
            {result.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesResults;
