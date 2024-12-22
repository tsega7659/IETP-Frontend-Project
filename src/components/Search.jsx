import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon, X } from 'lucide-react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Mock data for auto-fill suggestions
  const mockSuggestions = [
    '1', '02', '03', '04'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query) {
        const filteredResults = mockSuggestions.filter(item =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (item) => {
    setQuery(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a Bus by Bus Number..."
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X size={18} />
            </button>
          )}
          <SearchIcon className="w-5 h-5 text-gray-400 ml-2" />
        </div>
      </div>
      {isOpen && results.length > 0 && (
        <ul
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
        >
          {results.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-colors duration-150 ease-in-out"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

