// server.js
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000

require("./app/routes")(app, {})
app.listen(port, () => {
  console.log("We are live on " + port)
})
