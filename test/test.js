// test/test.js
const { expect } = require("chai")

const serverURL = "http://127.0.0.1:8000"
const request = require("supertest")(serverURL)

describe("Test", function () {
  it("should return true", function () {
    expect("test").to.be.a("number")
  })
})

// describe("amount with specific currency, and show converted values in all other currencies", function () {
//   it("Should return crrency as number", async function () {
//     const response = await request.get("/conversion?base=usd&amount=100")
//     expect(response.status).to.eql(200)
//     let data = response.body
//     expect(data["CAD"]).to.be.a("number")
//   })
// })

// describe("get historical exchange rates", function () {
//   it("Should return date key and crrency as number", async function () {
//     const response = await request.get(
//       "/history?from=2021-01-01&to=2021-01-12&base=USD"
//     )
//     expect(response.status).to.eql(200)
//     let data = response.body
//     expect(data["2021-01-08"]["CAD"]).to.be.a("number")
//   })
// })
