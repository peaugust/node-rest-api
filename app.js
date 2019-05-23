import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConfig from './config/database.config';
import auth from './routes/auth';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(auth);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Tudo funcionando! OK!"});
});

// listen for requests
// app.listen(7000, () => {
//     console.log("Server is listening on port 3000");
// });
// app.route('/')
//     .get((req, res) => {
//         res.send('OK! Tudo funcionando!'); 
//     })
    
// app.route('/books')
// .get((req, res) => {
//     res.json([{
//         id: 1,
//         name: 'Default Book'
//     }])
// })


export default app;
