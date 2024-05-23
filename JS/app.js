const ALPHA_VANTAGE_KEY = 'H10T3OLLBRCKL9V1';
const symbol = 'IEP';
const interval = '5min';
const searchBar = 'apple';

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
        console.log(data);
        return data;
    }
}









/*

//Portfolio Functions
const myPortfolio = [];
function addStockToPortfolio(stockTicker, quantity) {
    const existingStock = myPortfolio.find(stock => stock.ticker === stockTicker);
    if (existingStock) {
        existingStock.quantity += quantity;
    } else {
        myPortfolio.push({ticker: stockTicker, quantity: quantity});
    }
}
function removeStockFromPortfolio(stockTicker) {
    const index = myPortfolio.findIndex(stock => stock.ticker === stockTicker);
    if (index !== -1) {
        myPortfolio.splice(index, 1);
    }
}

function updateStockQuantity(stockTicker, quantity) {
    const stock = myPortfolio.find(stock => stock.ticker === stockTicker);
    if (stock) {
        stock.quantity = quantity;
    }
}

function getPortfolio() {
    return myPortfolio;
}

//addStockToPortfolio('IEP', 20);
//addStockToPortfolio('APPL', 20);
//addStockToPortfolio('IBM', 20);
//addStockToPortfolio('IEP', 20);
//console.log(myPortfolio);
//removeStockFromPortfolio('IBM');
//console.log(getPortfolio());*/