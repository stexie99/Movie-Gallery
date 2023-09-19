const React = require("react")
const Default = require("../default")

function index(data) {
  let moviesFormatted = data.movies.map((movie) => {
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>Directed by {movie.director}</p>
        <p>
          {movie.genre}, {movie.year}
        </p>
        <br />
      </div>
    )
  })
  return (
    <Default>
      <main>
        <h1>Movies</h1>
        {moviesFormatted}
      </main>
    </Default>
  )
}

module.exports = index
