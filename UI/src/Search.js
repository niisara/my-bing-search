import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import WebResults from "./results/WebResults";
import NewsResults from "./results/NewsResults";
import ImagesResults from "./results/ImagesResults";
import VideosResults from "./results/VideosResults";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Web Search");
  const [searchType, setSearchType] = useState(
    location.pathname.replace("/", "") || "web"
  );

  const searchBing = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const searchUrl = `/${searchType}?q=${encodeURIComponent(query)}`;
    navigate(searchUrl, { replace: true });

    let url = `${process.env.REACT_APP_BING_END_POINT}${
      searchType === "web" ? "search" : `${searchType}/search`
    }`;
    try {
      const response = await axios.get(url, {
        params: { q: query },
        headers: {
          "Ocp-Apim-Subscription-Key":
            process.env.REACT_APP_BING_SEARCH_API_KEY,
        },
      });
      if (response.data) {
        switch (searchType) {
          case "web":
            setResults(response.data.webPages.value);
            break;
          default:
            setResults(response.data.value);
        }
      } else {
        console.log(`${searchType} search did not return expected results.`);
      }
    } catch (error) {
      console.error(`${searchType} search failed:`, error);
    }
  };

  const searchOption = async (option, text) => {
    const searchUrl = `/${option}?q=${encodeURIComponent(query)}`;
    navigate(searchUrl, { replace: true });

    setIsDropdownOpen(false);
    setSearchType(option);
    try {
      let url = "https://api.bing.microsoft.com/v7.0/";
      switch (option) {
        case "web":
          url += "search";
          break;
        case "news":
          url += "news/search";
          break;
        case "images":
          url += "images/search";
          break;
        case "videos":
          url += "videos/search";
          break;
        default:
          return;
      }
      const response = await axios.get(url, {
        params: { q: query },
        headers: {
          "Ocp-Apim-Subscription-Key":
            process.env.REACT_APP_BING_SEARCH_API_KEY,
        },
      });
      if (response.data) {
        switch (option) {
          case "web":
            setResults(response.data.webPages.value);
            break;
          default:
            setResults(response.data.value);
        }
      } else {
        console.log(`${searchType} search did not return expected results.`);
      }
    } catch (error) {
      console.error(`${option} search failed:`, error);
    }
  };

  const searchText = (text) => {
    switch (text) {
      case "web":
        return setButtonText("Web Search");
      case "news":
        return setButtonText("News Search");
      case "images":
        return setButtonText("Image Search");
      case "videos":
        return setButtonText("Video Search");
      default:
        return;
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const q = searchParams.get("q");
    if (q) setQuery(q);

    const pathSegments = location.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    if (lastSegment) {
      searchText(lastSegment);
      searchBing();
    }
  }, [location.search, searchType, location.pathname, searchBing]);

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <form onSubmit={searchBing} className="inline-flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Bing"
            className="flex-1 h-[46px] mr-1.5 p-2 text-gray-600 border-gray-200 rounded focus:outline-none focus:border-blue-500 ring-1 ring-inset ring-gray-300"
          />
          <button
            type="submit"
            className="w-32 h-[46px] relative inline-flex items-center justify-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            {buttonText}
          </button>
          <div className="relative h-[46px] -ml-px block">
            <button
              type="button"
              className="relative inline-flex items-center rounded-r-md h-[46px] bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              id="option-menu-button"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="sr-only">Open options</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="option-menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <button
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="option-menu-item-0"
                    onClick={() => searchOption("web")}
                  >
                    Web Search
                  </button>
                  <button
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="option-menu-item-2"
                    onClick={() => searchOption("news")}
                  >
                    News Search
                  </button>
                  <button
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="option-menu-item-1"
                    onClick={() => searchOption("images")}
                  >
                    Images Search
                  </button>
                  <button
                    className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="option-menu-item-1"
                    onClick={() => searchOption("videos")}
                  >
                    Videos Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="mt-4 space-y-2">
        <Routes>
          <Route path="/web" element={<WebResults results={results} />} />
          <Route path="/news" element={<NewsResults results={results} />} />
          <Route path="/images" element={<ImagesResults results={results} />} />
          <Route path="/videos" element={<VideosResults results={results} />} />
          <Route path="/" element={<WebResults results={results} />} />
        </Routes>
      </div>
    </>
  );
};

export default Search;
