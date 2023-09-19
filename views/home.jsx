const React = require("react")
const Default = require("./default")

function Home() {
  return (
    <Default>
      <h1>Home</h1>
      <h2>Welcome to our movie app!</h2>
      <a href="/movies">
        <button className="btn-primary">Movies Page</button>
      </a>
    </Default>
  )
}

module.exports = Home
