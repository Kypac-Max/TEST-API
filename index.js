const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { swaggerDoc: V1SwaggerDocs } = require('./swagger');

const app = express();
app.use(
	cors({
		credentials: true,
		origin: process.env.LOCAL_HOST,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/post.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running in port: ${PORT}`);
	V1SwaggerDocs(app, PORT);
});

module.exports = { app };
