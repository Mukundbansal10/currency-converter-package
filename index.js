import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_tYxVvjuyuA2s3yjSMCYOAz6IAsLAqgLzgc3I6WEf');

export async function ConvertCurrency(fromCurrency,toCurrency,units){
    
   const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}
