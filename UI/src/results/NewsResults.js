const NewsResults = ({ results }) => (
  <>
    <div>News result</div>
    {results?.map((result, index) => (
      <div key={index} className="border-b border-gray-200 p-2">
        <a
          href={result.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {result.name}
        </a>
        <p className="text-sm text-gray-600">{result.snippet}</p>
      </div>
    ))}
  </>
);

export default NewsResults;
