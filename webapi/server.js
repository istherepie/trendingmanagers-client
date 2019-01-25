const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json({
        status: "it works"
    })
})

app.listen(8080, () => {
    console.log("Server is fully armed and operational")
})
