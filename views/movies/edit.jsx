const React = require("react")
const Def = require("../default.jsx")

function yearOptions() {
  const currentYear = new Date().getFullYear()
  const years = []
  // Generate options from 1888 to the current year (2023)
  // The first ever movie is believed to be Roundhay Garden Scene, made in 2023
  for (let year = 1888; year <= currentYear; year++) {
    years.push(
      <option key={year} value={year}>
        {year}
      </option>
    )
  }
  return years
}

function edit_form(data) {
  return (
    <Def title={`Edit ${data.movie.title}`}>
      <body className="edit">
        <main>
          <h1>Edit a Movie </h1>
          <form method="POST" action={`/movies/${data.movie.id}?_method=PUT`}>
            <div className="form-group">
              <label htmlFor="title">Movie Title</label>
              <input
                className="form-control"
                id="title"
                name="title"
                defaultValue={data.movie.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="director">Director </label>
              <input
                className="form-control"
                id="director"
                type="text"
                name="director"
                defaultValue={data.movie.director}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Release Year</label>
              <select
                className="form-control"
                id="year"
                name="year"
                defaultValue={data.movie.year}
              >
                {yearOptions()}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre </label>
              <input
                className="form-control"
                id="genre"
                type="text"
                name="genre"
                defaultValue={data.movie.genre}
              />
            </div>
            <div className="form-group">
              <label htmlFor="poster">Poster </label>
              <input
                className="form-control"
                id="poster"
                type="text"
                name="poster"
                defaultValue={data.movie.poster}
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
