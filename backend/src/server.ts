import express, { json, urlencoded } from 'express';
import Route from './routes/routes';
import cors from 'cors'

const app = express()
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(json())

app.use(Route)

app.listen(3000, () => console.log('Server is listening!'))