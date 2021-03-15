// routes/currency_exchange_routers.js

const { exchangeRates } = require("exchange-rates-api")
const _ = require("lodash")
const { format, parse, isValid, addYears } = require("date-fns")

module.exports = function (app, db) {
  app.get("/conversion", async (req, res) => {
    //console.log(req.query)
    let base = req.query.base
    let amount = req.query.amount

    let latestRates = await exchangeRates().latest().base(base).fetch()
    let convertion = {}
    _.forEach(
      latestRates,
      (rate, currencyKey) => (convertion[currencyKey] = rate * amount)
    )

    res.send(convertion)
  })

  app.get("/history", async (req, res) => {
    let from = req.query.from
    let to = req.query.to
    let base = req.query.base

    let currentYearHistoryDailyRates = await exchangeRates()
      .from(from)
      .to(to)
      .base(base)
      .fetch()

    let lastYearFrom = format(
      addYears(parse(from, "yyyy-mm-dd", new Date()), -1),
      "yyyy-mm-dd"
    )
    let lastYearTo = format(
      addYears(parse(to, "yyyy-mm-dd", new Date()), -1),
      "yyyy-mm-dd"
    )

    let lastYearHistoryDailyRates = await exchangeRates()
      .from(lastYearFrom)
      .to(lastYearTo)
      .base(base)
      .fetch()

    let history = {}

    _.forEach(currentYearHistoryDailyRates, (currency, dateKey) => {
      const lastYearDateKey = format(
        addYears(parse(dateKey, "yyyy-mm-dd", new Date()), -1),
        "yyyy-mm-dd"
      )

      history[dateKey] = {}

      _.forEach(currency, (rate, currencyKey) => {
        //percentage change
        if (_.get(lastYearHistoryDailyRates, lastYearDateKey)) {
          const currentRate = rate
          const lastYearRate = _.get(lastYearHistoryDailyRates, lastYearDateKey)
            ? lastYearHistoryDailyRates[lastYearDateKey][currencyKey]
            : 0

          history[dateKey][currencyKey] =
            ((currentRate - lastYearRate) / currentRate) * 100.0
        } else {
          history[dateKey][currencyKey] = null
        }
      })
    })

    res.send(history)
  })
}
