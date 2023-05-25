import express from 'express';
import { retornaFato, validaAno } from './AnoFato.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500',
}));

app.get("/", (req, res) => {
  let ano = req.query.ano;

  if (validaAno(ano)) {
    let fato = retornaFato(ano);

    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.json({ fato: fato });
  } else {
    res.status(404).json({ error: "Ano inválido ou digitação errada, tente um ano de 1930 a 2023" });
  }
});

app.listen(8080, () => {
  let data = new Date();
  console.log(`Servidor iniciado em ${data}`);
});
