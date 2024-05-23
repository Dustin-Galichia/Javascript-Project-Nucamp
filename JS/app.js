const ALPHA_VANTAGE_KEY = 'H10T3OLLBRCKL9V1';
const symbol = 'IEP';
const interval = '5min';
const searchBar = 'apple';

const test = {
    'Global Quote': {
      '01. symbol': 'IEP',
      '02. open': '16.4900',
      '03. high': '16.5300',
      '04. low': '16.2500',
      '05. price': '16.5300',
      '06. volume': '753788',
      '07. latest trading day': '2024-05-22',
      '08. previous close': '16.4300',
      '09. change': '0.1000',
      '10. change percent': '0.6086%'
    }
}


class AlphaVantageAPI {
    constructor(apiKey, symbol) {
        this.apiKey = apiKey;
        this.symbol = symbol;
        this.baseURL = 'https://www.alphavantage.co/query';
    }

    async fetchData(functionType) {
        //const url = `${this.baseURL}?function=${functionType}&symbol=${this.symbol}&apikey=${this.apiKey}`;
        const response = await fetch(`${this.baseURL}?function=${functionType}&symbol=${this.symbol}&apikey=${this.apiKey}`)
        const data = await response.json();
        console.log(data);
        return data
    }

    async timeSeriesIntraday(interval = "5min") {
        return this.fetchData(`TIME_SERIES_INTRADAY&interval=${interval}`);
    }

    async timeSeriesDaily() {
        return this.fetchData(`TIME_SERIES_DAILY`);
    }

    async timeSeriesWeekly() {
        return this.fetchData(`TIME_SERIES_WEEKLY`);
    }

    async timeSeriesWeeklyAdjusted() {
        return this.fetchData(`TIME_SERIES_WEEKLY_ADJUSTED`);
    }

    async timeSeriesMonthly() {
        return this.fetchData(`TIME_SERIES_MONTHLY`);
    }

    async timeSeriesMonthlyAdjusted() {
        return this.fetchData('TIME_SERIES_MONTHLY_ADJUSTED');
    }

    async quoteEndpoint() {
        return this.fetchData('GLOBAL_QUOTE');
    }

    async searchEndpoint(keywords) {
        const url = `${this.baseURL}?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${this.apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        return data;
    }
}

class Stock {
    constructor(symbol, numShares, purchasePrice, purchaseDate) {
        this.symbol = symbol;
        this.shares = numShares;
        this.purchasePrice = purchasePrice;
        this.purchaseDate = purchaseDate;
    }

    async fetchCurrentPrice() {
        //const av = new AlphaVantageAPI(ALPHA_VANTAGE_KEY, symbol)
        //const response = await av.quoteEndpoint(this.symbol);
        //const data = await response['Global Quote']['05. price'];

        const response = test;
        let data = parseFloat(response['Global Quote']['05. price'])
        //console.log(data);

        return data;
    }

    async getCurrentValue() {
        const currentPrice = await this.fetchCurrentPrice();
        return this.shares * currentPrice;
    }//

    getPurchaseValue() {
        //console.log(this.shares * this.purchasePrice)
        return this.shares * this.purchasePrice;
    }
}


class Portfolio {
    constructor() {
        this.stocks = [];
    }

    addStock(symbol, numShares, purchasePrice, purchaseDate){
        for(let i = 0; i < this.stocks.length; i++) {
            if(symbol === this.stocks[i].symbol) {
                this.stocks[i].shares += numShares;
                return;
            }
        }
        const stock = new Stock(symbol, numShares, purchasePrice, purchaseDate);
        this.stocks.push(stock);
    }

    subStock(symbol, numShares){
        for(let i = 0; i < this.stocks.length; i++) {
            if(symbol === this.stocks[i].symbol) {
                this.stocks[i].shares -= numShares;
                return;
            }
        }
    }

    removeStock(symbol) {
        for(let i = 0; i < this.stocks.length; i++) {
            if(symbol === this.stocks[i].symbol) {
                this.stocks.splice(i, 1);
                return;
            }
        }
    }

    updateStock(symbol, numShares) {
        for(let i = 0; i < this.stocks.length; i++) {
            if(symbol === this.stocks[i].symbol) {
                console.log(this.stocks[i].shares + numShares)
                
            }
        }
    }

    async getTotalValue() {
        let totalValue = 0;
        for (const stock of this.stocks) {
            totalValue += await stock.getCurrentValue();
        }
        //console.log(totalValue);
        return totalValue;
    }

    async getTotalPurchaseValue() {
        return this.stocks.reduce((total, stock) => total + stock.getPurchaseValue(), 0);
    }
}
