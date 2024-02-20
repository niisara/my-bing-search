const VideosResults = ({ results }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-6 mx-3 w-[890px]">
      {results.map((result, index) => (
        <div key={index} className="flex flex-col items-center">
          <a
            href={result.hostPageUrl}
            rel="noopener noreferrer"
            className="block w-64 h-36 overflow-hidden rounded-lg bg-gray-100 relative"
          >
            <img
              src={result.thumbnailUrl}
              alt={result.name}
              className="w-full h-full object-cover"
            />
            <div className="play-icon hidden absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <svg
                className="w-12 h-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-1.864A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-1.864a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </a>
          <div className="text-base text-gray-600 font-semibold">
            {result.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosResults;
