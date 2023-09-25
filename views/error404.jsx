const React = require("react")
const Default = require("./default")

function Error404() {
    return (
        <Default>
             <h1>404: PAGE NOT FOUND</h1>
              <img width='50%'src='../images/404.jpg' alt='404error' />
              <p>Oops, sorry, we can't find this page!</p>
          
        </Default>
    )
}

module.exports = Error404