
const express = require("express")
const router = express()

const verify = require("../components/email")


router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.render("email/new")
    res.redirect("/inspireme")
})

router.post("/", (req, res) => {
    res.send("Create User")
})
router.post("/inspireme", (req, res) => {
    //verifyUserEmail(req.body.name, req.body.email)
    res.render("email/inspire")
})

module.exports = router