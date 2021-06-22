const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.static(__dirname + '/assets'))
app.use(cors())

app.listen(3080, () => console.log('Listening on 3080'))
