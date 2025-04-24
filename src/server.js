import express from 'express'

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('You are welcome')
})


app.all('/{*any}', (req, res, next) => {
    res.status(404).send('Resource not Found')
    next()
})


app.listen(port, () => console.log(`Server running on port ${port}`))
