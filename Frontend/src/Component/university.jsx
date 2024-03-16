import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function University() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    // Fetch universities based on selected country
    fetchUniversities(e.target.value);
  };

  const fetchUniversities = (country) => {
    // Here you can fetch universities based on the selected country from an API or any other data source
    // For demo purpose, I'll provide a static list of universities based on country
    let universitiesByCountry = [];

    // Static data - Replace this with actual API call or data source
    switch (country) {
      case "USA":
        universitiesByCountry = ["Harvard University", "Stanford University", "MIT"];
        break;
      case "UK":
        universitiesByCountry = ["University of Oxford", "University of Cambridge", "Imperial College London"];
        break;
      case "Canada":
        universitiesByCountry = ["University of Toronto", "University of British Columbia", "McGill University"];
        break;
      // Add more cases for other countries as needed
      default:
        universitiesByCountry = [];
    }

    setUniversities(universitiesByCountry);
  };

  return (
    <div>
      <h2 className="text-yellow border border-yellow px-4 py-2 rounded-md">Select a country:</h2>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        {/* Add more options for other countries */}
      </select>

      <h2>List of Universities:</h2>
      <ul>
        {universities.map((university, index) => (
          <li key={index}>{university}</li>
        ))}
      </ul>
    </div>
  );
}

export default University;
