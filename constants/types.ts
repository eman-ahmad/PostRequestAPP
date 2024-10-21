// Define the structure of each currency
export type Currency = {
    code: string;
    description: string;
    rate: string;
    symbol: string;
  };
  
  // Define the structure of the API response
  export type BitcoinData = {
    time: {
      updated: string;
    };
    disclaimer: string;
    bpi: {
      USD: Currency;
      GBP: Currency;
      EUR: Currency;
    };
  };
  