import React, { useState, useEffect } from 'react';
import './index.css'

function MyComponent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3")
      .then((data) => {
        return data.json()
      })
      .then(dataJson => {
        setMovies(dataJson.results);
        // console.log(57,movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  console.log(59, movies);

  return (
    <>
    
      {movies.length > 0 ? (
        <ul>
          <h1>My Movies</h1>
          {movies.map((movie, index) => (
            <>

              <div className='block'>

                <div className="img">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="info">
                  <li id='title' key={index}>{movie.title}</li>
                  <li id='date' key={index}>{movie.release_date}</li>
                  <li id='lang' key={index}>{movie.original_language}</li>
                  <li id='overview' key={index}>{movie.overview}</li>
                </div>
              </div>
            </>
          ))}
        </ul>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FF156D" stroke="#FF156D" stroke-width="5" r="5" cx="20" cy="50"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FF156D" stroke="#FF156D" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
      )}

    </>
  )
}

export default MyComponent;

