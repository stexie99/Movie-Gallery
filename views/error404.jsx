const React = require("react")
const Default = require("./default")

function Error404() {
  return (
    <Default>
      <body className="error404">
        <h1>Oops, sorry, we can't find this page!</h1>
        <img src="../images/404.jpg" alt="404error" style={{ opacity: 0.9, width: "50%", height: "auto" }}/>
      </body>
    </Default>
  )
}

module.exports = Error404
