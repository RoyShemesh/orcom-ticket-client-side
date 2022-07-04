import PreviousMap from "postcss/lib/previous-map";

export default function Input({ placeholder, setState, state }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {placeholder.charAt(0).toUpperCase() + placeholder.slice(1)}
      </label>
      <input
        onChange={(e) => setState(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={placeholder}
        type="text"
        value={state}
        placeholder={`Please enter ${placeholder}`}
      />
    </div>
  );
}
