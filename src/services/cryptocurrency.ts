import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const urlBase = process.env.COINMARKETCAP_URL;

export default async (symbol: string) => {
  return await axios.get(urlBase + '/v1/cryptocurrency/listings/latest', {
    headers: {
      'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_KEY,
      "Content-Type": "application/json"
    }
  }).then(res => {
    const coins = res.data.data;

    return coins.filter((coin: any) => coin.symbol == symbol ? coin : false)
  }).catch(error => {
    return false;
  });
}