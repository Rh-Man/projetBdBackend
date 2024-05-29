import React, { useEffect, useState } from "react";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Faire une requête fetch à l'API backend pour récupérer la liste des auteurs
    fetch("http://localhost:3000/authors") // Assurez-vous que cette URL est correcte
      .then((response) => response.json())
      .then((data) => setAuthors(data))
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <div>
      <h1>List of Authors</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;
