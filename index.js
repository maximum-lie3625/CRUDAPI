import express from 'express';
import bodyParser from 'body-parser';
const app = express();

import userRoutes from './ROUTES/users.js'

const PORT = 5000

app.use(bodyParser.json());

app.use('/users',userRoutes)

app.get( '/', (req, res) => {console.log('[GET ROUTE]');res.send({ message: "Welcome to the API!" })});


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
