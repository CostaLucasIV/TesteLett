const axios = require('axios');

exports.scrapProduct = (req, res, next) => {

    const url = req.body.url

    axios.get(url).then(response => {

        if (!response)
            return

        const html = response.data

        const price = getProductPrice(html)
        const availability = price == null ? false : true
        const name = getProductName(html, availability)
        const image_primary = getProductImageUrl(html, availability)

        const jsonResult = {
            price,
            availability,
            name,
            image_primary
        }

        res.status(200).send(JSON.stringify(jsonResult))

    }).catch(function (err) {

        res.status(500).send("Failed to scrap product: " + err)
    })
}

function getProductName(html, availability) {
    var regex = new RegExp(/<h1 class="header-product__title">(.*?)<\/h1>/gm)

    if (!availability)
        regex = new RegExp(/<h1 class="header-product__title--unavailable"> (.*?) <\/h1>/gm)

    return regex.exec(html)[1]
}

function getProductImageUrl(html, availability) {
    var regex = new RegExp(/<img class="showcase-product__big-img js-showcase-big-img lazyload" src="(.*?)"/gm)

    if (!availability)
        regex = new RegExp(/<div class="wrapper-product-unavailable__left"> <img src="(.*?)"/gm)

    return regex.exec(html)[1]
}

function getProductPrice(html) {
    var regex = new RegExp(/class="price-template__text">(.*?)<\/span>/gm)

    var result = regex.exec(html)

    return result == null ? null : result[1]
}