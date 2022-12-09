const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static("public"))
app.use(express.urlencoded( { extended: true }))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.send("Hello")
})

app.set("view engine", "ejs")

const emailRouter = require("./routes/email")

app.use("/email", emailRouter)
app.listen(PORT)

console.log(`Server is running on http://localhost:${PORT}`)


