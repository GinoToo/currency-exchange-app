// routes/index.js
const exchangeRatesRoutes = require("./currency_exchange_routers")
module.exports = function (app, db) {
  exchangeRatesRoutes(app, db)
}
