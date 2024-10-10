import express from 'express'
import tarefaRouter from './routers/tarefaRouter.js';
import conectDB from './config/db.js';

conectDB()


const app = express()
app.use(express.json());  // Middleware para analisar o corpo JSON
app.use('/api/tarefas', tarefaRouter)

const PORT = 3000

app.use(express.json())

app.use('/tarefas', tarefaRouter)
app.listen(PORT, ()=>{
    console.log(`Servidor sendo executado na porta: http://localhost:${PORT}`)
})