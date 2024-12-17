import React, { useEffect, useState } from 'react';

export default function Heritage() {
  return (
    <div>
      <h1 className="text-blue-600 text-center">Selection du moment</h1>
      <Film />
    </div>
  );
}

function Film() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'fd4d093f9471bc5a229f04a3cef81242';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setFilms(data.results || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
        <div className="flex flex-wrap gap-4">
        {films.map((film) => (
            <div key={film.id} className="w-1/6 bg-black rounded-xl">
                <img className="shadow rounded-xl" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={`${film.title} poster`} />
                <p className="text-center mt-2 text-white">{film.title}</p>
            </div>
        ))}
        </div>
  );
}
