const express = require("express")
const app = express()
const path= require("path")

const port = 3030

const indexRoute= require("./routes/main.js")
const aboutRoute = require("./routes/main.js")

app.use("/", indexRoute)

app.use("/about", aboutRoute)

app.use(express.static('public'))

app.listen(port, () => console.log(`Server running in http://localhost:${port}`))