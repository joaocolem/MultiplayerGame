import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('client'));

app.get('/', (req, res) => {
	res.sendFile('/app/client/public/index.html');
});

app.listen(port, () => console.log('Server up'));

