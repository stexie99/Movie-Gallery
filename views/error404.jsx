const React = require("react")
const Default = require("./default")

function Error404() {
  return (
    <Default>
      <body className="error404">
        <h1>404: PAGE NOT FOUND</h1>
        <img width="50%" src="../images/404.jpg" alt="404error" style={{ opacity: 0.9 }}/>
        <p>Oops, sorry, we can't find this page!</p>
      </body>
    </Default>
  )
}

module.exports = Error404
