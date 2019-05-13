import express from 'express';

const app = express();

app.route('/')
    .get((req, res) => {
       res.send('OK! Tudo funcionando!'); 
    })
    
app.route('/books')
.get((req, res) => {
    res.json([{
        id: 1,
        name: 'Default Book'
    }])
})
export default app;