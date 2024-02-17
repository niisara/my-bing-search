const VideosResults = ({ results }) => {
  console.log(results);
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-6 mx-3">
        {results.map((result, index) => (
          <div key={index} className="flex flex-col items-center">
            <a
              href={result.hostPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-96 h-64 overflow-hidden rounded-lg bg-gray-100"
            >
              <img
                src={result.thumbnailUrl}
                alt={result.name}
                className="w-full h-full object-cover"
              />
            </a>
            <div>{result.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideosResults;
