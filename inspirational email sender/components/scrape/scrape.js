const request = require('request')
const cheerio = require('cheerio')

request('https://quotepark.com/inspirational-quotes/', (error, response, html) => {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html)

        const quote = $('.blockquote-text')
        const quoteAuthor = $('.blockquote-origin')

        const inspirationalQuotes = []
        $('.blockquote').each((i, el) => {
          const quote = $(el)
          .find('.blockquote-text')
          .text()

          const quoteAuthor = $(el)
          .find('.blockquote-origin')
          .text()

          const quoteObj = {
            quote: quote,
            quoteAuthor: quoteAuthor
          }
          inspirationalQuotes.push(quoteObj)
        })
        console.log(inspirationalQuotes)
    }
})

