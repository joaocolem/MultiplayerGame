import express from 'express';

const app = express();
const port = 3000;
const view = '/app/client/public/';

app.listen(port, () => {
	console.log(`Listen to port ${port}`);
});

app.get('/', (req, res) => {
	res.sendFile(view, 'index.html');
})

export { port };
