const ALPHA_VANTAGE_KEY = 'H10T3OLLBRCKL9V1';
const symbol = 'IEP';
const interval = '5min';
const searchBar = 'apple'

async function timeSeriesIntraday() {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//timeSeriesIntraday();

async function timeSeriesDaily() {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//timeSeriesDaily();

async function timeSeriesWeekly() {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//timeSeriesWeekly();

async function timeSeriesWeeklyAdjusted() {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//timeSeriesWeeklyAdjusted();

async function timeSeriesMonthly() {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`);
    let data = await response.json();
    console.log(data);
}
//timeSeriesMonthly();

async function timeSeriesMonthlyAdjusted() {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//timeSeriesMonthlyAdjusted();

async function quoteEndpoint() {
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//quoteEndpoint();

async function searchEndpoint() {
    const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchBar}&apikey=${ALPHA_VANTAGE_KEY}`)
    let data = await response.json();
    console.log(data);
}
//searchEndpoint();