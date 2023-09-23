const React = require("react")
const Default = require("./default")

function Error404() {
    return (
        <Default>
        <h1>404</h1>
        <p>Page not found</p>
        </Default>
    )
}

module.exports = Error404