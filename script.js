import dotenv from 'dotenv';
import request from 'request';
import pkg from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import express from 'express';  // Express 모듈 추가
import cors from 'cors'; 

dotenv.config()
  
const { sign } = pkg;


const access_key = process.env.ACCESS_KEY
const secret_key = process.env.SECRET_KEY
const server_url = process.env.UPBIT_OPEN_API_SERVER_URL

 
const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

const app = express();
const port = 3000;
app.use(cors());  // 모든 출처에서의 요청을 허용


app.get('/', (req, res) => {
    request(options, (error, response, body) => {
        console.log('response',response)

        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.send(body);  // 클라이언트에 response body를 보냅니다.
    });
});



app.get('/market', (req, res) => {
    const options = {
        uri: "https://api.upbit.com/v1/market/all?isDetails=true",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(body);
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});