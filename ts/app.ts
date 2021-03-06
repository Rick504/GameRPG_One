import express from "express"
import session from "express-session"
import { Request, Response, NextFunction } from 'express';
import cors from 'cors'
import testes from './routes/testes';
import auth from './routes/auth';
import crud from './routes/crud';
const app = express()


// Session - settings ---------------------------------------//
app.use(session({  
    secret: "secret",
    resave: true, 
    saveUninitialized: true,
    cookie: { 
        maxAge: 360000 // 3hrs para expirar
    }
}))


// Cors - settings ---------------------------------------//
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors())
    next()
})


// Express - settings -------------------------------------//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Routers -------------------------------------//
app.use(testes, auth, crud);
  

app.listen(3333, () => {
    console.log('listening on localhost:3333');
})