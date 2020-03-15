import React, {useState, useEffect} from 'react';



export const SearchBar = ({ data }) => {
  
  let array = [];
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  data.map(player => array.push(player.name));

  useEffect(() => {
    const results = array.filter(person =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
  return (
    <div className="Search">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>

      <div className="search-list">
        <ul>
          {searchResults.map(person => (
            <li key={person}>{person}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};




//     return (
//       <div className="App">
//         <form>
//           {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
//           {/* Two-way binding just means that:
//           When properties in the model get updated, so does the UI.
//           When UI elements get updated, the changes get propagated back to the model. */}
//           <label htmlFor="name">Search:</label>
//           <input
//             id="name"
//             type="text"
//             name="textfield"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={handleChange}
//           />
//         </form>
//         <div className="character-list">
//           <ul>
//             {searchResults.map(character => (
//               <li key={character}>{character}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }