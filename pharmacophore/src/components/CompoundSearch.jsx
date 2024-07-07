import React, { useState } from 'react';
import { levenshteinEditDistance } from 'levenshtein-edit-distance';
import axios from 'axios';

const CompoundSearch = () => {
  const [query, setQuery] = useState('');

  const [BestMatch,setBestMatch]=useState(null);
  const calculateSimilarity = (str1, str2) => {
    if(str1==null){
        str1="";
    }
    if(str2==null){
        str2=null;
    }
    return levenshteinEditDistance(str1.toLowerCase(), str2.toLowerCase());
};

const searchBestMatch = (compounds, query) => {
    let bestMatch = null;
    let bestScore = Infinity;

    compounds.forEach(compound => {
        const nameScore = calculateSimilarity(compound.name, query);
        const isomericScore = calculateSimilarity(compound.Isomeric_SMILES, query);
        const canonicalScore = calculateSimilarity(compound.Canonical_SMILES, query);

        // Choose the highest similarity score among name, Isomeric_SMILES, and Canonical_SMILES
        const maxScore = Math.min(nameScore, isomericScore, canonicalScore);

        if (maxScore < bestScore) {
            bestScore = maxScore;
            bestMatch = compound;
        }
    });

    return bestMatch;
};

  const handleSearch = async() => {
    alert(`Searching for: ${query}`);
    try {
        const response = await axios.get(`/api/getAllData`);
        console.log(response)
        setBestMatch(searchBestMatch(response.data,query))
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="bg-gray-100 py-20" id='Search'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-blue-600 mb-8">Search for Compounds</h2>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="w-full md:w-1/2 p-4 rounded-l-lg border-t border-b border-l border-gray-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter compound name or ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="p-4 rounded-r-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Search
          </button>
        </div>
      
      </div>
      {BestMatch&&<li  className="p-4 bg-white shadow-md rounded mb-4 hover:bg-blue-50 transition duration-300 ease-in-out">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 text-lg">{BestMatch.name}</span>
                                <span className="text-gray-500">{BestMatch.DBName}</span>
                            </div>
                        </li>}

    </div>
  );
};

export default CompoundSearch;
