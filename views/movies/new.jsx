const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Movie</h1>
            <form method="POST" action="/movies">
            <div className="form-group">
            <label htmlFor="title">Movie title</label>
            <input className="form-control" id="title" name="title" required />
            </div>
            <div className="form-group">
            <label htmlFor="title">Poster</label>
            <input className="form-control" id="poster" name="poster" />
            </div>
            <div className="form-group">
            <label htmlFor="year">Year</label>
            <input className="form-control" id="year" name="year" />
            </div>
            <div className="form-group">
            <label htmlFor="director">Director</label>
            <input className="form-control" id="director" name="director" />
            </div>
            <div className="form-group">
             <label htmlFor="genre">Genre</label>
             <input className="form-control" id="genre" name="genre" />
            </div>
         
            <input className="btn btn-primary" type="submit" value="Add Movie" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
