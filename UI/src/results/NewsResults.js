import noImage from "../image/no-image.jpg";

const NewsResults = ({ results }) => (
  <ul className="divide-y divide-gray-100 w-[890px]">
    {results?.map((result, index) => (
      <li key={index} className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={
              result?.image?.thumbnail?.contentUrl
                ? `${result?.image?.thumbnail?.contentUrl}`
                : `${noImage}`
            }
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <div className="text-sm font-semibold leading-6 text-gray-900 text-left truncate">
              <a
                href={result.url}
                rel="noopener noreferrer"
                title={result.name}
              >
                {result.name}
              </a>
            </div>
            <p
              className="mt-1 truncate text-xs leading-5 text-gray-500 text-left"
              title={result.description}
            >
              {result.description}
            </p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <span class="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            {result.category ? `${result.category}` : `No Category`}
          </span>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            {new Date(result.datePublished).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour12: true,
            })}
          </p>
        </div>
      </li>
    ))}
  </ul>
);

export default NewsResults;
