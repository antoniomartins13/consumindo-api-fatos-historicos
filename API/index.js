import express from 'express'
import {retornaFato, validaAno} from './AnoFato.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'https://consumindo-api-criada.vercel.app/',
  }))

app.get("/",(req, res) => {
    let ano = req.query.ano
    
    if(validaAno(ano)){
        let fato = retornaFato(ano)
        
        res.json({fato: fato})
    }else{
        res.status(404).json({error: "Ano ínvalido ou digitação errada"})
    }
})

app.listen(8080, () => {
    let data = new Date()
    console.log(`Servidor iniciado em ${data}`)
})