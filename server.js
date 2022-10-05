const express = require('express')
const app = express()
const path = require('path');


const uploadFile = require('./upload')


app.post('/upload', async (req, res) => {

    const filePath = path.join(__dirname, 'upload/imagem.jpg')

    try {
        const path = await uploadFile(req, filePath)
        res.send({ status: 'success', message: path })
    }
    catch (e) {
        res.send({ status: 'error', message: e })
    }
})


app.listen(3333, () => console.log('server is runing...'))