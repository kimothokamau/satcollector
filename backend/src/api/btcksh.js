import axios from 'axios';
import express from 'express';
import 'dotenv/config';
import cors from  'cors';

const app = express();

app.use(cors());


let btcusdurl = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'

let usdkesurl = 'https://free.currconv.com/api/v7/convert?q=USD_KES&compact=ultra&apiKey=d0b86711525fc30d9f27'


const btcusdApi = axios.get(btcusdurl);
const usdkesApi = axios.get(usdkesurl);

function currencyFormat(num) {
  // return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  return num.toFixed(2)
}

app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );

app.get('/rate', (request, response) => { 
  axios.all([btcusdApi, usdkesApi])
  .then(axios.spread((...responses) => {
    const btcusdApi = responses[0].data
    const usdkesApi = responses[1].data
    const btcusdprice = Object.values(btcusdApi);
    const usdkesprice = Object.values(usdkesApi);
    const btckes = parseInt(currencyFormat(btcusdprice * usdkesprice))
    // console.log('BTCKES:', btckes)
    // return response.send(btckes)
    // return response.json({ rate: btckes })
    response.json({ btckes})
    console.log(btckes)
    }
  
))
.catch(errors => {
  console.log('Try again later')
  
});
});