require('./config/db')
const express = require ('express');
const router = require('./Router/router');
const port  = 2003;
const app = express()


app.use(express.json())

app.get('/api', (req, res) => {
    res.send('Hello and Welcome')
})
app.use('/api', router)


app.listen(port, () => {
    console.log(`server is listening to ${port}`)
})
