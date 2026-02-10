import SearchableList from "./SearchableList";

export default function App() {
  const frameworks = [
    "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "Vue.js", "Angular", "Svelte", "Python", "Django", "Rust",
  ];

  return (
    <div className="h-screen w-full bg-slate-100 flex justify-center items-center">
      <SearchableList
        options={frameworks}
        multiple={true}
        searchable={true}
        usePortal={false}
        maxVisibleOptions={50}

        // 🔥 Toggle Features
        enableLimit={true}
        enableSelection={true}
        showFooter={true}

        renderOption={(option, { selected, query }) => (
          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full border transition-all ${
                selected
                  ? "bg-blue-600 border-blue-400"
                  : "bg-gray-300 border-gray-200"
              }`}
            />
            <span className="flex-grow">
              {option}
              {query && (
                <span className="ml-2 text-[10px] bg-blue-50 text-blue-400 px-1.5 py-0.5 rounded uppercase">
                  match
                </span>
              )}
            </span>
          </div>
        )}
      />
    </div>
  );
}
