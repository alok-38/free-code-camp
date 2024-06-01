export default function SearchForm() {
  return (
    <form className="bg-[#fbbf24] w-96 p-10 flex items-center">
      <label htmlFor="search-input" className="mr-2">
        Search:
      </label>
      <input
        id="search-input"
        className="flex-grow p-2 border border-gray-300 rounded mr-2"
      />
      <button
        aria-label="Submit"
        className="submit-btn p-2 bg-blue-500 text-white rounded"
      >
        <img
          alt="Submit"
          src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
          className="h-6 w-6"
        />
      </button>
    </form>
  );
}
