import express, { request } from "express"
import dotenv from "dotenv"
import cors from "cors"
import pg from "pg"

// app is just commone used
const app = express()

app.use(express.json())

dotenv.config()

app.use(cors())

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})

app.get('/', (request, repsond) => {
    repsond.status(200).json('my route is working ')
})

app.get('/news', async (request,repsond) =>{
    const table = await db.query('SELECT * FROM news')
    const newsPost = table.rows
    repsond.status(200).json(newsPost)
}
)


app.post('/news', async (request,repsond) => {
    const newsForm = request.body
    const dbQuery = await db.query('insert INTO news(news , name) VALUES($1 , $2)',[newsForm.id, newsForm.name])
    repsond.status(200).json({news: "news posts"})
}
)

app.listen(7889,() => {
    console.log('server on http://localhost:7889')
})



// app.get(`/guestbook`,async (req,res) =>{
//     const table = await db.query(`SELECT * FROM guestbook`)

//     const guestbook = table.rows

//     res.status(200).json(guestbook)
// })

// app.post(`/guestbook`, async (req, res) => {

//     const guestForm = req.body

//     const dbQuery = await db.query(`INSERT INTO guestbook (guest_book, content) VALUES ($1, $2)`,[guestForm.guest_name, guestForm.content ])

//     res.status(200).json({guestbook: "guest message"})
// })