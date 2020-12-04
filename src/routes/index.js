const express = require('express')
const router = express.Router()

const crawler = require('../controllers/crawler')

router.get('/', (req, res, next) => {
    res.status(200).send('Envie uma url ou cheque o status da aplicação.')
})

router.get('/status', (req, res, next) => {
    res.status(200).send('OK!')
})

router.post('/scrap_product', crawler.scrapProduct)

module.exports = router