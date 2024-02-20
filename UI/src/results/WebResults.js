import noImage from "../image/no-image.jpg";

const WebResults = ({ results }) => (
  <div>
    <ul className="divide-y divide-gray-100 w-[890px]">
      {results?.map((result, index) => (
        <li key={index} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={
                result.thumbnailUrl ? `${result.thumbnailUrl}` : `${noImage}`
              }
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <div className="text-sm font-semibold leading-6 text-gray-900 text-left">
                <a href={result.url} rel="noopener noreferrer">
                  {result.name}
                </a>
              </div>
              <p
                className="mt-1 truncate text-xs leading-5 text-gray-500 text-left"
                title={result.snippet}
              >
                {result.snippet}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default WebResults;
