import  { useState } from "react";
import countriesData from "./resources/countryData.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filtered = [];

    for (let i = 0; i < countriesData.length; i++) {
      if (countriesData[i].name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
        filtered.push(countriesData[i]);
      }
    }

    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  
    window.addEventListener("keydown", handleEscape);
    
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      {showSuggestions && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
