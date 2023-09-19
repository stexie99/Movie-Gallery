const React = require("react")
const Default = require("../default")

function index(data) {
  let moviesFormatted = data.movies.map((movie) => {
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
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
