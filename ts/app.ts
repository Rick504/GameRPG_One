import express from "express"
import session from "express-session"
import { Request, Response } from 'express';
import cors from 'cors'
import routes from './routes';
const app = express()


// Session - settings ---------------------------------------//
app.use(session({  
    secret: "secret",
    resave: true, 
    saveUninitialized: true,
    // cookie: { 
    //     key: "is8-2inD-a83-dhuw-de", // chave criada por mim
    //     maxAge: 360000 // 3hrs para expirar
    // }
}))


// Cors - settings ---------------------------------------//
app.use((req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers": "Authorization')
    res.header('Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Content-Type": "application/json;charset=UTF-8')
    app.use(cors())
})


// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Routers -------------------------------------//
app.use(routes);
  

app.listen(3333, () => {
    console.log('listening on localhost:3333');
})