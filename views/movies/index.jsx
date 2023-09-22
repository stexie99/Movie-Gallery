const React = require("react")
const Default = require("../default")

function index(data) {
  let moviesFormatted = data.movies.map((movie) => {
    return (
      <div
        key={movie.title}
        className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2"
      >
        <h2>
          <a href={`/movies/${movie.title}`}>{movie.title}</a>
        </h2>
        <a href={`/movies/${movie.title}`}>
          <img src={movie.poster} alt={movie.title} />
        </a>
        <p>Directed by {movie.director}</p>
        <p>
          {movie.genre}, {movie.year}
        </p>
        <br />
      </div>
    )
  })
  return (
    <Default title="Favorites">
      <body className="favorites">
        <main>
          <h1>Movies Collection</h1>
          <div className="row">{moviesFormatted}</div>
        </main>
      </body>
    </Default>
  )
}

module.exports = index
