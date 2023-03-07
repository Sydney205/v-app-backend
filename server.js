// Server Engine Room...
const express = require('express')
const app = express()
const path = require('path')

// Port variable
const PORT = process.env.PORT || 3500

// Middlewares
app.use(express.static('public'))
app.use('/', require('./routes/root'))

// 404 Routing
app.all('*', (req, res) => {
    res.status(404) // Not Found
    if(req.accepts('.html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('.json')) {
        res.json({ "message": "404 Error Not Found"})
    } else {
        res.type('Not found Error... status code 404')
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})