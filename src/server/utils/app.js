import express from 'express';
import { readJson } from './scripts.js';

const PORT = 3000;

const app = express();

app.use(express.static('..'));
app.use((req, res) => {
    const { url, method } = req;
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
})

app.get('/', (req,res) => {
    res.writeHead(200, { 'Content-Type':  'text/plain' });
    res.end('Hello World!');
})

app.get('/about', (req,res) => {
    res.writeHead(200, { 'Content-Type':  'text/plain' });
    res.end('This is me!!!!!');
})

app.get('/products', async (req,res) => {
    const json = await readJson('./products.json');
    res.writeHead(200, { 'Content-Type':  'application/plain' });
    res.end(JSON.stringify(json));
})

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});
