import express from 'express'
import userRoutes from './routes/user_routes.js'

const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/users', userRoutes)



app.get('/', (req, res) => {
    res.send('You are welcome')
})

app.all('/{*any}', (req, res, next) => {
  res.status(404).json({message: 'Resource Not Found'})
})

app.listen(port, () => console.log(`Server running on port ${port}`))
