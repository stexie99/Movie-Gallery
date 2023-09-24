const React = require("react")
const Default = require("./default")

function Home() {
  return (
    <Default title="Movies Home">
      <body className="home">
        <h1>Milestone Project 2</h1>
        <h2>Welcome to our movie app!</h2>
        <a href="/movies">
          <button className="btn-primary">Movie Gallery</button>
        </a>
      </body>
    </Default>
  )
}

module.exports = Home
