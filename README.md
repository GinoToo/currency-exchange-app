# Currency Exchange App

An currency exchange API using Express.js.
it have two mean function 
1. Conversion: Client provide an amount with specific currency, it will show converted values in all other currencies.
2. ExchangeRate Year-over-Year Change: Client provide from date and to date with specific currency, 
   it will compute the daily percentage change for all individual currencies.


## Installation

1.  Install Dependencies

    * [Node.js (version 6.x is recommended)](https://nodejs.org/en/)

3.  Go to the project's root directory **cd /my/path/to/directory**
4.  Run **npm install**
5.  Start using it! **npm start**

## Usage

#### Conversion
Quote against a different currency by setting the base parameter and amount parameter in your request

```http
GET /conversion?base=USD&amount=100
```

#### ExchangeRate Year-over-Year Change
Get daily percentage change for a time period.

```http
GET /history?from=2021-01-01&to=2021-01-12&base=USD
```



