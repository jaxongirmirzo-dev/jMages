import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const ACCESS_KEY = "zyWLdhd-AvIYO1ZZ9dAjBklP3MibTDKAmSLxPDkKhjo";

function Home() {
  const [images, setImages] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (searchParams) {
      axios(url)
        .then((data) => setImages(data.data))
        .catch((err) => console.log(err));
    }
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.trim() === "") {
      toast.error("Search something");
    } else {
      setUrl(
        `https://api.unsplash.com/search/photos?query=${searchParams}&per_page=30&client_id=` +
          ACCESS_KEY
      );
    }
  };

  return (
    <div className="flex flex-col">
      <form className="ml-22 my-6 block" onSubmit={handleSubmit} action="">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            className="block w-[300px]"
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchParams(e.target.value)}
          />
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </label>
      </form>
      {images && (
        <ul className="grid grid-cols-1 mt-[50px] mr-[50px] ml-[50px] sm:grid-cols-2 md:grid-cols-3 ">
          {images.results.map((image) => (
            <li key={image.id}>
              <img
                src={image.urls.regular}
                alt={image.alt_description}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
