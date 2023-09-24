const React = require("react")
const Def = require("../default.jsx")

function edit_form(data) {
  return (
    <Def>
      <body className="edit">
        <main>
          <h1>Edit a Movie </h1>
          <form method="POST" action={`/movies/${data.movie.id}?_method=PUT`}>
            <div className="form-group">
              <label htmlFor="name">Movie Title</label>
              <input
                className="form-control"
                id="title"
                name="title"
                value={data.movie.title}
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Release Year </label>
              <input
                className="form-control"
                type="text"
                id="year"
                name="year"
                value={data.movie.year}
              />
            </div>
            <div className="form-group">
              <label htmlFor="director">Director </label>
              <input
                className="form-control"
                id="director"
                type="text"
                name="director"
                value={data.movie.director}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre </label>
              <input
                className="form-control"
                id="genre"
                type="text"
                name="genre"
                value={data.movie.genre}
              />
            </div>
            <div className="form-group">
              <label htmlFor="poster">Poster </label>
              <input
                className="form-control"
                id="poster"
                type="text"
                name="poster"
                value={data.movie.poster}
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="✎ Submit Updates"
            />
          </form>
        </main>
      </body>
    </Def>
  )
}

module.exports = edit_form
