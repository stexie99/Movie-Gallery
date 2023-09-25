const React = require("react")

function Default(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <nav className="navbar navbar-expand">
            <ul className="navbar-nav mr-auto mt-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="/movies">
                  Gallery
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="/movies/new">
                  Add Movie
                </a>
              </li>
            </ul>
        </nav>
        <div>{props.children}</div>
      </body>
    </html>
  )
}

module.exports = Default
