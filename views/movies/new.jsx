const React = require("react")
const Def = require("../default")

function yearOptions() {
  const currentYear = new Date().getFullYear()
  const years = []
  // Generate options from 1888 to the current year (2023)
  // The first ever movie is believed to be Roundhay Garden Scene, made in 1888
  for (let year = 1888; year <= currentYear; year++) {
    years.push(
      <option key={year} value={year}>
        {year}
      </option>
    )
  }
  return years
}
function new_form() {
  return (
    <Def title="Add a New Movie">
      <body className="new">
        <main>
          <h1>Add a New Movie</h1>
          <form method="POST" action="/movies">
           <div className="form-group">
              <label htmlFor="title">Movie title</label>
              <input
                className="form-control"
                id="title"
                name="title"
                required
              />
            </div>
            <div className="form-group">
            <label htmlFor="poster">Poster</label>
            <input className="form-control" id="poster" name="poster" />
            <p>leave blank if no poster is found</p>
            </div>
            <div className="form-group">
            <label htmlFor="year">Year</label>
            <select className="form-control" id="year" name="year">
              {yearOptions()}
            </select>
            </div>
            <div className="form-group">
              <label htmlFor="director">Director</label>
              <input className="form-control" id="director" name="director" />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input className="form-control" id="genre" name="genre" />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Movie"
            />
          </form>
        </main>
      </body>
    </Def>
  )
}

module.exports = new_form
