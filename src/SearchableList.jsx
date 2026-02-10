import React, { useState, useMemo } from "react";
import { createPortal } from "react-dom";

export default function SearchableList({
  options = [],
  placeholder = "Search...",
  multiple = false,
  searchable = true,
  usePortal = false,
  renderOption,
  maxVisibleOptions = 100,

  // 🔥 Full Toggle Features
  enableLimit = true,
  enableSelection = true,
  showFooter = true,
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(multiple ? [] : null);

  // 🔎 Filter Logic
  const filteredOptions = useMemo(() => {
    if (!searchable) return options;
    const q = query.trim().toLowerCase();
    return q
      ? options.filter((opt) => opt.toLowerCase().includes(q))
      : options;
  }, [options, query, searchable]);

  // 🚀 Limit Logic (Toggleable)
  const visibleOptions = useMemo(() => {
    return enableLimit
      ? filteredOptions.slice(0, maxVisibleOptions)
      : filteredOptions;
  }, [filteredOptions, enableLimit, maxVisibleOptions]);

  // ✅ Selection Helpers
  const isSelected = (item) =>
    multiple ? selected.includes(item) : selected === item;

  const handleSelect = (item) => {
    if (!enableSelection) return;

    if (multiple) {
      setSelected((prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev, item]
      );
    } else {
      setSelected(item);
    }
  };

  const listUI = (
    <div
      className="w-80 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden flex flex-col"
      style={{
        zIndex: 9999,
        position: usePortal ? "fixed" : "relative",
      }}
    >
      {/* 🔍 Search Toggle */}
      {searchable && (
        <div className="border-b bg-gray-50/50 p-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none
                       focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
      )}

      {/* 📋 List */}
      <ul className="max-h-72 overflow-y-auto p-1 custom-scrollbar">
        {visibleOptions.length > 0 ? (
          visibleOptions.map((item, index) => {
            const selectedState = isSelected(item);

            return (
              <li
                key={`${item}-${index}`}
                onClick={() => handleSelect(item)}
                className={`cursor-pointer rounded-md px-4 py-2 text-sm transition-colors mb-0.5 last:mb-0
                  ${
                    selectedState
                      ? "bg-blue-100 text-blue-800 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {renderOption ? (
                  renderOption(item, {
                    selected: selectedState,
                    index,
                    query,
                  })
                ) : (
                  <div className="flex items-center justify-between">
                    <span>{item}</span>
                    {selectedState && (
                      <span className="text-blue-600 font-bold">✓</span>
                    )}
                  </div>
                )}
              </li>
            );
          })
        ) : (
          <li className="py-10 text-center text-sm text-gray-400">
            No results found
          </li>
        )}

        {/* 🔥 Limit Info */}
        {enableLimit &&
          filteredOptions.length > maxVisibleOptions && (
            <li className="px-4 py-2 text-center text-xs text-gray-400 bg-gray-50 italic">
              Showing first {maxVisibleOptions} of {filteredOptions.length}
            </li>
          )}
      </ul>

      {/* 🧾 Footer Toggle */}
      {showFooter &&
        enableSelection &&
        ((multiple && selected.length > 0) ||
          (!multiple && selected)) && (
          <div className="border-t bg-gray-50 px-4 py-2.5 text-xs text-gray-600">
            <span className="font-semibold text-gray-400 uppercase tracking-wider">
              Selected:
            </span>{" "}
            <span className="text-blue-700">
              {multiple ? selected.join(", ") : selected}
            </span>
          </div>
        )}
    </div>
  );

  // 🌐 Portal Support
  if (usePortal) {
    return createPortal(
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <div className="pointer-events-auto">{listUI}</div>
      </div>,
      document.body
    );
  }

  return listUI;
}
