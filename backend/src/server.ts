import express from 'express';

import './database/connection';

const app = express();



app.use(express.json())

app.get('/users/:id', (request, reponse) => {




    return reponse.json({message: "hello world"})

});

app.listen(3333);